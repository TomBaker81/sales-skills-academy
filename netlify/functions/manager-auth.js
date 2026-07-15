// Netlify Function: server-side manager password check.
//
// Why this exists: the previous implementation compared the submitted
// password against a constant hardcoded directly in the client-side
// JavaScript bundle — meaning the real password shipped to every visitor's
// browser and was trivially readable via "View Source" or devtools, no
// login required. That's a genuine vulnerability, not just a theoretical
// one. This function fixes it properly: the real password lives ONLY in a
// Netlify environment variable (server-side, never sent to the browser),
// and this function just returns a yes/no answer plus a short-lived,
// unguessable session token — never the password itself, and never in a
// way that could be replayed indefinitely if intercepted.

const crypto = require('crypto');
const { getStore, connectLambda } = require('@netlify/blobs');

const SESSION_TTL_MS = 4 * 60 * 60 * 1000; // 4 hours

exports.handler = async (event) => {
  connectLambda(event);
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const action = payload.action;
  const store = getStore('manager-sessions');

  if (action === 'verify') {
    const submitted = String(payload.password || '');
    const real = process.env.MANAGER_PASSWORD || '';
    if (!real) {
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'No MANAGER_PASSWORD configured on the server yet — set it in Netlify: Site configuration → Environment variables.' }) };
    }
    // Constant-time comparison so response timing can't leak how much of
    // the password was correct.
    const a = Buffer.from(submitted);
    const b = Buffer.from(real);
    const match = a.length === b.length && crypto.timingSafeEqual(a, b);
    if (!match) {
      return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: false }) };
    }
    const token = crypto.randomBytes(24).toString('hex');
    await store.setJSON(token, { expires: Date.now() + SESSION_TTL_MS });
    return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: true, token }) };
  }

  if (action === 'check') {
    const token = String(payload.token || '');
    if (!token) return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ ok: false }) };
    try {
      const session = await store.get(token, { type: 'json' });
      const valid = !!session && session.expires > Date.now();
      return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ ok: valid }) };
    } catch (e) {
      return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ ok: false }) };
    }
  }

  return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Unknown action' }) };
};
