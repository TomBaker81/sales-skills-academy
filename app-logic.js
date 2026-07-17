const FALLBACK_PROFILES = [
  {
    "companyName": "The Harbour View Hotel",
    "industry": "Boutique hotel",
    "employees": 34,
    "difficulty": "warm",
    "description": "A family-run hotel with an on-site restaurant and a small events space, welcoming both business and leisure guests. Front desk and reservations handle a steady flow of calls and walk-ins.",
    "whatTheyCareAbout": "Guest reviews, repeat bookings, and the events space running smoothly — anything that touches the guest experience matters more than the technology behind it.",
    "persona": {
      "name": "Aoife Byrne",
      "role": "Owner/Founder",
      "category": "Owner",
      "tone": "Warm, friendly and happy to chat once she knows you’re not wasting her time — a little rushed, answers in short bursts, often mid-task.",
      "gender": "female"
    },
    "hiddenPains": [
      {
        "piece": "connectivity-access",
        "severity": "high",
        "detail": "guest Wi-Fi and back-office systems share one internet line, and it visibly slows to a crawl during check-in rushes and full occupancy weekends"
      },
      {
        "piece": "cloud-voice",
        "severity": "medium",
        "detail": "front desk still routes calls through an old phone system separate from the internet billing, has caused missed booking calls before"
      },
      {
        "piece": "mobile-security",
        "severity": "low",
        "detail": "management team share a couple of unmanaged mobile phones for on-call cover"
      }
    ],
    "openingLine": "Hello?"
  },
  {
    "companyName": "Walsh & Kearney Accountants",
    "industry": "Accountancy practice",
    "employees": 22,
    "difficulty": "warm",
    "description": "An established accountancy practice serving local business clients, with a busy seasonal spike around tax deadlines. Staff regularly handle sensitive client financial data.",
    "whatTheyCareAbout": "Client trust and confidentiality above all — a practice's reputation lives or dies on whether clients believe their financial data is safe.",
    "persona": {
      "name": "Conor Walsh",
      "role": "IT Manager",
      "category": "IT/Technical",
      "tone": "Precise and methodical, happy to go into detail once he trusts you know what you’re talking about.",
      "gender": "male"
    },
    "hiddenPains": [
      {
        "piece": "cyber-assurance",
        "severity": "high",
        "detail": "handles sensitive client financial data with no formal security governance, no named owner and no incident plan — partner is increasingly aware this is a real client-trust risk"
      },
      {
        "piece": "m365",
        "severity": "medium",
        "detail": "on an older Microsoft licence tier, MFA not enforced consistently across all staff"
      },
      {
        "piece": "secure-access-edge",
        "severity": "medium",
        "detail": "staff work from home some days on personal laptops with no consistent secure access policy"
      }
    ],
    "openingLine": "Hello?"
  },
  {
    "companyName": "Fitzgerald Precision Engineering",
    "industry": "Contract manufacturer",
    "employees": 85,
    "difficulty": "brisk",
    "description": "A contract manufacturer running a single production site with handheld scanners across the shop floor, plus a small distribution operation attached. Growing steadily with a few new client contracts recently won.",
    "whatTheyCareAbout": "Keeping the production line moving and hitting delivery deadlines for clients — any downtime translates directly into missed targets and awkward calls to customers.",
    "persona": {
      "name": "Marie Fitzgerald",
      "role": "Operations Director (C-level)",
      "category": "C-Level",
      "tone": "Direct and practical, thinks in terms of production impact rather than tech jargon — businesslike, wants things to move quickly.",
      "gender": "female"
    },
    "hiddenPains": [
      {
        "piece": "connectivity-access",
        "severity": "high",
        "detail": "single internet line with no failover, one outage already cost roughly half a day of production"
      },
      {
        "piece": "secure-network",
        "severity": "medium",
        "detail": "shop-floor Wi-Fi drops weekly, occasionally halting handheld scanners on the production line"
      },
      {
        "piece": "cloud-voice",
        "severity": "medium",
        "detail": "office and shop-floor phones still run on old ISDN lines, no plan in place for the network switch-off"
      },
      {
        "piece": "support-services",
        "severity": "medium",
        "detail": "juggling three different suppliers for network, phones and backup with no single point of contact"
      }
    ],
    "openingLine": "Hello?"
  },
  {
    "companyName": "O’Sullivan’s Home & Garden",
    "industry": "Multi-site retailer",
    "employees": 48,
    "difficulty": "warm",
    "description": "A family-run retail group with three stores across two counties, steadily growing and weighing up a fourth location. Store managers travel between sites regularly.",
    "whatTheyCareAbout": "Keeping tills and stock systems running during trading hours, and controlling costs carefully as the business expands to new sites.",
    "persona": {
      "name": "Niamh O’Sullivan",
      "role": "Finance Director (C-level)",
      "category": "C-Level",
      "tone": "Budget-conscious and wants the business case, but friendly and willing to talk once she sees the relevance.",
      "gender": "female"
    },
    "hiddenPains": [
      {
        "piece": "m365",
        "severity": "high",
        "detail": "three stores each run their own ad-hoc file sharing and email, no proper Teams or SharePoint setup connecting them, area manager constantly chasing paperwork by phone"
      },
      {
        "piece": "cloud-infrastructure",
        "severity": "medium",
        "detail": "each store keeps its own local till and stock records, no central cloud visibility across sites"
      },
      {
        "piece": "mobile-office",
        "severity": "medium",
        "detail": "area manager travels between stores on a personal mobile hotspot, no secure access"
      },
      {
        "piece": "cloud-voice",
        "severity": "medium",
        "detail": "two of the three stores are still on old ISDN lines, aware the network switch-off is coming but has not looked into what moving to VoIP would actually involve"
      }
    ],
    "openingLine": "Hello?"
  },
  {
    "companyName": "Kelly Freight & Logistics",
    "industry": "Freight & logistics",
    "employees": 112,
    "difficulty": "brisk",
    "description": "An established freight and distribution business with a large fleet of drivers and warehouse staff working across multiple depots. Growth has meant more devices and more sites than a few years ago.",
    "whatTheyCareAbout": "On-time delivery and driver safety — anything that risks a missed delivery window or exposes the business to liability is what actually keeps him up at night.",
    "persona": {
      "name": "Darragh Kelly",
      "role": "Operations Director (C-level)",
      "category": "C-Level",
      "tone": "Blunt and time-pressed, wants the point made quickly, but not unfriendly about it.",
      "gender": "male"
    },
    "hiddenPains": [
      {
        "piece": "mobile-security",
        "severity": "high",
        "detail": "over a hundred drivers and warehouse staff on a real mix of BYOD and company phones with zero management, several devices have gone missing over the years with no way to wipe them"
      },
      {
        "piece": "cyber-assurance",
        "severity": "medium",
        "detail": "a large customer has started asking for evidence of security governance as part of a contract renewal, and there is nothing formal to show them"
      },
      {
        "piece": "secure-access-edge",
        "severity": "low",
        "detail": "depot sites connect back to head office with inconsistent, informally-configured VPNs"
      }
    ],
    "openingLine": "Hello?"
  },
  {
    "companyName": "Brennan Family Practice",
    "industry": "Healthcare practice",
    "employees": 19,
    "difficulty": "warm",
    "description": "A well-regarded local healthcare practice with several clinicians seeing patients daily. Handles a steady stream of sensitive patient records and appointment scheduling.",
    "whatTheyCareAbout": "Patient trust and continuity of care — anything that risks patient data or disrupts appointments directly threatens the practice's reputation in a small community.",
    "persona": {
      "name": "Dr. Fiona Brennan",
      "role": "Owner/Founder",
      "category": "Owner",
      "tone": "Warm and personable, though thoughtful about patient data — happy to talk once she understands why you’re asking.",
      "gender": "female"
    },
    "hiddenPains": [
      {
        "piece": "cyber-assurance",
        "severity": "high",
        "detail": "no one owns security governance at all, just an IT contractor who fixes things when they break, no incident response plan of any kind exists"
      },
      {
        "piece": "mobile-security",
        "severity": "medium",
        "detail": "clinicians use personal phones to photograph and message patient information to each other, no device management or policy in place"
      },
      {
        "piece": "cloud-voice",
        "severity": "medium",
        "detail": "reception still runs on an old ISDN line, hasn’t looked into the switch-off timeline, worried about losing the ability to take appointment calls if it happens unexpectedly"
      },
      {
        "piece": "cloud-infrastructure",
        "severity": "low",
        "detail": "patient records backed up to an external drive that sits in the same room as the server"
      }
    ],
    "openingLine": "Hello?"
  },
  {
    "companyName": "Brogan Construction",
    "industry": "Construction contractor",
    "employees": 64,
    "difficulty": "dismissive",
    "description": "A mid-sized construction contractor running several active sites at once, with site managers and subcontractors coordinating constantly by phone. Deadlines and weather delays make every week unpredictable.",
    "whatTheyCareAbout": "Hitting project deadlines and keeping sites running without disputes — he's had every kind of salesperson call him and has little patience for another pitch that wastes his time.",
    "persona": {
      "name": "Tom Brogan",
      "role": "Owner/Founder",
      "category": "Owner",
      "tone": "Gruff and skeptical of sales calls, visibly impatient at first — needs a genuinely sharp, relevant question before he opens up at all. Never abusive, just hard-won.",
      "gender": "male"
    },
    "hiddenPains": [
      {
        "piece": "mobile-security",
        "severity": "high",
        "detail": "field crew all carry personal Android phones for job sheets and site photos, no management or protection on any of them, one was lost on-site last month with client details on it"
      },
      {
        "piece": "mobile-office",
        "severity": "medium",
        "detail": "site managers use personal phones and hotspots on-site with no secure access back to head office systems, has caused confusion over documents before"
      },
      {
        "piece": "support-services",
        "severity": "medium",
        "detail": "no single point of contact for IT issues, site managers waste real time chasing three different suppliers when something breaks"
      }
    ],
    "openingLine": "Hello?"
  },
  {
    "companyName": "Nolan Creative Agency",
    "industry": "Marketing agency",
    "employees": 28,
    "difficulty": "dismissive",
    "description": "A creative marketing agency serving mid-sized brand clients, juggling several campaigns at once with tight creative and delivery deadlines. Client work is entirely digital and deadline-driven.",
    "whatTheyCareAbout": "Protecting client campaign work and creative assets, and keeping the agency looking sharp and modern to clients — nothing undermines credibility faster than looking technologically behind.",
    "persona": {
      "name": "Sinead Nolan",
      "role": "Operations Director (C-level)",
      "category": "C-Level",
      "tone": "Sharp, a little dismissive at first, clearly has heard a hundred sales pitches — needs the rep to demonstrate real relevance quickly or she will end the call. Professional throughout, never rude.",
      "gender": "female"
    },
    "hiddenPains": [
      {
        "piece": "m365",
        "severity": "high",
        "detail": "still on old individual Office licences with no central identity management, a freelancer’s account was compromised last year and nobody noticed for weeks"
      },
      {
        "piece": "mobile-security",
        "severity": "medium",
        "detail": "creative staff use personal laptops and phones for client campaign files with no device management at all"
      },
      {
        "piece": "secure-access-edge",
        "severity": "low",
        "detail": "fully remote-friendly team connecting from home networks with no consistent secure access policy"
      }
    ],
    "openingLine": "Hello?"
  },
  {
    "companyName": "Whelan Property Services",
    "industry": "Facilities & property maintenance",
    "employees": 56,
    "difficulty": "warm",
    "description": "A property maintenance and facilities company with a field team of engineers and technicians visiting client sites daily across the region. Growth has meant more vans, more phones, and more sites than a couple of years ago.",
    "whatTheyCareAbout": "Keeping the field team equipped and jobs moving without wasted admin time — anything that slows down a technician getting to the next job or costs money unnecessarily is what actually bothers him.",
    "persona": {
      "name": "Paul Whelan",
      "role": "Operations Director (C-level)",
      "category": "C-Level",
      "tone": "Warm and practical, thinks in terms of keeping the vans moving rather than technology for its own sake — happy to talk once he sees the relevance to the day-to-day.",
      "gender": "male"
    },
    "hiddenPains": [
      {
        "piece": "mobile-security",
        "severity": "high",
        "detail": "mobile contract for the whole field team is up for renewal in the next couple of months, current phones have no MDM or mobile threat defence at all, and the office laptops back at base have no EDR either — nobody has looked at protection as part of the renewal, just pricing on new handsets"
      },
      {
        "piece": "cloud-infrastructure",
        "severity": "medium",
        "detail": "job and client records backed up locally at the office only, never restore-tested"
      },
      {
        "piece": "support-services",
        "severity": "low",
        "detail": "juggling separate suppliers for mobile, office IT and backup with no single point of contact"
      }
    ],
    "openingLine": "Hello?"
  },
  {
    "companyName": "Dolan & Reid Solicitors",
    "industry": "Legal practice",
    "employees": 22,
    "difficulty": "brisk",
    "description": "A small legal practice handling conveyancing and family law, with fee earners who spend a lot of time on the phone with clients and out of office for meetings and court dates.",
    "whatTheyCareAbout": "Being reachable for clients at short notice and not looking unprofessional with dropped calls or voicemail — reputation and responsiveness matter more to her than the technology itself.",
    "persona": {
      "name": "Grainne Dolan",
      "role": "Owner/Founder",
      "category": "Owner",
      "tone": "Brisk and time-poor, but will engage properly once she sees a clear pounds-and-pence reason to listen.",
      "gender": "female"
    },
    "hiddenPains": [
      {
        "piece": "mobile-security",
        "severity": "high",
        "detail": "currently with a different mobile provider on a rolling contract she has never actually reviewed, had a bad experience with their support last year over a billing error and has been meaning to look elsewhere since, no device management or protection on any of the fee earners' phones either"
      },
      {
        "piece": "cyber-assurance",
        "severity": "medium",
        "detail": "handles sensitive client legal files with no formal security policy or incident plan"
      },
      {
        "piece": "connectivity-access",
        "severity": "low",
        "detail": "office broadband occasionally drops during video calls with clients"
      }
    ],
    "openingLine": "Hello?"
  }
];

const PIECE_KEYWORDS = {
  'secure-network':['network','wifi','wi-fi','firewall','outage','router','vlan','segment','lan'],
  'cloud-voice':['phone','voice','call','pstn','isdn','voip','webex','collaborate','line'],
  'm365':['microsoft','365','office','teams','sharepoint','licence','license','mfa','entra','conditional access'],
  'mobile-security':['mobile phone','byod','sim','device management','mdm','personal phone','how many devices','android','iphone','rugged','fleet','contract renewal','handset','upgrade','mtd','mobile threat','mobile threat defence','mobile threat defense','edr','endpoint detection','endpoint detection and response','device estate','current provider','mobile provider','switch provider','network provider','per line','sim only'],
  'cyber-assurance':['governance','vciso','incident response','business continuity','risk assessment','security leadership','tabletop','compliance','audit','competitor','differentiat','win business','customer trust','reputation','security','monitor','soc','edr','endpoint detection','endpoint detection and response','antivirus','threat','breach','incident'],
  'mobile-office':['remote work','hybrid','field staff','work from home','wfh','travel','out of office'],
  'connectivity-access':['internet','connectivity','broadband','fibre','bandwidth','site','line speed','lan','wan','lan/wan','switching','switches','wiring'],
  'cloud-infrastructure':['azure','cloud','virtual desktop','vdi','virtualisation','virtualization','migration','on-prem','on prem','physical server','servers','hosting','vpn','backup','restore','disaster','recovery','ransomware','data loss','dr '],
  'secure-access-edge':['vpn','zero trust','ztna','sase','branch','remote access','cloud app','shadow it'],
  'support-services':['support','helpdesk','sla','escalation','who do you call','fix it']
};
const PROBE_WORDS = ['how often','impact','cost','who','when','budget','risk','happen if','tested','managed','policy','plan','urgent','priority','how many','how long','what if'];

/* =========================================================================
   AI PROVIDER SETTINGS
   ========================================================================= */
const PROVIDER_DEFAULTS = {
  anthropic:{ label:'Claude (Anthropic)', model:'claude-sonnet-5', keyHint:'Get a key at console.anthropic.com → API Keys.' },
  openai:{ label:'ChatGPT (OpenAI)', model:'gpt-5-mini', keyHint:'Get a key at platform.openai.com → API Keys.' },
  gemini:{ label:'Gemini (Google)', model:'gemini-flash-latest', keyHint:'Uses the server-side key configured in Netlify (Site configuration \u2192 Environment variables \u2192 GEMINI_API_KEY). Google\u2019s API can\u2019t be called directly from a browser (no CORS support), so this needs the included netlify/functions/gemini-proxy.js deployed alongside this page, with a Git-connected Netlify site so the function actually gets bundled. Falls back to Offline Practice Mode if the proxy isn\u2019t reachable. You can still override with your own key (or provider) via this panel \u2014 that always wins.' }
};

/* Sentinel value (not a real key) so the Scenario Coach works with zero setup
   for anyone visiting the page: it tells netlify/functions/gemini-proxy.js to
   use ITS OWN server-side GEMINI_API_KEY environment variable rather than a
   key embedded in this client-side file. No secret lives in this file or in
   version control — set the real key once in the Netlify dashboard instead.
   Anyone can still override it with their own key (or provider) via the ⚙
   Settings panel — that always wins over this default. */
const EMBEDDED_GEMINI_KEY = 'USE_SERVER_KEY';

const Settings = { provider:'gemini', apiKey:EMBEDDED_GEMINI_KEY, model:PROVIDER_DEFAULTS.gemini.model };

function safeStorageGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
function safeStorageSet(k,v){ try{ localStorage.setItem(k,v); }catch(e){ /* ignore — in-memory only this session */ } }
function safeStorageRemove(k){ try{ localStorage.removeItem(k); }catch(e){ /* ignore */ } }

const RETIRED_MODELS = ['gemini-2.0-flash', 'gemini-2.0-flash-001', 'gemini-2.0-flash-lite', 'gpt-4o-mini', 'gpt-4o', 'gpt-4.1', 'gpt-4.1-mini', 'o4-mini'];
function loadSettings(){
  const p = safeStorageGet('qc_provider');
  const k = safeStorageGet('qc_key_'+(p||'gemini'));
  let m = safeStorageGet('qc_model_'+(p||'gemini'));
  if(p && PROVIDER_DEFAULTS[p]) Settings.provider = p;
  if(k) Settings.apiKey = k;
  else if(Settings.provider !== 'gemini') Settings.apiKey = ''; // no saved key for a non-default provider — don't leak the embedded Gemini key into another provider's slot
  if(m && RETIRED_MODELS.includes(m.trim())){
    m = null; // fall through to the current default instead of a model we know is gone
    safeStorageRemove('qc_model_'+Settings.provider);
  }
  Settings.model = m || PROVIDER_DEFAULTS[Settings.provider].model;
}
function persistSettings(){
  safeStorageSet('qc_provider', Settings.provider);
  if(Settings.apiKey) safeStorageSet('qc_key_'+Settings.provider, Settings.apiKey);
  safeStorageSet('qc_model_'+Settings.provider, Settings.model);
}
loadSettings();

/* =========================================================================
   APP STATE
   ========================================================================= */
const App = {
  view:'home', qual:{ pieceId:null, nodeId:'start', notes:[], gatePassed:false, revealedOption:null }, sessionLog:[], repName:'',
  // Session-memory scoping: everything under App.qual and Coach (see below)
  // is deliberately kept as plain in-memory JS state, NOT written to
  // localStorage/sessionStorage — so it's scoped to a single browser tab's
  // session, resets automatically on refresh, and is never shared between
  // the different people using this one shared login. lastActivityAt below
  // drives an explicit 2-hour idle reset for tabs left open indefinitely.
  // FUTURE HOOK (not implemented — this app currently has one shared login,
  // not individual accounts): if per-user accounts are added later, this is
  // the natural place to swap in a per-user persisted state, e.g. keyed by
  // a real user ID and stored server-side (Netlify Blobs, same mechanism
  // already used for the shared Leaderboard) instead of resetting on idle.
  // getSessionMemoryKey() below is that hook — currently always returns
  // null (meaning "session-only, no persistence"), deliberately unused by
  // anything else yet.
  lastActivityAt: Date.now()
};
function getSessionMemoryKey(){
  // Returns null today (no individual logins to key persistence off) — a
  // real implementation would return something like `user:${userId}` once
  // accounts exist, and callers would use it to load/save state via a
  // Netlify Blobs-backed endpoint instead of resetting on idle/refresh.
  return null;
}

// Generic distractor questions for the "which question would you ask" gate —
// these represent poor discovery technique in the abstract (closed/leading,
// jumping straight to a pitch, too vague, or off-topic) so the same small
// bank works for every focus area and every stage, rather than needing
// hundreds of bespoke wrong answers written per node.
const DISTRACTOR_QUESTIONS = [
  { text:"Everything's working fine, yeah?", note:"That's a closed, leading question — easy for them to just say \u201cyeah\u201d and the conversation stalls right there." },
  { text:"You don't have any issues with that, do you?", note:"Closed and leading again — it invites a one-word answer instead of a real one." },
  { text:"We've actually got a great deal on that right now, want to hear about it?", note:"That jumps straight into pitching before you've found out whether they even have the problem yet." },
  { text:"Can I run you through what we offer?", note:"Same issue — leading with the pitch skips discovery entirely, so you'll be positioning a solution to a problem you haven't confirmed." },
  { text:"So, how's business been generally?", note:"Too vague to surface anything specific — a strong discovery question should point at a real, findable pain, not just open small talk." },
  { text:"Anything else going on at the moment?", note:"That's a bit too open and unfocused — it doesn't point the conversation anywhere in particular." },
  { text:"Nice weather we've been having, isn't it?", note:"That's just small talk — fine as an icebreaker, but it won't move a discovery call forward." },
  { text:"Are you the right person to speak to about this?", note:"Worth knowing eventually, but it's not a discovery question — it doesn't explore their situation at all." }
];
function pickDistractors(n){
  const shuffled = DISTRACTOR_QUESTIONS.slice().sort(()=> Math.random()-0.5);
  return shuffled.slice(0, n);
}

/* ---------- Industry / contact / size propensity model ----------
   DATA PROVENANCE — read this before treating any of this as fact:
   Nothing in this model is drawn from verified market research or real
   customer data. It is entirely: (a) reasonable, defensible sales
   assumptions about how SME buying roles typically map to technology pain
   (an IT Manager is more likely to own security than an Office Manager is),
   and (b) general, widely-observed SME sales patterns (hospitality cares
   about guest Wi-Fi, logistics cares about field devices). Where the app
   shows this to a rep, it is labelled as a training heuristic, never as
   "the market says" or similar. Treat every weighting below as a plausible
   training simulation input, not a claim about any real business. */
const INDUSTRY_OPTIONS = [
  'Hospitality (hotel, B&B, venue)', 'Professional services (legal, accountancy)', 'Healthcare practice',
  'Retail (multi-site)', 'Manufacturing', 'Construction & trades', 'Logistics & transport',
  'Creative / marketing agency', 'Property & facilities', 'Food & beverage'
];
const CONTACT_ROLE_OPTIONS = ['Owner/Founder', 'IT Manager', 'Office Manager', 'Finance Director (C-level)', 'Operations Director (C-level)'];
const ORG_SIZE_OPTIONS = ['Micro (under 10 staff)', 'Small (10–49 staff)', 'Medium (50–249 staff)'];

