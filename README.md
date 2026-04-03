# BAU Portal Modernizer (Chrome Extension)

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)
![Manifest](https://img.shields.io/badge/Manifest-V3-green.svg)
![Tech Stack](https://img.shields.io/badge/Tech-Vanilla_JS_%7C_CSS3-orange.svg)

A powerful Chrome Extension designed to completely overhaul and modernize the legacy student portal of **Al-Balqa Applied University (BAU) - Faculty of Engineering Technology (FET)**. 

This extension injects a fresh, responsive, and accessible UI over the existing JSP-based system without affecting the core backend functionality.

##  Key Features

*  **Complete UI/UX Overhaul:** Replaces the outdated table-based layouts with a modern, glassmorphism-inspired design system.
*  **Dark & Light Mode:** Built-in theme toggler synced locally via `chrome.storage` for a consistent experience across sessions.
*  **Zero Dependencies:** Built entirely with Vanilla JavaScript and CSS. Extremely lightweight and fast.
*  **Legacy Code Overriding:** Cleverly intercepts and overrides legacy global rendering functions (e.g., `getBlockCode`, `getMarksTable`) to output modern HTML structures.
*  **Responsive Design:** Introduces a collapsible sidebar and mobile-friendly grids, making the portal usable on all screen sizes.
*  **Better Typography:** Integrates the 'Tajawal' Google Font for highly readable Arabic text.

##  Technical Architecture

* `manifest.json`: Configured for **Manifest V3** with strict, isolated permissions (`activeTab`, `storage`).
* `content.js`: Acts as the bridge. It operates in the isolated world, injects fonts, and securely loads the main UI script.
* `modern-ui.js`: The core engine. Injected into the page's MAIN world to override legacy portal functions, scrape necessary data, and dynamically render the new UI components.
* `styles.css`: A comprehensive CSS file utilizing CSS variables, flexbox/grid layouts, and smooth animations.
* `popup.html/js`: A sleek extension popup to control the theme settings globally.

##  Installation (Developer Mode)

Since this extension is not yet published on the Chrome Web Store, you can install it locally:

1. Clone this repository to your local machine:
   ```bash
   git clone [https://github.com/mosakrm0/bau-portal-modernizer.git](https://github.com/mosakrm0/bau-portal-modernizer.git)
   Open Google Chrome and navigate to chrome://extensions/.
   ```
2. Enable "Developer mode" (toggle switch in the top right corner).
3. Click on "Load unpacked" and select the folder containing the cloned repository.
4. Visit the BAU Student Portal and enjoy the new experience!

##  Project Structure

```text
├── icons/               # Extension icons (16x16, 48x48, 128x128)
├── content.js           # Content script to bridge isolated/main worlds
├── manifest.json        # Extension configuration (V3)
├── modern-ui.js         # Core logic (DOM manipulation & function overrides)
├── popup.html           # Extension popup interface
├── popup.js             # Extension popup logic (Theme syncing)
└── styles.css           # Global modern stylesheet
```

## Author

**Mosa Akram** * GitHub: [@mosakrm0](https://github.com/mosakrm0)
