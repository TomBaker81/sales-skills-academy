"""
Sales Skills Academy — AI-vs-Offline Parity Report
====================================================

Runs the SAME scripted question sets through the offline engine (locally)
and the live AI engine (against a deployed URL with a working Gemini key),
then reports per-dimension deltas so drift between the two engines is
visible as numbers, not vibes.

WHY THIS EXISTS: the deterministic suite (test_suite.py) proves both engines
share the same schema and formulas structurally, but only a live run shows
whether the AI's *judgement* on the shared dimensions stays within a sane
band of the offline engine's. This is the "AI-vs-offline parity reporting"
requested in the original spec — it needs a live model, so it is a separate,
manually-run tool, not part of the sandboxed automated suite.

USAGE:
  python3 tests/parity_live.py                          # offline-only baseline (no AI)
  python3 tests/parity_live.py https://saleskillsacademy.com   # full parity run

REQUIREMENTS for the full run: the deployed site must have a working
GEMINI_API_KEY, and this machine must be able to reach it. The script drives
the real UI via Playwright (login -> Virtual Sales Call -> send scripted
questions -> read Coach.turnScores), so it tests the actual product, not a
reimplementation.

INTERPRETING RESULTS: expect the AI to differ turn-by-turn (it judges real
nuance the offline heuristics can't). What matters is the AGGREGATE band:
per-dimension averages within ~0.75 (on 0-3 scales) of the offline baseline
for the same script at the same difficulty. Larger, consistent gaps on
relevance/roleFit at Challenging difficulty specifically would suggest the
decoupling fix (question quality vs persona guardedness) has regressed in
the AI prompt.
"""
import json
import statistics
import sys

from playwright.sync_api import sync_playwright

TARGET = sys.argv[1] if len(sys.argv) > 1 else None
LOCAL = "http://localhost:8765/index.html"
USERNAME, PASSWORD = "salesteam", "Zzdn4ATNIcg3"

# Three scripted "skill levels" — identical scripts run at every difficulty
# tier, mirroring the calibration-matrix approach used to tune the
# difficulty multiplier. Questions are deliberately generic enough to apply
# to any generated persona.
SCRIPTS = {
    "strong": [
        "How do you currently manage security across the business?",
        "Has that ever caused a real problem for you?",
        "What did that actually cost you when it happened?",
        "Who else would be involved if you wanted to fix that properly?",
        "Would it be worth getting a specialist to walk through this with you?",
    ],
    "moderate": [
        "How's business going at the moment?",
        "What technology do you use day to day?",
        "Any problems with your broadband or phones?",
        "Is security something you think about?",
        "Would you be open to a follow-up call?",
    ],
    "weak": [
        "Can I tell you about our great mobile deals?",
        "We have a special offer on broadband this month, interested?",
        "What about Microsoft licences, want some?",
        "Our security product is the best on the market.",
        "So can I sign you up today?",
    ],
}
DIFFICULTIES = ["warm", "brisk", "dismissive"]
NUMERIC_DIMS = ["relevance", "roleFit", "listening", "commercialJudgement", "infoLevel"]


def run_script(page, url, difficulty, script, use_ai):
    page.goto(url)
    page.wait_for_timeout(1200)
    # Login gate (idempotent — skipped if already past it)
    if page.locator("#login-user").count():
        page.fill("#login-user", USERNAME)
        page.fill("#login-pass", PASSWORD)
        page.click("#login-btn")
        page.wait_for_timeout(600)
    # Drive the engine directly for determinism: set difficulty, generate a
    # scenario, then push each scripted question through the real message
    # path so duplicate detection, deterministic signal merging, and scoring
    # all run exactly as in production.
    result = page.evaluate(
        """async ([difficulty, script, useAI]) => {
            App.context = freshCustomerContext();
            App.context.difficulty = difficulty;
            if (!useAI) { Settings.provider = 'offline'; }
            await newScenario();
            // wait for generation to settle
            for (let i = 0; i < 60 && Coach.busy; i++) await new Promise(r => setTimeout(r, 500));
            for (const q of script) {
                const input = document.querySelector('#chat-input');
                input.value = q;
                await sendRepMessage();
                for (let i = 0; i < 60 && Coach.busy; i++) await new Promise(r => setTimeout(r, 500));
            }
            return { mode: Coach.mode, turnScores: Coach.turnScores, difficulty };
        }""",
        [difficulty, script, use_ai],
    )
    return result


def summarize(turn_scores):
    out = {}
    for dim in NUMERIC_DIMS:
        vals = [t[dim] for t in turn_scores if isinstance(t.get(dim), (int, float))]
        out[dim] = round(statistics.mean(vals), 2) if vals else None
    out["turns"] = len(turn_scores)
    return out


def main():
    rows = []
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        page = browser.new_page()
        # Block leaderboard writes so parity runs never pollute shared data.
        page.route("**/scores-api*", lambda route, request: route.fulfill(
            status=200, content_type="application/json", body=json.dumps({"entries": []})))

        for difficulty in DIFFICULTIES:
            for skill, script in SCRIPTS.items():
                offline = run_script(page, LOCAL, difficulty, script, use_ai=False)
                row = {"difficulty": difficulty, "skill": skill,
                       "offline": summarize(offline["turnScores"])}
                if TARGET:
                    live = run_script(page, TARGET, difficulty, script, use_ai=True)
                    row["ai"] = summarize(live["turnScores"])
                    row["ai_mode"] = live["mode"]  # 'offline' here means the live AI call failed and fell back
                rows.append(row)
                print(f"[{difficulty}/{skill}] offline={row['offline']}"
                      + (f" ai={row.get('ai')} (mode={row.get('ai_mode')})" if TARGET else ""))
        browser.close()

    print("\n" + "=" * 70)
    print("PARITY REPORT" + ("" if TARGET else " (offline baseline only — pass a URL for the AI side)"))
    print("=" * 70)
    worst = 0.0
    for row in rows:
        if "ai" not in row or row.get("ai_mode") != "ai":
            continue
        deltas = {d: round(abs((row["ai"][d] or 0) - (row["offline"][d] or 0)), 2)
                  for d in NUMERIC_DIMS if row["ai"][d] is not None and row["offline"][d] is not None}
        flag = {d: v for d, v in deltas.items() if v > 0.75}
        worst = max([worst] + list(deltas.values()))
        print(f"{row['difficulty']:>10} / {row['skill']:<8}  deltas: {deltas}"
              + (f"   ⚠ OUT OF BAND: {flag}" if flag else ""))
    if TARGET:
        print(f"\nWorst per-dimension delta: {worst} (band: 0.75 on 0-3 scales, infoLevel 0-5)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
