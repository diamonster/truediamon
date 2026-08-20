(function () {
  var KEY = 'cookie_consent';
  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }
  var banner = document.getElementById('cookie-consent');
  if (!banner || read()) { return; }
  banner.hidden = false;
  var buttons = banner.querySelectorAll('[data-cookie-action]');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      var granted = this.getAttribute('data-cookie-action') === 'grant';
      write(granted ? 'grant' : 'decline');
      document.dispatchEvent(new CustomEvent('cookie-consent', {
        detail: { analytics: granted ? 'granted' : 'denied' }
      }));
      banner.hidden = true;
    });
  }
})();
