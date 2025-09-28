# redditUntranslate Extension

## Overview

**redditUntranslate** removes language parameters that are automatically added to Reddit URLs, ensuring redirection to original, non-translated content. This extension is particularly useful for users who prefer browsing Reddit in their default language without automatic translation. It also provides an ***optional*** toggle that adds `-inurl:?tl=` at the end of every Google search to ignore the translated pages.

### Repository structure 
```text
├── extension          # Code for current build
│   ├── content_script.js
│   ├── icon.png
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── rules.json
├── legacy             # Code for older builds
│   ├── 1.x_chrome
│   │   ├── background.js
│   │   ├── icon.png
│   │   ├── manifest.json
│   │   └── rules.json
│   ├── 1.x_firefox
│   │   ├── background.js
│   │   ├── icon.png
│   │   └── manifest.json
│   └── 2.0
│       ├── icon.png
│       ├── manifest.json
│       └── rules.json
├── LICENSE
└── README.md
```
## Features

- **Automatic URL Redirection**: Strips out the language parameters (`?tl=...`) from Reddit URLs.
- **Optional Google filtering** : Adds a string that makes Google ignore the translated Reddit pages.
- **Lightweight and Efficient**: The extension operates seamlessly in the background with minimal impact on browsing performance.
- **Privacy-Focused**: No data is collected or stored; the extension only processes URLs locally.

## Installation

### Mozilla and Chrome Web Store
1. [Mozilla Addons](https://addons.mozilla.org/addon/reddituntranslate/) (Also works on the android version of Firefox)
2. [Chrome Web Store](https://chromewebstore.google.com/detail/reddit-untranslate/eninkmbmgkpkcelmohdlgldafpkfpnaf)

### To install the extension directly from GitHub (for testing only):
**For Chrome:
1. Download the repository or clone it using the following command:

   ```sh
   git clone https://github.com/SeidSmatti/reddituntranslate.git
   ```


2. Open Chrome and navigate to chrome://extensions/.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the reddit-untranslate directory from the cloned repository.

**For Firefox:
s
1. Download the repository or clone it using the following command:
   ```sh
   git clone https://github.com/SeidSmatti/reddituntranslate.git
   ```

1. Open Firefox and navigate to about:debugging.
2. Click on "This Firefox" on the left sidebar.
3. Click on "Load Temporary Add-on..." and select the manifest.json file inside the reddit-untranslate directory from the cloned repository.

The extension should now be installed temporarily. Note that it will be removed when you restart Firefox, so repeat these steps if needed.


## Usage

Once installed, redditUntranslate works automatically. Simply browse to any Reddit URL, the extension will remove any language parameters, redirecting you to the original version of the site. You can enable the optional Google filtering in the extension popup.


## Permissions

This extension requires the following permissions:

- **`declarativeNetRequest`**: To intercept and modify network requests, ensuring the removal of language parameters from Reddit URLs.
- **Host Access to `https://*.reddit.com/*`**: This is necessary to apply the modifications only to Reddit URLs.
- **Host Access to `https://google.com/*`** : This is used in the optional google filter to add the ignore string.

    
## Privacy

The redditUntranslate extension does not collect, store, or transmit any personal data. All URL processing is done locally on your device.

## What's new
- 18/04/2025 (2.0) : Rewritten on Manifest V3—now one cross‑browser build with a single queryTransform rule, no background script, no duplicate manifests, and only one permission (declarativeNetRequest).
- 27/04/2025 (2.1) : Added a Google filter in the form of an optional toggle that filters out translated Reddit pages from Google search results.

## Blocklists

This extension's function can also be achieved by subscribing to the following blocklists for ad blockers and search blockers.

### Ad blockers

Ad blockers such as [uBlock Origin](https://ublockorigin.com) or [Adguard](https://adguard.com) can also remove the `?tl=` parameter from Reddit URLs. Subscribing to this blocklist replicates the main untranslation feature of the full redditUntranslate extension

[Blocklist in AdBlock format.](https://raw.githubusercontent.com/SeidSmatti/redditUntranslate/main/adblock.txt)

### Search blockers (`-inurl:?tl=`)

The [uBlacklist](https://github.com/iorate/ublacklist) browser extension removes sites from search engine results. Subscribing to this blocklist replicates the `-inurl:?tl=` option from the full redditUntranslate extension.

[Blocklist for uBlacklist.](https://raw.githubusercontent.com/SeidSmatti/redditUntranslate/main/ublacklist.txt)

[Click here to subscribe on Chrome.](https://iorate.github.io/ublacklist/subscribe?name=redditUntranslate&url=https://raw.githubusercontent.com/SeidSmatti/redditUntranslate/main/ublacklist.txt)  (This automatic subscription link is only compatible with Chrome, you have to add it by yourself on other browsers!)

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.

An asset of the logo is from [Freepik](https://fr.freepik.com/)

## Support me

This project is most likely done, but if you want to support (potential) new ideas you can :

<a href="https://www.buymeacoffee.com/seidsmatti">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="217" height="60">
</a>
