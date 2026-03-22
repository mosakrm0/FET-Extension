/* ============================================================
   BAU Portal Modernizer — Content Script (Isolated World)
   Injects Google Fonts + modern-ui.js into the page
   Syncs theme between page world and chrome.storage
   ============================================================ */
(function () {
  // 1. Inject Google Fonts
  var font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap';
  document.head.appendChild(font);

  // 2. Inject modern-ui.js into the PAGE's world (bypasses CSP)
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL('modern-ui.js');
  script.charset = 'utf-8';
  (document.head || document.documentElement).appendChild(script);

  // 3. Listen for popup theme messages
  try {
    chrome.runtime.onMessage.addListener(function (msg) {
      if (msg.action === 'setTheme') {
        try { localStorage.setItem('bau-theme', msg.theme); } catch (e) {}
        document.body.setAttribute('data-theme', msg.theme);
        var lbl = document.getElementById('bauLbl');
        if (lbl) lbl.textContent = msg.theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي';
      }
    });
  } catch (e) {}

  // 4. Observe data-theme changes on <body> (fired by modern-ui.js)
  //    and sync to chrome.storage so the popup stays in sync
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.attributeName === 'data-theme') {
        var theme = document.body.getAttribute('data-theme') || 'light';
        try {
          chrome.storage.local.set({ bauTheme: theme });
        } catch (e) {}
      }
    });
  });

  // Start observing once <body> is available
  function startObserving() {
    if (document.body) {
      observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
      });
    }
  }
  startObserving();
})();