// ---------- Auditable propensity/evidence model ----------
// Each entry records not just WHICH area is likely relevant, but WHY:
// a relevance score, confidence level, evidence type, and a plain-English
// rationale a manager can actually inspect — rather than a hidden weighting
// nobody can audit. evidenceType is always 'training heuristic' here since
// there is no verified market research behind any of this; that's stated
// explicitly rather than dressed up as data. lastReviewed lets a manager see
// how stale a given assumption is.
const REVIEWED = '2026-07';
const INDUSTRY_PROPENSITY_EVIDENCE = {
  'Hospitality (hotel, B&B, venue)': [
    { piece:'connectivity-access', baseRelevance:0.85, confidence:'medium', evidenceType:'training heuristic', rationale:'Guest Wi-Fi and booking systems are core to day-to-day hospitality operations, so connectivity problems are highly visible and disruptive.', lastReviewed:REVIEWED },
    { piece:'cloud-voice', baseRelevance:0.7, confidence:'medium', evidenceType:'training heuristic', rationale:'Phone-based bookings and guest calls remain common in smaller hospitality venues.', lastReviewed:REVIEWED },
    { piece:'secure-network', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Guest and staff networks often share infrastructure without proper segmentation.', lastReviewed:REVIEWED }
  ],
  'Professional services (legal, accountancy)': [
    { piece:'cyber-assurance', baseRelevance:0.85, confidence:'medium', evidenceType:'training heuristic', rationale:'Client confidentiality obligations make security governance a recurring concern in legal/accountancy practices.', lastReviewed:REVIEWED },
    { piece:'m365', baseRelevance:0.75, confidence:'medium', evidenceType:'training heuristic', rationale:'Document-heavy client work is typically run through Microsoft 365; licensing/security gaps are common.', lastReviewed:REVIEWED },
    { piece:'secure-access-edge', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Partners and staff often need secure access to client files outside the office.', lastReviewed:REVIEWED }
  ],
  'Healthcare practice': [
    { piece:'cyber-assurance', baseRelevance:0.85, confidence:'medium', evidenceType:'training heuristic', rationale:'Patient data sensitivity makes security governance a recurring, visible concern for practice owners.', lastReviewed:REVIEWED },
    { piece:'m365', baseRelevance:0.7, confidence:'medium', evidenceType:'training heuristic', rationale:'Appointment scheduling and admin commonly run through Microsoft 365.', lastReviewed:REVIEWED },
    { piece:'mobile-security', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Clinical staff often use mobile devices for scheduling and communication.', lastReviewed:REVIEWED }
  ],
  'Retail (multi-site)': [
    { piece:'connectivity-access', baseRelevance:0.8, confidence:'medium', evidenceType:'training heuristic', rationale:'Card payments and till systems depend directly on connectivity at every site.', lastReviewed:REVIEWED },
    { piece:'mobile-security', baseRelevance:0.65, confidence:'low', evidenceType:'training heuristic', rationale:'Multi-site retail often issues staff mobiles for stock/comms with inconsistent management.', lastReviewed:REVIEWED },
    { piece:'m365', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Head office admin and multi-site comms commonly run through Microsoft 365.', lastReviewed:REVIEWED }
  ],
  'Manufacturing': [
    { piece:'connectivity-access', baseRelevance:0.7, confidence:'low', evidenceType:'training heuristic', rationale:'Production systems and office systems both depend on site connectivity.', lastReviewed:REVIEWED },
    { piece:'secure-network', baseRelevance:0.65, confidence:'low', evidenceType:'training heuristic', rationale:'Shop-floor and office networks are often on one flat, unsegmented network.', lastReviewed:REVIEWED },
    { piece:'support-services', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Production downtime from unresolved IT issues has direct, visible cost.', lastReviewed:REVIEWED }
  ],
  'Construction & trades': [
    { piece:'mobile-security', baseRelevance:0.8, confidence:'medium', evidenceType:'training heuristic', rationale:'Field crews typically carry mobile devices for job sheets and site photos with little formal management.', lastReviewed:REVIEWED },
    { piece:'mobile-office', baseRelevance:0.65, confidence:'low', evidenceType:'training heuristic', rationale:'Site-based, mobile-first working is the norm rather than a fixed office.', lastReviewed:REVIEWED },
    { piece:'support-services', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Multiple live sites make a single, reliable point of contact for issues more valuable.', lastReviewed:REVIEWED }
  ],
  'Logistics & transport': [
    { piece:'mobile-security', baseRelevance:0.8, confidence:'medium', evidenceType:'training heuristic', rationale:'Driver-facing mobile devices are core to daily operations and often poorly managed.', lastReviewed:REVIEWED },
    { piece:'cyber-assurance', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Larger logistics customers increasingly ask suppliers for security assurance evidence.', lastReviewed:REVIEWED },
    { piece:'secure-access-edge', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Dispatch and driver systems are frequently accessed remotely.', lastReviewed:REVIEWED }
  ],
  'Creative / marketing agency': [
    { piece:'m365', baseRelevance:0.75, confidence:'medium', evidenceType:'training heuristic', rationale:'Client deliverables and collaboration are typically run through Microsoft 365.', lastReviewed:REVIEWED },
    { piece:'mobile-office', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Agency staff commonly work flexibly/remotely around client deadlines.', lastReviewed:REVIEWED },
    { piece:'secure-access-edge', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Remote access to client files/creative assets is routine in this sector.', lastReviewed:REVIEWED }
  ],
  'Property & facilities': [
    { piece:'mobile-security', baseRelevance:0.7, confidence:'low', evidenceType:'training heuristic', rationale:'Facilities staff typically carry mobile devices across multiple properties.', lastReviewed:REVIEWED },
    { piece:'cloud-infrastructure', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Tenant and maintenance records commonly need centralising across sites.', lastReviewed:REVIEWED },
    { piece:'support-services', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Multiple properties needing attention raises the value of a single, reliable support contact.', lastReviewed:REVIEWED }
  ],
  'Food & beverage': [
    { piece:'connectivity-access', baseRelevance:0.75, confidence:'medium', evidenceType:'training heuristic', rationale:'Ordering and payment systems depend directly on connectivity at busy service times.', lastReviewed:REVIEWED },
    { piece:'cloud-voice', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Phone-based ordering/reservations remain common in food & beverage.', lastReviewed:REVIEWED },
    { piece:'support-services', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Service disruption from unresolved tech issues has immediate, visible cost.', lastReviewed:REVIEWED }
  ]
};
const ROLE_PROPENSITY_EVIDENCE = {
  'IT Manager': [
    { piece:'m365', baseRelevance:0.8, confidence:'high', evidenceType:'training heuristic', rationale:'Directly owns Microsoft 365 configuration and security as part of their role.', lastReviewed:REVIEWED },
    { piece:'cyber-assurance', baseRelevance:0.75, confidence:'high', evidenceType:'training heuristic', rationale:'Security governance is typically within an IT Manager\u2019s direct remit.', lastReviewed:REVIEWED },
    { piece:'secure-network', baseRelevance:0.7, confidence:'high', evidenceType:'training heuristic', rationale:'Network infrastructure is core, hands-on IT Manager territory.', lastReviewed:REVIEWED }
  ],
  'Finance Director (C-level)': [
    { piece:'cyber-assurance', baseRelevance:0.65, confidence:'medium', evidenceType:'training heuristic', rationale:'Security risk and its cost implications sit within financial risk oversight.', lastReviewed:REVIEWED },
    { piece:'connectivity-access', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Recurring connectivity/telecoms spend is a natural cost-review target for a Finance Director.', lastReviewed:REVIEWED },
    { piece:'cloud-infrastructure', baseRelevance:0.5, confidence:'low', evidenceType:'training heuristic', rationale:'Infrastructure spend and depreciation decisions typically involve finance sign-off.', lastReviewed:REVIEWED }
  ],
  'Operations Director (C-level)': [
    { piece:'mobile-security', baseRelevance:0.7, confidence:'medium', evidenceType:'training heuristic', rationale:'Field/operational device management directly affects day-to-day operational risk.', lastReviewed:REVIEWED },
    { piece:'mobile-office', baseRelevance:0.6, confidence:'medium', evidenceType:'training heuristic', rationale:'Remote/field team productivity is a core operational concern.', lastReviewed:REVIEWED },
    { piece:'support-services', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Operational downtime from unresolved IT issues is a direct operations concern.', lastReviewed:REVIEWED }
  ],
  'Office Manager': [
    { piece:'m365', baseRelevance:0.65, confidence:'medium', evidenceType:'training heuristic', rationale:'Day-to-day Microsoft 365 user issues typically land with the Office Manager.', lastReviewed:REVIEWED },
    { piece:'support-services', baseRelevance:0.6, confidence:'medium', evidenceType:'training heuristic', rationale:'Office Managers are commonly the first point of contact when something breaks.', lastReviewed:REVIEWED },
    { piece:'connectivity-access', baseRelevance:0.5, confidence:'low', evidenceType:'training heuristic', rationale:'Day-to-day connectivity complaints are often reported to the Office Manager first.', lastReviewed:REVIEWED }
  ],
  'Owner/Founder': [
    { piece:'mobile-security', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Owners of smaller businesses often personally handle mobile contract/device decisions.', lastReviewed:REVIEWED },
    { piece:'connectivity-access', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Connectivity cost/reliability is a visible, owner-level concern in smaller businesses.', lastReviewed:REVIEWED },
    { piece:'cyber-assurance', baseRelevance:0.5, confidence:'low', evidenceType:'training heuristic', rationale:'Security risk ultimately sits with the owner even if day-to-day management doesn\u2019t.', lastReviewed:REVIEWED }
  ]
};
// Larger SMEs more plausibly face formal governance pressure (NIS2-style, a
// named customer/partner asking for evidence); smaller ones more plausibly
// have straightforward, tangible gaps (device management, basic connectivity).
const SIZE_PROPENSITY_EVIDENCE = {
  'Micro (under 10 staff)': [
    { piece:'mobile-security', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Very small businesses typically have simple, tangible device-management gaps rather than formal governance needs.', lastReviewed:REVIEWED },
    { piece:'connectivity-access', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Basic connectivity reliability is usually the most visible pain point at this size.', lastReviewed:REVIEWED }
  ],
  'Small (10–49 staff)': [
    { piece:'mobile-security', baseRelevance:0.6, confidence:'low', evidenceType:'training heuristic', rationale:'Growing device counts at this size commonly outpace informal management.', lastReviewed:REVIEWED },
    { piece:'m365', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Licensing and security settings are often never revisited after initial setup at this size.', lastReviewed:REVIEWED },
    { piece:'connectivity-access', baseRelevance:0.5, confidence:'low', evidenceType:'training heuristic', rationale:'Staff growth commonly outpaces original connectivity provisioning.', lastReviewed:REVIEWED }
  ],
  'Medium (50–249 staff)': [
    { piece:'cyber-assurance', baseRelevance:0.65, confidence:'medium', evidenceType:'training heuristic', rationale:'This band aligns with NIS2\u2019s lower \u201cimportant entity\u201d threshold, making formal governance pressure more plausible.', lastReviewed:REVIEWED },
    { piece:'m365', baseRelevance:0.55, confidence:'low', evidenceType:'training heuristic', rationale:'Larger user bases increase the practical impact of licensing/security gaps.', lastReviewed:REVIEWED },
    { piece:'secure-access-edge', baseRelevance:0.5, confidence:'low', evidenceType:'training heuristic', rationale:'More staff and likely more sites raises the value of consistent secure access policy.', lastReviewed:REVIEWED }
  ]
};
const INDUSTRY_TOP_AREAS = Object.fromEntries(Object.entries(INDUSTRY_PROPENSITY_EVIDENCE).map(([k,v])=>[k, v.map(e=>e.piece)]));
const ROLE_TOP_AREAS = Object.fromEntries(Object.entries(ROLE_PROPENSITY_EVIDENCE).map(([k,v])=>[k, v.map(e=>e.piece)]));
const SIZE_TOP_AREAS = Object.fromEntries(Object.entries(SIZE_PROPENSITY_EVIDENCE).map(([k,v])=>[k, v.map(e=>e.piece)]));
function propensityAreasFor(industry, role, size){
  const fromIndustry = INDUSTRY_TOP_AREAS[industry] || [];
  const fromRole = ROLE_TOP_AREAS[role] || [];
  const fromSize = SIZE_TOP_AREAS[size] || [];
  return Array.from(new Set([...fromIndustry, ...fromRole, ...fromSize]));
}
// Full auditable evidence for a given context — used by the manager-facing
// rationale view, and to build the learner-facing "why is this suggested"
// explanation. Combines industry/role/size evidence where more than one
// applies to the same piece, taking the highest relevance and noting all
// contributing sources.
function propensityEvidenceFor(industry, role, size){
  const sources = [
    ['industry', INDUSTRY_PROPENSITY_EVIDENCE[industry] || []],
    ['role', ROLE_PROPENSITY_EVIDENCE[role] || []],
    ['size', SIZE_PROPENSITY_EVIDENCE[size] || []]
  ];
  const byPiece = {};
  sources.forEach(([sourceType, entries])=>{
    entries.forEach(e=>{
      if(!byPiece[e.piece]) byPiece[e.piece] = { piece:e.piece, maxRelevance:0, contributions:[] };
      byPiece[e.piece].maxRelevance = Math.max(byPiece[e.piece].maxRelevance, e.baseRelevance);
      byPiece[e.piece].contributions.push({ sourceType, ...e });
    });
  });
  return Object.values(byPiece).sort((a,b)=> b.maxRelevance - a.maxRelevance);
}

/* ---------- Broad discovery entry stage ----------
   Before committing to a specific focus area, a real call usually opens with
   broad, non-product-specific Situation/Problem questions — growth, cost,
   risk, remote working, resilience — and the ANSWERS surface which areas are
   actually worth exploring, rather than the rep guessing a product upfront.
   Each theme's answers nudge relevance for particular focus areas; nothing
   here forces a choice — it produces a recommendation, and the rep stays
   free to pick any area regardless. */
const BROAD_DISCOVERY_THEMES = [
  {
    key: 'growth',
    q: "Has much changed for the business recently — new sites, more staff, new systems?",
    options: [
      { label: "Yes, growing fast — more people, more sites, more systems", boosts: ['connectivity-access','secure-network','cloud-infrastructure'] },
      { label: "Not really, fairly steady", boosts: [] },
      { label: "Actually scaling back or consolidating", boosts: ['support-services'] }
    ]
  },
  {
    key: 'cost',
    q: "Are you actively looking to control or reduce spend on IT, phones or telecoms right now?",
    options: [
      { label: "Yes, actively reviewing costs", boosts: ['mobile-security','connectivity-access','cloud-voice'] },
      { label: "Not a current focus", boosts: [] }
    ]
  },
  {
    key: 'risk',
    q: "Has security or compliance come up recently — from a client, a regulator, or your own concern?",
    options: [
      { label: "Yes, genuinely on our radar", boosts: ['cyber-assurance','m365'] },
      { label: "Not something we've really thought about", boosts: [] }
    ]
  },
  {
    key: 'remote',
    q: "How much of the team works remotely, in the field, or across more than one site?",
    options: [
      { label: "A lot — remote, field-based, or multi-site", boosts: ['mobile-office','secure-access-edge','mobile-security'] },
      { label: "Mostly everyone's in one office", boosts: [] }
    ]
  },
  {
    key: 'resilience',
    q: "When something breaks with your tech, how well does that actually get handled?",
    options: [
      { label: "Not well — causes real disruption and delay", boosts: ['support-services','cloud-infrastructure'] },
      { label: "Pretty well handled, not a pain point", boosts: [] }
    ]
  }
];
function computeBroadDiscoveryRecommendation(selectedBoosts){
  // selectedBoosts: array of arrays of piece ids (one per answered theme)
  const scores = {};
  selectedBoosts.flat().forEach(pid => { scores[pid] = (scores[pid]||0) + 1; });
  const ranked = Object.entries(scores).sort((a,b)=> b[1]-a[1]);
  return { scores, top: ranked.length ? ranked[0][0] : null };
}

/* ---------- Role knowledge/ownership profiles ----------
   What a given contact role can plausibly discuss in depth, how to FRAME a
   question so it lands with them, and who they'd realistically defer to on
   something outside their lane. Used to keep the AI persona's responses
   believable (an Office Manager shouldn't casually discuss firewall
   configuration) and to guide business-appropriate question framing. */
/* =========================================================================
   SHARED CUSTOMER-CONTEXT MODEL
   One structured context object used consistently by Focus Area Playbooks
   AND Virtual Sales Call — both read from and write to the same App.context,
   so a rep's industry/role/size choice means the same thing and drives the
   same downstream behaviour in either place, rather than each screen having
   its own separate, potentially-inconsistent selection logic.
   ========================================================================= */
function freshCustomerContext(){
  return {
    industry: null,            // one of INDUSTRY_OPTIONS, or null = any/random
    contactRole: null,         // one of CONTACT_ROLE_OPTIONS, or null
    orgSize: null,             // one of ORG_SIZE_OPTIONS, or null
    relationship: 'prospect',  // 'prospect' | 'existing-customer'
    existingProducts: [],      // array of piece ids they already have from us
    incumbentSupplier: '',     // free text, optional — e.g. "a different mobile provider"
    focusArea: null,           // selected piece id for Focus Area Playbooks
    difficulty: 'warm'         // 'warm'≈Guided, 'brisk'≈Realistic, 'dismissive'≈Challenging
  };
}
App.context = freshCustomerContext();

// Given a role, what they can plausibly discuss/own for a SPECIFIC piece —
// reuses the same ROLE_KNOWLEDGE_PROFILE data that drives Virtual Sales
// Call persona behaviour, so "can this contact answer this" means the same
// thing in both places.
function roleOwnsPiece(role, pieceId){
  const profile = ROLE_KNOWLEDGE_PROFILE[role];
  if(!profile) return true; // no role selected = assume anyone can discuss it
  return profile.strongAreas.includes(pieceId);
}

// ---------- Industry context variables ----------
// A small, reusable set of variables per industry, substituted into
// per-piece, per-stage question TEMPLATES below — rather than one generic
// clause tacked onto every question regardless of stage, each SPIN stage
// gets its own natural sentence using these variables in a different
// position, so the industry grounding actually varies through a call
// instead of repeating the same tacked-on phrase four times in a row.
const INDUSTRY_CONTEXT = {
  'Hospitality (hotel, B&B, venue)': { asset:'guest Wi-Fi and booking systems', peakTime:'check-in rushes or fully-booked weekends', concern:'guest reviews and repeat bookings', stakeholder:'the general manager' },
  'Professional services (legal, accountancy)': { asset:'client files and case records', peakTime:'deadline periods or year-end', concern:'client trust and confidentiality', stakeholder:'a senior partner' },
  'Healthcare practice': { asset:'patient records and appointment scheduling', peakTime:'busy clinic hours', concern:'patient care and compliance', stakeholder:'a GP partner' },
  'Retail (multi-site)': { asset:'till systems and stock records', peakTime:'busy trading periods or sales events', concern:'customer experience and lost sales', stakeholder:'the area manager' },
  'Manufacturing': { asset:'production line systems', peakTime:'peak production runs', concern:'output and missed deadlines', stakeholder:'the operations manager' },
  'Construction & trades': { asset:'site communications and job scheduling', peakTime:'having several live sites running at once', concern:'project delays and site safety', stakeholder:'the site manager' },
  'Logistics & transport': { asset:'driver communications and delivery scheduling', peakTime:'peak delivery periods', concern:'on-time delivery and driver safety', stakeholder:'the fleet manager' },
  'Creative / marketing agency': { asset:'client deliverables and creative files', peakTime:'tight client deadlines', concern:'client relationships and reputation', stakeholder:'the account director' },
  'Property & facilities': { asset:'tenant and maintenance records', peakTime:'having several properties needing attention at once', concern:'tenant satisfaction and compliance', stakeholder:'the facilities manager' },
  'Food & beverage': { asset:'ordering and payment systems', peakTime:'busy service periods', concern:'service speed and customer experience', stakeholder:'the general manager' }
};
// Generic fallback variables used when no industry is selected, so the
// templates below still read naturally rather than showing a blank/broken
// placeholder — this is what "Any / Random" degrades to.
const GENERIC_CONTEXT_VARS = { asset:'the key systems', peakTime:'busy periods', concern:'the business', stakeholder:'whoever owns that decision' };

// ---------- Per-piece, per-stage question templates ----------
// One template per focus area per SPIN stage (40 total), each using the
// industry variables above in a different sentence position — this is the
// "reusable content architecture" approach: a small number of templates
// combined with a small number of variable sets produces genuine variety
// without needing a bespoke hand-written question for every single
// industry/piece/stage combination (which would be 400+ sentences).
const PIECE_STAGE_TEMPLATES = {
  'mobile-security': {
    situation: "How are staff mobiles handled today, especially with {asset} involved?",
    problem: "Has anything ever gone wrong with a phone during {peakTime} that caused a real scramble?",
    implication: "If a phone went missing with {asset} on it, what would that actually mean for {concern}?",
    needpayoff: "If those devices were properly protected, would that give you real peace of mind around {concern}?"
  },
  'connectivity-access': {
    situation: "How's your internet holding up day to day, especially with {asset} running through it?",
    problem: "Has the connection ever let you down during {peakTime}?",
    implication: "When that happens, what does it actually cost you in terms of {concern}?",
    needpayoff: "If we could keep that up and running even during {peakTime}, would that be worth sorting?"
  },
  'cyber-assurance': {
    situation: "How does security get managed day to day, particularly around {asset}?",
    problem: "If something went wrong with {asset} during {peakTime}, is there an actual plan, or would it be worked out on the fly?",
    implication: "What would a real incident involving {asset} actually cost you, in terms of {concern}?",
    needpayoff: "If you could show {stakeholder} a genuine, credible security plan, would that help with {concern}?"
  },
  'm365': {
    situation: "How's Microsoft 365 set up today, especially around {asset}?",
    problem: "Has anyone had a scare with a login or an email, particularly around {peakTime}?",
    implication: "If someone's account got compromised, what would that actually mean for {asset}, and for {concern}?",
    needpayoff: "If we tightened that up properly, would that give you confidence around {concern}?"
  },
  'secure-network': {
    situation: "Tell me about your network and Wi-Fi — how's it holding up given {asset} runs across it?",
    problem: "Any network problems specifically during {peakTime}?",
    implication: "If that went down during {peakTime}, what would it cost you in {concern}?",
    needpayoff: "If we made that faster and properly secured, would that help protect {concern}?"
  },
  'mobile-office': {
    situation: "How much of the team works outside the office, and how does that affect access to {asset}?",
    problem: "Do they ever struggle to access what they need, especially during {peakTime}?",
    implication: "What does that friction actually cost you, in terms of {concern}?",
    needpayoff: "If everyone could work securely from anywhere, would that help protect {concern}?"
  },
  'cloud-voice': {
    situation: "How are you handling voice and calls today, especially with {asset} involved?",
    problem: "Are you still on the old ISDN or PSTN lines, and have you thought about what happens during {peakTime} if they go down?",
    implication: "If those lines went down during {peakTime}, what would that actually mean for {concern}?",
    needpayoff: "If we mapped a move to VoIP well ahead of the switch-off, would that protect {concern}?"
  },
  'cloud-infrastructure': {
    situation: "Where do your systems actually run today, especially anything to do with {asset}?",
    problem: "Has your backup ever actually been tested, particularly for {asset}?",
    implication: "If you lost access to {asset} tomorrow, what would that mean for {concern}?",
    needpayoff: "If that was properly backed up and tested, would that help protect {concern}?"
  },
  'support-services': {
    situation: "When something breaks, what actually happens, especially during {peakTime}?",
    problem: "Has there been a time recently where something took too long to fix, particularly during {peakTime}?",
    implication: "What does that delay actually cost you, in terms of {concern}?",
    needpayoff: "If you had one number to call with a guaranteed response time, would that help protect {concern}?"
  },
  'secure-access-edge': {
    situation: "Do you have staff or sites connecting from outside the office, especially around {asset}?",
    problem: "How are they connecting today, particularly during {peakTime}?",
    implication: "If someone accessed things insecurely, what would that mean for {concern}?",
    needpayoff: "If everyone could connect safely from anywhere, would that help protect {concern}?"
  }
};
function fillTemplate(template, vars){
  return template.replace(/\{(\w+)\}/g, (m,k)=> vars[k] || m);
}

// Role-based framing add-ons — applied only at Problem/Implication stages
// (where cost/impact framing matters most) when the contact DOES own this
// piece, so the same "owns it" question still sounds a little different for
// a Finance Director versus an Operations Director rather than being
// identical for every role once ownership is confirmed.
const ROLE_FRAMING_SUFFIX = {
  'Finance Director (C-level)': { problem: null, implication: " — roughly what would that come to?" },
  'Operations Director (C-level)': { problem: null, implication: " — and how much would that actually disrupt day-to-day operations?" },
  'Owner/Founder': { problem: null, implication: " — thinking about it purely in terms of risk and cost?" },
  'IT Manager': { problem: null, implication: null },
  'Office Manager': { problem: null, implication: null }
};

// Applies the current context to a base question, per the spec's "reusable
// content architecture": core question + industry modifier + role modifier +
// existing-product modifier, assembled at render time from a small set of
// templates and variables rather than needing a bespoke pre-written
// question for every industry/role/size/product combination.
//
// IMPORTANT SCOPE NOTE (found via a real, reported bug): trees are NOT just
// "one primary question + one follow-up" per stage — they contain many
// branch-specific nodes (e.g. a "competitive_probe" problem-stage node with
// its own distinct, carefully-authored question, reached via a particular
// earlier answer). Applying a generic per-stage template to ANY node of
// that stage type — as this function used to — silently overwrote those
// branch nodes' real text with unrelated templated text, while the node's
// OWN answer options (and therefore the customer's reveal) stayed as
// originally authored. The visible symptom: a plausible-sounding,
// industry-flavoured question paired with a completely unrelated answer,
// because the question shown didn't actually belong to the node being
// played. Fix: template substitution now ONLY applies to the single,
// unambiguous situation-stage entry point (tree.start) that exists
// identically in every piece — every other node (all of problem,
// implication, needpayoff, and any non-start situation branch) keeps its
// own authored text untouched. Safety/role overrides below still apply
// everywhere since they only APPEND to or replace with a role-appropriate
// clause using the real baseQ, never blindly swap in unrelated text.
function contextualiseQuestion(baseQ, pieceId, context, stage){
  context = context || App.context;
  const piece = PIECE_BY_ID[pieceId];
  const isTruePrimaryEntry = piece && stage === 'situation' && piece.tree && piece.tree.start && piece.tree.start.q === baseQ;
  // Existing-product modifier: if they already have this piece from us, the
  // question should be about satisfaction/renewal, not "do you have this at
  // all" — a fundamentally different (and much more natural) question. Only
  // swaps in the generic stage-keyed line for the true primary entry point;
  // every other node keeps its own authored question (still a reasonable
  // question to ask an existing customer, just not re-worded generically).
  if(context.existingProducts && context.existingProducts.includes(pieceId) && isTruePrimaryEntry){
    return "Since you're already with us on this — how's that actually working out day to day, and is it still the right fit as you've grown?";
  }
  // Role modifier: if the selected contact's role wouldn't plausibly own or
  // discuss this piece in depth, don't ask the technical version at all —
  // surface the ownership question itself instead of assuming, say, a
  // Finance Director can discuss firewall configuration. Uses the real
  // baseQ for this exact node, so it always stays distinct per node.
  if(context.contactRole && !roleOwnsPiece(context.contactRole, pieceId)){
    return `${baseQ} — or if that's more your IT/technical side, who'd usually own that conversation?`;
  }
  // Build from the per-piece, per-stage template — ONLY for the one
  // unambiguous primary entry point (see the long comment above this
  // function). Every other node — follow-ups, branch-specific probes,
  // anything not literally tree.start — keeps its own real authored text.
  const template = isTruePrimaryEntry && PIECE_STAGE_TEMPLATES[pieceId] && PIECE_STAGE_TEMPLATES[pieceId][stage];
  let q = template ? fillTemplate(template, INDUSTRY_CONTEXT[context.industry] || GENERIC_CONTEXT_VARS) : baseQ;
  // Role framing add-on (only when the role DOES own this piece — the
  // no-ownership case already returned above). This only APPENDS to
  // whatever q already is, so it's safe on any node, not just the primary.
  if(context.contactRole && (stage==='problem' || stage==='implication')){
    const suffix = ROLE_FRAMING_SUFFIX[context.contactRole] && ROLE_FRAMING_SUFFIX[context.contactRole][stage];
    if(suffix) q = q + suffix;
  }
  return q;
}
const ROLE_KNOWLEDGE_PROFILE = {
  'Owner/Founder': {
    framing: 'business risk, growth, cost and reputation — not technical detail',
    strongAreas: ['mobile-security','connectivity-access','cyber-assurance','cloud-voice'],
    deferralNote: 'may defer technical detail to whoever handles IT, but owns the actual buying decision'
  },
  'IT Manager': {
    framing: 'technical detail, infrastructure, security controls and operational specifics — this is their actual job',
    strongAreas: ['m365','cyber-assurance','secure-network','secure-access-edge','cloud-infrastructure','mobile-security'],
    deferralNote: 'rarely needs to defer technical questions, but may defer budget/approval to a director'
  },
  'Office Manager': {
    framing: 'day-to-day user experience and practical annoyances — not strategy or technical configuration',
    strongAreas: ['m365','support-services','connectivity-access','mobile-office'],
    deferralNote: 'likely to defer security/infrastructure strategy questions to an external IT provider or a director'
  },
  'Finance Director (C-level)': {
    framing: 'cost, risk, downtime and budget impact — not technical configuration',
    strongAreas: ['cyber-assurance','connectivity-access','cloud-infrastructure'],
    deferralNote: 'likely to defer hands-on technical questions to an IT Manager or external provider, but owns spend approval'
  },
  'Operations Director (C-level)': {
    framing: 'business impact, team productivity, risk and accountability — not technical configuration',
    strongAreas: ['mobile-security','mobile-office','support-services'],
    deferralNote: 'likely to defer deep technical questions to IT, but owns day-to-day operational pain'
  }
};

/* ---------- Leaderboard: shared score tracking across everyone using this tool ----------
   Backed by netlify/functions/scores-api.js, which stores entries in Netlify
   Blobs (site-wide, shared storage — not per-browser like localStorage). A
   local name cache is kept as a fallback so the "pick from existing" list
   still works even if the network call is slow or fails. */
const Leaderboard = {
  API_URL: '/.netlify/functions/scores-api',
  entries: [],
  async init(){
    const savedName = safeStorageGet('ssa_rep_name');
    if(savedName){
      el('#rep-name-input').value = savedName;
      App.repName = savedName;
      el('#rep-name-badge').textContent = savedName;
    }
    this.populateNameListFromCache();
    try{
      const resp = await fetch(this.API_URL, { method:'GET' });
      if(resp.ok){
        const data = await resp.json();
        this.entries = Array.isArray(data.entries) ? data.entries : [];
        this.cacheNames(this.entries.map(e=>e.name));
        this.populateNameListFromCache();
      }
    } catch(e){ /* offline or function unavailable — local cache/datalist still works */ }
  },
  rememberName(name){
    this.cacheNames([name]);
    this.populateNameListFromCache();
  },
  cacheNames(names){
    const existing = JSON.parse(safeStorageGet('ssa_known_names') || '[]');
    const merged = Array.from(new Set([...existing, ...names.filter(Boolean)])).slice(-100);
    safeStorageSet('ssa_known_names', JSON.stringify(merged));
  },
  populateNameListFromCache(){
    const names = JSON.parse(safeStorageGet('ssa_known_names') || '[]');
    const list = el('#rep-name-list');
    list.innerHTML = names.map(n => `<option value="${esc(n)}">`).join('');
  },
  async submitScore({name, score, level, company, difficulty, questionCount, areasTouched, stageCounts, avgRelevance, missedPains, improvements, strengths}){
    if(!name) return;
    try{
      await fetch(this.API_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({name, score, level, company, difficulty, questionCount, areasTouched, stageCounts, avgRelevance, missedPains, improvements, strengths})
      });
    } catch(e){ /* scorecard is still shown to the rep even if the save fails */ }
  },
  async fetchEntries(token){
    try{
      const url = token ? `${this.API_URL}?token=${encodeURIComponent(token)}` : this.API_URL;
      const resp = await fetch(url, { method:'GET' });
      if(!resp.ok) return null;
      const data = await resp.json();
      return Array.isArray(data.entries) ? data.entries : [];
    } catch(e){ return null; }
  },
  async deleteByName(name, token){
    try{
      const resp = await fetch(this.API_URL + '?name=' + encodeURIComponent(name) + '&token=' + encodeURIComponent(token||''), { method:'DELETE' });
      if(!resp.ok) return null;
      return await resp.json();
    } catch(e){ return null; }
  }
};
/* =========================================================================
   SPIN QUESTION-INTENT TRACKING, DUPLICATE DETECTION & CONVERSATION STATE
   ==========================================================================
   Root cause this section fixes: previously, every rep message in the
   Virtual Sales Call was sent to the AI/offline engine as an isolated
   exchange — nothing prevented a reworded repeat of an earlier question
   from being accepted, and nothing forced the customer's answer to stay
   consistent with what was already established. This runs BEFORE any
   AI/offline call, as a deterministic layer both engines share, rather than
   relying on prompt wording alone to catch repetition or contradiction. */

const STOPWORDS = new Set(['a','an','the','is','are','was','were','do','does','did','you','your','yours','how','what','why',
  'when','where','who','which','can','could','would','should','will','to','of','for','with','in','on','at','that','this',
  'these','those','and','or','but','if','so','it','its','me','my','we','our','us','i','currently','please','tell','explain',
  'about','have','has','had','be','been','being','just','right','now','today','actually','really','kind','sort','like',
  'there','any','some','get','got','going','out','up','down']);

// Very lightweight stemmer — good enough to catch "manage/managing/managed",
// not a full linguistic stemmer, but sufficient for short discovery questions.
function stem(word){
  word = word.replace(/[^a-z]/gi, '').toLowerCase();
  if(word.length > 5 && word.endsWith('ing')) word = word.slice(0, -3);
  else if(word.length > 4 && word.endsWith('ed')) word = word.slice(0, -2);
  else if(word.length > 4 && word.endsWith('ies')) word = word.slice(0, -3) + 'y';
  else if(word.length > 4 && word.endsWith('es')) word = word.slice(0, -2);
  else if(word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) word = word.slice(0, -1);
  return word;
}
// Canonical synonym clusters — applied after stemming so, e.g., "problem"
// and "issues" (lexically unrelated, so stemming alone can't catch them)
// still count as the same content word for similarity purposes. This is
// deliberately small and targeted at common discovery-question synonyms,
// not a general thesaurus.
const SYNONYM_CANON = {
  issu:'problem', troubl:'problem', difficult:'problem', concern:'problem', pain:'problem', hiccup:'problem', snag:'problem', hassl:'problem',
  handl:'manage', deal:'manage', administ:'manage', run:'manage', overse:'manage',
  method:'process', approach:'process', way:'process',
  existing:'current', present:'current',
  occur:'happen', aris:'happen',
  expens:'cost', spend:'cost', budget:'cost', price:'cost',
  suppli:'supplier', vendor:'supplier', provider:'supplier'
};
function contentWords(text){
  return (text.toLowerCase().match(/[a-z']+/g) || [])
    .map(stem)
    .filter(w => w.length > 1 && !STOPWORDS.has(w))
    .map(w => SYNONYM_CANON[w] || w);
}
function jaccardSimilarity(wordsA, wordsB){
  const a = new Set(wordsA), b = new Set(wordsB);
  if(a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  a.forEach(w => { if(b.has(w)) intersection++; });
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

// Keyword-based objective tagging — not true NLU, but a deterministic,
// testable way to recognise "these two questions are chasing the same
// dimension of the topic" even when the AI/offline engine can't be asked
// to judge that live. Order matters: first matching objective wins.
const SITUATION_OBJECTIVES = [
  ['existing-supplier', ['supplier','provider','vendor','who supplies','currently with','contract with']],
  ['contract-position', ['contract','renewal','tie','lock','expir','term']],
  ['scale', ['how many','number of','how much of','across how many']],
  ['ownership', ['who look','who manage','who own','whose respons','who\u2019s respons','who is respons']],
  ['support-arrangements', ['support','help desk','fix things','when something break','maintenance']],
  ['reporting', ['report','visibility','dashboard','see what','track']],
  ['recent-changes', ['changed recently','anything new','recent change','grown','growing','moved office']],
  ['frequency', ['how often','regularly','one-off','every day','how frequently']],
  ['technology-used', ['what system','what software','what platform','what tool','using today','set up today']],
  ['stakeholders', ['who else','anyone else','other people involved','colleagues']],
  ['current-process', ['how do you','how does','what process','how is it handled','managed today','manage today']]
];
const PROBLEM_OBJECTIVES = [
  ['cost', ['cost','expensive','budget','spend','price','money']],
  ['risk', ['risk','exposed','vulnerab','compliance','regulat','security concern']],
  ['operational-inefficiency', ['slow','inefficient','time consuming','manual','workaround','duplicate work']],
  ['user-frustration', ['frustrat','annoy','fed up','staff complain','unhappy']],
  ['service-quality', ['quality','reliab','downtime','outage','drop out']],
  ['visibility', ['visibility','don\u2019t know','no idea','blind spot','can\u2019t see']],
  ['supplier-limitations', ['provider doesn\u2019t','supplier can\u2019t','let you down','fall short']],
  ['delays', ['delay','wait','takes too long','backlog']],
  ['growth-constraints', ['scale','grow','expansion','can\u2019t keep up','outgrown']],
  ['compliance', ['complian','audit','regulat','governance','policy']],
  ['general-problem-check', ['problem','issue','trouble','difficult','goes wrong','gone wrong','pain point']]
];
const IMPLICATION_OBJECTIVES = [
  ['financial-cost', ['cost','expensive','budget','spend','money','financ']],
  ['productivity', ['productiv','time','hours','staff time','team time','slow them down']],
  ['customer-experience', ['customer','client','guest','patient','reputation with']],
  ['security-compliance', ['security','complian','audit','regulat','governance','exposure','risk']],
  ['management-time', ['management time','manager\u2019s time','chasing','follow up','follow-up']],
  ['growth-limitation', ['grow','scale','expansion','can\u2019t keep up','outgrown']],
  ['service-availability', ['availability','uptime','downtime','outage','access removed','stay up']],
  ['reputational-risk', ['reputation','trust','perception','looks bad','public']],
  ['operational-disruption', ['disrupt','workflow','day to day','day-to-day']],
  ['general-impact-check', ['impact','affect','effect','consequence']]
];
const NEEDPAYOFF_OBJECTIVES = [
  ['reduced-cost', ['cost','save money','reduce spend','cheaper','budget']],
  ['improved-visibility', ['visibility','see what','dashboard','report','track']],
  ['reduced-risk', ['risk','safer','secure','exposure','vulnerab']],
  ['faster-onboarding', ['onboard','offboard','set up new','remove access','enrolment','enrollment']],
  ['better-customer-service', ['customer','client','guest','patient','service level']],
  ['resilience', ['resilien','robust','recover','disaster','continuity']],
  ['easier-management', ['easier','simpler','manage','administer','less hassle']],
  ['compliance', ['complian','audit','governance','regulat']],
  ['growth-capacity', ['grow','scale','expansion','support growth']],
  ['reduced-dependency', ['depend','reliance','rely on','provider','supplier']],
  ['general-value-check', ['valuable','value','useful','worth','benefit','worthwhile']]
];
function classifyObjective(text, stage){
  const lower = text.toLowerCase().replace(/[\u2019']/g, '\u2019');
  const table = stage === 'problem' ? PROBLEM_OBJECTIVES
    : stage === 'implication' ? IMPLICATION_OBJECTIVES
    : stage === 'needpayoff' ? NEEDPAYOFF_OBJECTIVES
    : SITUATION_OBJECTIVES;
  for(const [tag, keywords] of table){
    if(keywords.some(k => lower.includes(k))) return tag;
  }
  return 'general';
}

function freshConversationState(){
  return {
    questionsAsked: [],       // [{text, words, stage, piece, objective, turnIndex}]
    confirmedFacts: [],        // [{piece, fact, turnIndex}] — current-situation facts established as true
    confirmedProblems: [],     // [{piece, fact, turnIndex}]
    confirmedImpacts: [],      // [{piece, fact, turnIndex}]
    desiredOutcomes: [],       // [{piece, fact, turnIndex}]
    ruledOutIssues: [],        // [{piece, note}]
    painAreas: [],             // [{piece, severity, turnIndex}]
    sentimentTrack: [],        // [{turnIndex, sentiment}] — tracked SEPARATELY from facts
    stagePerPiece: {},         // pieceId -> highest stage reached with confirmation
    // Per-piece, per-dimension state (e.g. {piece:'support-services', dimensions:{'general-problem-check':'negative','ownership':'positive'}}) —
    // lets the SAME piece hold both a positive and negative sub-state at once (spec section 8), rather than one flag per piece.
    dimensionStates: {},
    stakeholdersRaised: [],
    contradictionsFlagged: [],
    answersGiven: []           // raw reply texts already used, per pool, so the offline engine never gives the exact same generic line twice
  };
}
// Records which pool-index was used for a given generic reply pool, so the
// offline engine prefers an unused entry next time rather than risking an
// exact repeat of the same generic line for two different questions.
function pickUnusedReply(pool, poolName, state){
  const used = state.answersGiven.filter(a => a.pool === poolName).map(a => a.index);
  const unusedIdx = pool.map((_, i) => i).filter(i => !used.includes(i));
  const idx = unusedIdx.length ? unusedIdx[Math.floor(Math.random()*unusedIdx.length)] : Math.floor(Math.random()*pool.length);
  state.answersGiven.push({ pool: poolName, index: idx });
  return pool[idx];
}
// Updates the per-piece, per-dimension positive/negative state — the finer-
// grained tracking spec section 8 asks for, so a piece can be simultaneously
// "positive" on one dimension and "negative" on another rather than
// collapsing to one flag.
function updateDimensionState(pieceId, objective, sentiment, state){
  if(!pieceId) return;
  if(!state.dimensionStates[pieceId]) state.dimensionStates[pieceId] = {};
  state.dimensionStates[pieceId][objective] = sentiment; // 'positive' | 'negative' | 'unknown'
}

// The core duplicate check — runs before ANY engine call. Flags a question
// as repetitive if it's textually very similar to an earlier one on the
// same piece/stage, OR if it targets the same classified objective on the
// same piece/stage as an earlier question (catches paraphrases the text
// check alone might miss, e.g. "who looks after your devices" vs "who's
// responsible for managing them" — both 'ownership', low text overlap).
function detectDuplicateQuestion(text, piece, stage, state){
  const words = contentWords(text);
  const objective = classifyObjective(text, stage);
  const priorSameContext = state.questionsAsked.filter(q => q.stage === stage && (!piece || !q.piece || q.piece === piece));
  for(const prior of priorSameContext){
    const similarity = jaccardSimilarity(words, prior.words);
    if(similarity >= 0.4){
      return { isDuplicate: true, matchedQuestion: prior.text, reason: 'very similar wording', objective };
    }
    if(objective !== 'general' && objective === prior.objective){
      return { isDuplicate: true, matchedQuestion: prior.text, reason: `already explored "${objective.replace(/-/g,' ')}"`, objective };
    }
  }
  return { isDuplicate: false, objective };
}
// Suggests an objective not yet covered for this piece/stage, so the
// rejection message can point somewhere genuinely new rather than just
// saying "try again".
function suggestUncoveredObjective(piece, stage, state){
  const table = stage === 'problem' ? PROBLEM_OBJECTIVES
    : stage === 'implication' ? IMPLICATION_OBJECTIVES
    : stage === 'needpayoff' ? NEEDPAYOFF_OBJECTIVES
    : SITUATION_OBJECTIVES;
  const covered = new Set(state.questionsAsked.filter(q=>q.stage===stage && (!piece || !q.piece || q.piece===piece)).map(q=>q.objective));
  const uncovered = table.find(([tag]) => !covered.has(tag));
  return uncovered ? uncovered[0].replace(/-/g,' ') : null;
}
// Rough heuristic used ONLY to decide which "objective" table to check a
// question against for duplicate detection — not a substitute for the
// engine's own richer questionType scoring, which still runs afterwards.
function preClassifyStage(text){
  const lower = text.toLowerCase();
  if(/\bwould\b.{0,40}\b(valuable|value|useful|worth it|worthwhile|benefit|helpful|help)\b/.test(lower) ||
     /if we could|make sense to (look|explore)|want(ed)? to (fix|sort|solve)|how (useful|valuable) would|how would that (help|improve)/.test(lower)) return 'needpayoff';
  if(/what would that (cost|mean)|what does that (cost|mean)|\bimpact\b|what happens if|how much (does|would)|cost of (that|this|the)|knock.on effect|\baffect(s|ing)?\b|\beffect\b|consequence|knock on|(create|cause)s?\b.{0,30}\b(risk|exposure|problem)/.test(lower)) return 'implication';
  if(/\bissue|\bproblem|frustrat|trouble|difficult|concern|pain point|goes wrong|gone wrong/.test(lower)) return 'problem';
  return 'situation';
}

const Coach = {
  active:false, mode:null, profile:null, messages:[], turnScores:[], ended:false, busy:false,
  usedHints:new Set(), hintNudgeTimer:null, inactivityEndTimer:null, conversationState: freshConversationState()
};
let HINT_NUDGE_MS = 60*1000;        // surface a fresh, stage-aware hint after 1 minute with no new message
let INACTIVITY_END_MS = 10*60*1000; // auto-score after 10 minutes with no new message

/* =========================================================================
   UTIL
   ========================================================================= */
function el(sel){return document.querySelector(sel);}
function els(sel){return Array.from(document.querySelectorAll(sel));}
function esc(str){return String(str).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function extractJSON(text){
  let t = String(text).trim();
  t = t.replace(/^```json/i,'').replace(/^```/,'').replace(/```$/,'').trim();
  const start = t.indexOf('{');
  const end = t.lastIndexOf('}');
  if(start===-1||end===-1) throw new Error('No JSON object found in response');
  return JSON.parse(t.slice(start, end+1));
}

/* ---- Unified multi-provider AI call ---- */
async function callAI(system, messages, maxTokens){
  if(!Settings.apiKey) throw new Error('No API key configured');
  if(Settings.provider==='anthropic') return callAnthropic(system, messages, maxTokens||1000);
  if(Settings.provider==='openai') return callOpenAI(system, messages, maxTokens||1000);
  if(Settings.provider==='gemini') return callGemini(system, messages, maxTokens||1000);
  throw new Error('Unknown provider');
}

async function callAnthropic(system, messages, maxTokens){
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "x-api-key": Settings.apiKey,
      "anthropic-version":"2023-06-01",
      "anthropic-dangerous-direct-browser-access":"true"
    },
    body: JSON.stringify({ model: Settings.model, max_tokens:maxTokens, system:system, messages:messages })
  });
  if(!response.ok){ const t = await response.text().catch(()=> ''); throw new Error('Anthropic API error '+response.status+': '+t.slice(0,200)); }
  const data = await response.json();
  const block = (data.content||[]).find(b=>b.type==='text');
  if(!block) throw new Error('No text content in Anthropic response');
  return block.text;
}

async function callOpenAI(system, messages, maxTokens){
  const openaiMessages = [{role:'system', content:system}].concat(
    messages.map(m=>({role: m.role==='assistant' ? 'assistant' : 'user', content:m.content}))
  );
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method:"POST",
    headers:{ "Content-Type":"application/json", "Authorization":"Bearer "+Settings.apiKey },
    body: JSON.stringify({ model: Settings.model, messages: openaiMessages, max_tokens:maxTokens })
  });
  if(!response.ok){ const t = await response.text().catch(()=> ''); throw new Error('OpenAI API error '+response.status+': '+t.slice(0,200)); }
  const data = await response.json();
  const text = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if(!text) throw new Error('No text content in OpenAI response');
  return text;
}

function parseGeminiResponse(data){
  const cand = data.candidates && data.candidates[0];
  const text = cand && cand.content && cand.content.parts && cand.content.parts.map(p=>p.text||'').join('');
  if(!text) throw new Error('No text content in Gemini response');
  return text;
}
// Retries once on a 429 (rate-limited) response before giving up — genuinely
// useful once several people are using the same shared API key at once,
// since a single rejected request no longer has to immediately drop that
// rep to offline mode; most 429s clear within a second or two.
async function callGemini(system, messages, maxTokens){
  try{
    return await callGeminiOnce(system, messages, maxTokens);
  } catch(err){
    const is429 = err.message && /Gemini API error 429/.test(err.message);
    if(!is429) throw err;
    await wait(1200 + Math.random()*800); // small jitter so multiple concurrently-rate-limited tabs don't retry in lockstep
    return await callGeminiOnce(system, messages, maxTokens);
  }
}
async function callGeminiOnce(system, messages, maxTokens){
  const contents = messages.map(m=>({ role: m.role==='assistant' ? 'model' : 'user', parts:[{text:m.content}] }));
  // Newer Gemini models "think" by default, and those internal reasoning
  // tokens are drawn from the SAME maxOutputTokens budget as the visible
  // answer — with a small budget, thinking alone can consume it all, leaving
  // nothing for the actual JSON we need. thinkingBudget:0 disables that for
  // these structured-output calls (we don't need chain-of-thought here), and
  // padding the token budget is a second safety margin for models/params
  // that don't fully honor thinkingBudget.
  const body = { model: Settings.model, apiKey: Settings.apiKey, system_instruction:{parts:[{text:system}]}, contents:contents, generationConfig:{maxOutputTokens:Math.max(maxTokens, 3072), thinkingConfig:{thinkingBudget:0}} };

  // Google's Gemini API does not send CORS headers on generateContent, so it
  // can't be called directly from a browser on any domain. The Netlify
  // Function proxy (netlify/functions/gemini-proxy.js) makes the real call
  // server-side, sidestepping CORS entirely. Try that first; only attempt a
  // direct call as a last-ditch fallback (harmless, but expected to fail the
  // same way unless Google changes their CORS policy).
  try{
    const proxyResp = await fetch("/.netlify/functions/gemini-proxy", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(body)
    });
    if(proxyResp.ok){
      return parseGeminiResponse(await proxyResp.json());
    }
    const t = await proxyResp.text().catch(()=> '');
    let parsedErr = null;
    try{ parsedErr = JSON.parse(t); }catch(e){ /* not JSON — almost certainly a hosting-level page (404/501/etc), not our function */ }
    if(parsedErr){
      // Looks like a genuine response from our function (either a relayed
      // Gemini error, or our own {"error": "..."} shape) — surface it rather
      // than masking it by falling through to a doomed direct-call attempt.
      const msg = (parsedErr.error && parsedErr.error.message) || parsedErr.error || t;
      throw new Error('Gemini API error '+proxyResp.status+': '+String(msg).slice(0,200));
    }
    // Non-JSON error body → no proxy deployed at this URL (e.g. running outside
    // Netlify, or a dev server that doesn't support POST); fall through.
  } catch(proxyErr){
    if(proxyErr.message && proxyErr.message.startsWith('Gemini API error')) throw proxyErr;
    // network-level failure reaching the proxy path — fall through to a direct attempt below.
  }

  const url = "https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(Settings.model) + ":generateContent";
  const response = await fetch(url, {
    method:"POST",
    headers:{ "Content-Type":"application/json", "x-goog-api-key": Settings.apiKey },
    body: JSON.stringify({ system_instruction:body.system_instruction, contents:body.contents, generationConfig:body.generationConfig })
  });
  if(!response.ok){ const t = await response.text().catch(()=> ''); throw new Error('Gemini API error '+response.status+': '+t.slice(0,200)); }
  return parseGeminiResponse(await response.json());
}

/* =========================================================================
   NAV
   ========================================================================= */
function setView(name){
  App.view = name;
  els('.tab-btn').forEach(b=> b.classList.toggle('active', b.dataset.view===name));
  el('#view-home').classList.toggle('hidden', name!=='home');
  el('#view-training').classList.toggle('hidden', name!=='training');
  el('#view-qual').classList.toggle('hidden', name!=='qual');
  el('#view-coach').classList.toggle('hidden', name!=='coach');
  el('#view-leaderboard').classList.toggle('hidden', name!=='leaderboard');
  el('#view-manager').classList.toggle('hidden', name!=='manager');
  if(name==='home') renderHome();
  if(name==='training') renderTraining();
  if(name==='leaderboard') renderLeaderboard();
  if(name==='manager') initManagerView();
  if(name==='qual'){
    if(App.qual.pieceId){
      el('#qual-picker').classList.add('hidden');
      el('#qual-wrap').classList.remove('hidden');
    } else {
      el('#qual-picker').classList.remove('hidden');
      el('#qual-wrap').classList.add('hidden');
      renderQualPicker();
    }
  }
  window.scrollTo({top:0, behavior:'smooth'});
}
els('.tab-btn').forEach(b=> b.addEventListener('click', ()=> setView(b.dataset.view)));
el('#btn-goto-coach').addEventListener('click', ()=> setView('coach'));
el('#btn-goto-training').addEventListener('click', ()=> setView('training'));
el('#btn-qual-back').addEventListener('click', ()=>{
  App.qual.pieceId = null;
  el('#qual-wrap').classList.add('hidden');
  el('#qual-picker').classList.remove('hidden');
  renderQualPicker();
});

/* =========================================================================
   SALES TRAINING CONTENT
   ========================================================================= */
const TRAINING_SECTIONS = [
{
  title:'Opening the Call',
  sub:'The first 20 seconds decide whether you get a real conversation or a brush-off.',
  html:`
    <h4>Why the opening matters so much</h4>
    <p>Most objections in the first minute aren't really about your product. They're a reflex against being interrupted by a stranger. Your only job in the opening is to earn ten more seconds of attention. Nothing else matters yet — not features, not pricing, not your company history.</p>
    <h4>Do a little homework first</h4>
    <p>Before you dial, spend two minutes looking at the business — their website, what they do, how many locations they seem to have. You don't need much. Even one relevant detail makes your opening sound like it's about them, not a script you're reading to everyone.</p>
    <div class="train-quote"><span class="qlabel">Two-minute prep checklist</span>What do they do? How many sites, roughly? Who would I expect to be talking to? Is there anything obvious — busy season, multiple locations, public-facing business — that hints at a likely need?</div>
    <h4>Lead with your name and company, not an apology</h4>
    <p>Say your full name and your company name plainly, in your first sentence. This sounds simple, but it's the single biggest difference between a confident opener and a weak one. It gives the other person something concrete to respond to, instead of a vague voice asking for a favour.</p>
    <div class="train-quote"><span class="qlabel">Say this</span>"Hi Sarah, this is Alex Doyle calling from [Company] — have I caught you at an OK moment for two minutes, or is now genuinely bad?"</div>
    <h4>Avoid the classic opener that quietly kills calls</h4>
    <p>"Did I catch you at a bad time?" feels polite. But looking at real recorded cold calls, this exact phrase invites a reflexive "yes, actually, it is" far more often than it earns goodwill. If you use a permission-based opener at all, always pair it with a reason to stay on the line — don't just hand them an easy exit.</p>
    <h4>Give them a reason to keep listening</h4>
    <p>Your hook doesn't need to be clever. It needs to be relevant — tied to their sector, their size, or something plausible about their setup. A hook grounded in real specifics beats a generic value statement every single time.</p>
    <div class="train-quote"><span class="qlabel">Say this</span>"We work with a lot of businesses your size who've ended up with connectivity, phones and security spread across two or three different suppliers — I'm calling around to see if that's the situation for you too, and if there's a gap worth a ten-minute look."</div>
    <h4>If they push back immediately</h4>
    <p>A fast "not interested" this early is almost always a reflex, not a real answer. They haven't heard anything yet to be interested or uninterested in. Acknowledge it, don't argue, and ask for a little more room.</p>
    <div class="train-quote"><span class="qlabel">Say this</span>"Totally fair, and you don't know me yet. Can I ask one quick question before I let you go — [relevant question tied to your hook]?"</div>
    <p>If they still say no, thank them genuinely and end the call cleanly. A respectful exit keeps the door open for another attempt later far better than pushing ever does.</p>
    <h4>What a strong opening sounds like, start to finish</h4>
    <div class="train-quote"><span class="qlabel">Full example</span>"Hi Sarah, this is Alex Doyle calling from [Company] — have I caught you at an OK time for two minutes? ... Great. We work with a lot of hotels your size, and one thing that comes up a lot is guest Wi-Fi and security getting stretched as bookings grow. Is that something that's ever caused you a headache, or has it been smooth sailing?"</div>
    <div class="train-dodont">
      <div class="train-do"><span class="dd-label">Do</span><ul>
        <li>State your name and company immediately</li>
        <li>Do two minutes of homework before you dial</li>
        <li>Give one specific, relevant reason for the call</li>
        <li>Ask a question that's easy to say yes to</li>
      </ul></div>
      <div class="train-dont"><span class="dd-label">Don't</span><ul>
        <li>Open with "did I catch you at a bad time?"</li>
        <li>Launch into a feature list before they've agreed to listen</li>
        <li>Apologise for calling — it undercuts you before you've started</li>
        <li>Read from a script word for word — it always sounds like it</li>
      </ul></div>
    </div>
    <h4>Quick checklist before every call</h4>
    <ul>
      <li>I know the company name and roughly what they do</li>
      <li>I have one specific, relevant hook ready — not a generic pitch</li>
      <li>I know my own name and company will be the first thing I say</li>
      <li>I have a plan for what to say if they immediately push back</li>
    </ul>`
},
{
  title:'Discovery Questions',
  sub:'Situation, Problem, Implication, Need-payoff — the questioning sequence used throughout this site.',
  html:`
    <h4>The four-step pattern</h4>
    <p>Situation, Problem, Implication, Need-payoff — this is the questioning order used throughout this site. Once you've used it a few times it starts to feel natural, not like a formula you're forcing.</p>
    <h4>Situation questions: broad, low-pressure, and kept to a minimum</h4>
    <p>These establish context — what they have today, how things are set up. They're necessary, but they're the least valuable part of the call, and over-asking them reads as an interrogation. Use just enough to orient yourself, then move on quickly.</p>
    <div class="train-quote"><span class="qlabel">Example</span>"How are things set up today for [area] — what are you currently using?"</div>
    <p><strong>Common junior mistake:</strong> staying in Situation questions for too long. If you've asked more than two or three "what do you currently have" questions, it's time to move to Problem — you're gathering facts, not yet finding anything useful.</p>
    <h4>Problem questions: where real discovery starts</h4>
    <p>These surface difficulties, dissatisfactions or concerns connected to the situation they just described. This is where you stop collecting facts and start listening for something that actually matters to them.</p>
    <div class="train-quote"><span class="qlabel">Example</span>"How's that been working for you — anything that causes friction day to day?"</div>
    <h4>Implication questions: the step most reps skip</h4>
    <p>A stated problem isn't automatically a reason to buy. Ask what it actually costs them — in time, money, risk, or hassle. That's what turns a mild complaint into something worth fixing now.</p>
    <div class="train-quote"><span class="qlabel">Example</span>"When that happens, what does it actually cost you — lost time, frustrated staff, missed business?"</div>
    <p><strong>If you remember one thing from this whole page, make it this:</strong> jumping straight from Problem to pitching, without asking what it costs them, is the single most common discovery mistake.</p>
    <h4>Need-payoff questions: let them say the value out loud</h4>
    <p>Rather than you telling them why your solution matters, a good need-payoff question gets the prospect to state the value themselves — which makes it far stickier than anything you could say.</p>
    <div class="train-quote"><span class="qlabel">Example</span>"If that stopped happening altogether, what would that be worth to the business?"</div>
    <h4>Open questions versus closed questions</h4>
    <p>An open question invites a real answer. A closed question invites "yes" or "no" — and tells you almost nothing. Both have a place, but if your call is mostly closed questions, you're not really doing discovery.</p>
    <table class="train-table">
      <tr><th>Closed (avoid as your main tool)</th><th>Open (use instead)</th></tr>
      <tr><td>"Do you have backup in place?"</td><td>"How do you currently handle backup?"</td></tr>
      <tr><td>"Is security a priority for you?"</td><td>"How do you think about security day to day?"</td></tr>
      <tr><td>"Are you happy with your current provider?"</td><td>"How's that relationship working out for you?"</td></tr>
    </table>
    <h4>The power of a short pause</h4>
    <p>After you ask a question, stop talking. Silence feels uncomfortable, but it's doing real work — it gives the other person space to think, and people often add a second, more honest answer after a short pause if you don't rush to fill it. Junior reps often jump in early because silence feels awkward. Let it sit for two or three seconds. It's worth it.</p>
    <h4>Two habits that make all four question types work better</h4>
    <ul>
      <li><strong>Let them do most of the talking.</strong> A commonly cited rule of thumb is that the prospect should account for roughly 70% of the conversation. If you're talking more than that, you're pitching, not discovering.</li>
      <li><strong>Don't accept the first, surface-level answer.</strong> "It's fine" or "no real issues" is rarely the whole picture — a good follow-up question ("fine in what sense?", "anything that's ever caused a problem?") often uncovers what a flat first answer was hiding.</li>
    </ul>
    <div class="train-dodont">
      <div class="train-do"><span class="dd-label">Do</span><ul>
        <li>Ask one question, then stop talking and listen</li>
        <li>Follow a vague answer with a more specific one</li>
        <li>Let Implication questions do the persuading, not your pitch</li>
        <li>Leave a short pause after your question</li>
      </ul></div>
      <div class="train-dont"><span class="dd-label">Don't</span><ul>
        <li>Stack three questions into one breath</li>
        <li>Treat this as a checklist to tick rather than a conversation</li>
        <li>Jump to positioning before Implication is actually established</li>
        <li>Rush to fill every silence</li>
      </ul></div>
    </div>
    <h4>Quick checklist for a discovery call</h4>
    <ul>
      <li>I asked no more than two or three Situation questions before moving on</li>
      <li>I found at least one real Problem, not just a factual situation</li>
      <li>I asked at least one Implication question — what does it cost them?</li>
      <li>I let them state the value themselves with a Need-payoff question</li>
      <li>I was talking less than a third of the time</li>
    </ul>`
},
{
  title:'Handling Objections',
  sub:'Objections mean the prospect is still in the conversation — treat them as information, not rejection.',
  html:`
    <h4>First: an objection is a good sign</h4>
    <p>Someone who didn't care at all would just go quiet or hang up. An objection means they're still listening enough to explain why they're hesitant — that's something you can actually work with.</p>
    <h4>Five common ones, and what to say</h4>
    <div class="train-quote"><span class="qlabel">"We don't have the budget right now"</span>"That's fair — budget's usually already earmarked for things already on the roadmap. Can I ask, if this ended up saving [time/cost] each month, would it be worth revisiting when the next budget cycle opens?"</div>
    <div class="train-quote"><span class="qlabel">"We already have a provider for that"</span>"Good to know — a lot of the businesses we now work with said the same thing at first. How's that relationship working for you at the moment — any frustrations, or is it solid across the board?"</div>
    <div class="train-quote"><span class="qlabel">"Send me an email / I'm not interested"</span>"No problem, happy to. Before I do — genuinely one quick question so what I send is actually useful — [tie to your hook]?"</div>
    <div class="train-quote"><span class="qlabel">"I'd need to check with my business partner / the board"</span>"Makes total sense, this isn't just your call to make alone. What would be useful for you to bring to that conversation — would a short summary help, or would it be worth them joining a quick call directly?"</div>
    <div class="train-quote"><span class="qlabel">"We're just too busy right now"</span>"Completely understand — that's exactly when these things tend to get put off. Out of interest, is 'busy' likely to ease up in the next month or two, or is this just how things are for the foreseeable?"</div>
    <h4>Notice the pattern in all five</h4>
    <p>Every one of those does the same three things, in order: acknowledge what they said, ask a genuine question to find out what's really behind it, then respond to that — not just the first thing they said. If you remember nothing else, remember that order.</p>
    <h4>If you want a name for that pattern: LAER</h4>
    <p><strong>Listen</strong> fully, without planning your reply while they're still talking. <strong>Acknowledge</strong> it — "that makes sense" beats a scripted "I understand." <strong>Explore</strong> with a genuine question. <strong>Respond</strong> to what you actually find, not just the surface objection.</p>
    <h4>Isolate before you solve</h4>
    <p>Before spending time solving one objection, check there isn't a second one hiding behind it: "If we could sort out [X], is there anything else that would stop you moving forward?" Saves you solving one thing only to get hit with three more.</p>
    <h4>If you genuinely don't know the answer</h4>
    <p>That's fine, especially early on. Honesty beats bluffing every time. "That's a fair point, I want to give you a proper answer rather than guess — can I come back to you on that by [specific time]?" is a completely respectable thing to say.</p>
    <div class="train-dodont">
      <div class="train-do"><span class="dd-label">Do</span><ul>
        <li>Treat an objection as a request for more information</li>
        <li>Ask a clarifying question before responding</li>
        <li>Stay curious about what's really driving it</li>
        <li>Admit it honestly if you don't know the answer yet</li>
      </ul></div>
      <div class="train-dont"><span class="dd-label">Don't</span><ul>
        <li>Argue with the objection or get defensive</li>
        <li>Reach for a canned rebuttal before you've listened</li>
        <li>Solve the stated objection while ignoring the real one underneath</li>
        <li>Bluff an answer you're not sure about</li>
      </ul></div>
    </div>
    <h4>Quick checklist</h4>
    <ul>
      <li>I let them finish speaking before I responded</li>
      <li>I acknowledged the objection before addressing it</li>
      <li>I asked a question to find out what's really behind it</li>
      <li>I checked if there was anything else stopping them, once this was resolved</li>
    </ul>`
},
{
  title:'Positioning the Solution',
  sub:"Anchor the fix to the specific pain they described — not a general pitch about what you sell.",
  html:`
    <h4>Position what you discovered, not what you sell</h4>
    <p>The strongest positioning statement repeats the prospect's own words back to them, then connects directly to the fix. Generic feature-led pitches are forgettable because they could be said to anyone. A positioning statement anchored to what THIS prospect just told you is memorable because it's specific to them.</p>
    <div class="train-quote"><span class="qlabel">Weak</span>"We offer a fully managed backup and disaster recovery service with immutable cloud storage and rapid restore."</div>
    <div class="train-quote"><span class="qlabel">Strong</span>"You mentioned you've never actually tested a full restore, and that a failed one could set you back a week — that's exactly the gap this closes: we'd test a full restore with you so you know, on record, that it works."</div>
    <h4>One problem, one fix — resist the urge to pitch everything</h4>
    <p>Once you know the full range of what's on offer, the temptation is to mention all of it "just in case." In practice, tying the conversation to the one or two things that actually came up in discovery lands far better than a broad tour of everything available. Park the rest for a follow-up conversation — there's nearly always a next call.</p>
    <h4>Translate features into outcomes</h4>
    <p>A feature is what something does. An outcome is why the customer actually cares. Junior reps often lead with features because that's what's easiest to remember from training — but outcomes are what actually land.</p>
    <table class="train-table">
      <tr><th>Feature</th><th>Outcome the customer actually cares about</th></tr>
      <tr><td>24/7 monitoring</td><td>You find out about a problem before it costs you a day of trading, not after.</td></tr>
      <tr><td>Immutable backup</td><td>Even if ransomware gets in, your data can't be encrypted along with it.</td></tr>
      <tr><td>Single point of contact</td><td>One call, one number, no more chasing three different suppliers.</td></tr>
      <tr><td>MDM enrolment</td><td>A lost phone can be wiped in minutes, not left as an open door.</td></tr>
      <tr><td>Matching or beating a competitor's mobile pricing</td><td>Same or better phones and contract, without the hassle you've had with your current provider.</td></tr>
      <tr><td>VoIP migration ahead of the ISDN/PSTN switch-off</td><td>You move on your own timeline, keeping your numbers and features intact — instead of scrambling once the old lines go dead.</td></tr>
    </table>
    <h4>If they ask about price early</h4>
    <p>It's common for a prospect to ask "how much does this cost?" before you've finished discovery. You don't need to dodge the question, but answering it properly usually means understanding their situation first. A short, honest bridge works well.</p>
    <div class="train-quote"><span class="qlabel">Say this</span>"Good question, and I'll absolutely get you a number — it depends a bit on scale, so let me ask two more quick things first so what I give you is actually accurate rather than a guess."</div>
    <h4>Use the Need-payoff answer as your bridge into next steps</h4>
    <p>If they've already told you what the fix would be worth to them, close by referencing that value directly, then move straight into a concrete next step rather than leaving it open-ended.</p>
    <div class="train-quote"><span class="qlabel">Say this</span>"You said that would be worth a lot to you if it stopped happening — that's exactly what this fixes. The natural next step is a short call with one of our specialists to scope it properly — does later this week work?"</div>
    <div class="train-dodont">
      <div class="train-do"><span class="dd-label">Do</span><ul>
        <li>Quote their own words back to them</li>
        <li>Lead with the outcome, not the feature list</li>
        <li>Bridge price questions with one or two more discovery questions</li>
        <li>End with one clear, specific next step</li>
      </ul></div>
      <div class="train-dont"><span class="dd-label">Don't</span><ul>
        <li>Pitch the entire portfolio in one go</li>
        <li>Use jargon they haven't used themselves</li>
        <li>Dodge a price question entirely — bridge it instead</li>
        <li>Leave the call without a concrete next action</li>
      </ul></div>
    </div>
    <h4>Quick checklist before you position anything</h4>
    <ul>
      <li>I can repeat back, in their words, what the problem actually is</li>
      <li>I know what it costs them — I asked an Implication question already</li>
      <li>I'm connecting one specific fix to one specific pain, not listing everything</li>
      <li>I have a concrete next step ready to suggest</li>
    </ul>`
},
{
  title:'BANT Qualification',
  sub:'Budget, Authority, Need, Timeline — four quick checks to tell a real opportunity from a nice chat.',
  html:`
    <h4>What it's actually for</h4>
    <p>Before you invest more time in a conversation, check four things: do they have money for this, can the person you're talking to actually say yes, is there a real problem, and is there any reason to move now. You don't need to say the words "budget, authority, need, timeline" out loud — just weave the questions in naturally.</p>
    <div class="bant-grid">
      <div class="bant-card"><span class="bant-letter">B</span><h5>Budget</h5><p>Is there money for this, realistically?</p><div class="bant-ask">"How do you typically fund something like this — a set budget, or something you'd build a case for?"</div></div>
      <div class="bant-card"><span class="bant-letter">A</span><h5>Authority</h5><p>Can they say yes, or does someone else need to agree?</p><div class="bant-ask">"Who else would need to be comfortable with this for it to move forward?"</div></div>
      <div class="bant-card"><span class="bant-letter">N</span><h5>Need</h5><p>Is there a real, specific problem — not just "sure, that'd be handy"?</p><div class="bant-ask">"Walk me through what happens today when [the problem] comes up."</div></div>
      <div class="bant-card"><span class="bant-letter">T</span><h5>Timeline</h5><p>Is anything actually pushing them to act now?</p><div class="bant-ask">"What's driving the timing on this — is there something specific pushing it, or is it more exploratory for now?"</div></div>
    </div>
    <h4>Always start with Need</h4>
    <p>Asking about budget or who-decides too early feels like an interrogation. Find the real problem first — budget and authority come up naturally once someone actually wants the problem fixed.</p>
    <h4>What a natural version sounds like</h4>
    <div class="train-quote"><span class="qlabel">Need</span>Rep: "How's that been working for you?" Customer: "Honestly, it's a pain — we lose a day every few months when it goes down."</div>
    <div class="train-quote"><span class="qlabel">Timeline</span>Rep: "Has that happened recently, or is it more of an ongoing thing?" Customer: "Twice this quarter already."</div>
    <div class="train-quote"><span class="qlabel">Authority</span>Rep: "If we looked at fixing this, would that be your call, or is there someone else who'd need to weigh in?" Customer: "I'd bring it to our ops director, but I'd be the one pushing it."</div>
    <div class="train-quote"><span class="qlabel">Budget</span>Rep: "Roughly, is this the kind of thing that would come out of an existing budget, or would it need a new case built?" Customer: "We'd probably need to build a case, but if the numbers make sense it's not a hard sell internally."</div>
    <h4>Common mistakes</h4>
    <ul>
      <li><strong>Reciting it like a checklist.</strong> Weave the four questions into the conversation, don't fire them one after another.</li>
      <li><strong>Writing someone off on budget too fast.</strong> "No budget" usually means "not allocated yet," not "never possible."</li>
      <li><strong>Assuming there's only one decision-maker.</strong> There's often someone else who needs to be happy too.</li>
      <li><strong>Accepting a vague need.</strong> "Yeah, that'd be useful" isn't a real need yet — dig one level deeper.</li>
    </ul>
    <h4>Quick checklist</h4>
    <ul>
      <li>I know the specific need, not just a general area of interest</li>
      <li>I know who else needs to agree before this moves forward</li>
      <li>I have a rough sense of how this kind of spend gets approved</li>
      <li>I know what's driving the timing, if anything</li>
    </ul>`
},
{
  title:'Closing the Call & Next Steps',
  sub:'A good call with no clear next step is a wasted call — always end with something concrete.',
  html:`
    <h4>Why this step gets skipped, and why it matters</h4>
    <p>It's easy for a junior rep to have a genuinely good conversation, feel satisfied that it went well, and then hang up without anything actually agreed. A good discovery call that ends with "I'll follow up" and nothing more specific rarely turns into a real next step — it just quietly goes cold. Ending with something concrete is what actually moves things forward.</p>
    <h4>Summarise before you close</h4>
    <p>Briefly play back what you heard. This does two things: it proves you were actually listening, and it gives the customer a chance to correct anything before you both move forward on the wrong assumption.</p>
    <div class="train-quote"><span class="qlabel">Say this</span>"Just to make sure I've got this right — the main thing is [X], and it's costing you [Y] when it happens. Does that sound right, or is there anything I've missed?"</div>
    <h4>Always propose a specific next step — never leave it open</h4>
    <p>"I'll be in touch" is not a next step. A next step has a date, a format, and ideally a name attached to it.</p>
    <table class="train-table">
      <tr><th>Weak close</th><th>Strong close</th></tr>
      <tr><td>"I'll follow up with some info."</td><td>"I'll send that over today, and I'll call you Thursday at 10 to go through it together."</td></tr>
      <tr><td>"Let me know if you're interested."</td><td>"Does it make sense to get a specialist on a short call next week to scope this properly?"</td></tr>
      <tr><td>"I'll check and get back to you."</td><td>"I'll have an answer for you by end of day tomorrow — I'll call you directly rather than just emailing."</td></tr>
    </table>
    <h4>Handling "let me think about it"</h4>
    <p>This is one of the most common soft objections at the end of a call. It's rarely a flat no — but it needs a specific, low-pressure follow-up, not just a hopeful "sounds good, talk soon."</p>
    <div class="train-quote"><span class="qlabel">Say this</span>"Of course, that's completely fair. What would be useful to think through — is it the cost, the timing, or something else? And when's a good time for me to check back in, so I'm not chasing you before you're ready?"</div>
    <h4>Confirm, don't assume</h4>
    <p>Before you hang up, restate the agreed next step out loud, in plain terms, so there's no ambiguity on either side about what happens next and when.</p>
    <div class="train-quote"><span class="qlabel">Say this</span>"Great, so just to confirm — I'll send over [X] today, and we'll speak again on [day] at [time]. Sound good?"</div>
    <h4>Log it straight away</h4>
    <p>Write down what was agreed the moment the call ends, while it's fresh — the specific next step, the date, and anything important you learned. A great call that isn't followed up on schedule loses almost all of its value.</p>
    <div class="train-dodont">
      <div class="train-do"><span class="dd-label">Do</span><ul>
        <li>Summarise what you heard before closing</li>
        <li>Propose a next step with a specific date and format</li>
        <li>Confirm the agreed next step out loud before hanging up</li>
        <li>Log it immediately afterwards</li>
      </ul></div>
      <div class="train-dont"><span class="dd-label">Don't</span><ul>
        <li>End on "I'll follow up" with nothing more specific</li>
        <li>Assume they'll remember details without you sending them</li>
        <li>Let "let me think about it" go without a specific check-in date</li>
        <li>Wait until later to write up what happened</li>
      </ul></div>
    </div>
    <h4>Quick checklist before you hang up</h4>
    <ul>
      <li>I summarised what I heard and confirmed it was accurate</li>
      <li>I proposed a specific next step, not a vague "I'll be in touch"</li>
      <li>We agreed a date and format for what happens next</li>
      <li>I know exactly what I'm doing straight after this call ends</li>
    </ul>`
}
];

function renderTraining(){
  const wrap = el('#training-body');
  if(wrap.dataset.built) return; // build once, accordion state persists via CSS classes afterward
  wrap.dataset.built = '1';
  wrap.innerHTML = TRAINING_SECTIONS.map((s,i)=>`
    <div class="train-card ${i===0?'open':''}" data-idx="${i}">
      <div class="train-head">
        <div class="train-num">${i+1}</div>
        <div style="flex:1;">
          <h3>${esc(s.title)}</h3>
          <div class="train-sub">${esc(s.sub)}</div>
        </div>
        <div class="train-chevron">▶</div>
      </div>
      <div class="train-body"><div class="train-body-inner">${s.html}</div></div>
    </div>`).join('');
  els('.train-head').forEach(h=> h.addEventListener('click', ()=>{
    h.closest('.train-card').classList.toggle('open');
  }));
}

/* =========================================================================
   LEADERBOARD RENDERING
   ========================================================================= */
function aggregateLeaderboard(entries){
  const byName = {};
  entries.forEach(e=>{
    if(!e || !e.name) return;
    if(!byName[e.name]) byName[e.name] = { name:e.name, best:0, bestLevel:'', bestCompany:'', total:0, calls:0, lastTimestamp:'' };
    const row = byName[e.name];
    row.calls += 1;
    row.total += (Number(e.score) || 0);
    if((Number(e.score)||0) >= row.best){
      row.best = Number(e.score) || 0;
      row.bestLevel = e.level || '';
      row.bestCompany = e.company || '';
    }
    if(!row.lastTimestamp || e.timestamp > row.lastTimestamp) row.lastTimestamp = e.timestamp || '';
  });
  return Object.values(byName)
    .map(r => ({ ...r, avg: Math.round(r.total / r.calls) }))
    .sort((a,b) => b.best - a.best || b.avg - a.avg);
}
async function renderLeaderboard(){
  const wrap = el('#leaderboard-body');
  wrap.innerHTML = `<p style="color:var(--ink-faint);font-size:14px;">Loading leaderboard…</p>`;
  const entries = await Leaderboard.fetchEntries();
  if(entries === null){
    wrap.innerHTML = `<p style="color:var(--ink-faint);font-size:14px;">Couldn't load the leaderboard right now — check your connection and try switching back to this tab again.</p>`;
    return;
  }
  if(entries.length === 0){
    wrap.innerHTML = `<p style="color:var(--ink-faint);font-size:14px;">No scores yet — complete a Virtual Sales Call and click "Score Me Now" to appear here.</p>`;
    return;
  }
  const ranked = aggregateLeaderboard(entries);
  const medal = i => i===0 ? '🥇' : i===1 ? '🥈' : i===2 ? '🥉' : (i+1);
  wrap.innerHTML = `
    <div style="background:var(--cream-card);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;">
      <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;min-width:520px;">
        <tr style="background:var(--navy);color:#fff;text-align:left;">
          <th style="padding:10px 14px;font-size:12px;">Rank</th>
          <th style="padding:10px 14px;font-size:12px;">Name</th>
          <th style="padding:10px 14px;font-size:12px;">Best score</th>
          <th style="padding:10px 14px;font-size:12px;">Average</th>
          <th style="padding:10px 14px;font-size:12px;">Calls</th>
          <th style="padding:10px 14px;font-size:12px;">Best call</th>
        </tr>
        ${ranked.map((r,i)=>`
        <tr style="border-top:1px solid var(--line);${i===0?'background:#FBF6E8;':''}">
          <td style="padding:10px 14px;font-size:15px;">${medal(i)}</td>
          <td style="padding:10px 14px;font-weight:700;color:var(--navy);">${esc(r.name)}</td>
          <td style="padding:10px 14px;font-weight:700;color:var(--teal);">${r.best}/100</td>
          <td style="padding:10px 14px;color:var(--ink-soft);">${r.avg}/100</td>
          <td style="padding:10px 14px;color:var(--ink-soft);">${r.calls}</td>
          <td style="padding:10px 14px;color:var(--ink-faint);font-size:13px;">${esc(r.bestCompany)}${r.bestLevel?' · '+esc(r.bestLevel):''}</td>
        </tr>`).join('')}
      </table>
      </div>
    </div>`;
}

/* =========================================================================
   MANAGER REPORT
   ========================================================================= */
const MANAGER_AUTH_URL = '/.netlify/functions/manager-auth';
async function initManagerView(){
  const storedToken = sessionStorage.getItem('ssa_manager_token');
  if(storedToken){
    try{
      const resp = await fetch(MANAGER_AUTH_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({action:'check', token:storedToken}) });
      const data = await resp.json();
      if(data.ok){
        el('#manager-gate').classList.add('hidden');
        el('#manager-body').classList.remove('hidden');
        renderManagerReport();
        return;
      }
    } catch(e){ /* fall through to showing the gate again */ }
    sessionStorage.removeItem('ssa_manager_token');
  }
  el('#manager-gate').classList.remove('hidden');
  el('#manager-body').classList.add('hidden');
  const btn = el('#manager-unlock-btn');
  const input = el('#manager-pass-input');
  const tryUnlock = async ()=>{
    btn.disabled = true;
    try{
      const resp = await fetch(MANAGER_AUTH_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({action:'verify', password:input.value}) });
      const data = await resp.json();
      if(data.ok && data.token){
        sessionStorage.setItem('ssa_manager_token', data.token);
        el('#manager-gate').classList.add('hidden');
        el('#manager-body').classList.remove('hidden');
        renderManagerReport();
      } else {
        el('#manager-gate-error').style.display = 'block';
        el('#manager-gate-error').textContent = data.error || 'Incorrect password.';
      }
    } catch(e){
      el('#manager-gate-error').style.display = 'block';
      el('#manager-gate-error').textContent = "Couldn't reach the server to check the password — check your connection and try again.";
    } finally {
      btn.disabled = false;
    }
  };
  btn.onclick = tryUnlock; // .onclick (not addEventListener) so re-entering this view doesn't stack duplicate handlers
  input.onkeydown = (e)=>{ if(e.key==='Enter') tryUnlock(); };
}
const STAGE_LABELS = {situation:'Situation', problem:'Problem', implication:'Implication', needpayoff:'Need-payoff', closed:'Closed', other:'Other'};
function aggregateManagerData(entries){
  const byName = {};
  entries.forEach(e=>{
    if(!e || !e.name) return;
    if(!byName[e.name]) byName[e.name] = { name:e.name, calls:[] };
    byName[e.name].calls.push(e);
  });
  return Object.values(byName).map(rep=>{
    const calls = rep.calls.slice().sort((a,b)=> (a.timestamp||'').localeCompare(b.timestamp||''));
    const n = calls.length;
    const avgScore = Math.round(calls.reduce((s,c)=>s+(c.score||0),0)/n);
    const relevances = calls.filter(c=>Number.isFinite(c.avgRelevance));
    const avgRelevance = relevances.length ? Math.round((relevances.reduce((s,c)=>s+c.avgRelevance,0)/relevances.length)*10)/10 : null;
    const stageTotals = {situation:0, problem:0, implication:0, needpayoff:0, closed:0, other:0};
    calls.forEach(c=>{ if(c.stageCounts) Object.keys(stageTotals).forEach(k=> stageTotals[k]+= (c.stageCounts[k]||0)); });
    const stageSum = Object.values(stageTotals).reduce((a,b)=>a+b,0);
    const stageMix = {};
    Object.keys(stageTotals).forEach(k=> stageMix[k] = stageSum ? Math.round((stageTotals[k]/stageSum)*100) : 0);
    // Trend: compare the most recent calls to the earlier calls (needs at least 2 to say anything)
    let trend = 'flat';
    if(n >= 2){
      const splitSize = n>=4 ? Math.floor(n/2) : 1;
      const recentCalls = calls.slice(-splitSize);
      const earlierCalls = calls.slice(0, n-splitSize);
      const avgOf = arr => arr.reduce((s,c)=>s+(c.score||0),0)/arr.length;
      if(earlierCalls.length && recentCalls.length){
        const diff = avgOf(recentCalls) - avgOf(earlierCalls);
        trend = diff > 4 ? 'up' : diff < -4 ? 'down' : 'flat';
      }
    }
    const areasTouchedAvg = Math.round(calls.reduce((s,c)=>s+(c.areasTouched||0),0)/n);
    const latestImprovements = calls[n-1].improvements || [];
    const latestMissed = calls[n-1].missedPains || [];
    return { name:rep.name, calls, n, avgScore, avgRelevance, stageMix, trend, areasTouchedAvg, latestImprovements, latestMissed };
  }).sort((a,b)=> b.avgScore - a.avgScore);
}
async function renderManagerReport(){
  const wrap = el('#manager-body');
  wrap.innerHTML = `<p style="color:var(--ink-faint);font-size:14px;">Loading report…</p>`;
  const managerToken = sessionStorage.getItem('ssa_manager_token');
  const entries = await Leaderboard.fetchEntries(managerToken);
  if(entries === null){
    wrap.innerHTML = `<p style="color:var(--ink-faint);font-size:14px;">Couldn't load report data — check your connection and switch back to this tab to retry.</p>`;
    return;
  }
  if(entries.length === 0){
    wrap.innerHTML = `<p style="color:var(--ink-faint);font-size:14px;">No calls logged yet.</p>`;
    return;
  }
  const reps = aggregateManagerData(entries);
  const teamAvgScore = Math.round(entries.reduce((s,e)=>s+(e.score||0),0)/entries.length);
  const relevant = entries.filter(e=>Number.isFinite(e.avgRelevance));
  const teamAvgRelevance = relevant.length ? Math.round((relevant.reduce((s,e)=>s+e.avgRelevance,0)/relevant.length)*10)/10 : null;
  const stageTotalsTeam = {situation:0, problem:0, implication:0, needpayoff:0, closed:0, other:0};
  entries.forEach(e=>{ if(e.stageCounts) Object.keys(stageTotalsTeam).forEach(k=> stageTotalsTeam[k] += (e.stageCounts[k]||0)); });
  const stageSumTeam = Object.values(stageTotalsTeam).reduce((a,b)=>a+b,0);
  const goodStagePct = stageSumTeam ? Math.round(((stageTotalsTeam.implication + stageTotalsTeam.needpayoff) / stageSumTeam) * 100) : 0;

  const trendArrow = t => t==='up' ? '<span style="color:var(--teal-deep);">▲ improving</span>' : t==='down' ? '<span style="color:var(--danger);">▼ needs attention</span>' : '<span style="color:var(--ink-faint);">— steady</span>';
  const stageBarHTML = mix => `
    <div style="display:flex;height:8px;border-radius:5px;overflow:hidden;width:160px;">
      ${Object.keys(STAGE_LABELS).map(k=>`<div title="${STAGE_LABELS[k]}: ${mix[k]}%" style="width:${mix[k]}%;background:${STAGE_COLORS[k]};"></div>`).join('')}
    </div>`;

  const difficultyBreakdown = ['warm','brisk','dismissive'].map(diff=>{
    const tierEntries = entries.filter(e => (e.difficulty || 'warm') === diff);
    const avg = tierEntries.length ? Math.round(tierEntries.reduce((s,e)=>s+(e.score||0),0)/tierEntries.length) : null;
    return { diff, tier: DIFFICULTY_TIER_INFO[diff], calls: tierEntries.length, avg };
  });

  wrap.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:22px;">
      <div class="mgr-stat"><div class="mgr-stat-num">${entries.length}</div><div class="mgr-stat-label">Calls logged</div></div>
      <div class="mgr-stat"><div class="mgr-stat-num">${reps.length}</div><div class="mgr-stat-label">Active reps</div></div>
      <div class="mgr-stat"><div class="mgr-stat-num">${teamAvgScore}/100</div><div class="mgr-stat-label">Team avg score</div></div>
      <div class="mgr-stat"><div class="mgr-stat-num">${teamAvgRelevance ?? '—'}/3</div><div class="mgr-stat-label">Avg question relevance</div></div>
      <div class="mgr-stat"><div class="mgr-stat-num">${goodStagePct}%</div><div class="mgr-stat-label">Questions were Implication / Need-payoff</div></div>
    </div>
    <h4 style="font-size:13px;color:var(--navy);margin:0 0 10px;font-family:var(--font-head);">Performance by difficulty tier</h4>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:22px;">
      ${difficultyBreakdown.map(d=>`
        <div class="mgr-stat" style="text-align:left;">
          <div style="font-weight:800;color:var(--navy);font-size:13px;margin-bottom:2px;">${d.tier.name}</div>
          <div style="font-size:11px;color:var(--ink-faint);margin-bottom:8px;">${esc(d.tier.description)}</div>
          <div class="mgr-stat-num" style="font-size:20px;">${d.avg !== null ? d.avg+'/100' : '—'}</div>
          <div class="mgr-stat-label">${d.calls} call${d.calls===1?'':'s'}</div>
        </div>`).join('')}
    </div>
    <div style="background:var(--cream-card);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;margin-bottom:20px;">
      <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;min-width:680px;">
        <tr style="background:var(--navy);color:#fff;text-align:left;">
          <th style="padding:10px 14px;font-size:12px;">Rep</th>
          <th style="padding:10px 14px;font-size:12px;">Calls</th>
          <th style="padding:10px 14px;font-size:12px;">Avg score</th>
          <th style="padding:10px 14px;font-size:12px;">Trend</th>
          <th style="padding:10px 14px;font-size:12px;">Avg relevance</th>
          <th style="padding:10px 14px;font-size:12px;">Question mix (S·P·I·N·Closed·Other)</th>
          <th style="padding:10px 14px;font-size:12px;">Areas touched/call</th>
        </tr>
        ${reps.map((r,i)=>`
        <tr style="border-top:1px solid var(--line);cursor:pointer;" class="mgr-rep-row" data-idx="${i}">
          <td style="padding:10px 14px;font-weight:700;color:var(--navy);">${esc(r.name)}</td>
          <td style="padding:10px 14px;">${r.n}</td>
          <td style="padding:10px 14px;font-weight:700;color:var(--teal);">${r.avgScore}/100</td>
          <td style="padding:10px 14px;font-size:12.5px;">${trendArrow(r.trend)}</td>
          <td style="padding:10px 14px;">${r.avgRelevance ?? '—'}/3</td>
          <td style="padding:10px 14px;">${stageBarHTML(r.stageMix)}</td>
          <td style="padding:10px 14px;">${r.areasTouchedAvg}/${PIECES.length}</td>
        </tr>
        <tr class="mgr-rep-detail hidden" id="mgr-detail-${i}"><td colspan="7" style="padding:0;">
          <div style="background:#fff;padding:16px 20px;border-top:1px dashed var(--line);">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
              <div>
                <h5 style="margin:0 0 8px;color:var(--navy);font-size:13px;">Recent calls</h5>
                <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--ink-soft);">
                  ${r.calls.slice(-6).reverse().map(c=>`<li>${esc(c.company||'—')} — ${c.score}/100 (${esc(c.level||'')})</li>`).join('')}
                </ul>
              </div>
              <div>
                <h5 style="margin:0 0 8px;color:var(--navy);font-size:13px;">Current coaching focus</h5>
                <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--ink-soft);">
                  ${r.latestImprovements.map(x=>`<li>${esc(x)}</li>`).join('') || '<li>No specific gaps flagged in the most recent call.</li>'}
                </ul>
              </div>
            </div>
            <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--line);">
              <button class="btn btn-outline mgr-delete-btn" data-name="${esc(r.name)}" style="color:var(--danger);border-color:var(--danger);font-size:12.5px;padding:6px 12px;">Remove ${esc(r.name)} from leaderboard</button>
            </div>
          </div>
        </td></tr>`).join('')}
      </table>
      </div>
    </div>
    <p style="font-size:11.5px;color:var(--ink-faint);">Click a row to see recent calls and current coaching focus for that rep. "Question mix" bars show the share of questions in each SPIN stage across all their calls — more Implication and Need-payoff (right side) generally means stronger discovery discipline.</p>
    <div class="mgr-rationale-section">
      <h4 style="font-size:13px;color:var(--navy);margin:24px 0 6px;font-family:var(--font-head);">Propensity model rationale (auditable)</h4>
      <p style="font-size:12px;color:var(--ink-faint);margin:0 0 12px;">Pick a combination to see exactly why the system suggests certain focus areas for it — every score below is a training heuristic, not verified market data. Confidence reflects how directly the reasoning applies, not statistical certainty.</p>
      <div class="context-panel-grid" style="margin-bottom:14px;">
        <div><label>Industry</label><select id="rationale-industry-select"><option value="">Any</option></select></div>
        <div><label>Role</label><select id="rationale-role-select"><option value="">Any</option></select></div>
        <div><label>Org size</label><select id="rationale-size-select"><option value="">Any</option></select></div>
      </div>
      <div id="rationale-output"></div>
    </div>`;

  ['rationale-industry-select','rationale-role-select','rationale-size-select'].forEach((id, i)=>{
    const opts = [INDUSTRY_OPTIONS, CONTACT_ROLE_OPTIONS, ORG_SIZE_OPTIONS][i];
    const sel = el('#'+id);
    opts.forEach(o=>{ sel.innerHTML += `<option value="${esc(o)}">${esc(o)}</option>`; });
    sel.addEventListener('change', renderPropensityRationale);
  });
  renderPropensityRationale();

  els('.mgr-rep-row').forEach(row=>{
    row.addEventListener('click', ()=>{
      el('#mgr-detail-'+row.dataset.idx).classList.toggle('hidden');
    });
  });
  els('.mgr-delete-btn').forEach(btn=>{
    btn.addEventListener('click', async (e)=>{
      e.stopPropagation(); // don't also toggle the parent row's expand/collapse
      const name = btn.dataset.name;
      if(!confirm(`Remove all leaderboard entries for "${name}"? This can't be undone.`)) return;
      btn.disabled = true; btn.textContent = 'Removing…';
      const result = await Leaderboard.deleteByName(name, sessionStorage.getItem('ssa_manager_token'));
      if(result && result.ok){
        renderManagerReport(); // re-fetch and re-render so the removed rep disappears immediately
      } else {
        btn.disabled = false;
        btn.textContent = `Remove ${name} from leaderboard`;
        alert("Couldn't remove that entry — check your connection and try again.");
      }
    });
  });
}
function renderPropensityRationale(){
  const industry = el('#rationale-industry-select').value || null;
  const role = el('#rationale-role-select').value || null;
  const size = el('#rationale-size-select').value || null;
  const evidence = propensityEvidenceFor(industry, role, size);
  const out = el('#rationale-output');
  if(!evidence.length){
    out.innerHTML = `<p style="font-size:13px;color:var(--ink-faint);">Pick at least one of industry, role or size above to see the evidence behind it.</p>`;
    return;
  }
  out.innerHTML = `
    <div style="background:#fff;border:1px solid var(--line);border-radius:var(--radius-sm);overflow:hidden;">
      <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:12.5px;min-width:640px;">
        <tr style="background:var(--navy);color:#fff;text-align:left;">
          <th style="padding:8px 12px;">Focus area</th>
          <th style="padding:8px 12px;">Relevance</th>
          <th style="padding:8px 12px;">Confidence</th>
          <th style="padding:8px 12px;">Evidence &amp; rationale</th>
          <th style="padding:8px 12px;">Last reviewed</th>
        </tr>
        ${evidence.map(e=>`
        <tr style="border-top:1px solid var(--line);vertical-align:top;">
          <td style="padding:8px 12px;font-weight:700;color:var(--navy);">${esc(PIECE_BY_ID[e.piece].name)}</td>
          <td style="padding:8px 12px;">${Math.round(e.maxRelevance*100)}%</td>
          <td style="padding:8px 12px;">${e.contributions.map(c=>esc(c.confidence)).join(', ')}</td>
          <td style="padding:8px 12px;color:var(--ink-soft);">${e.contributions.map(c=>`<div style="margin-bottom:4px;"><strong>[${esc(c.sourceType)}]</strong> ${esc(c.rationale)} <em>(${esc(c.evidenceType)})</em></div>`).join('')}</td>
          <td style="padding:8px 12px;color:var(--ink-faint);">${esc(e.contributions[0].lastReviewed)}</td>
        </tr>`).join('')}
      </table>
      </div>
    </div>`;
}
const STAGE_COLORS = {situation:'#A2640A', problem:'#E8A03D', implication:'#0A825A', needpayoff:'#0A825A', closed:'#C21F3E', other:'#8B8F99'};

/* =========================================================================
   HOME / OVERVIEW RENDERING
   ========================================================================= */
function bestLevelForPiece(pieceId){
  const rows = App.sessionLog.filter(r=>r.pieceId===pieceId);
  if(rows.length===0) return null;
  return rows.reduce((best,r)=> LEVEL_SCORE[r.level] > LEVEL_SCORE[best.level] ? r : best);
}
function renderHome(){
  const grid = el('#piece-grid');
  grid.innerHTML = PIECES.map(p=>{
    const best = bestLevelForPiece(p.id);
    const badge = best ? `<span class="pc-status" style="background:${LEVELS[best.level].bg};color:${LEVELS[best.level].color};">${LEVELS[best.level].label}</span>` : '';
    return `<button class="piece-card" style="--accent:${p.color}" data-id="${p.id}">
      <div class="pc-icon">${p.icon}</div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.blurb)}</p>
      ${badge}
    </button>`;
  }).join('');
  els('.piece-card').forEach(c=> c.addEventListener('click', ()=> startPiece(c.dataset.id)));

  const logBody = el('#session-log-body');
  if(App.sessionLog.length===0){
    logBody.innerHTML = '<p class="log-empty">No areas assessed yet — pick a focus area above to begin.</p>';
  } else {
    const list = PIECE_IDS.map(id=>{
      const best = bestLevelForPiece(id);
      if(!best) return null;
      const piece = PIECE_BY_ID[id];
      const lv = LEVELS[best.level];
      return `<span class="log-chip" style="background:${lv.bg};color:${lv.color};border-color:${lv.color}33;">
        <span class="log-dot" style="background:${lv.color}"></span>${piece.icon} ${esc(piece.short)} · ${lv.label}
      </span>`;
    }).filter(Boolean).join('');
    logBody.innerHTML = `<div class="log-list">${list}</div>`;
  }
}

/* =========================================================================
   GUIDED QUALIFICATION
   ========================================================================= */
const STEP_DEFS = [
  {key:'situation', label:'Situation'},
  {key:'problem', label:'Problem'},
  {key:'implication', label:'Implication'},
  {key:'needpayoff', label:'Need-payoff'},
  {key:'result', label:'Close'}
];
function startPiece(pieceId){
  App.qual.pieceId = pieceId;
  App.qual.nodeId = 'start';
  App.qual.notes = [];
  App.qual.gatePassed = false;
  App.qual.revealedOption = null;
  setView('qual');
  el('#qual-picker').classList.add('hidden');
  el('#qual-wrap').classList.remove('hidden');
  renderQualHeader();
  renderPrimer();
  el('#qual-primer').classList.remove('hidden');
  el('#qual-practice').classList.add('hidden');
}
function renderPrimer(){
  const piece = PIECE_BY_ID[App.qual.pieceId];
  const p = piece.primer;
  const wrap = el('#qual-primer');
  if(!p){
    // Defensive fallback in case a piece is ever added without primer content —
    // skip straight to practice rather than showing an empty screen.
    wrap.innerHTML = '';
    beginPractice();
    return;
  }
  wrap.innerHTML = `
    <div class="primer-card">
      <h4>What it is</h4>
      <p>${esc(p.overview)}</p>
      <h4>Why it matters to SMEs</h4>
      <p>${esc(p.whyItMatters)}</p>
      ${p.tiers ? `
      <h4>Our Cyber Assurance tiers</h4>
      <p>${esc(p.tiers.intro)}</p>
      <div class="primer-tiers">
        ${p.tiers.items.map(t=>`
        <div class="tier-item">
          <div class="tier-name">${esc(t.name)}</div>
          <div class="tier-detail">${esc(t.detail)}</div>
        </div>`).join('')}
      </div>` : ''}
      <div class="primer-grid">
        <div>
          <h4>Key indicators to listen for</h4>
          <ul>${p.keyIndicators.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
        </div>
        <div>
          <h4>Compelling events</h4>
          <ul>${p.compellingEvents.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
        </div>
      </div>
      <h4>Market context</h4>
      <p>${esc(p.marketContext)}</p>
      ${p.regulatory ? `
      <h4>Regulatory &amp; compliance landscape</h4>
      <p>${esc(p.regulatory.intro)}</p>
      <div class="primer-regulatory">
        ${p.regulatory.items.map(r=>`
        <div class="reg-item">
          <div class="reg-name">${esc(r.name)}</div>
          <div class="reg-explanation">${esc(r.explanation)}</div>
        </div>`).join('')}
      </div>
      <p>${esc(p.regulatory.whyItMatters)}</p>
      ${p.regulatory.learnMoreLinks && p.regulatory.learnMoreLinks.length ? `
      <div class="reg-links">
        <span class="reg-links-label">Learn more:</span>
        ${p.regulatory.learnMoreLinks.map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a>`).join('')}
      </div>` : ''}` : (p.regulatoryNote ? `
      <div class="reg-note">📋 ${esc(p.regulatoryNote)}</div>` : '')}
      <h4>Why they should talk to you</h4>
      <p>${esc(p.valueProp)}</p>
      <h4>Example SPIN questions</h4>
      <div class="primer-spin">
        <div><span class="spin-tag situation">Situation</span>${esc(p.exampleQuestions.situation)}</div>
        <div><span class="spin-tag problem">Problem</span>${esc(p.exampleQuestions.problem)}</div>
        <div><span class="spin-tag implication">Implication</span>${esc(p.exampleQuestions.implication)}</div>
        <div><span class="spin-tag needpayoff">Need-payoff</span>${esc(p.exampleQuestions.needpayoff)}</div>
      </div>
      ${p.objections && p.objections.length ? `
      <h4>Common objections here, and how to handle them</h4>
      <div class="primer-objections">
        ${p.objections.map(o=>`
        <div class="objection-item">
          <div class="obj-line">${esc(o.objection)}</div>
          <div class="obj-response">${esc(o.response)}</div>
        </div>`).join('')}
      </div>` : ''}
      <button class="btn btn-primary" id="btn-start-practice" style="margin-top:22px;">Start Practice Questions →</button>
    </div>`;
  el('#btn-start-practice').addEventListener('click', beginPractice);
}
function beginPractice(){
  el('#qual-primer').classList.add('hidden');
  el('#qual-practice').classList.remove('hidden');
  renderQualNode();
}
function renderQualPicker(){
  const grid = el('#qual-picker-grid');
  const recommended = App.qual.broadDiscovery ? App.qual.broadDiscovery.recommendedPiece : null;
  const orderedPieces = recommended
    ? [PIECE_BY_ID[recommended], ...PIECES.filter(p=>p.id!==recommended)]
    : PIECES;
  grid.innerHTML = orderedPieces.map(p=>{
    const best = bestLevelForPiece(p.id);
    const badge = best ? `<span class="pc-status" style="background:${LEVELS[best.level].bg};color:${LEVELS[best.level].color};">${LEVELS[best.level].label}</span>` : '';
    const recBadge = p.id === recommended ? `<span class="pc-recommended-badge">Recommended</span>` : '';
    return `<button class="piece-card" style="--accent:${p.color}" data-id="${p.id}">
      ${recBadge}
      <div class="pc-icon">${p.icon}</div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.blurb)}</p>
      ${badge}
    </button>`;
  }).join('');
  els('#qual-picker-grid .piece-card').forEach(c=> c.addEventListener('click', ()=> startPiece(c.dataset.id)));
}
function renderBroadDiscoveryPanel(){
  if(!App.qual.broadDiscovery) App.qual.broadDiscovery = { selections: {}, recommendedPiece: null };
  const bd = App.qual.broadDiscovery;
  const wrap = el('#broad-discovery-body');
  wrap.innerHTML = `
    <div class="broad-discovery-body">
      <p style="font-size:13px;color:var(--ink-faint);margin:0 0 16px;">A few broad Situation/Problem questions to open with — no product names, just where the business might have real pressure. Answering these suggests which focus area to explore first; you can still pick any area regardless.</p>
      ${BROAD_DISCOVERY_THEMES.map(theme=>`
        <div class="bd-theme">
          <h5>${esc(theme.q)}</h5>
          <div class="bd-options">
            ${theme.options.map((o,i)=>`<button class="bd-opt-btn ${bd.selections[theme.key]===i?'selected':''}" data-theme="${theme.key}" data-idx="${i}">${esc(o.label)}</button>`).join('')}
          </div>
        </div>`).join('')}
      <div id="bd-recommendation"></div>
    </div>`;
  els('.bd-opt-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const themeKey = btn.dataset.theme;
      const idx = Number(btn.dataset.idx);
      bd.selections[themeKey] = bd.selections[themeKey] === idx ? undefined : idx; // click again to deselect
      updateBroadDiscoveryRecommendation();
      renderBroadDiscoveryPanel();
    });
  });
  updateBroadDiscoveryRecommendation();
}
function updateBroadDiscoveryRecommendation(){
  const bd = App.qual.broadDiscovery;
  const selectedBoosts = BROAD_DISCOVERY_THEMES
    .filter(t => bd.selections[t.key] !== undefined)
    .map(t => t.options[bd.selections[t.key]].boosts);
  const { top } = computeBroadDiscoveryRecommendation(selectedBoosts);
  bd.recommendedPiece = top;
  const recDiv = el('#bd-recommendation');
  if(recDiv){
    recDiv.innerHTML = top
      ? `<div class="bd-recommendation">Based on your answers, <strong>${esc(PIECE_BY_ID[top].name)}</strong> looks like the strongest place to start — it's now highlighted first below. You're still free to pick any area.</div>`
      : (Object.keys(bd.selections).some(k=>bd.selections[k]!==undefined) ? `<div class="bd-recommendation">Nothing strongly indicated yet — try answering a couple more, or just pick any focus area below.</div>` : '');
  }
  renderQualPicker();
}
el('#btn-toggle-broad-discovery').addEventListener('click', ()=>{
  const body = el('#broad-discovery-body');
  const isHidden = body.classList.contains('hidden');
  body.classList.toggle('hidden');
  if(isHidden) renderBroadDiscoveryPanel();
});
function renderQualHeader(){
  const piece = PIECE_BY_ID[App.qual.pieceId];
  const iconEl = el('#qh-icon');
  iconEl.textContent = piece.icon;
  iconEl.style.background = piece.color;
  el('#qh-title').textContent = piece.name;
  el('#qh-sub').textContent = piece.blurb;
  const critPanel = el('#crit-panel');
  critPanel.innerHTML = '<strong>A qualified opportunity here usually looks like:</strong><ul>' + piece.criteria.map(c=>`<li>${esc(c)}</li>`).join('') + '</ul>';
  critPanel.classList.remove('show');
  el('#btn-crit-toggle').textContent = 'Show qualification criteria for this area ▾';
}
el('#btn-crit-toggle').addEventListener('click', ()=>{
  const panel = el('#crit-panel');
  const showing = panel.classList.toggle('show');
  el('#btn-crit-toggle').textContent = (showing?'Hide':'Show') + ' qualification criteria for this area ' + (showing?'▴':'▾');
});
// Chooses which of a node's options gets revealed as "what the customer
// says," once the rep has passed the question-gate. This used to be a flat
// coin-flip for every stage, which caused two real problems: (1) a rep who
// correctly identified a genuinely severe, well-defined problem could still
// have the final result randomly downgraded by an unrelated 50/50 flip at
// the Implication stage, disconnecting the score from the rep's actual
// skill; (2) an optional follow-up question's revealed answer was picked
// completely independently of the primary answer just given, occasionally
// producing a narratively contradictory pair (e.g. "this is a big deal" then,
// moments later, "actually that's the whole picture, nothing more to it").
function pickRevealedOption(node){
  const opts = node.options;
  // Follow-up nodes (tagged at build time with which parent branch they
  // belong to): strongly correlate with what was already established,
  // rather than picking independently — a follow-up should usually
  // reinforce the same story, not flatly contradict it.
  if(node.parentImpact){
    const reinforceIdx = node.parentImpact === 'high' ? node.reinforceIdx : (1 - node.reinforceIdx);
    return Math.random() < 0.82 ? opts[reinforceIdx] : opts[1-reinforceIdx];
  }
  if(node.parentEngagement){
    const reinforceIdx = node.parentEngagement === 'positive' ? node.reinforceIdx : (1 - node.reinforceIdx);
    return Math.random() < 0.82 ? opts[reinforceIdx] : opts[1-reinforceIdx];
  }
  // Primary Implication/Need-payoff reveal: the rep has already demonstrated
  // the skill being tested here by picking the right question at the gate,
  // so the outcome should usually reflect that rather than being a flat
  // coin-flip that can erase a genuinely well-identified problem's severity.
  // Still not guaranteed, to keep some realistic variety.
  const highIdx = opts.findIndex(o => o.impact === 'high' || o.engagement === 'positive');
  if(highIdx !== -1){
    return Math.random() < 0.72 ? opts[highIdx] : opts[highIdx === 0 ? 1 : 0];
  }
  // Situation/Problem stages (and their follow-ups): genuine variety in what
  // the fictional customer's actual circumstances are — the rep can't
  // control or predict this, so it stays uniformly random.
  return opts[Math.floor(Math.random()*opts.length)];
}
function currentStepIndex(node){
  const t = node.type==='choice' ? node.stage : node.type;
  if(t==='situation') return 0;
  if(t==='problem') return 1;
  if(t==='implication') return 2;
  if(t==='needpayoff') return 3;
  return 4;
}
function renderStepper(activeIdx){
  el('#qh-stepper').innerHTML = STEP_DEFS.map((s,i)=>{
    const cls = i<activeIdx ? 'done' : (i===activeIdx ? 'current' : '');
    return `<div class="step ${cls}"><div class="sdot">${i<activeIdx?'✓':(i+1)}</div><div class="slabel">${s.label}</div><div class="sline"></div></div>`;
  }).join('');
}
// Evidence-led pivot state classification — rather than treating every
// low-scoring result the same way ("no pain, go pivot"), this looks at
// actual available evidence (does the contact own this area? do they
// already have it from us? how far did discovery actually get?) to name a
// more specific state and a correspondingly specific recommended action,
// per the spec's state model. Built from signals already collected via the
// shared context model, rather than needing to retag the entire tree.
const PIVOT_STATES = {
  'already-resolved': {
    label: 'Issue already covered',
    description: "They're already with us on this, so there's genuinely nothing to qualify here.",
    action: 'Move to a related focus area, or check satisfaction/renewal timing on this one instead of treating it as a fresh opportunity.'
  },
  'wrong-stakeholder': {
    label: "Wrong contact for this area",
    description: "This contact doesn't own or plausibly know this area in depth — that's not the same as there being no issue.",
    action: 'Reframe in business terms they can answer, or ask for an introduction to whoever actually owns this — don\u2019t keep pushing technical detail at the wrong person.'
  },
  'low-impact': {
    label: 'Some signal, but low impact so far',
    description: "There's a real answer here, it just hasn't been explored deeply enough yet to know if it's worth pursuing.",
    action: 'Ask one more implication question before giving up on this area — "what would it cost you if..." often reveals more than the first pass did.'
  },
  'no-issue': {
    label: 'Genuinely no issue here',
    description: "Best evidence available says this area is a real dead end for this business right now.",
    action: 'Pivot to a different, genuinely relevant focus area using a broad, open question — a real call rarely ends after one dead end.'
  }
};
function classifyPivotState(pieceId, level, context){
  context = context || App.context;
  if(context.existingProducts && context.existingProducts.includes(pieceId)) return 'already-resolved';
  if(context.contactRole && !roleOwnsPiece(context.contactRole, pieceId)) return 'wrong-stakeholder';
  if(level === 'surface') return 'low-impact';
  return 'no-issue';
}

function renderQualNode(){
  const piece = PIECE_BY_ID[App.qual.pieceId];
  const node = piece.tree[App.qual.nodeId];
  const body = el('#qual-body');

  if(node.result){
    renderStepper(4);
    const lv = LEVELS[node.level];
    const notesHtml = App.qual.notes.length ? `
        <h4>Additional context you gathered</h4>
        <ul>${App.qual.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul>` : '';
    const pivotEligible = node.level === 'none' || node.level === 'surface';
    const pivotState = pivotEligible ? classifyPivotState(App.qual.pieceId, node.level, App.context) : null;
    const pivotInfo = pivotState ? PIVOT_STATES[pivotState] : null;
    const pivotHtml = pivotInfo ? `
        <div class="pivot-callout">
          <strong>${esc(pivotInfo.label)}.</strong> ${esc(pivotInfo.description)} ${esc(pivotInfo.action)}
        </div>` : '';
    body.innerHTML = `
      <div class="result-card" style="background:${lv.bg};border-color:${lv.color}44;">
        <span class="result-badge" style="background:${lv.color};color:#fff;">${lv.label}</span>
        <h3>${esc(node.title)}</h3>
        ${node.transition ? `<div class="transition-note" style="color:${lv.color};">${esc(node.transition)}</div>` : ''}
        <p class="body-text">${esc(node.body)}</p>
        <h4>Talking points</h4>
        <ul>${node.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul>
        ${notesHtml}
        <div class="nextstep-box">➜ ${esc(node.next)}</div>
        ${node.closeGuidance ? `<div class="needpayoff-box"><span class="np-label">How to close from here</span>${esc(node.closeGuidance)}</div>` : ''}
        ${pivotHtml}
        <div class="result-actions">
          <button class="btn btn-primary" id="btn-retry-piece">Try Different Answers</button>
          ${pivotEligible ? `<button class="btn btn-primary" id="btn-pivot-piece">🔄 Cross-Sell: Pick a Different Focus Area</button>` : `<button class="btn btn-outline" id="btn-next-piece">Next Focus Area →</button>`}
          <button class="btn btn-ghost" id="btn-done-piece">Back to All Pieces</button>
        </div>
      </div>`;
    logResult(App.qual.pieceId, node.level);
    el('#btn-retry-piece').addEventListener('click', ()=>{ App.qual.nodeId='start'; App.qual.notes=[]; App.qual.gatePassed=false; App.qual.revealedOption=null; renderQualNode(); });
    if(pivotEligible){
      el('#btn-pivot-piece').addEventListener('click', ()=>{
        App.qual.pieceId = null;
        el('#qual-wrap').classList.add('hidden');
        el('#qual-picker').classList.remove('hidden');
        renderQualPicker();
      });
    } else {
      el('#btn-next-piece').addEventListener('click', ()=>{
        const idx = PIECE_IDS.indexOf(App.qual.pieceId);
        startPiece(PIECE_IDS[(idx+1) % PIECE_IDS.length]);
      });
    }
    el('#btn-done-piece').addEventListener('click', ()=> setView('home'));
  } else if(node.type === 'choice'){
    // "Choice" nodes (ask one more follow-up vs move on) are already a genuine
    // rep decision, not a customer-answer pick — left exactly as before.
    const stepIdx = currentStepIndex(node);
    renderStepper(stepIdx);
    body.innerHTML = `
      <div class="qcard">
        <div class="qtype-row"><span class="qtype-badge ${node.stage}">Your Call</span></div>
        <h3>${esc(node.q)}</h3>
        <div class="opt-list">
          ${node.options.map((o,i)=>`<button class="opt-btn" data-optidx="${i}"><span>${esc(o.label)}</span><span class="arrow">→</span></button>`).join('')}
        </div>
      </div>`;
    els('.opt-btn').forEach(b=> b.addEventListener('click', ()=>{
      const optIdx = Number(b.dataset.optidx);
      const chosen = node.options[optIdx];
      if(chosen.note) App.qual.notes.push(chosen.note);
      App.qual.nodeId = chosen.next;
      App.qual.gatePassed = false; App.qual.revealedOption = null;
      renderQualNode();
    }));
  } else {
    // Situation / Problem / Implication / Need-payoff nodes: the rep's real
    // job here is choosing what to ASK, not picking what the customer says —
    // so first they pick the right question from a small set (one genuine
    // discovery question plus generic poor-technique distractors), and only
    // once they've picked well does the customer's actual answer get
    // revealed (chosen at random from this node's possible answers, so the
    // same piece plays out a little differently each time).
    const stepIdx = currentStepIndex(node);
    renderStepper(stepIdx);
    const badgeLabels = {situation:'Situation Question', problem:'Problem Question', implication:'Implication Question', needpayoff:'Need-payoff Question'};
    const badgeLabel = badgeLabels[node.type] || '';
    const contextualQ = contextualiseQuestion(node.q, App.qual.pieceId, App.context, node.type);
    // Memory panel — surfaces what's already been established in THIS
    // walkthrough so far, visible DURING the conversation rather than only
    // in the final summary, the way a real conversation naturally carries
    // context forward from one question to the next.
    const memoryPanelHtml = App.qual.notes.length ? `
      <div class="memory-panel">
        <span class="memory-panel-label">What you know so far</span>
        <ul>${App.qual.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul>
      </div>` : '';

    if(!App.qual.gatePassed){
      if(!App.qual._gateChoices || App.qual._gateChoices.pieceId !== App.qual.pieceId || App.qual._gateChoices.nodeId !== App.qual.nodeId){
        const stageDistractors = piece.distractorQuestions && piece.distractorQuestions[node.type];
        const pieceDistractors = (stageDistractors && stageDistractors.length) ? stageDistractors : DISTRACTOR_QUESTIONS;
        const distractors = pieceDistractors.slice().sort(()=> Math.random()-0.5).slice(0,3).map(d=>({text:d.text, note:d.note, correct:false}));
        const correctChoice = {text:contextualQ, note:null, correct:true};
        const all = [...distractors, correctChoice].sort(()=> Math.random()-0.5);
        App.qual._gateChoices = { pieceId: App.qual.pieceId, nodeId: App.qual.nodeId, choices: all };
      }
      const choices = App.qual._gateChoices.choices;
      body.innerHTML = `
        <div class="qcard">
          <div class="qtype-row"><span class="qtype-badge ${node.type}">${badgeLabel}</span></div>
          ${memoryPanelHtml}
          <h3>What would you ask here?</h3>
          <div class="opt-list">
            ${choices.map((c,i)=>`<button class="opt-btn gate-opt-btn" data-idx="${i}"><span>"${esc(c.text)}"</span><span class="arrow">→</span></button>`).join('')}
          </div>
          <div id="gate-feedback"></div>
        </div>`;
      els('.gate-opt-btn').forEach(b=> b.addEventListener('click', ()=>{
        const idx = Number(b.dataset.idx);
        const picked = choices[idx];
        if(picked.correct){
          App.qual.gatePassed = true;
          App.qual.revealedOption = pickRevealedOption(node);
          renderQualNode();
        } else {
          el('#gate-feedback').innerHTML = `<div class="gate-hint">${esc(picked.note)} Try picking a different question.</div>`;
        }
      }));
    } else {
      const revealed = App.qual.revealedOption;
      body.innerHTML = `
        <div class="qcard">
          <div class="qtype-row"><span class="qtype-badge ${node.type}">${badgeLabel}</span></div>
          ${memoryPanelHtml}
          <h3>${esc(contextualQ)}</h3>
          <div class="customer-answer">
            <span class="ca-label">Customer says</span>
            <p>${esc(revealed.label)}</p>
          </div>
          <button class="btn btn-primary" id="btn-gate-continue">Continue →</button>
        </div>`;
      el('#btn-gate-continue').addEventListener('click', ()=>{
        App.qual.notes.push(revealed.note || revealed.label);
        App.qual.nodeId = revealed.next;
        App.qual.gatePassed = false; App.qual.revealedOption = null;
        renderQualNode();
      });
    }
  }
}
function logResult(pieceId, level){ App.sessionLog.push({pieceId, level, ts:Date.now()}); }

/* =========================================================================
   SETTINGS MODAL
   ========================================================================= */
function openSettings(){
  els('.provider-opt').forEach(b=> b.classList.toggle('active', b.dataset.provider===Settings.provider));
  el('#settings-key').value = Settings.apiKey || '';
  el('#settings-model').value = Settings.model || PROVIDER_DEFAULTS[Settings.provider].model;
  el('#settings-key-hint').textContent = PROVIDER_DEFAULTS[Settings.provider].keyHint;
  el('#settings-status').classList.remove('show');
  el('#settings-backdrop').classList.add('show');
}
function closeSettings(){ el('#settings-backdrop').classList.remove('show'); }
el('#btn-open-settings').addEventListener('click', openSettings);
el('#btn-open-settings-2').addEventListener('click', openSettings);
el('#btn-settings-close').addEventListener('click', closeSettings);
el('#settings-backdrop').addEventListener('click', (e)=>{ if(e.target.id==='settings-backdrop') closeSettings(); });

els('.provider-opt').forEach(b=> b.addEventListener('click', ()=>{
  els('.provider-opt').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  const provider = b.dataset.provider;
  const savedKey = safeStorageGet('qc_key_'+provider) || '';
  const savedModel = safeStorageGet('qc_model_'+provider) || PROVIDER_DEFAULTS[provider].model;
  el('#settings-key').value = savedKey;
  el('#settings-model').value = savedModel;
  el('#settings-key-hint').textContent = PROVIDER_DEFAULTS[provider].keyHint;
  el('#settings-status').classList.remove('show');
}));

function selectedProvider(){
  const active = el('.provider-opt.active');
  return active ? active.dataset.provider : Settings.provider;
}
function showSettingsStatus(msg, ok){
  const box = el('#settings-status');
  box.textContent = msg;
  box.className = 'settings-status show ' + (ok?'ok':'err');
}

el('#btn-settings-save').addEventListener('click', ()=>{
  Settings.provider = selectedProvider();
  Settings.apiKey = el('#settings-key').value.trim();
  Settings.model = el('#settings-model').value.trim() || PROVIDER_DEFAULTS[Settings.provider].model;
  persistSettings();
  updateHeaderModePill();
  showSettingsStatus('Saved. This provider will be used the next time you generate a scenario.', true);
});

el('#btn-settings-clear').addEventListener('click', ()=>{
  const provider = selectedProvider();
  safeStorageRemove('qc_key_'+provider);
  if(Settings.provider===provider) Settings.apiKey = '';
  el('#settings-key').value = '';
  updateHeaderModePill();
  showSettingsStatus('Key cleared for '+PROVIDER_DEFAULTS[provider].label+'.', true);
});

el('#btn-settings-test').addEventListener('click', async ()=>{
  const provider = selectedProvider();
  const key = el('#settings-key').value.trim();
  const model = el('#settings-model').value.trim() || PROVIDER_DEFAULTS[provider].model;
  if(!key){ showSettingsStatus('Enter an API key first.', false); return; }
  const prevProvider = Settings.provider, prevKey = Settings.apiKey, prevModel = Settings.model;
  Settings.provider = provider; Settings.apiKey = key; Settings.model = model;
  showSettingsStatus('Testing…', true);
  try{
    const reply = await callAI('Reply with exactly the single word: OK', [{role:'user', content:'ping'}], 20);
    showSettingsStatus('Connected — ' + PROVIDER_DEFAULTS[provider].label + ' responded successfully.', true);
  } catch(err){
    showSettingsStatus('Connection failed: ' + err.message, false);
    Settings.provider = prevProvider; Settings.apiKey = prevKey; Settings.model = prevModel;
  }
});

function updateHeaderModePill(){
  const pill = el('#header-mode-pill');
  if(Settings.apiKey){
    pill.textContent = PROVIDER_DEFAULTS[Settings.provider].label + ' configured';
  } else {
    pill.textContent = 'Offline Practice Mode';
  }
}
updateHeaderModePill();

/* =========================================================================
   SCENARIO COACH
   ========================================================================= */
function pieceCriteriaBlock(){
  return PIECES.map(p=>`- ${p.name} (id: ${p.id}): ${p.criteria.join('; ')}`).join('\n');
}
const NEWS_HOOKS = [
  "Ransomware and phishing attacks on small businesses have been widely reported recently — worth raising as a natural opener.",
  "More insurers and larger customers are now asking SMEs to show evidence of basic security practices before signing contracts — a useful angle to mention.",
  "The move away from traditional phone lines has been in the news a lot — a natural reason to ask how a business is planning around it.",
  "Remote and hybrid working has made device and access management a bigger talking point for SMEs generally — worth raising early."
];
function genericHints(profile){
  const p = profile || (Coach && Coach.profile);
  const painPieces = (p && p.hiddenPains) ? p.hiddenPains.map(hp=>PIECE_BY_ID[hp.piece]).filter(Boolean) : [];
  const hints = [];
  hints.push({type:'news', text: NEWS_HOOKS[Math.floor(Math.random()*NEWS_HOOKS.length)]});
  painPieces.slice(0,2).forEach(piece=>{
    hints.push({type:'question', text:`Try asking a broad opening question about ${piece.name.toLowerCase()} — ${piece.criteria[0].toLowerCase()}.`});
  });
  while(hints.filter(h=>h.type==='question').length < 2){
    hints.push({type:'question', text:'Try a broad opening question about one of the focus areas you haven\u2019t touched on yet.'});
  }
  hints.push({type:'nudge', text:'Ask what it actually costs them when the problem happens — time, money or hassle — not just whether it happens.'});
  hints.push({type:'nudge', text:'If they give a short answer, follow up rather than moving straight to the next topic — the real detail is often one question further in.'});
  return hints.slice(0,5);
}
function setModeBadge(mode){
  const badge = el('#mode-badge');
  if(mode==='ai'){
    badge.innerHTML = '<span class="mode-dot" style="background:#0A825A;"></span> ' + PROVIDER_DEFAULTS[Settings.provider].label + ' Live';
    badge.style.background = '#E1FAF0'; badge.style.color = '#0A825A';
  } else {
    badge.innerHTML = '<span class="mode-dot" style="background:#A2640A;"></span> Offline Practice Mode';
    badge.style.background = '#FDF1DC'; badge.style.color = '#A2640A';
  }
}

// Formal names for the three difficulty tiers, mapped onto the existing
// warm/brisk/dismissive internal values (kept as-is internally since they're
// already threaded through dozens of places — this is a labelling/selection
// layer on top, not a data-model rename).
const DIFFICULTY_TIER_INFO = {
  warm: { name: 'Guided', description: 'Relevant pain is reasonably discoverable, good questions get constructive answers — built for building confidence.' },
  brisk: { name: 'Realistic', description: 'Mixed priorities, some questions lead to dead ends, stakeholder boundaries apply — you need to listen and adapt.' },
  dismissive: { name: 'Challenging', description: 'The contact may be guarded or sceptical, existing suppliers may seem satisfactory — progress depends on precise follow-up and commercial judgement.' }
};
function pickDifficulty(explicitChoice){
  if(explicitChoice && DIFFICULTY_TIER_INFO[explicitChoice]) return explicitChoice;
  const r = Math.random();
  if(r < 0.70) return 'warm';       // most calls: friendly, forthcoming — good for building confidence
  if(r < 0.90) return 'brisk';      // some calls: businesslike, a bit short, has to be earned
  return 'dismissive';              // occasional: genuinely tough opener, skeptical, has to be worked for
}
function pickFallbackProfile(difficulty, industry, role, size){
  const matching = FALLBACK_PROFILES.filter(p => (p.difficulty||'warm') === difficulty);
  const pool = matching.length ? matching : FALLBACK_PROFILES;
  let chosen;
  if(industry || role || size){
    // Weighted pick: profiles whose hidden pains overlap with the propensity
    // areas for this industry/role/size are more likely to be chosen, without
    // making it deterministic — this is a fallback-only approximation since
    // these 10 fixed profiles don't cover every industry exactly.
    const areas = propensityAreasFor(industry, role, size);
    const weights = pool.map(p => {
      const overlap = p.hiddenPains.filter(hp => areas.includes(hp.piece)).length;
      return 1 + overlap * 3; // each matching pain triples that profile's odds
    });
    const total = weights.reduce((a,b)=>a+b,0);
    let r = Math.random() * total;
    for(let i=0;i<pool.length;i++){ r -= weights[i]; if(r<=0){ chosen = pool[i]; break; } }
    if(!chosen) chosen = pool[pool.length-1];
  } else {
    chosen = pool[Math.floor(Math.random()*pool.length)];
  }
  const profile = JSON.parse(JSON.stringify(chosen));
  if(!Array.isArray(profile.hints) || !profile.hints.length) profile.hints = genericHints(profile);
  return profile;
}
async function newScenario(){
  const repName = el('#rep-name-input').value.trim();
  if(!repName){
    el('#rep-name-error').style.display = 'block';
    el('#rep-name-input').focus();
    return;
  }
  el('#rep-name-error').style.display = 'none';
  App.repName = repName;
  safeStorageSet('ssa_rep_name', repName);
  el('#rep-name-badge').textContent = repName;
  el('#rep-name-badge').classList.remove('hidden');
  Leaderboard.rememberName(repName);

  el('#btn-new-scenario').disabled = true;
  el('#btn-new-scenario').textContent = 'Generating…';
  Coach.active = true; Coach.messages = []; Coach.turnScores = []; Coach.ended = false; Coach.usedHints = new Set(); Coach.conversationState = freshConversationState();
  clearTimeout(Coach.hintNudgeTimer); clearTimeout(Coach.inactivityEndTimer);
  stopListening();
  if(window.speechSynthesis) window.speechSynthesis.cancel();

  const difficulty = pickDifficulty(el('#scenario-difficulty-select') ? el('#scenario-difficulty-select').value : null);
  App.context.difficulty = difficulty;
  const selectedIndustry = App.context.industry;
  const selectedRole = App.context.contactRole;
  const selectedSize = App.context.orgSize;
  let profile = null, mode = 'ai';
  if(!Settings.apiKey){
    mode = 'offline';
    profile = pickFallbackProfile(difficulty, selectedIndustry, selectedRole, selectedSize);
  } else {
    try{ profile = await generateProfileViaAPI(difficulty, selectedIndustry, selectedRole, selectedSize); }
    catch(err){ console.error('generateProfileViaAPI failed, falling back to offline mode:', err); mode='offline'; profile = pickFallbackProfile(difficulty, selectedIndustry, selectedRole, selectedSize); }
  }
  Coach.profile = profile; Coach.mode = mode;
  updateVoiceForCurrentPersona();
  setModeBadge(mode);

  el('#coach-idle').classList.add('hidden');
  el('#coach-active').classList.remove('hidden');
  el('#btn-new-scenario').disabled = false;
  el('#btn-new-scenario').textContent = 'Generate New Scenario →';

  renderProfileCard();
  renderAreaRows();
  el('#chat-scroll').innerHTML = '<div class="chat-empty" id="chat-empty">Open with a broad Situation question about one of the focus areas.</div>';
  showTyping();
  await wait(typingDelayFor(profile.openingLine) * 0.4); // shorter than a full reply — it's just "Hello?"
  hideTyping();
  addBubble('customer', profile.openingLine, profile.persona.name);
  if(mode==='offline'){
    if(!Settings.apiKey){
      addBubble('system', 'No AI provider configured — running in Offline Practice Mode. Add a key in Settings for a live AI customer.');
    } else {
      addBubble('system', "Couldn't reach the AI provider for this scenario — running in Offline Practice Mode instead. Check Settings, or just try Generate New Scenario again.");
    }
  }

  el('#chat-input').disabled = false;
  el('#btn-send').disabled = false;
  el('#btn-hint').disabled = false;
  el('#chat-input').focus();
  resetInactivityTimers();
}
el('#btn-new-scenario').addEventListener('click', newScenario);

function refreshScenario(){
  const inProgress = Coach.active && !Coach.ended && Coach.messages.some(m=>m.who==='rep');
  if(inProgress && !confirm('Start a new scenario? This will discard the current conversation and its score.')){
    return;
  }
  newScenario();
}
el('#btn-refresh-scenario').addEventListener('click', refreshScenario);
el('#btn-refresh-scenario-2').addEventListener('click', refreshScenario);
el('#btn-modal-new').addEventListener('click', ()=>{ closeModal(); newScenario(); });

function initials(name){ return name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase(); }
function sizeBand(employees){
  const n = Number(employees) || 0;
  if(n < 25) return 'Small team';
  if(n < 75) return 'Mid-sized team';
  if(n < 150) return 'Larger team';
  return 'Large SME';
}
function renderProfileCard(){
  const p = Coach.profile;
  el('#pf-avatar').textContent = initials(p.persona.name);
  el('#pf-name').textContent = p.persona.name;
  el('#pf-company').textContent = p.companyName || '';
  el('#pf-role').textContent = p.persona.role;
  el('#pf-industry').textContent = p.industry;
  el('#pf-size').textContent = sizeBand(p.employees);
  el('#pf-desc').textContent = p.description;
}
function renderAreaRows(){
  const wrap = el('#area-rows');
  wrap.innerHTML = PIECES.map(p=>`<div class="area-row" data-piece="${p.id}">
      <span class="area-dot" id="dot-${p.id}"></span>
      <span class="area-name">${p.icon} ${esc(p.short)}</span>
      <span class="area-lvl" id="lvl-${p.id}">—</span>
    </div>`).join('');
  updateGauge();
}
function bestTurnLevelForPiece(pieceId){
  const rows = Coach.turnScores.filter(r=>r.piece===pieceId);
  if(rows.length===0) return null;
  return rows.reduce((best,r)=> LEVEL_SCORE[r.qualification] > LEVEL_SCORE[best.qualification] ? r : best);
}
function updateGauge(){
  let score = 0, touchedCount = 0;
  PIECES.forEach(p=>{
    const best = bestTurnLevelForPiece(p.id);
    const dot = el('#dot-'+p.id), lvlEl = el('#lvl-'+p.id);
    if(best && LEVELS[best.qualification]){
      const lv = LEVELS[best.qualification];
      dot.style.background = lv.color; lvlEl.textContent = lv.short; lvlEl.style.color = lv.color;
      score += LEVEL_SCORE[best.qualification];
      touchedCount += 1;
    } else {
      dot.style.background = '#C7CBD6'; lvlEl.textContent = '—'; lvlEl.style.color = 'var(--ink-faint)';
    }
  });
  const pct = Math.round((score / (PIECES.length*3)) * 100);
  el('#gauge-num').textContent = pct;
  let lvlLabel = 'Discovery Stage';
  if(pct>=65) lvlLabel = 'Hot Opportunity';
  else if(pct>=40) lvlLabel = 'Qualified Opportunity';
  else if(pct>=18) lvlLabel = 'Developing Opportunity';
  el('#gauge-lvl').textContent = lvlLabel;

  const questionCount = Coach.messages.filter(m=>m.who==='rep').length;
  el('#live-counter').textContent = `${questionCount} question${questionCount===1?'':'s'} asked · ${touchedCount}/${PIECES.length} areas touched`;

  const last = Coach.turnScores[Coach.turnScores.length-1];
  const lf = el('#last-feedback');
  if(last){
    const typeLabels = {situation:'Situation', problem:'Problem', implication:'Implication', needpayoff:'Need-payoff', closed:'Closed question', other:'Other'};
    lf.innerHTML = `<div class="lf-top"><span class="lf-type">${esc(typeLabels[last.questionType]||'Question')}</span><span class="lf-relevance">Relevance ${last.relevance}/3</span></div><div class="lf-note">${esc(last.note||'')}</div>`;
    lf.classList.remove('hidden');
  } else {
    lf.classList.add('hidden');
  }
}
function addBubble(who, text, name){
  const empty = el('#chat-empty'); if(empty) empty.remove();
  const scroll = el('#chat-scroll');
  const div = document.createElement('div');
  if(who==='system'){ div.className = 'bubble system'; div.textContent = text; }
  else { div.className = 'bubble ' + who; div.innerHTML = (name ? `<span class="bubble-name">${esc(name)}</span>` : '') + esc(text); }
  scroll.appendChild(div); scroll.scrollTop = scroll.scrollHeight;
  if(who==='customer') speakText(text);
}

/* ---------- Voice input (speech-to-text) and voice output (text-to-speech) ----------
   Uses the browser's built-in Web Speech API. In Chrome this is genuinely backed by
   Google's speech services (recognition runs through Google's servers; the "Google
   UK English Female" style voices in speechSynthesis.getVoices() are Google's own
   TTS voices) — no separate API key or server proxy needed. Firefox/Safari have much
   weaker or no support, so everything here is feature-detected and hidden if unavailable. */
const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
const Voice = { recognizing:false, recognizer:null, enabled:false, currentVoice:null };

// Many higher-quality "Online (Natural)" voices (Microsoft Edge/Windows) use a
// first name rather than the word "male"/"female" — without this lookup they'd
// get skipped in favour of lower-quality voices that do self-label, which
// defeats the point of preferring them in the first place.
const KNOWN_VOICE_GENDER = {
  female: ['aria','jenny','michelle','sara','emma','ana','libby','sonia','natasha','clara','elsa','denise','katja'],
  male: ['guy','davis','andrew','brian','christopher','eric','tony','ryan','william','liam','ravi','matthew']
};
function pickVoiceForGender(gender){
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  if(!voices.length) return null;
  const isEnglish = v => /^en/i.test(v.lang);
  const nameHasAny = (v, list) => list.some(n => v.name.toLowerCase().includes(n));
  const isMale = v => (/male/i.test(v.name) && !/female/i.test(v.name)) || nameHasAny(v, KNOWN_VOICE_GENDER.male);
  const isFemale = v => /female/i.test(v.name) || nameHasAny(v, KNOWN_VOICE_GENDER.female);
  const matchesGender = v => gender === 'male' ? isMale(v) : isFemale(v);
  // Prefer higher-quality "Natural"/"Neural"/"Online" voices (these exist on Edge/Windows and sound
  // dramatically less robotic than the classic default engine) that also match gender, then fall back
  // through progressively looser matches so there's always SOME voice, even on browsers/OSes without
  // gender-labelled or Natural-quality options.
  return voices.find(v => isEnglish(v) && matchesGender(v) && /natural|neural|online/i.test(v.name))
    || voices.find(v => isEnglish(v) && matchesGender(v) && /google/i.test(v.name))
    || voices.find(v => isEnglish(v) && matchesGender(v))
    || voices.find(v => isEnglish(v) && /natural|neural|online/i.test(v.name))
    || voices.find(v => isEnglish(v) && /google/i.test(v.name))
    || voices.find(v => isEnglish(v))
    || voices[0] || null;
}
function updateVoiceForCurrentPersona(){
  const gender = (Coach.profile && Coach.profile.persona && Coach.profile.persona.gender) || 'female';
  Voice.currentVoice = pickVoiceForGender(gender);
}
function speakText(text){
  if(!Voice.enabled || !window.speechSynthesis) return;
  window.speechSynthesis.cancel(); // don't let replies queue up and overlap
  const utter = new SpeechSynthesisUtterance(text);
  if(Voice.currentVoice) utter.voice = Voice.currentVoice;
  utter.rate = 1.0;
  utter.pitch = 1.0;
  window.speechSynthesis.speak(utter);
}
function buildRecognizer(){
  const r = new SpeechRecognitionCtor();
  r.lang = 'en-IE';
  r.interimResults = false;
  r.maxAlternatives = 1;
  r.onresult = (e)=>{
    const transcript = e.results[e.results.length-1][0].transcript;
    const input = el('#chat-input');
    input.value = (input.value ? input.value + ' ' : '') + transcript;
    resetInactivityTimers();
  };
  r.onerror = (e)=>{
    stopListening();
    if(e.error === 'not-allowed' || e.error === 'permission-denied' || e.error === 'service-not-allowed'){
      addBubble('system', "Microphone access was blocked — check your browser's site permissions (usually a mic icon in the address bar) to use voice input.");
    } else if(e.error !== 'no-speech' && e.error !== 'aborted'){
      addBubble('system', "Voice input error (" + e.error + ") — you can still type your question.");
    }
  };
  r.onend = ()=> stopListening();
  return r;
}
function initVoiceFeatures(){
  if(window.speechSynthesis){
    updateVoiceForCurrentPersona();
    window.speechSynthesis.onvoiceschanged = updateVoiceForCurrentPersona;
    el('#voice-toggle-wrap').style.display = 'flex';
    const saved = safeStorageGet('ssa_voice_replies');
    Voice.enabled = saved === '1';
    el('#voice-toggle').checked = Voice.enabled;
    el('#voice-toggle').addEventListener('change', (e)=>{
      Voice.enabled = e.target.checked;
      safeStorageSet('ssa_voice_replies', Voice.enabled ? '1' : '0');
      if(!Voice.enabled && window.speechSynthesis) window.speechSynthesis.cancel();
    });
  }
  if(SpeechRecognitionCtor){
    el('#btn-mic').style.display = 'inline-flex';
    el('#btn-mic').addEventListener('click', ()=>{
      if(Voice.recognizing) stopListening(); else startListening();
    });
  }
}
function startListening(){
  if(!SpeechRecognitionCtor || Voice.recognizing) return;
  // Build a fresh recognizer on every start rather than reusing one long-lived
  // instance — the Web Speech API's internal state can get stuck after an
  // error or an unusual end, silently breaking every future click otherwise.
  Voice.recognizer = buildRecognizer();
  try{
    Voice.recognizer.start();
    Voice.recognizing = true;
    el('#btn-mic').classList.add('listening');
    el('#btn-mic').textContent = '⏹';
  } catch(e){
    Voice.recognizing = false;
    addBubble('system', "Couldn't start voice input (" + (e && e.message ? e.message : 'unknown error') + ") — you can still type your question.");
  }
}
function stopListening(){
  Voice.recognizing = false;
  el('#btn-mic').classList.remove('listening');
  el('#btn-mic').textContent = '🎤';
  if(Voice.recognizer){
    try{ Voice.recognizer.stop(); } catch(e){}
  }
}
initVoiceFeatures();
Leaderboard.init();
function populateScenarioSelectors(){
  const pairs = [
    ['#scenario-industry-select', '#ctx-industry-select', INDUSTRY_OPTIONS, 'industry'],
    ['#scenario-role-select', '#ctx-role-select', CONTACT_ROLE_OPTIONS, 'contactRole'],
    ['#scenario-size-select', '#ctx-size-select', ORG_SIZE_OPTIONS, 'orgSize']
  ];
  pairs.forEach(([vscId, pbId, options, contextKey])=>{
    [vscId, pbId].forEach(id=>{
      const sel = el(id);
      options.forEach(opt => { sel.innerHTML += `<option value="${esc(opt)}">${esc(opt)}</option>`; });
      sel.addEventListener('change', ()=>{
        App.context[contextKey] = sel.value || null;
        syncContextSelectors();
      });
    });
  });
  el('#ctx-relationship-select').addEventListener('change', (e)=>{
    App.context.relationship = e.target.value;
  });
  el('#scenario-difficulty-select').addEventListener('change', (e)=>{
    App.context.difficulty = e.target.value || 'warm';
  });
}
function syncContextSelectors(){
  // Keep both sets of selectors (Virtual Sales Call + Focus Area Playbooks)
  // showing the same values, since they share one App.context — setting
  // industry/role/size in either place should be reflected in the other.
  const c = App.context;
  if(el('#scenario-industry-select')) el('#scenario-industry-select').value = c.industry || '';
  if(el('#ctx-industry-select')) el('#ctx-industry-select').value = c.industry || '';
  if(el('#scenario-role-select')) el('#scenario-role-select').value = c.contactRole || '';
  if(el('#ctx-role-select')) el('#ctx-role-select').value = c.contactRole || '';
  if(el('#scenario-size-select')) el('#scenario-size-select').value = c.orgSize || '';
  if(el('#ctx-size-select')) el('#ctx-size-select').value = c.orgSize || '';
  if(el('#ctx-relationship-select')) el('#ctx-relationship-select').value = c.relationship || 'prospect';
}
populateScenarioSelectors();

/* ---------- Session idle timeout (2 hours) ----------
   If a tab is left open indefinitely with no interaction, reset the
   in-memory session state (Focus Area Playbook progress, Virtual Sales
   Call conversation/turn history) as if the page had been freshly loaded —
   without forcing a full reload, since the person may just be mid-thought.
   Does NOT touch localStorage preferences (rep name, AI settings) or the
   shared Leaderboard, which are intentionally persistent. */
const IDLE_TIMEOUT_MS = 2 * 60 * 60 * 1000; // 2 hours
['click','keydown','mousemove','touchstart'].forEach(evt=>{
  document.addEventListener(evt, ()=>{ App.lastActivityAt = Date.now(); }, { passive:true });
});
function resetIdleSession(){
  if(Coach.active){
    Coach.active=false; Coach.mode=null; Coach.profile=null; Coach.messages=[]; Coach.turnScores=[];
    Coach.ended=false; Coach.conversationState = freshConversationState();
  }
  App.qual = { pieceId:null, nodeId:'start', notes:[], gatePassed:false, revealedOption:null };
  App.lastActivityAt = Date.now();
  setView('home');
}
setInterval(()=>{
  if(Date.now() - App.lastActivityAt > IDLE_TIMEOUT_MS){
    resetIdleSession();
  }
}, 5 * 60 * 1000); // check every 5 minutes — no need to check more often for a 2-hour window
function addHintBubble(hint, auto){
  const empty = el('#chat-empty'); if(empty) empty.remove();
  const scroll = el('#chat-scroll');
  const div = document.createElement('div');
  div.className = 'bubble hint';
  const labels = {news:'📰 In the news', question:'❓ Try asking', nudge:'💡 Nudge'};
  const prefix = auto ? 'Still there? Here\u2019s a hint — ' : '';
  div.innerHTML = `<span class="hint-label">${esc(labels[hint.type] || 'Hint')}</span>${esc(prefix + hint.text)}`;
  scroll.appendChild(div); scroll.scrollTop = scroll.scrollHeight;
}
const QUESTION_TYPE_ORDER = {situation:0, problem:1, implication:2, needpayoff:3, closed:-1, other:-1};
function conversationStage(){
  if(Coach.messages.filter(m=>m.who==='rep').length === 0) return 'opening';
  let maxOrder = -1;
  Coach.turnScores.forEach(t=>{
    const o = QUESTION_TYPE_ORDER[t.questionType];
    if(o !== undefined && o > maxOrder) maxOrder = o;
  });
  if(maxOrder < 1) return 'need_problem';
  if(maxOrder === 1) return 'need_implication';
  if(maxOrder === 2) return 'need_needpayoff';
  return 'deepen';
}
function uncoveredHiddenPieces(){
  const p = Coach.profile;
  if(!p || !p.hiddenPains) return [];
  const touched = new Set(Coach.turnScores.filter(t=>t.piece && LEVEL_SCORE[t.qualification] >= 2).map(t=>t.piece));
  return p.hiddenPains.filter(hp=>!touched.has(hp.piece));
}
function pickContextualHint(){
  const hints = (Coach.profile && Coach.profile.hints) || [];
  if(!hints.length) return null;
  const stage = conversationStage();
  const uncovered = uncoveredHiddenPieces();
  const withIdx = hints.map((h,i)=>({h,i}));
  const unusedByType = (type) => withIdx.filter(x=> x.h.type===type && !Coach.usedHints.has(x.i));
  const anyUnused = () => withIdx.filter(x=> !Coach.usedHints.has(x.i));

  // Pick candidates based on where the conversation actually is right now.
  let candidates = [];
  if(stage==='opening'){
    candidates = unusedByType('news'); // a news hook is the natural way to open
  } else if(stage==='need_problem' || stage==='need_implication' || stage==='need_needpayoff'){
    candidates = unusedByType('nudge'); // stuck at this SPIN stage -> nudge on technique
    if(!candidates.length && uncovered.length) candidates = unusedByType('question');
  } else { // 'deepen' -- core SPIN sequence has been used at least once already
    if(uncovered.length) candidates = unusedByType('question'); // point at an area not yet found
  }
  if(!candidates.length) candidates = anyUnused();
  if(!candidates.length){
    Coach.usedHints.clear(); // all 5 have been shown at least once -- allow sensible repeats
    candidates = withIdx;
  }
  const pick = candidates[Math.floor(Math.random()*candidates.length)];
  Coach.usedHints.add(pick.i);
  return pick.h;
}
function showNextHint(auto){
  if(Coach.ended) return;
  const hint = pickContextualHint();
  if(!hint) return;
  addHintBubble(hint, auto);
}
el('#btn-hint').addEventListener('click', ()=>{ showNextHint(false); resetInactivityTimers(); });

function resetInactivityTimers(){
  clearTimeout(Coach.hintNudgeTimer);
  clearTimeout(Coach.inactivityEndTimer);
  if(Coach.ended) return;
  Coach.hintNudgeTimer = setTimeout(()=>{
    if(!Coach.ended) showNextHint(true);
  }, HINT_NUDGE_MS);
  Coach.inactivityEndTimer = setTimeout(()=>{
    if(!Coach.ended){
      addBubble('system', "No activity for a while — wrapping up and scoring the call so far.");
      endScenario();
    }
  }, INACTIVITY_END_MS);
}
function showTyping(){
  const scroll = el('#chat-scroll');
  const div = document.createElement('div'); div.className='typing'; div.id='typing-indicator';
  div.innerHTML = '<span></span><span></span><span></span>';
  scroll.appendChild(div); scroll.scrollTop = scroll.scrollHeight;
}
function hideTyping(){ const t = el('#typing-indicator'); if(t) t.remove(); }
function wait(ms){ return new Promise(resolve => setTimeout(resolve, ms)); }
function typingDelayFor(text){
  // Simulates a real person reading the rep's message, then typing the reply —
  // otherwise even a thoughtful, detailed answer arrives the instant the API
  // responds, which feels nothing like texting with an actual person.
  // Roughly 45 words/minute typing speed, plus a fixed "reading/thinking" pause,
  // with sensible floor/ceiling so short replies don't feel sluggish and long
  // ones don't feel like they've stalled.
  const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
  const thinkingPauseMs = 350 + Math.random()*300;
  const typingMs = (words / 45) * 60 * 1000;
  const jitter = 0.85 + Math.random()*0.3; // +/-15% so every reply doesn't feel identically paced
  return Math.min(Math.max((thinkingPauseMs + typingMs) * jitter, 500), 3800);
}

const chatInput = el('#chat-input');
chatInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); sendRepMessage(); } });
el('#btn-send').addEventListener('click', sendRepMessage);

async function sendRepMessage(){
  if(Coach.busy || Coach.ended) return;
  const text = chatInput.value.trim();
  if(!text) return;
  stopListening();

  // Duplicate/repetition check — runs BEFORE any AI/offline call, as a
  // deterministic layer shared by both engines, per the fix's core
  // principle: don't rely on prompt wording alone to catch a reworded
  // repeat of an earlier question.
  const stage = preClassifyStage(text);
  const piece = matchPiece(text);
  const dup = detectDuplicateQuestion(text, piece, stage, Coach.conversationState);
  if(dup.isDuplicate){
    chatInput.value = '';
    addBubble('rep', text);
    const suggestion = suggestUncoveredObjective(piece, stage, Coach.conversationState);
    const note = `That's very close to something you already asked — "${dup.matchedQuestion}" (${dup.reason}). The customer's already told you about that; repeating it won't uncover anything new.` +
      (suggestion ? ` Try asking about ${suggestion} instead.` : ' Try a different angle, or move to the next stage.');
    addBubble('system', note);
    Coach.turnScores.push({ piece, questionType: stage, relevance: 0, qualification: 'none', infoLevel: 0, roleFit: 2, listening: 0, commercialJudgement: 1, note, repetition: true });
    updateGauge();
    return; // preserve state, no engine call, no new/contradictory customer answer generated
  }
  Coach.conversationState.questionsAsked.push({ text, words: contentWords(text), stage, piece, objective: dup.objective, turnIndex: Coach.messages.length });

  chatInput.value = '';
  addBubble('rep', text);
  Coach.messages.push({who:'rep', text});
  Coach.busy = true; el('#btn-send').disabled = true; showTyping();
  resetInactivityTimers();

  try{
    let result = Coach.mode==='ai' ? await roleplayTurnViaAPI(text) : localRoleplayTurn(text);
    await wait(typingDelayFor(result.reply));
    hideTyping();
    addBubble('customer', result.reply, Coach.profile.persona.name);
    Coach.messages.push({who:'customer', text:result.reply});
    if(result.scoring){ Coach.turnScores.push(result.scoring); updateGauge(); updateConversationStateFromScoring(result.scoring, piece); }
  } catch(err){
    hideTyping();
    addBubble('system', "Couldn't reach the AI coach (" + err.message + ") — switching to offline practice mode.");
    Coach.mode = 'offline'; setModeBadge('offline');
    const result = localRoleplayTurn(text);
    showTyping();
    await wait(typingDelayFor(result.reply));
    hideTyping();
    addBubble('customer', result.reply, Coach.profile.persona.name);
    Coach.messages.push({who:'customer', text:result.reply});
    Coach.turnScores.push(result.scoring); updateGauge(); updateConversationStateFromScoring(result.scoring, piece);
  }
  Coach.busy = false; el('#btn-send').disabled = false; chatInput.focus();
}
// Keeps Coach.conversationState up to date after every real (non-duplicate)
// exchange, so later turns — and the final scorecard — can see what's
// already been confirmed, ruled out, or flagged as a pain area.
function updateConversationStateFromScoring(scoring, piece){
  const state = Coach.conversationState;
  const turnIndex = Coach.messages.length;
  const targetPiece = scoring.piece || piece;
  if(!targetPiece) return;
  const level = scoring.qualification;
  const stage = scoring.questionType;
  const positive = level === 'qualified' || level === 'developing';
  if(positive){
    state.painAreas.push({ piece: targetPiece, severity: level, turnIndex });
    // Route the confirmed fact into the stage-appropriate bucket, matching
    // the spec's richer categorised state (current-situation / confirmed
    // problems / confirmed impacts / desired outcomes), not one flat list.
    const fact = { piece: targetPiece, fact: `Pain confirmed at ${level} level (${stage||'general'})`, turnIndex };
    if(stage === 'problem') state.confirmedProblems.push(fact);
    else if(stage === 'implication') state.confirmedImpacts.push(fact);
    else if(stage === 'needpayoff') state.desiredOutcomes.push(fact);
    else state.confirmedFacts.push(fact);
  } else if(level === 'none' && (scoring.infoLevel||0) === 0){
    // Only mark ruled-out on a genuinely empty/deflected answer, not just a
    // low score — a "surface" answer may still contain a fact worth keeping.
    if(!state.ruledOutIssues.some(r=>r.piece===targetPiece)) state.ruledOutIssues.push({ piece: targetPiece, note: 'No pain surfaced when asked directly' });
  }
  // Per-dimension positive/negative tracking (spec section 8) — a piece can
  // hold a positive state on one dimension and negative on another at once.
  const lastQuestion = state.questionsAsked.filter(q => q.piece === targetPiece && q.stage === stage).slice(-1)[0];
  const objective = lastQuestion ? lastQuestion.objective : 'general';
  updateDimensionState(targetPiece, objective, positive ? 'positive-signal' : 'unresolved', state);

  const currentStageRank = {situation:1, problem:2, implication:3, needpayoff:4}[stage] || 0;
  const priorRank = {situation:1, problem:2, implication:3, needpayoff:4}[state.stagePerPiece[targetPiece]] || 0;
  if(currentStageRank > priorRank) state.stagePerPiece[targetPiece] = stage;
}
el('#btn-end-scenario').addEventListener('click', ()=> endScenario());

/* =========================================================================
   AI CALLS (routed through the unified callAI dispatcher)
   ========================================================================= */
const SME_SECTOR_POOL = [
  "Boutique hotel", "Bed & breakfast group", "Wedding & events venue", "Accountancy practice", "Solicitors\u2019 practice",
  "Architecture practice", "Engineering consultancy", "Contract manufacturer", "Precision engineering firm", "Food & beverage producer",
  "Bakery chain", "Brewery/distillery", "Multi-site retailer", "Independent pharmacy group", "Furniture retailer",
  "Garden centre", "Freight & logistics operator", "Vehicle fleet/haulage firm", "Warehousing & distribution", "Healthcare practice (GP/dental)",
  "Physiotherapy clinic group", "Veterinary practice", "Childcare/creche group", "Private school", "Construction contractor",
  "Electrical contractor", "Plumbing & heating firm", "Property maintenance company", "Estate agency", "Property management firm",
  "Marketing/creative agency", "Recruitment agency", "IT services reseller", "Insurance broker", "Financial advisory firm",
  "Craft/manufacturing co-op", "Textile manufacturer", "Print & signage company", "Fitness studio chain", "Golf/leisure club",
  "Car dealership group", "Motor repair/garage chain", "Agricultural machinery dealer", "Dairy/agri-food producer", "Fishing/seafood processor",
  "Waste management firm", "Facilities management company", "Security services firm", "Catering company", "Event management firm"
];
async function generateProfileViaAPI(difficulty, selectedIndustry, selectedRole, selectedSize){
  difficulty = difficulty || 'warm';
  const suggestedSector = selectedIndustry || SME_SECTOR_POOL[Math.floor(Math.random()*SME_SECTOR_POOL.length)];
  const propensityAreas = (selectedIndustry || selectedRole || selectedSize) ? propensityAreasFor(selectedIndustry, selectedRole, selectedSize) : null;
  const roleProfile = selectedRole ? ROLE_KNOWLEDGE_PROFILE[selectedRole] : null;
  const employeeRange = selectedSize === 'Micro (under 10 staff)' ? '3 and 9'
    : selectedSize === 'Small (10–49 staff)' ? '10 and 49'
    : selectedSize === 'Medium (50–249 staff)' ? '50 and 220'
    : '8 and 220';
  const difficultyInstructions = {
    warm: "This persona should be WARM: friendly, approachable, reasonably forthcoming once they trust the rep isn't wasting their time. Most calls should be like this — the point is to build a junior rep's confidence, not test them.",
    brisk: "This persona should be BRISK: businesslike, a little short on time, not unfriendly but won't hand things over easily — the rep needs to ask a genuinely relevant question before getting real detail, rather than everything opening up on the first ask.",
    dismissive: "This persona should be more DISMISSIVE at first: skeptical of yet another sales call, may open with a curt brush-off or visible impatience, and needs the rep to work a bit to earn real engagement. Still entirely professional and never abusive or hostile — just a genuinely tougher, realistic call that a rep needs to work for. This should still be winnable with good questions, not a trap."
  };
  const system = `You generate realistic Irish SME customer profiles for a sales-training simulator used by junior SME sales reps. The rep should still have to discover the specific pains themselves through good questioning — but the industry and company description should give enough real-world texture that an attentive rep can reasonably anticipate what KIND of technology areas are likely relevant for a business like this, the way a competent rep would going into any real call. Respond with ONLY a valid JSON object, no markdown fences, no commentary, matching exactly this schema:
{
 "companyName": string (a plausible, entirely fictional Irish SME business name fitting the sector — vary the naming style and surnames used across calls, don't default to the same handful of common Irish surnames every time — must not resemble or reference any real company),
 "industry": string (a specific SME sub-sector, not just a broad category — specific enough that its typical technology needs are inferable, e.g. a hotel implies guest Wi-Fi and hospitality security, a logistics firm implies mobile/field devices).${selectedIndustry ? ` The rep has specifically chosen this industry to practice against — use exactly this sector, or a specific sub-type within it: "${suggestedSector}",` : ` Use this as today's suggested sector unless you have a clearly better, different idea: "${suggestedSector}" — either way, actively avoid defaulting to hospitality, accountancy, or freight/logistics just because they're common training examples; genuine variety across calls matters more than any single suggestion,`}
 "employees": number (between ${employeeRange}, used internally for realism — shown to the rep only as a vague size band, never the exact figure),
 "description": string (two short sentences giving real operational texture — number of sites, type of customers, general shape of day-to-day operations — enough to reasonably suggest relevant technology needs, e.g. multiple sites implies inter-site connectivity, guest-facing implies guest Wi-Fi and physical security, a mobile workforce implies device management. Do NOT state any of the specific hidden pains directly or name specific systems/vendors),
 "whatTheyCareAbout": string (one short sentence naming the REAL business priorities a person in this role, at this kind of company, actually cares about day to day — e.g. for a hotel owner: guest reviews and repeat bookings; for a healthcare practice: patient trust and appointment continuity; for a logistics firm: on-time delivery and driver safety; for professional services: client retention and reputation. This grounds the persona in business outcomes, not IT jargon, and should subtly shape how they talk about the hidden pains — always in terms of what it costs THEM, not abstract technology language),
 "persona": {"name": string (Irish-sounding full name — draw from a genuinely wide range of common Irish first names and surnames, not the same few every time), "gender": "male"|"female" (matching the first name, used to pick an appropriate voice for text-to-speech), "role": one of ["Owner/Founder","IT Manager","Office Manager","Finance Director (C-level)","Operations Director (C-level)"]${selectedRole ? ` — the rep has specifically chosen to practice against a "${selectedRole}" contact, so use exactly this role` : ''}, "category": one of ["Owner","IT/Technical","C-Level","Other"], "tone": short description of how they talk},
 "hiddenPains": array of 2 to 4 objects {"piece": one of [${PIECE_IDS.map(id=>'"'+id+'"').join(', ')}], "severity": "low"|"medium"|"high", "detail": short internal note of the real underlying pain, not to be revealed unless asked well}. At least one hidden pain is required, and at least one must be specific and concrete enough that a well-run discovery call can fully qualify it. Where it fits naturally, let at least one hidden pain connect to the kind of technology need the industry and description already hint at (e.g. a hotel with a guest Wi-Fi hint pairing with a secure-network or managed-security pain), AND connect to "whatTheyCareAbout" (e.g. a hotel's guest Wi-Fi problem should tie back to guest reviews/experience, not just "the network is unreliable") — the hint should make the pain findable, not give it away.${propensityAreas ? ` Given the chosen industry/role/size, these focus areas have the highest real-world propensity for this combination and at least one hidden pain (ideally the most severe one) should come from this list: [${propensityAreas.map(a=>'"'+a+'"').join(', ')}] — but include at least one other area too, since a real business rarely has just one issue,` : ''}${roleProfile ? ` IMPORTANT — since the contact is specifically a "${selectedRole}": at least one hidden pain should be something this role would plausibly know about and be able to discuss (their natural strong areas are: [${roleProfile.strongAreas.map(a=>'"'+a+'"').join(', ')}]) — a Finance Director realistically won't know firewall configuration detail, an Office Manager realistically won't own security strategy, and so on. It's fine and realistic to ALSO include a hidden pain outside their direct ownership (e.g. security, if they're not IT) as long as the description/detail makes clear they'd need to defer or refer the rep elsewhere on that one specifically,` : ''}
 "openingLine": string, must be ONLY a short, simple way of answering an incoming phone call \u2014 like "Hello?", "Hello, [Name] speaking", or "[Company name], hello" \u2014 nothing more. Do NOT include any context, availability, tone-setting, or hint about being busy/receptive/rushed \u2014 the rep hasn't spoken yet, so the persona has no idea who's calling or why. Save all tone and personality for how they respond AFTER the rep's first message,
 "hints": array of exactly 5 objects {"type": "news"|"question"|"nudge", "text": string} to help a junior rep who gets stuck on this call:
   - exactly 1 of type "news": a plausible, general (not fabricated specific/false) industry news angle relevant to this sector that could open a conversation, e.g. "Ransomware attacks on small hospitality businesses have been widely reported recently — worth raising as a natural opener." Keep it generic/plausible, not a specific invented headline or company,
   - exactly 2 of type "question": concrete example discovery questions the rep could ask next, each tailored towards one of the actual hidden pains above (phrased as advice, e.g. "Try asking how many mobile devices they manage and who owns them — that's often revealing here"),
   - exactly 2 of type "nudge": general technique reminders tied to this specific call, e.g. "You've asked what they have, but not yet what it costs them if it goes wrong — that's usually where the real story is" or "Try asking what would happen if this got worse, not just whether it's a problem"
   Order them from most useful early in the call to most useful later.
}
${difficultyInstructions[difficulty]}
This year's priority solution areas for retention and upsell are: mobile-security (selling and upgrading mobile phones and mobile contracts themselves, not just device security \u2014 include a mix of businesses already with us due a handset/contract refresh, and businesses currently with a different, competing mobile provider who are unhappy or unsure of their contract terms, a classic switch/displacement opportunity; device management and threat protection are the natural upsell once the phones and contract conversation is underway, not the opening pitch), connectivity-access (broadband/DIA upgrades), cyber-assurance (security governance and monitoring), and m365 (Microsoft 365 licensing, security and compliance). At least one hidden pain in most profiles \u2014 roughly three out of every four \u2014 should come from one of these four areas, chosen naturally for the industry rather than forced. The remaining profiles, and any additional hidden pains beyond the first, can draw from any of the other focus areas for variety.
Roughly one in three profiles should include a cloud-voice hidden pain specifically about still running old ISDN/PSTN lines (e.g. reception, store, or site phones) with no VoIP migration plan in place ahead of the industry-wide network switch-off — make it a natural, business-specific detail (what it would cost them if those lines went down unexpectedly) rather than a generic mention, and vary the severity. This is separate from, and can sit alongside, the priority-area weighting above.
Make each profile meaningfully different from a generic example: vary the sector, size, persona and which of the focus areas are hidden pains. The focus areas are:
${pieceCriteriaBlock()}`;
  const text = await callAI(system, [{role:'user', content:'Generate a new, unique SME profile now.'}], 2200);
  const data = extractJSON(text);
  if(!data.persona || !data.hiddenPains) throw new Error('Malformed profile');
  data.difficulty = difficulty;
  if(!Array.isArray(data.hints) || !data.hints.length) data.hints = genericHints();
  return data;
}

function buildStateSummaryForPrompt(){
  const state = Coach.conversationState;
  const hasAny = state.confirmedFacts.length || state.confirmedProblems.length || state.confirmedImpacts.length ||
    state.desiredOutcomes.length || state.ruledOutIssues.length || state.questionsAsked.length;
  if(!hasAny) return '';
  // Caps below prevent unbounded prompt growth over a long session — this
  // was a real, confirmed problem: an ever-growing prompt (especially the
  // full text of every question ever asked) measurably degrades a model's
  // adherence to strict JSON-only output the longer a conversation runs,
  // eventually producing plain text instead of JSON. The duplicate-question
  // BLOCKING itself still checks the FULL, uncapped questionsAsked history
  // client-side before any API call is made — this cap only affects what's
  // shown to the model for its own awareness, not what's actually enforced.
  const MAX_FACTS_SHOWN = 10;
  const MAX_QUESTIONS_SHOWN = 15;
  const recentFirst = arr => arr.slice(-MAX_FACTS_SHOWN);
  const parts = ['Established so far in THIS conversation — stay consistent with ALL of it, and do not repeat a question or intent already covered below:'];
  if(state.confirmedFacts.length) parts.push('Current situation facts: ' + recentFirst(state.confirmedFacts).map(f=>`(${f.piece}) ${f.fact}`).join('; '));
  if(state.confirmedProblems.length) parts.push('Confirmed problems: ' + recentFirst(state.confirmedProblems).map(f=>`(${f.piece}) ${f.fact}`).join('; '));
  if(state.confirmedImpacts.length) parts.push('Confirmed impacts: ' + recentFirst(state.confirmedImpacts).map(f=>`(${f.piece}) ${f.fact}`).join('; '));
  if(state.desiredOutcomes.length) parts.push('Desired outcomes raised: ' + recentFirst(state.desiredOutcomes).map(f=>`(${f.piece}) ${f.fact}`).join('; '));
  if(state.ruledOutIssues.length) parts.push('Already ruled out / no pain found: ' + state.ruledOutIssues.map(r=>r.piece).join(', '));
  if(state.questionsAsked.length){
    const recentQuestions = state.questionsAsked.slice(-MAX_QUESTIONS_SHOWN);
    const olderCount = state.questionsAsked.length - recentQuestions.length;
    const olderNote = olderCount > 0 ? ` (plus ${olderCount} earlier question${olderCount===1?'':'s'} not shown here, on: ${Array.from(new Set(state.questionsAsked.slice(0, olderCount).map(q=>q.objective))).join(', ')})` : '';
    parts.push('Questions and intents already covered (do not repeat these)' + olderNote + ': ' + recentQuestions.map(q=>`"${q.text}" [${q.stage}/${q.objective}]`).join('; '));
  }
  return parts.join('\n') + '\n';
}
async function roleplayTurnViaAPI(repText){
  const p = Coach.profile;
  const difficulty = p.difficulty || 'warm';
  const roleProfile = ROLE_KNOWLEDGE_PROFILE[p.persona.role] || null;
  const forthcomingByDifficulty = {
    warm: `- A generic or broad question (e.g. "how's everything going?") can get a light, friendly answer that gestures at a general area without full detail.
- Any question that is clearly ON TOPIC for one of your real issues — even if it's not perfectly phrased or textbook SPIN — should get a genuinely helpful, fairly open answer, including real specifics. Don't make the rep ask three perfect follow-ups to earn one useful fact; reward curiosity and relevant follow-through.
- If the rep asks something too vague to connect to anything specific, you can gently hint that there's more to the story ("Actually, now that you mention it...") to invite them to keep digging, rather than flatly deflecting.
- Reserve genuinely vague or deflecting answers for questions that are off-topic, purely small talk, or so generic they could apply to any business.`,
    brisk: `- You're busy and won't hand over detail on a generic or vague question — a broad "how's everything going?" gets a short, non-committal answer.
- A question that is clearly, specifically on-topic for one of your real issues earns a real, honest answer — you're not trying to hide anything, you just don't volunteer it without being asked properly.
- You won't hint or invite further digging the way a warmer persona might — if they don't ask well, the conversation just moves on.
- Stay professional throughout — brisk and time-pressured, not rude.`,
    dismissive: `- You're skeptical of sales calls generally and may open with visible impatience or a brush-off. A generic or vague question gets a curt, unhelpful answer, possibly mildly dismissive.
- Even a specific, well-targeted question about a real issue should only get a partial answer at first — make the rep work a little (a reasonable follow-up should then get the real detail; don't require more than one good follow-up).
- Never actually abusive, hostile, or cruel — just realistically hard to get going, the way a genuinely busy, unconvinced prospect would be. This should still be winnable with good technique.`
  };
  const roleSection = roleProfile ? `
Your role's real knowledge boundaries — stay believable within these:
- What you can genuinely discuss in depth: ${roleProfile.strongAreas.join(', ')}. Frame answers here around: ${roleProfile.framing}.
- Outside those areas, you plausibly don't know the technical detail and would realistically ${roleProfile.deferralNote}. If the rep asks a question that's really outside your role's ownership (e.g. detailed technical configuration, when you're not IT/technical), don't fake expertise you wouldn't have — give a REALISTIC deflection instead, varying naturally between things like: "I'm not actually sure about that", "our IT provider looks after that side of things", "you'd need to speak to [a plausible colleague/role] about that", "I could introduce you to the right person if that'd help", or "send me something on that and I'll forward it on". Pick whichever fits the moment.
- If the rep asks a technical question but reframes it in terms of business impact, risk or cost instead (the kind of framing you actually understand), engage with THAT properly — rewarding a rep who adapts to your level is part of what this trains.
- If a hidden pain below happens to be outside your own role's ownership, you should genuinely defer/refer rather than explain it in technical depth yourself — but you can still confirm it's a real, live issue for the business ("that's definitely something we've had going on, but you'd want to talk to [X] about the specifics").` : '';
  const system = `You are roleplaying as ${p.persona.name}, the ${p.persona.role} at ${p.companyName || 'a small business'}, a ${p.employees}-employee ${p.industry} business in Ireland. Company context: ${p.description} Tone: ${p.persona.tone}
What you actually care about day to day: ${p.whatTheyCareAbout || 'running the business smoothly and keeping customers happy'} — when you talk about any of your real issues below, frame it in terms of THIS, not abstract technology language. You're not an IT person (unless your role says otherwise) — you think in terms of guests, patients, customers, deliveries, deadlines or reputation, not "network downtime."
You are being spoken to by a JUNIOR sales rep who is still building confidence and skill at discovery calls. This is a training exercise, so your job is to give them a fair chance to succeed appropriate to your temperament below — not to be an impossible brick wall.
${roleSection}
Your business's ACTUAL underlying issues are below — don't blurt these out unprompted:
${forthcomingByDifficulty[difficulty]}
Hidden pains:
${p.hiddenPains.map(hp=>'- ('+hp.piece+', severity '+hp.severity+'): '+hp.detail).join('\n')}
${buildStateSummaryForPrompt()}
Before replying, work through this checklist in order:
1. Stay anchored to the stable persona, company and hidden-pain facts above — they never change mid-conversation.
2. Treat everything in the "Established so far" block above as fixed truth — never contradict it.
3. Check the "Questions and intents already covered" list — if the rep's latest message repeats one of those intents, acknowledge that briefly ("as I mentioned...") rather than answering as if it were new.
4. Note which SPIN stage the conversation is actually at for the relevant topic, and don't hand over Implication-level impact or Need-payoff-level resolution before the earlier stage has genuinely been established.
5. Read the rep's LATEST message and identify its specific intent (current process, ownership, scale, frequency, dissatisfaction, root cause, operational impact, financial impact, risk, customer impact, urgency, desired outcome, stakeholder, supplier, contract position, or next-step interest).
6. Answer ONLY that intent — if they ask about cost, answer with cost/time detail, not a generic re-description of the setup.
7. Don't repeat a previous answer's exact wording — add new detail (a number, a stakeholder, a timing detail, an exception) if you're touching a topic already raised, and don't add invented detail that isn't consistent with the hidden pains above.
8. If the rep makes a STATEMENT or summary rather than a question (e.g. "so it sounds like your team doesn't have visibility on that", "you mentioned reporting was limited") — evaluate whether it's an accurate summary of what you've actually said. If accurate, confirm it briefly. If it misrepresents or assumes something you haven't said, correct it politely rather than agreeing by default.
9. Keep the topic's direction (positive/partially-working/negative) consistent with what's already been said about that SPECIFIC dimension — a different dimension of the same area (e.g. "enrolment's fine but reporting's a mess") is a legitimate distinction, not a contradiction, and should be framed that way.
10. Stay fully in character, realistic, 1 to 4 sentences per reply. Never break character or mention this is a simulation.
Depth on good questions: don't just repeat the same one-line pain description every time it comes up. When the rep asks a genuinely good, well-targeted follow-up, progressively reveal MORE — operational impact, what it's actually costing the business, who else is involved or affected, roughly how long it's been going on, whether there's an existing supplier/contract in the picture, or timing pressure — the way a real conversation builds up detail across several good questions rather than dumping everything at once or stonewalling.
Cross-selling: if the rep asks about one of your hidden-pain areas and you have genuinely nothing there (or they've already fully explored it), don't just go flat or shut the whole call down — if they then pivot to ask about a DIFFERENT area where you DO have a real hidden pain, engage with that new topic genuinely, the way a real business owner would if a good rep tried a different angle instead of giving up. Rewarding a sensible pivot is part of what this exercise is training.
After your reply, evaluate the REP'S LAST MESSAGE for sales qualification quality against these solution focus areas and their qualification criteria:
${pieceCriteriaBlock()}
Score it as:
- piece: the single best-matching area id from [${PIECE_IDS.map(id=>'"'+id+'"').join(', ')}], or null if unrelated/small talk
- questionType: "situation" | "problem" | "implication" | "needpayoff" | "closed" | "other" — classify which SPIN stage the rep's message best represents
- relevance: integer 0-3, how relevant to a REAL hidden pain in this business (0 = irrelevant, 3 = hits directly on a hidden pain with good framing). Judge this on the MERIT OF THE QUESTION ITSELF, not on how much you (the persona) chose to reveal in response — on a brisk/dismissive persona specifically, a genuinely pertinent, well-targeted question should still score full relevance even though your reply (by design) only partially opens up. Don't let your own guardedness drag down the rep's score for asking well.
- qualification: "none" | "surface" | "developing" | "qualified" — how much this exchange advanced genuine qualification or the sale overall. Score generously for a junior rep: any clearly relevant, on-topic question that engages with a real pain should score at least "developing" even if the phrasing isn't textbook SPIN — reserve "none"/"surface" for questions that are genuinely off-topic, closed, or so generic they don't advance anything. On brisk/dismissive difficulty, a pertinent question that only earns a guarded partial answer (because that's how this persona behaves, not because the question was weak) should still land at "developing", never "surface" or "none" purely because you held back. Score GENEROUSLY (at least "developing", often "qualified") for any of these good behaviours even if they don't directly surface a pain:
  * Pivoting to a genuinely different, relevant focus area after a dead end instead of repeating a dead question
  * Reframing a technical question into business language appropriate to this contact's role (cost, risk, downtime, impact)
  * Correctly recognising this contact isn't the right person for a topic, and asking who is, or asking for an introduction/referral — this is a POSITIVE outcome, not a failure, when handled well
  * Following up on something the persona just said rather than moving on too fast
  * Not forcing a cross-sell pitch onto a topic the customer has clearly shown no interest in or ownership of
- infoLevel: integer 0-5, how deep the INFORMATION revealed in your reply actually goes on the relevant hidden pain (not how good the rep's question was — this tracks what you, the persona, actually gave away): 0 = no meaningful information (deflection/small talk), 1 = a general observation only, 2 = a specific, named problem, 3 = operational or financial impact of that problem, 4 = stakeholder, supplier, timing or decision-process detail, 5 = an agreed action or concrete next step. This should generally only increase or hold across a conversation on the same pain, not jump backwards, unless the topic genuinely changed.
- roleFit: integer 0-3, how well-suited this question was to what THIS specific contact (given their role) could actually be expected to know or own — 3 = perfectly pitched at their level, 0 = asked as if they were a different role entirely (e.g. deep technical detail put to a non-technical Office Manager)
- listening: integer 0-3, how well this message actually builds on what you (the persona) just said in your previous reply, versus ignoring it and asking something generic or already-covered — 3 = clearly references or builds on the specific thing you just said, 0 = could have been asked with no memory of the conversation at all
- commercialJudgement: integer 0-3, overall business judgement shown in this specific message — reading buying signals correctly, not forcing a pitch prematurely, recognising when to stop pushing a dead line of questioning — 3 = excellent judgement for the moment, 0 = poor judgement (e.g. pitching before any need is established, or ignoring a clear signal to stop)
- note: one or two short, encouraging coaching-style sentences that explain the REASONING, not just praise or criticise — what they did well or could improve, whether this contact was even the right person to ask about this topic, and if there's a clearly better next move (probe deeper, pivot to a different area, or ask for the right stakeholder), name it briefly

Respond with ONLY a valid JSON object, no markdown fences, exactly this shape:
{"reply": "...", "scoring": {"piece": "..."/null, "questionType": "...", "relevance": 0, "qualification": "...", "infoLevel": 0, "roleFit": 0, "listening": 0, "commercialJudgement": 0, "note": "..."}}
REMINDER, since this conversation may have grown long: respond with ONLY that JSON object. No prose before or after it, no markdown fences. This matters more, not less, the longer the conversation gets.`;

  // Cap the raw message history sent to the model — the structured state
  // summary above already carries forward the long-term facts (confirmed
  // problems/impacts/outcomes, ruled-out areas, questions covered), so the
  // full unbounded transcript isn't needed for consistency, only for
  // immediate conversational flow. Sending an ever-growing transcript on
  // every turn was a real problem in long sessions: models measurably lose
  // adherence to strict output-format instructions as the prompt grows, and
  // a ~15-minute session with many turns could plausibly push this past the
  // point where the model reliably returns JSON at all rather than plain
  // text — exactly the "No JSON object found" failure this fixes.
  const RECENT_HISTORY_TURNS = 24; // ~12 back-and-forth exchanges
  const recentMessages = Coach.messages.slice(-RECENT_HISTORY_TURNS);
  const history = [];
  recentMessages.forEach(m=>{ if(m.who==='rep') history.push({role:'user', content:m.text}); else history.push({role:'assistant', content:m.text}); });
  history.push({role:'user', content:repText});

  const text = await callAI(system, history, 500);
  const data = extractJSON(text);
  if(typeof data.reply !== 'string') throw new Error('Malformed turn response');
  return data;
}

async function finalScoringViaAPI(){
  const p = Coach.profile;
  // Defensive cap for extremely long sessions — final scoring benefits from
  // more context than a single turn does (hence a much higher limit here),
  // but an unbounded transcript is still a risk for the same reason capped
  // in roleplayTurnViaAPI: prompt bloat measurably degrades JSON-format
  // adherence in long conversations.
  const MAX_TRANSCRIPT_MESSAGES = 60;
  const transcriptMessages = Coach.messages.slice(-MAX_TRANSCRIPT_MESSAGES);
  const truncatedNote = Coach.messages.length > MAX_TRANSCRIPT_MESSAGES ? `[${Coach.messages.length - MAX_TRANSCRIPT_MESSAGES} earlier messages omitted for length]\n` : '';
  const transcript = truncatedNote + transcriptMessages.map(m=> (m.who==='rep' ? 'Rep: ' : (p.persona.name+': ')) + m.text).join('\n');
  const questionCount = Coach.messages.filter(m=>m.who==='rep').length;
  const difficulty = p.difficulty || 'warm';
  const roleProfile = ROLE_KNOWLEDGE_PROFILE[p.persona.role] || null;
  const system = `You are a sales coaching engine reviewing a structured discovery conversation between a JUNIOR sales rep and a simulated SME customer. The audience for this feedback is a junior rep still building confidence — be encouraging and constructive in tone throughout, not harsh or nitpicky. Prioritise recognising active questioning and genuine curiosity over penalising imperfect technique; a rep who asked plenty of relevant questions and kept the conversation moving should score reasonably well even if not every question was a perfectly-formed Implication or Need-payoff question.
This customer persona was deliberately set to "${difficulty}" difficulty — ${DIFFICULTY_TIER_INFO[difficulty] ? DIFFICULTY_TIER_INFO[difficulty].name : difficulty} tier (Guided/warm = easy and forthcoming, Realistic/brisk = businesslike and has to be asked well, Challenging/dismissive = genuinely tough to get going).
DIFFICULTY-WEIGHTED SCORING — apply this exact adjustment, not just a vague "credit": first work out what the overallScore would be based purely on the qualification levels reached (perArea) as if this were a Guided/warm call. Then multiply that raw score by: 1.0 if difficulty is "warm", 1.2 if difficulty is "brisk", 1.6 if difficulty is "dismissive" — and cap the result at 100. This is the SAME multiplier the offline scoring engine uses, so the two stay consistent with each other. Report the final, ALREADY-WEIGHTED number as overallScore. If the difficulty was brisk or dismissive and the weighting made a meaningful difference, say so explicitly in the summary (e.g. "this was a Challenging call, so your score reflects that extra difficulty").
DO NOT CONFLATE QUESTION QUALITY WITH PERSONA STINGINESS: on brisk/dismissive difficulty, a genuinely pertinent, well-targeted question should score well on relevance and roleFit even if the guarded persona only partially reveals in response — that guardedness is deliberate, designed persona behaviour, not evidence the rep asked poorly. Judge "relevance" and "roleFit" on the MERIT OF THE QUESTION ITSELF; only "qualification"/"infoLevel" should reflect how much the persona actually chose to reveal. When reviewing the turn-by-turn scores for the strengths/improvements below, if you see a pattern of high relevance paired with lower qualification specifically on a brisk/dismissive call, call this out explicitly as good technique against a tough persona, not a shortfall.
Customer profile: ${p.companyName || 'the company'}, ${p.industry}, ${p.employees} employees, persona ${p.persona.name} (${p.persona.role}).${roleProfile ? ` This role realistically owns/can discuss: ${roleProfile.strongAreas.join(', ')} — anything else, a good rep should have recognised the contact might not be the right person and asked for a referral or reframed in business terms, not pushed for technical detail this contact wouldn't have.` : ''}
The customer's REAL hidden pains, not known to the rep in advance, were:
${p.hiddenPains.map(hp=>'- ('+hp.piece+', severity '+hp.severity+'): '+hp.detail).join('\n')}
The rep asked ${questionCount} questions during this call.
Turn-by-turn scoring already computed during the call:
${JSON.stringify(Coach.turnScores)}
Full transcript:
${transcript}

Produce a final qualification scorecard. Respond with ONLY a valid JSON object, no markdown fences, exactly this shape:
{
 "overallLevel": "Discovery Stage"|"Developing Opportunity"|"Qualified Opportunity"|"Hot Opportunity",
 "overallScore": integer 0-100,
 "perArea": [{"piece": id, "level":"none"|"surface"|"developing"|"qualified", "note": short string explaining WHY it landed at this level, e.g. "asked a good opener but never followed up on the cost/impact" or "correctly identified this wasn't the contact's area and asked for a referral"}] — include only areas that were touched on OR that had a hidden pain,
 "missedPains": [short strings describing hidden pains never meaningfully uncovered — phrase these as gentle "next time, try asking about..." pointers, not criticism],
 "strengths": [2 to 4 short strings — actively look for and credit ALL of the following where they occurred, quoting or referencing the specific moment briefly: asking good follow-ups and staying curious; covering multiple areas; a sensible pivot away from a dead end into a genuinely different relevant area (name both areas); reframing a technical question into business language appropriate to the contact's role; correctly recognising the contact wasn't the right person for a topic and asking for a referral or introduction — treat this as a genuine positive, not a consolation prize; moving from a surface answer to real business impact by following up well; if the persona was brisk/dismissive, credit persistence specifically; and if the turn-by-turn scoring above shows zero entries with "repetition":true across a reasonably long call, explicitly credit the rep for never repeating a question — this is a real, valuable discipline, not a minor detail],
 "improvements": [2 to 4 short strings, framed as encouraging next-step suggestions rather than faults — e.g. "Try asking..." rather than "You failed to...". Include, where relevant: asking a technical question that was really outside this contact's role instead of reframing or asking who the right person is; forcing a cross-sell pitch onto an area the customer showed no interest in or ownership of, instead of pivoting naturally; stopping at a surface answer instead of following up toward business impact; and if any turn in the scoring above has "repetition":true, name it directly (which earlier question it duplicated) and suggest what a genuinely different follow-up would have explored instead],
 "summary": "2 to 3 sentence encouraging coaching summary written directly to the rep, second person, ending on a constructive note. If difficulty was brisk or dismissive, acknowledge that this was a tougher call than usual.",
 "recommendedNextStep": "1 sentence, concrete and specific to what actually happened on THIS call — e.g. naming a stakeholder to follow up with if a referral was mentioned, or the single most promising area to open with on a follow-up call, or the pain most worth chasing next"
}
REMINDER: respond with ONLY that JSON object, no prose before or after it, no markdown fences — this matters even more on a long transcript.`;
  const text = await callAI(system, [{role:'user', content:'Produce the final scorecard now.'}], 1100);
  return extractJSON(text);
}

/* =========================================================================
   OFFLINE FALLBACK ENGINE
   ========================================================================= */
const DEFLECTIONS = [
  "That's not really something I've thought about, to be honest — anything specific prompting the question?",
  "I'd have to check on that — it's not top of mind for me right now.",
  "Hard to say off the top of my head. Why do you ask?",
  "We're fairly busy day to day, so I couldn't tell you the details offhand.",
  "I think it's fine generally, but I'm not the one who'd know the specifics."
];
const HINTS = [
  "Actually, now that you mention it, there might be something there worth a closer look.",
  "Hmm — good question. There's a bit more to that than I'd normally say off the cuff.",
  "That's actually closer to something than you might expect — worth asking a bit more on that."
];
const REFERRAL_RESPONSES = [
  "Honestly, I'm not the one who'd know the details on that — our IT provider looks after that side of things.",
  "That's a bit outside what I deal with day to day. You'd probably need to speak to whoever handles that for us.",
  "I couldn't tell you the specifics on that one, to be honest — that's someone else's area.",
  "That's definitely something we've got going on, but you'd want to talk to the right person about the detail — I can point you their way if that'd help."
];
function matchPiece(text){
  const lower = text.toLowerCase();
  let best = null, bestHits = 0;
  Object.keys(PIECE_KEYWORDS).forEach(id=>{
    const hits = PIECE_KEYWORDS[id].filter(k=>lower.includes(k)).length;
    if(hits>bestHits){ bestHits = hits; best = id; }
  });
  return bestHits>0 ? best : null;
}
function probeStrength(text){
  const lower = text.toLowerCase();
  return PROBE_WORDS.filter(w=>lower.includes(w)).length;
}
function localRoleplayTurn(repText){
  const p = Coach.profile;
  const difficulty = p.difficulty || 'warm';
  const pieceId = matchPiece(repText);
  const strength = probeStrength(repText);
  const hiddenPain = pieceId ? p.hiddenPains.find(hp=>hp.piece===pieceId) : null;
  const roleProfile = ROLE_KNOWLEDGE_PROFILE[p.persona.role];

  // Consistency check: if this piece was already confirmed or ruled out
  // earlier in the conversation, reference that established fact instead of
  // re-rolling a fresh random reply — prevents the offline engine from
  // ever contradicting itself on the same topic asked a second way.
  const state = Coach.conversationState;
  const priorPain = pieceId ? state.painAreas.find(a=>a.piece===pieceId) : null;
  const priorRuledOut = pieceId ? state.ruledOutIssues.find(r=>r.piece===pieceId) : null;
  if(pieceId && priorPain){
    return {
      reply: `As I mentioned, that's a real issue for us — ${hiddenPain ? hiddenPain.detail : 'the same one I flagged before'}. Anything specific you want to know about it?`,
      scoring: { piece: pieceId, questionType: preClassifyStage(repText), relevance: 2, qualification: 'developing', infoLevel: 3, roleFit: 2, listening: 3, commercialJudgement: 2,
        note: 'Good to circle back, but this was already confirmed — worth pushing into a new dimension (impact, timing, stakeholders) rather than re-confirming the same fact.' }
    };
  }
  if(pieceId && priorRuledOut){
    return {
      reply: `Like I said, that one's genuinely fine for us — not something we're dealing with.`,
      scoring: { piece: pieceId, questionType: preClassifyStage(repText), relevance: 1, qualification: 'surface', infoLevel: 0, roleFit: 2, listening: 1, commercialJudgement: 1,
        note: "This area was already ruled out — re-asking it won't change the answer. Consider pivoting to a different focus area instead." }
    };
  }

  // If this pain sits outside what this contact's role would plausibly own,
  // a real person would defer/refer rather than explain it themselves —
  // even a well-targeted question earns a realistic handoff, not a direct
  // reveal, and that's scored as a positive ("developing") outcome, not a
  // failure, matching how the AI-backed roleplay treats a good referral.
  const outsideRole = hiddenPain && roleProfile && !roleProfile.strongAreas.includes(pieceId);
  // Tougher personas need a sharper question (higher probe strength) before
  // opening up FULLY — but a genuinely pertinent, on-topic question (any
  // real probe strength at all) should still be credited as a good question
  // in its own right, even on a guarded persona. Conflating "how good was
  // the rep's question" with "how much did this stubborn persona choose to
  // reveal" is exactly what unfairly penalised well-targeted questions on
  // Challenging difficulty before this fix — the persona holding back is
  // expected, deliberate behaviour, not evidence the rep asked poorly.
  const threshold = difficulty==='dismissive' ? 2 : 1;
  const isPertinentButGuarded = difficulty==='dismissive' && hiddenPain && strength>=1 && strength<threshold;
  let reply, qualification, relevance, questionType, infoLevel, roleFit, listening, commercialJudgement, note;
  questionType = strength>=2 ? 'implication' : (repText.trim().endsWith('?') ? 'situation' : 'other');
  note = 'Offline heuristic scoring — connect an AI provider in Settings for full coaching.';
  // The offline engine can't judge conversational continuity or nuanced
  // business judgement the way the AI-backed scoring does, so these are
  // simpler, more generous defaults — clearly labelled as a rough guide via
  // the note above, not a precise measurement.
  listening = 2; commercialJudgement = 2;
  if(hiddenPain && outsideRole && strength>=threshold){
    reply = pickUnusedReply(REFERRAL_RESPONSES, 'referral', state);
    qualification='developing'; relevance=2; infoLevel=4; roleFit=1; // asked outside the contact's role, but recognised well enough to still count as developing
    note = `Good, relevant question — but ${p.persona.role} likely isn't the person who owns this, so this is a moment to ask who is, or to reframe it in business terms they'd answer directly.`;
  }
  else if(hiddenPain && strength>=threshold){ reply = "Actually, yes — " + hiddenPain.detail + "."; qualification='qualified'; relevance=3; infoLevel = strength>=3 ? 3 : 2; roleFit=3; }
  else if(isPertinentButGuarded){
    reply = pickUnusedReply(HINTS, 'hint', state);
    qualification='developing'; relevance=3; infoLevel=1; roleFit=3; // full relevance/roleFit credit — this WAS a good, on-topic question; the guarded reveal is the persona's doing, not the rep's
    note = "Genuinely pertinent, on-topic question — this persona is just guarded by design and needs one more push before opening up fully. That's not a mark against you.";
  }
  else if(hiddenPain){ reply = pickUnusedReply(HINTS, 'hint', state); qualification='developing'; relevance=2; infoLevel=1; roleFit=2; }
  else if(pieceId){ reply = pickUnusedReply(DEFLECTIONS, 'deflect', state); qualification='surface'; relevance=1; infoLevel=0; roleFit=2; }
  else { reply = pickUnusedReply(DEFLECTIONS, 'deflect', state); qualification='none'; relevance=0; infoLevel=0; roleFit=1; }
  return { reply, scoring:{ piece:pieceId, questionType, relevance, qualification, infoLevel, roleFit, listening, commercialJudgement, note } };
}
function detectPivot(turnScores){
  // Looks for a "none"/low-relevance turn on one piece followed later by a
  // genuinely different piece scoring developing/qualified — evidence the
  // rep moved on rather than repeating a dead question, which is exactly
  // the cross-sell behaviour this app is trying to train and reward.
  for(let i=0;i<turnScores.length;i++){
    const t = turnScores[i];
    if(!t.piece || LEVEL_SCORE[t.qualification] > 0) continue;
    for(let j=i+1;j<turnScores.length;j++){
      const later = turnScores[j];
      if(later.piece && later.piece !== t.piece && LEVEL_SCORE[later.qualification] >= 2){
        return { from: t.piece, to: later.piece };
      }
    }
  }
  return null;
}
function localFinalScoring(){
  const p = Coach.profile;
  const perArea = []; const covered = {};
  Coach.turnScores.forEach(t=>{ if(!t.piece) return; if(!covered[t.piece] || LEVEL_SCORE[t.qualification] > LEVEL_SCORE[covered[t.piece]]) covered[t.piece]=t.qualification; });
  Object.keys(covered).forEach(id=> perArea.push({piece:id, level:covered[id], note:'Best signal reached during the call.'}));
  p.hiddenPains.forEach(hp=>{ if(!covered[hp.piece]) perArea.push({piece:hp.piece, level:'none', note:'Not explored during the call — worth asking about next time.'}); });
  const missedPains = p.hiddenPains.filter(hp=> !covered[hp.piece] || LEVEL_SCORE[covered[hp.piece]]<2).map(hp=> 'Next time, try asking more about ' + PIECE_BY_ID[hp.piece].name.toLowerCase() + '.');
  const totalScore = perArea.reduce((s,a)=>s+LEVEL_SCORE[a.level],0);
  const rawPct = Math.round((totalScore/(PIECES.length*3))*100);
  // Difficulty-weighted score: the SAME raw performance is objectively more
  // impressive on a harder call, since the persona is deliberately designed
  // to reveal less per question. Without this, a rep doing brilliantly
  // against a Challenging persona scores identically to the same effort
  // against a Guided one, which isn't a fair comparison. Multipliers are
  // applied to the raw percentage and capped at 100.
  const DIFFICULTY_SCORE_MULTIPLIER = { warm: 1.0, brisk: 1.2, dismissive: 1.6 };
  const difficultyKey = p.difficulty || 'warm';
  const pct = Math.min(100, Math.round(rawPct * (DIFFICULTY_SCORE_MULTIPLIER[difficultyKey] || 1.0)));
  const questionCount = Coach.messages.filter(m=>m.who==='rep').length;
  let overallLevel = 'Discovery Stage';
  if(pct>=55) overallLevel='Hot Opportunity'; else if(pct>=32) overallLevel='Qualified Opportunity'; else if(pct>=12) overallLevel='Developing Opportunity';
  const pivot = detectPivot(Coach.turnScores);
  const repetitionCount = Coach.turnScores.filter(t=>t.repetition).length;
  const strengths = [
    questionCount>=6 ? `You asked ${questionCount} questions and kept the conversation moving — that's exactly the right instinct.` : 'You kept the conversation moving and asked genuine questions.',
    'You engaged directly rather than pitching too early — good discipline for a first call.'
  ];
  if(difficultyKey !== 'warm' && rawPct > 0){
    const tierName = DIFFICULTY_TIER_INFO[difficultyKey] ? DIFFICULTY_TIER_INFO[difficultyKey].name : difficultyKey;
    strengths.push(`This was a ${tierName} call — genuinely harder to extract information from than a Guided one — so your score reflects that extra difficulty, not just the raw outcome.`);
  }
  if(repetitionCount === 0 && questionCount >= 4){
    strengths.push("You didn't repeat yourself — every question opened up new ground instead of re-asking something already covered.");
  }
  if(pivot){
    strengths.push(`Good instinct moving from ${PIECE_BY_ID[pivot.from].name} into ${PIECE_BY_ID[pivot.to].name} once the first one wasn't landing — that's real cross-selling, not just giving up on a dead end.`);
  }
  const improvements = ['Try asking a follow-up "what happens when..." or "what does that cost you" question after each answer — that\'s usually where the real detail comes out.','Keep going a little further into more of the focus areas before wrapping up.'];
  if(repetitionCount > 0){
    improvements.unshift(`${repetitionCount} question${repetitionCount===1?' was':'s were'} too close to one already asked — once an area's confirmed, push into a new dimension (impact, timing, stakeholders) rather than re-asking the same thing a different way.`);
  }
  const bestArea = perArea.slice().sort((a,b)=>LEVEL_SCORE[b.level]-LEVEL_SCORE[a.level])[0];
  const recommendedNextStep = bestArea && LEVEL_SCORE[bestArea.level] >= 2
    ? `Follow up on ${PIECE_BY_ID[bestArea.piece].name} first — that's where you got the strongest signal this call.`
    : 'Worth a follow-up call to explore any of the focus areas in more depth — nothing was fully qualified yet.';
  return {
    overallLevel, overallScore: pct, perArea,
    missedPains: missedPains.length? missedPains : ['Good coverage — you asked about most of the known pain areas.'],
    strengths,
    improvements,
    summary:"This is an offline practice summary based on simple keyword matching, since no AI provider is connected — treat it as a rough guide rather than detailed feedback. Add an API key in Settings for full AI-generated coaching.",
    recommendedNextStep
  };
}

/* =========================================================================
   END SCENARIO / SCORECARD
   ========================================================================= */
async function endScenario(){
  if(Coach.ended) return;
  Coach.ended = true;
  clearTimeout(Coach.hintNudgeTimer); clearTimeout(Coach.inactivityEndTimer);
  stopListening();
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  chatInput.disabled = true; el('#btn-send').disabled = true; el('#btn-hint').disabled = true;
  addBubble('system', "Ending call — scoring your conversation…");
  let data;
  try{ data = Coach.mode==='ai' ? await finalScoringViaAPI() : localFinalScoring(); }
  catch(err){ console.error('finalScoringViaAPI failed, falling back to offline scoring:', err); data = localFinalScoring(); }
  renderScorecard(data); openModal();

  // Aggregate per-turn SPIN-stage stats (situation/problem/implication/needpayoff/
  // closed/other counts, average relevance) — this is what actually shows a manager
  // whether a rep is asking the right KIND of questions, not just their final score.
  const stageCounts = {situation:0, problem:0, implication:0, needpayoff:0, closed:0, other:0};
  let relevanceTotal = 0, relevanceCount = 0;
  Coach.turnScores.forEach(t=>{
    const stage = stageCounts.hasOwnProperty(t.questionType) ? t.questionType : 'other';
    stageCounts[stage] += 1;
    if(Number.isFinite(t.relevance)){ relevanceTotal += t.relevance; relevanceCount += 1; }
  });
  const areasTouched = new Set(Coach.turnScores.filter(t=>t.piece).map(t=>t.piece)).size;

  Leaderboard.submitScore({
    name: App.repName,
    score: data.overallScore,
    level: data.overallLevel,
    company: Coach.profile.companyName || '',
    difficulty: Coach.profile.difficulty || '',
    questionCount: Coach.messages.filter(m=>m.who==='rep').length,
    areasTouched,
    stageCounts,
    avgRelevance: relevanceCount ? Math.round((relevanceTotal/relevanceCount)*10)/10 : null,
    missedPains: data.missedPains || [],
    improvements: data.improvements || [],
    strengths: data.strengths || []
  });
}
const RAG = {
  qualified:{band:'green', color:'#0A825A', bg:'#E1FAF0', label:'Green'},
  developing:{band:'amber', color:'#A2640A', bg:'#FDF1DC', label:'Amber'},
  surface:{band:'amber', color:'#A2640A', bg:'#FDF1DC', label:'Amber'},
  none:{band:'red', color:'#C21F3E', bg:'#FCE3E8', label:'Red'}
};
const SCORE_OUT_OF_10 = {none:0, surface:4, developing:7, qualified:10};
function levelPillHTML(level){
  const rag = RAG[level] || RAG.none;
  const lv = LEVELS[level] || LEVELS.none;
  return `<span class="ac-lvl" style="background:${rag.bg};color:${rag.color};">${lv.label}</span>`;
}
function renderScorecard(data){
  const p = Coach.profile;
  el('#modal-sub').textContent = (p.companyName ? p.companyName + ' · ' : '') + p.industry + ' · ' + p.persona.name + ' (' + p.persona.role + ')';
  const overallColorMap = {
    'Discovery Stage':{bg:'#F0EDF8', color:'#5B6272'},
    'Developing Opportunity':{bg:'#E8F2FD', color:'#3478BC'},
    'Qualified Opportunity':{bg:'#E1FAF0', color:'#0A825A'},
    'Hot Opportunity':{bg:'#1B1640', color:'#0A825A'}
  };
  const oc = overallColorMap[data.overallLevel] || overallColorMap['Discovery Stage'];
  const banner = el('#overall-banner');
  banner.style.background = oc.bg; banner.style.color = oc.color;
  el('#modal-score-num').textContent = data.overallScore + '/100';
  el('#modal-score-lvl').textContent = data.overallLevel;
  el('#modal-score-sub').textContent = 'Overall opportunity qualification score';

  const areasHTML = (data.perArea||[]).map(a=>{
    const piece = PIECE_BY_ID[a.piece]; if(!piece) return '';
    const rag = RAG[a.level] || RAG.none;
    const score10 = SCORE_OUT_OF_10[a.level] !== undefined ? SCORE_OUT_OF_10[a.level] : 0;
    return `<div class="area-card rag-${rag.band}">
      <div class="ac-top">
        <span class="ac-name"><span class="rag-dot" style="background:${rag.color};"></span>${piece.icon} ${esc(piece.short)}</span>
        <span class="area-score-num" style="color:${rag.color};">${score10}/10</span>
      </div>
      <div class="ac-note">${esc(a.note||'')}</div>
    </div>`;
  }).join('');
  el('#modal-areas').innerHTML = areasHTML || '<p class="log-empty">No areas were explored during this call.</p>';

  const missedWrap = el('#modal-missed-wrap');
  if(data.missedPains && data.missedPains.length){
    el('#modal-missed').innerHTML = data.missedPains.map(m=>`<li>${esc(m)}</li>`).join('');
    missedWrap.classList.remove('hidden');
    missedWrap.classList.add('modal-section-tinted','rag-red');
  } else {
    missedWrap.classList.add('hidden');
    missedWrap.classList.remove('modal-section-tinted','rag-red');
  }

  el('#modal-strengths').innerHTML = (data.strengths||[]).map(s=>`<li>${esc(s)}</li>`).join('');
  el('#modal-strengths-wrap').classList.add('modal-section-tinted','rag-green');
  el('#modal-improve').innerHTML = (data.improvements||[]).map(s=>`<li>${esc(s)}</li>`).join('');
  el('#modal-improve-wrap').classList.add('modal-section-tinted','rag-amber');

  el('#modal-summary').textContent = data.summary || '';
  const nextStepWrap = el('#modal-nextstep-wrap');
  if(data.recommendedNextStep){
    el('#modal-nextstep').textContent = data.recommendedNextStep;
    nextStepWrap.classList.remove('hidden');
  } else {
    nextStepWrap.classList.add('hidden');
  }

  const INFO_LEVEL_LABELS = [
    'Level 0 — No meaningful information uncovered',
    'Level 1 — A general observation only',
    'Level 2 — A specific, named problem',
    'Level 3 — Operational or financial impact',
    'Level 4 — Stakeholder, supplier, timing or decision detail',
    'Level 5 — An agreed action or concrete next step'
  ];
  const infoLevels = Coach.turnScores.map(t=>t.infoLevel).filter(Number.isFinite);
  const infoLevelWrap = el('#modal-infolevel-wrap');
  if(infoLevels.length){
    const deepest = Math.max(...infoLevels);
    el('#modal-infolevel').textContent = INFO_LEVEL_LABELS[deepest] + ' — the deepest point this call actually reached.';
    infoLevelWrap.classList.remove('hidden');
  } else {
    infoLevelWrap.classList.add('hidden');
  }

  const dimensionWrap = el('#modal-dimensions-wrap');
  const dims = [
    { key:'relevance', label:'Relevance', max:3 },
    { key:'roleFit', label:'Role fit', max:3 },
    { key:'listening', label:'Listening', max:3 },
    { key:'commercialJudgement', label:'Commercial judgement', max:3 }
  ];
  const dimAverages = dims.map(d=>{
    const vals = Coach.turnScores.map(t=>t[d.key]).filter(Number.isFinite);
    return { ...d, avg: vals.length ? Math.round((vals.reduce((s,v)=>s+v,0)/vals.length)*10)/10 : null };
  }).filter(d=>d.avg !== null);
  if(dimAverages.length){
    el('#modal-dimensions').innerHTML = dimAverages.map(d=>`
      <div class="dim-row">
        <span class="dim-label">${esc(d.label)}</span>
        <div class="dim-bar"><div class="dim-bar-fill" style="width:${(d.avg/d.max)*100}%;"></div></div>
        <span class="dim-score">${d.avg}/${d.max}</span>
      </div>`).join('');
    dimensionWrap.classList.remove('hidden');
  } else {
    dimensionWrap.classList.add('hidden');
  }
}
function openModal(){ el('#modal-backdrop').classList.add('show'); }
function closeModal(){ el('#modal-backdrop').classList.remove('show'); }
el('#btn-modal-close').addEventListener('click', closeModal);
el('#modal-backdrop').addEventListener('click', (e)=>{ if(e.target.id==='modal-backdrop') closeModal(); });

/* =========================================================================
   INIT
   ========================================================================= */
renderHome();
setView('home');
