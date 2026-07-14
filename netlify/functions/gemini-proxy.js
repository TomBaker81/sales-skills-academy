// Netlify Function: server-side proxy for the Gemini API.
//
// Why this exists: Google's Generative Language API does not send
// Access-Control-Allow-Origin headers on its generateContent endpoint, so it
// can never be called directly from browser JavaScript on any domain (this
// is a Google-side restriction, not something fixable with request headers,
// confirmed against the live API). Server-to-server calls aren't subject to
// CORS at all, so this function makes the real call to Google and hands the
// result back to the browser with its own permissive CORS header.
//
// The API key lives here (server-side function source), never in the
// browser bundle — this is also just a safer place for it than client-side
// JS, independent of the CORS problem.
//
// Set GEMINI_API_KEY as a Netlify environment variable (Site configuration
// -> Environment variables) for this site. No key is hardcoded here.

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

exports.handler = async (event) => {
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

  const model = payload.model || 'gemini-flash-latest';
  const effectiveKey = (payload.apiKey && payload.apiKey !== 'USE_SERVER_KEY') ? payload.apiKey : GEMINI_API_KEY;
  if(!effectiveKey){
    return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'No GEMINI_API_KEY configured on the server. Set it in Netlify: Site configuration → Environment variables.' }) };
  }
  const geminiBody = {
    system_instruction: payload.system_instruction,
    contents: payload.contents,
    generationConfig: payload.generationConfig
  };

  try {
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': effectiveKey },
        body: JSON.stringify(geminiBody)
      }
    );
    const text = await resp.text();
    return { statusCode: resp.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: text };
  } catch (err) {
    return { statusCode: 502, headers: corsHeaders, body: JSON.stringify({ error: 'Upstream request failed: ' + err.message }) };
  }
};
