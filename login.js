
(function(){
  var LOGIN_USER = "salesteam";
  var LOGIN_PASS = "Zzdn4ATNIcg3";
  var MGR_AUTH_URL = '/.netlify/functions/manager-auth';
  var gate = document.getElementById('login-gate');
  if (sessionStorage.getItem('ssa_authed') === '1') { gate.style.display = 'none'; return; }
  var submitBtn = document.getElementById('login-submit');
  submitBtn.addEventListener('click', check);
  document.getElementById('login-pass').addEventListener('keydown', function(e){ if(e.key === 'Enter') check(); });
  document.getElementById('login-mgr-pass').addEventListener('keydown', function(e){ if(e.key === 'Enter') check(); });

  function showError(msg){
    var err = document.getElementById('login-error');
    err.textContent = msg;
    err.style.display = msg ? 'block' : 'none';
  }

  async function check(){
    var u = document.getElementById('login-user').value;
    var p = document.getElementById('login-pass').value;
    if (u !== LOGIN_USER || p !== LOGIN_PASS) { showError('Incorrect username or password.'); return; }

    var mgrPass = document.getElementById('login-mgr-pass').value;
    if (mgrPass) {
      // Manager password supplied — validate it server-side to obtain a session
      // token. A wrong password keeps the user on the gate (they can clear the
      // field to sign in as a rep), so no one is ever silently downgraded.
      submitBtn.disabled = true;
      showError('');
      try {
        var resp = await fetch(MGR_AUTH_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'verify', password: mgrPass })
        });
        var data = await resp.json();
        if (data.ok && data.token) {
          sessionStorage.setItem('ssa_manager_token', data.token);
          sessionStorage.setItem('ssa_is_manager', '1');
        } else {
          submitBtn.disabled = false;
          showError('Manager password not recognised. Clear it to sign in as a rep, or re-enter it.');
          return;
        }
      } catch (e) {
        submitBtn.disabled = false;
        showError("Couldn't reach the server to check the manager password. Clear it to sign in as a rep, or try again.");
        return;
      }
      submitBtn.disabled = false;
    } else {
      // Plain rep sign-in — make sure no stale manager flag carries over.
      sessionStorage.removeItem('ssa_is_manager');
      sessionStorage.removeItem('ssa_manager_token');
    }

    sessionStorage.setItem('ssa_authed', '1');
    gate.style.display = 'none';
  }
})();
