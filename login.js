
(function(){
  var LOGIN_USER = "salesteam";
  var LOGIN_PASS = "Zzdn4ATNIcg3";
  var gate = document.getElementById('login-gate');
  if (sessionStorage.getItem('ssa_authed') === '1') { gate.style.display = 'none'; return; }
  document.getElementById('login-submit').addEventListener('click', check);
  document.getElementById('login-pass').addEventListener('keydown', function(e){ if(e.key === 'Enter') check(); });
  function check(){
    var u = document.getElementById('login-user').value;
    var p = document.getElementById('login-pass').value;
    if (u === LOGIN_USER && p === LOGIN_PASS) {
      sessionStorage.setItem('ssa_authed', '1');
      gate.style.display = 'none';
    } else {
      var err = document.getElementById('login-error');
      err.textContent = 'Incorrect username or password.';
      err.style.display = 'block';
    }
  }
})();
