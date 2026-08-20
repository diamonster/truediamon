(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }
  function copyFallback(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return copyFallback(text); }
      );
    }
    return Promise.resolve(copyFallback(text));
  }
  ready(function () {
    var buttons = document.querySelectorAll('.highlight-copy');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var btn = this;
        var wrapper = btn.closest('.highlight-wrapper');
        if (!wrapper) { return; }
        var code = wrapper.querySelector('.chroma code');
        if (!code) { return; }
        var text = code.textContent;
        copyText(text).then(function (ok) {
          if (!ok) { return; }
          var original = btn.textContent;
          var copied = btn.getAttribute('data-copied') || original;
          btn.textContent = copied;
          setTimeout(function () {
            btn.textContent = original;
          }, 1500);
        });
      });
    }
  });
})();
