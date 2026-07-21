// Netlify Function: shared leaderboard storage using Netlify Blobs.
//
// Why this exists: the Virtual Sales Call scorecard needs to be visible to
// every rep, not just saved in one person's browser (localStorage is
// per-device and wouldn't show up on anyone else's screen). Netlify Blobs
// gives a simple, zero-config, site-wide key-value store that any Netlify
// Function on this site can read and write, which is exactly what a shared
// leaderboard needs — no separate database to provision.
//
// Data model: a single JSON blob under the key "entries" holding an array of
// score records. This is a small internal tool with modest write volume, so
// one array is simpler and more than adequate rather than one blob per entry.

const { getStore, connectLambda } = require('@netlify/blobs');

const MAX_ENTRIES = 2000; // simple cap so the blob can't grow unbounded

// Fields anyone can see via the public Leaderboard (best score per rep) —
// deliberately excludes per-call coaching detail (missedPains, improvements,
// strengths, stageCounts, avgRelevance), which is only for the token-gated
// Manager Report. Without this split, the sensitive coaching data would be
// readable by anyone who called this endpoint directly, regardless of
// whether the manager password gate in the UI was ever shown.
const PUBLIC_FIELDS = ['name', 'score', 'level', 'company', 'difficulty', 'timestamp'];
function toPublicEntry(e){
  const out = {};
  PUBLIC_FIELDS.forEach(f => { out[f] = e[f]; });
  return out;
}
async function isValidManagerToken(token){
  if(!token) return false;
  try {
    const sessionStore = getStore('manager-sessions');
    const session = await sessionStore.get(token, { type: 'json' });
    return !!session && session.expires > Date.now();
  } catch (e) { return false; }
}

exports.handler = async (event) => {
  connectLambda(event);
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  let store;
  try {
    store = getStore('leaderboard');
  } catch (err) {
    return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Blob store unavailable: ' + err.message }) };
  }

  if (event.httpMethod === 'GET') {
    try {
      const entries = (await store.get('entries', { type: 'json' })) || [];
      const params = event.queryStringParameters || {};
      const hasManagerAccess = await isValidManagerToken(params.token);
      const responseEntries = hasManagerAccess ? entries : entries.map(toPublicEntry);
      return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ entries: responseEntries, managerAccess: hasManagerAccess }) };
    } catch (err) {
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Failed to read scores: ' + err.message }) };
    }
  }

  if (event.httpMethod === 'POST') {
    let payload;
    try {
      payload = JSON.parse(event.body || '{}');
    } catch (e) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON body' }) };
    }

    const name = String(payload.name || '').trim().slice(0, 60);
    const score = Number(payload.score);
    if (!name) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Name is required' }) };
    }
    if (!Number.isFinite(score) || score < 0 || score > 100) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Score must be a number between 0 and 100' }) };
    }

    const entry = {
      name,
      score,
      level: String(payload.level || '').slice(0, 40),
      company: String(payload.company || '').slice(0, 100),
      difficulty: String(payload.difficulty || '').slice(0, 20),
      questionCount: Number.isFinite(Number(payload.questionCount)) ? Number(payload.questionCount) : null,
      areasTouched: Number.isFinite(Number(payload.areasTouched)) ? Number(payload.areasTouched) : null,
      stageCounts: (payload.stageCounts && typeof payload.stageCounts === 'object') ? payload.stageCounts : null,
      avgRelevance: Number.isFinite(Number(payload.avgRelevance)) ? Number(payload.avgRelevance) : null,
      // Manager-analytics fields (all excluded from PUBLIC_FIELDS above, so
      // they're only visible with a valid manager session token — same
      // gating as the existing coaching detail):
      industry: String(payload.industry || '').slice(0, 80),
      role: String(payload.role || '').slice(0, 80),
      employees: Number.isFinite(Number(payload.employees)) ? Number(payload.employees) : null,
      avgRoleFit: Number.isFinite(Number(payload.avgRoleFit)) ? Number(payload.avgRoleFit) : null,
      avgListening: Number.isFinite(Number(payload.avgListening)) ? Number(payload.avgListening) : null,
      avgCommercialJudgement: Number.isFinite(Number(payload.avgCommercialJudgement)) ? Number(payload.avgCommercialJudgement) : null,
      deepestInfoLevel: Number.isFinite(Number(payload.deepestInfoLevel)) ? Number(payload.deepestInfoLevel) : null,
      stakeholderAsks: Number.isFinite(Number(payload.stakeholderAsks)) ? Number(payload.stakeholderAsks) : 0,
      reframes: Number.isFinite(Number(payload.reframes)) ? Number(payload.reframes) : 0,
      pivotQuality: Number.isFinite(Number(payload.pivotQuality)) ? Number(payload.pivotQuality) : null,
      nextStepScore: Number.isFinite(Number(payload.nextStepScore)) ? Number(payload.nextStepScore) : null,
      nextStepSecured: typeof payload.nextStepSecured === 'boolean' ? payload.nextStepSecured : null,
      forcedSellingCount: Number.isFinite(Number(payload.forcedSellingCount)) ? Number(payload.forcedSellingCount) : null,
      missedPains: Array.isArray(payload.missedPains) ? payload.missedPains.slice(0, 10).map(s => String(s).slice(0, 200)) : [],
      improvements: Array.isArray(payload.improvements) ? payload.improvements.slice(0, 10).map(s => String(s).slice(0, 300)) : [],
      strengths: Array.isArray(payload.strengths) ? payload.strengths.slice(0, 10).map(s => String(s).slice(0, 300)) : [],
      timestamp: new Date().toISOString()
    };

    try {
      const existing = (await store.get('entries', { type: 'json' })) || [];
      existing.push(entry);
      // Keep only the most recent MAX_ENTRIES to bound storage size.
      const trimmed = existing.length > MAX_ENTRIES ? existing.slice(existing.length - MAX_ENTRIES) : existing;
      await store.setJSON('entries', trimmed);
      return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: true, entry }) };
    } catch (err) {
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Failed to save score: ' + err.message }) };
    }
  }

  if (event.httpMethod === 'DELETE') {
    // Removes entries matching an exact name — deliberately scoped to one
    // person's entries rather than a full-table wipe, so this can't
    // accidentally (or maliciously) clear everyone's scores. Also requires a
    // valid manager session token, since deletion is more sensitive than
    // reading and shouldn't be callable by anyone who finds the URL.
    const params = event.queryStringParameters || {};
    const hasManagerAccess = await isValidManagerToken(params.token);
    if (!hasManagerAccess) {
      return { statusCode: 401, headers: corsHeaders, body: JSON.stringify({ error: 'Manager authentication required to delete entries.' }) };
    }
    const name = String(params.name || '').trim();
    if (!name) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'name query parameter is required' }) };
    }
    try {
      const existing = (await store.get('entries', { type: 'json' })) || [];
      const remaining = existing.filter(e => e.name !== name);
      await store.setJSON('entries', remaining);
      return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: true, removed: existing.length - remaining.length }) };
    } catch (err) {
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Failed to delete entries: ' + err.message }) };
    }
  }

  return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
};
