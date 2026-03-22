/* ============================================================
   BAU Portal Modernizer — Modern UI Overrides
   Runs in page's MAIN world (via web_accessible_resources)
   Overrides ALL rendering functions to produce modern HTML
   Also restructures the page (sidebar + header + workspace)
   ============================================================ */
(function () {
  'use strict';

  /* ── SVG Icons ─────────────────────────────────────────── */
  var IC = {
    announcements: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    payment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    register: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>',
    plan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    grades: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    services: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    questions: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    password: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    transfer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',
    logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    univ: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V10"/><path d="M20 20V10"/><path d="M12 2L2 8h20L12 2z"/><path d="M6 10v6"/><path d="M10 10v6"/><path d="M14 10v6"/><path d="M18 10v6"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  };

  /* ── Helpers ──────────────────────────────────────────── */
  function _getTheme() { try { return localStorage.getItem('bau-theme') || 'light'; } catch (e) { return 'light'; } }
  function _setTheme(t) { try { localStorage.setItem('bau-theme', t); } catch (e) { } document.body.setAttribute('data-theme', t); }
  function _toggleTheme() { _setTheme(document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light'); }

  /* Derive base path from current URL so logout works on all servers */
  function _basePath() {
    var p = window.location.pathname;
    var idx = p.indexOf('/reg_new/');
    return idx > -1 ? p.substring(0, idx) + '/reg_new' : '/reg_new';
  }

  /* Error card when portal functions aren't loaded yet */
  function _errorCard(title) {
    return '<div class="bau-card"><div class="bau-card-header"><h2>' + (title || 'خطأ') + '</h2></div>' +
      '<div class="bau-card-body"><div class="bau-error-state">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="48" height="48"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
      '<p>جاري تحميل البيانات... يرجى الانتظار أو إعادة تحميل الصفحة</p>' +
      '</div></div></div>';
  }

  /* ── Check if login page ────────────────────────────────── */
  if (document.querySelector('form[action*="login"]')) {
    // ========== LOGIN PAGE ==========
    var form = document.querySelector('form[action*="login"]');
    var action = form ? (form.getAttribute('action') || '/reg_new/actions/login') : '/reg_new/actions/login';
    var forgotHref = '', portalHref = '', college = 'كلية الهندسة التكنولوجية';

    var allLinks = document.querySelectorAll('a[href]');
    for (var li = 0; li < allLinks.length; li++) {
      var lh = allLinks[li].getAttribute('href') || '';
      if (lh.indexOf('stpass') > -1 || lh.indexOf('stpwd') > -1) forgotHref = lh;
      if (lh.indexOf('UserPortal') > -1) portalHref = lh;
    }
    var blueF = document.querySelectorAll('font[color="#0000FF"]');
    for (var fi = 0; fi < blueF.length; fi++) {
      var ft = (blueF[fi].textContent || '').trim();
      if (ft.indexOf('كلية') > -1) { college = ft; break; }
    }

    var theme = _getTheme();
    document.body.innerHTML =
      '<div class="bau-login-container">' +
      '<div class="bau-login-bg-shapes"><div class="bau-shape bau-shape-1"></div><div class="bau-shape bau-shape-2"></div><div class="bau-shape bau-shape-3"></div></div>' +
      '<div class="bau-login-wrapper">' +
      '<div class="bau-login-card">' +
      '<div class="bau-login-header">' +
      '<div class="bau-login-logo">' + IC.univ + '</div>' +
      '<h1 class="bau-login-title">جامعة البلقاء التطبيقية</h1>' +
      '<p class="bau-login-college">' + college + '</p>' +
      '<p class="bau-login-system">نظام التسجيل الإلكتروني</p>' +
      '</div>' +
      '<form class="bau-login-form" method="post" action="' + action + '">' +
      '<div class="bau-input-group"><div class="bau-input-icon">' + IC.user + '</div><input type="text" name="username" placeholder="رقم الطالب" required autocomplete="username"></div>' +
      '<div class="bau-input-group"><div class="bau-input-icon">' + IC.lock + '</div><input type="password" name="password" placeholder="كلمة المرور" required autocomplete="current-password"></div>' +
      '<button type="submit" class="bau-login-btn"><span>تسجيل الدخول</span></button>' +
      (forgotHref ? '<div class="bau-login-forgot"><a href="' + forgotHref + '" class="bau-forgot-link">نسيت كلمة المرور؟</a></div>' : '') +
      '</form>' +
      (portalHref ? '<div class="bau-login-extra"><div class="bau-login-divider"><span>روابط مفيدة</span></div><a href="' + portalHref + '" class="bau-login-link" target="_blank">بوابة البلقاء الإلكترونية</a></div>' : '') +
      '</div>' +
      '<div class="bau-login-footer">' +
      '<button class="bau-theme-fab" id="bauThemeFab">' + (theme === 'dark' ? '☀️' : '🌙') + '</button>' +
      '<p>جامعة البلقاء التطبيقية &copy; ' + new Date().getFullYear() + '</p>' +
      '</div>' +
      '</div>' +
      '</div>';

    document.body.className = 'bau-modern bau-login-page';
    document.body.setAttribute('data-theme', theme);
    document.body.setAttribute('dir', 'rtl');

    document.getElementById('bauThemeFab').onclick = function () {
      _toggleTheme();
      this.textContent = document.body.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    };
    console.log('[BAU] Login ✅');
    return; // Stop here for login page
  }

  // ========== PORTAL PAGE (after login) ==========

  /* ── Nav items ─────────────────────────────────────────── */
  var NAV = [
    { ic: IC.announcements, label: 'الإعلانات', fn: 'showAnnouncements' },
    { ic: IC.payment, label: 'محاسبة التسجيل', fn: 'showPayment' },
    { ic: IC.register, label: 'التسجيل', fn: 'showRegistration' },
    { ic: IC.plan, label: 'الخطة المفرغة', fn: 'showClassificationsMarks' },
    { ic: IC.grades, label: 'كشف العلامات', fn: 'showSemestersMarks' },
    { ic: IC.services, label: 'خدمات التسجيل', fn: 'showReports' },
    { ic: IC.questions, label: 'الاستفسارات', fn: 'showQuestions' },
    { ic: IC.password, label: 'كلمة المرور', fn: 'showPasswordForm' },
    { ic: IC.transfer, label: 'طلب تحويل', fn: 'showTransferForm' }
  ];

  /* ── Build page structure ──────────────────────────────── */
  var theme = _getTheme();
  var yr = new Date().getFullYear();

  var navHTML = '';
  for (var n = 0; n < NAV.length; n++) {
    navHTML += '<a href="javascript:' + NAV[n].fn + '()" class="bau-nav-item" data-idx="' + n + '"><span class="bau-nav-icon">' + NAV[n].ic + '</span><span class="bau-nav-label">' + NAV[n].label + '</span></a>';
  }

  document.body.innerHTML =
    '<div id="prompt_workspace" style="width:100%;height:100%;z-index:100;position:absolute;display:none;"></div>' +
    '<div class="bau-sidebar-overlay" id="bauOverlay"></div>' +
    '<div class="bau-app">' +
    '<aside class="bau-sidebar" id="bauSidebar">' +
    '<button class="bau-sidebar-close" id="bauSidebarClose"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
    '<div class="bau-sidebar-header">' +
    '<div class="bau-sidebar-logo">' + IC.univ + '</div>' +
    '<div class="bau-sidebar-title">جامعة البلقاء التطبيقية</div>' +
    '<div class="bau-sidebar-subtitle">بوابة الطالب الإلكترونية</div>' +
    '</div>' +
    '<nav class="bau-nav">' + navHTML +
    '<div class="bau-nav-divider"></div>' +
    '<a href="' + _basePath() + '/actions/logout" class="bau-nav-item logout-item"><span class="bau-nav-icon">' + IC.logout + '</span><span class="bau-nav-label">خروج</span></a>' +
    '</nav>' +
    '</aside>' +
    '<div class="bau-main">' +
    '<header class="bau-header">' +
    '<div class="bau-header-title">' +
    '<button class="bau-menu-toggle" id="bauMenu">' + IC.menu + '</button>' +
    '<span>بوابة الطالب</span>' +
    '</div>' +
    '<div class="bau-header-actions">' +
    '<span class="bau-theme-label" id="bauLbl">' + (theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي') + '</span>' +
    '<button class="bau-theme-toggle" id="bauTheme"></button>' +
    '</div>' +
    '</header>' +
    '<main id="workspace" class="bau-workspace"></main>' +
    '<footer class="bau-footer">جامعة البلقاء التطبيقية &copy; ' + yr + ' — <a href="http://www.bau.edu.jo" target="_blank">www.bau.edu.jo</a></footer>' +
    '</div>' +
    '</div>' +
    '<div id="temp" style="display:none"></div>';

  document.body.className = 'bau-modern';
  document.body.setAttribute('data-theme', theme);
  document.body.setAttribute('dir', 'rtl');

  /* ── Page events ───────────────────────────────────────── */
  document.getElementById('bauTheme').onclick = function () {
    _toggleTheme();
    document.getElementById('bauLbl').textContent = document.body.getAttribute('data-theme') === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي';
  };
  document.getElementById('bauMenu').onclick = function () {
    document.getElementById('bauSidebar').classList.toggle('open');
    document.getElementById('bauOverlay').classList.toggle('visible');
  };
  var _closeSidebar = function () {
    document.getElementById('bauSidebar').classList.remove('open');
    document.getElementById('bauOverlay').classList.remove('visible');
  };
  document.getElementById('bauOverlay').onclick = _closeSidebar;
  document.getElementById('bauSidebarClose').onclick = _closeSidebar;

  /* ══════════════════════════════════════════════════════════
     OVERRIDE ALL RENDERING FUNCTIONS
     ══════════════════════════════════════════════════════════ */

  /* ── getBlockCode — modern card ────────────────────────── */
  window.getBlockCode = function (blockId, title, content) {
    var id = blockId ? ' id="' + blockId + '"' : '';
    return '<div' + id + ' class="bau-card">' +
      '<div class="bau-card-header"><h2>' + title + '</h2></div>' +
      '<div class="bau-card-body">' + content + '</div>' +
      '</div>';
  };

  /* ── setWorkspaceContent — with animation ──────────────── */
  window.setWorkspaceContent = function (content) {
    var ws = document.getElementById('workspace');
    if (ws) {
      ws.innerHTML = '<div class="bau-content-animate">' + content + '</div>';
      try { ws.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { }
    }
  };

  /* ── setCurrentPage — track active nav ─────────────────── */
  var _origSetCurrentPage = window.setCurrentPage;
  window.setCurrentPage = function (pageId) {
    if (typeof _origSetCurrentPage === 'function') _origSetCurrentPage(pageId);
    var map = { 1: 0, 7: 1, 2: 2, 3: 3, 4: 4, 6: 5, 9: 6, 5: 7, 8: 8 };
    var items = document.querySelectorAll('.bau-nav-item:not(.logout-item)');
    for (var i = 0; i < items.length; i++) items[i].classList.remove('active');
    var idx = map[pageId];
    if (typeof idx !== 'undefined' && items[idx]) items[idx].classList.add('active');
  };

  /* ── getMainStudentInfoCode — modern student card ──────── */
  window.getMainStudentInfoCode = function () {
    try {
      var s = getStudent();
      var can = canChangeEnglishName();
      return getBlockCode('', 'معلومات الطالب',
        '<div class="bau-info-grid">' +
        '<div class="bau-info-item"><span class="bau-info-label">رقم الطالب</span><span class="bau-info-value">' + s.id + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">اسم الطالب</span><span class="bau-info-value">' + s.arabicName + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">الحالة الاكاديمية</span><span class="bau-info-value">' + s.statusDesc + '</span></div>' +
        '<div class="bau-info-item" id="english_name_section"><span class="bau-info-label">الاسم بالانجليزية</span><span class="bau-info-value">' + s.englishName + '</span>' + (can ? '<input type="button" class="bau-btn-sm" id="ch1" value="تغيير" onclick="doChangeName();">' : '') + '</div>' +
        '<div class="bau-info-item"><span class="bau-info-label">المبلغ المطلوب للمالية</span><span class="bau-info-value">' + s.financial + '</span></div>' +
        '<div class="bau-info-item" id="english_place_section"><span class="bau-info-label">مكان الولادة بالانجليزية</span><span class="bau-info-value">' + s.englishBornName + '</span>' + (can ? '<input type="button" class="bau-btn-sm" id="ch2" value="تغيير" onclick="doChangeEnglishBornPlace();">' : '') + '</div>' +
        '<div class="bau-info-item" id="arabic_place_section"><span class="bau-info-label">مكان الولادة بالعربية</span><span class="bau-info-value" id="arb_born_val">' + s.arabicBornName + '</span>' + (can ? '<input type="button" class="bau-btn-sm" id="ch3" value="تغيير" onclick="doChangeArabicBornPlace();">' : '') + '</div>' +
        '<div class="bau-info-item" id="national_no_section"><span class="bau-info-label">الرقم الوطني</span><span class="bau-info-value">' + s.nationalNo + '</span>' + (can ? '<input type="button" class="bau-btn-sm" id="ch4" value="تغيير" onclick="doChangeNationalNo();">' : '') + '</div>' +
        '<div class="bau-info-item"><span class="bau-info-label">حالة التسجيل</span><span class="bau-info-value">' + s.regStatus + '</span></div>' +
        (can ? '<div class="bau-info-item bau-info-full" id="button_section"><span class="bau-info-label">أقر بأن جميع المعلومات صحيحة</span><input type="button" class="bau-btn-primary" id="ch5" value="اعتماد" onclick="doConfirmInfo();"></div>' : '') +
        '</div>'
      );
    } catch (e) { return _errorCard('معلومات الطالب'); }
  };

  /* ── getStudentInfoCodeForServices ───────────────────────── */
  window.getStudentInfoCodeForServices = function () {
    try {
      var s = getStudent();
      return getBlockCode('', 'معلومات الطالب',
        '<div class="bau-info-grid">' +
        '<div class="bau-info-item"><span class="bau-info-label">رقم الطالب</span><span class="bau-info-value">' + s.id + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">اسم الطالب</span><span class="bau-info-value">' + s.arabicName + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">الحالة الاكاديمية</span><span class="bau-info-value">' + s.statusDesc + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">الحد الادنى</span><span class="bau-info-value">' + getMinHours() + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">الحد الاعلى</span><span class="bau-info-value">' + getMaxHours() + '</span></div>' +
        '</div>' +
        '<div class="bau-action-bar">' +
        '<input type="button" class="bau-btn-primary" value="تأجيل الفصل" onclick="doPostpond()">' +
        '<input type="button" class="bau-btn-danger" value="الغاء التسجيل" onclick="doDeleteSemesterReg()">' +
        '<input type="button" class="bau-btn-outline" value="الانقطاع عن الدراسة" onclick="doCutStudy()">' +
        '<input type="button" class="bau-btn-outline" value="اسقاط الفصل" onclick="doDrawStudy()">' +
        '<input type="button" class="bau-btn-outline" value="اسقاط مادة" onclick="chooseCourseForDrop()">' +
        '<input type="button" class="bau-btn-outline" value="طلب اعتراض" onclick="chooseCourseForObjection()">' +
        '</div>'
      );
    } catch (e) { return _errorCard('معلومات الطالب'); }
  };

  /* ── getMarksTable — modern table ──────────────────────── */
  window.getMarksTable = function (marks) {
    var code = '<div class="bau-table-wrap"><table class="bau-table">' +
      '<thead><tr><th>رقم المادة</th><th>اسم المادة</th><th>الساعات</th><th>النتيجة</th><th>ملاحظات</th></tr></thead><tbody>';
    for (var i = 0; i < marks.length; i++) {
      code += '<tr><td>' + marks[i].id + '</td><td>' + marks[i].name + '</td><td class="center">' + marks[i].hours + '</td><td class="center" dir="ltr">' + marks[i].result + '</td><td>' + marks[i].status + '</td></tr>';
    }
    code += '</tbody></table></div>';
    return code;
  };

  /* ── getStudentSemestersCode — modern semesters ─────────── */
  window.getStudentSemestersCode = function () {
    var semesters = getStudentSemesters();
    var code = getMainStudentInfoCode();
    for (var i = 0; i < semesters.length; i++) {
      var s = semesters[i];
      code += getBlockCode('', 'الفصل: ' + s.semester + ' — السنة: ' + s.year,
        '<div class="bau-info-grid bau-info-compact">' +
        '<div class="bau-info-item"><span class="bau-info-label">عدد الساعات</span><span class="bau-info-value">' + s.hours + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">المعدل الفصلي</span><span class="bau-info-value bau-highlight">' + s.average + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">ساعات النجاح التراكمية</span><span class="bau-info-value">' + s.accumulativePassHours + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">الساعات التراكمية</span><span class="bau-info-value">' + s.accumulativeHours + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">المعدل التراكمي</span><span class="bau-info-value bau-highlight">' + s.finalAverage + '</span></div>' +
        (s.remarks ? '<div class="bau-info-item"><span class="bau-info-label">ملاحظات</span><span class="bau-info-value">' + s.remarks + '</span></div>' : '') +
        '</div>' +
        getMarksTable(s.marks)
      );
    }
    return code;
  };

  /* ── getStudentClassificationsCode — modern plan ────────── */
  window.getStudentClassificationsCode = function () {
    var cls = getStudentClassifications();
    var code = getMainStudentInfoCode();
    for (var i = 0; i < cls.length; i++) {
      code += getBlockCode('', cls[i].arabicName,
        '<div class="bau-info-grid bau-info-compact">' +
        '<div class="bau-info-item"><span class="bau-info-label">الساعات المطلوبة</span><span class="bau-info-value">' + cls[i].maxHours + '</span></div>' +
        '<div class="bau-info-item"><span class="bau-info-label">الساعات المقطوعة</span><span class="bau-info-value">' + cls[i].currentHours + '</span></div>' +
        '</div>' +
        getMarksTable(cls[i].marks)
      );
    }
    return code;
  };

  /* ── getAnnouncementCode — modern announcement card ────── */
  window.getAnnouncementCode = function (a) {
    return getBlockCode('', 'إعلان بتاريخ ' + a.date, '<div class="bau-announcement-text">' + replaceLines(a.text) + '</div>');
  };

  /* ── getBankInfoFormCode — modern bank info form ────────── */
  window.getBankInfoFormCode = function () {
    return getBlockCode('', 'معلومات البطاقة الذكية',
      '<div class="bau-form-stack" style="max-width:600px">' +
      '<div class="bau-form-section">' +
      '<div class="bau-form-section-title"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>الاسم باللغة الانجليزية من اربع مقاطع</div>' +
      '<div class="bau-form-2col">' +
      '<div class="bau-form-group"><label class="bau-form-label">الاسم الأول</label><input type="text" class="bau-input" id="name1" placeholder="First Name"></div>' +
      '<div class="bau-form-group"><label class="bau-form-label">الاسم الثاني</label><input type="text" class="bau-input" id="name2" placeholder="Second Name"></div>' +
      '<div class="bau-form-group"><label class="bau-form-label">الاسم الثالث</label><input type="text" class="bau-input" id="name3" placeholder="Third Name"></div>' +
      '<div class="bau-form-group"><label class="bau-form-label">الاسم الرابع</label><input type="text" class="bau-input" id="name4" placeholder="Last Name"></div>' +
      '</div>' +
      '</div>' +
      '<div class="bau-form-section">' +
      '<div class="bau-form-section-title"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>معلومات التواصل</div>' +
      '<div class="bau-form-group"><label class="bau-form-label">رقم الموبايل</label><input type="text" class="bau-input" id="mobile_no" placeholder="07XXXXXXXX"></div>' +
      '<div class="bau-form-group"><label class="bau-form-label">البريد الالكتروني</label><input type="text" class="bau-input" id="email" placeholder="email@example.com"></div>' +
      '</div>' +
      '<div class="bau-form-group bau-form-center"><input type="button" class="bau-btn-primary" value="اعتماد المعلومات" onclick="doSubmitInfo();"></div>' +
      '</div>'
    );
  };

  /* ── getPasswordForm — modern password form ─────────────── */
  window.getPasswordForm = function () {
    return getBlockCode('', 'تغيير كلمة المرور',
      '<div class="bau-form-stack">' +
      '<div class="bau-form-group"><label class="bau-form-label">كلمة المرور الحالية:</label><input type="password" class="bau-input" id="old_password"></div>' +
      '<div class="bau-form-group"><label class="bau-form-label">كلمة المرور الجديدة:</label><input type="password" class="bau-input" id="new_password"></div>' +
      '<div class="bau-form-group"><label class="bau-form-label">تأكيد كلمة المرور:</label><input type="password" class="bau-input" id="conf_password"></div>' +
      '<div class="bau-form-group bau-form-center"><input type="button" class="bau-btn-primary" value="تغيير كلمة المرور" onclick="doChangePassword();"></div>' +
      '</div>'
    );
  };

  /* ── getPaymentForm — modern payment form ───────────────── */
  window.getPaymentForm = function () {
    return getBlockCode('', 'حساب الرسوم المطلوبة',
      '<div class="bau-form-stack">' +
      '<div class="bau-form-group"><label class="bau-form-label">عدد الساعات المطلوب تسجيلها:</label><input type="text" class="bau-input" id="hours" value="' + getReservedHours() + '"></div>' +
      '<div class="bau-form-group"><label class="bau-form-label">المبلغ المطلوب:</label><div class="bau-info-value bau-highlight" id="amount">&nbsp;</div></div>' +
      '<div id="error_msg" class="bau-error-msg"></div>' +
      '<div class="bau-form-group bau-form-center"><input type="button" class="bau-btn-primary" value="حساب المبلغ المطلوب" onclick="doCalcPayment();"></div>' +
      '</div>'
    );
  };

  /* ── getReportCode — modern report link ─────────────────── */
  window.getReportCode = function (index, report) {
    return '<a href="actions/showReport?index=' + index + '" target="blank" class="bau-report-link">' +
      '<span class="bau-report-num">' + (index + 1) + '</span>' +
      '<span class="bau-report-name">' + report + '</span>' +
      '</a>';
  };

  /* ── getQuestionFormCode — modern question form ─────────── */
  window.getQuestionFormCode = function () {
    return getBlockCode('', 'ادخال استفسار جديد',
      '<div class="bau-form-stack">' +
      '<div class="bau-form-group"><label class="bau-form-label">رقم المادة:</label><input type="text" class="bau-input" id="cor_no" placeholder="رقم المادة"></div>' +
      '<div class="bau-form-group"><label class="bau-form-label">نص الاستفسار:</label><textarea class="bau-textarea" id="question_body" placeholder="اكتب استفسارك هنا..."></textarea></div>' +
      '<div class="bau-form-group bau-form-center"><input type="button" class="bau-btn-primary" value="ارسال الاستفسار" onclick="doSubmitQuestion();"></div>' +
      '</div>'
    );
  };

  /* ── getQuestionCode — modern Q&A card ──────────────────── */
  window.getQuestionCode = function (q) {
    return getBlockCode('', replaceLines(q.text), '<div class="bau-answer">' + replaceLines(q.answer) + '</div>');
  };

  /* ── getTransferForm — modern transfer form ─────────────── */
  window.getTransferForm = function (allowedSpecs) {
    var opts = '';
    for (var i = 0; i < allowedSpecs.length; i++)
      opts += '<option value="' + allowedSpecs[i].id + '">' + allowedSpecs[i].name + '</option>';
    return getBlockCode('', 'طلبات التحويل',
      '<div class="bau-form-stack">' +
      '<div class="bau-form-group"><label class="bau-form-label">التخصص المطلوب:</label><select class="bau-select" id="specs">' + opts + '</select></div>' +
      '<div class="bau-form-group bau-form-center"><input type="button" class="bau-btn-primary" value="تخزين الطلب" onclick="doApplyForTransfer();"></div>' +
      '</div>'
    );
  };

  console.log('[BAU] Modern UI overrides applied ✅');
})();