/* ============================================================
   BAU Portal Modernizer — Popup Script
   Handles theme toggle and communicates with content script
   ============================================================ */

(function () {
  'use strict';

  const popup = document.getElementById('popup');
  const themeToggleRow = document.getElementById('themeToggleRow');
  const themeSwitch = document.getElementById('themeSwitch');
  const themeText = document.getElementById('themeText');
  const themeIcon = document.getElementById('themeIcon');

  const sunPath = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  const moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

  function updateUI(isDark) {
    popup.setAttribute('data-theme', isDark ? 'dark' : 'light');

    if (isDark) {
      themeSwitch.classList.add('on');
      themeText.textContent = 'الوضع النهاري';
      themeIcon.innerHTML = sunPath;
    } else {
      themeSwitch.classList.remove('on');
      themeText.textContent = 'الوضع الليلي';
      themeIcon.innerHTML = moonPath;
    }
  }

  // Load saved theme
  chrome.storage.local.get(['bauTheme'], function (result) {
    const isDark = result.bauTheme === 'dark';
    updateUI(isDark);
  });

  // Toggle theme on click
  themeToggleRow.addEventListener('click', function () {
    const isDark = !themeSwitch.classList.contains('on');

    updateUI(isDark);

    // Save to chrome.storage
    chrome.storage.local.set({ bauTheme: isDark ? 'dark' : 'light' });

    // Send message to active tab's content script
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: 'setTheme',
          theme: isDark ? 'dark' : 'light'
        }).catch(function () {
          // Tab might not have content script, ignore
        });
      }
    });
  });

})();
