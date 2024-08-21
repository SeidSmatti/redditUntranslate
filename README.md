
# redditUntranslate Extension

## Overview

**redditUntranslate** is a Chrome extension designed to remove language parameters automatically added to Reddit URLs, ensuring that users are redirected to the original, untranslated version of the site. This extension is particularly useful for users who prefer browsing Reddit in its default language without any automatic translations.

## Features

- **Automatic URL Redirection**: Strips out the language parameters (`?tl=...`) from Reddit URLs.
- **Lightweight and Efficient**: The extension operates seamlessly in the background with minimal impact on browsing performance.
- **Privacy-Focused**: No data is collected or stored; the extension only processes URLs locally.

## Installation

### Mozilla and Chrome Web Store
1. [Mozilla Addons](https://addons.mozilla.org/fr/firefox/addon/reddituntranslte/)
2. Chrome Web Store (Currently being reviewed)

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

1. Download the repository or clone it using the following command:
   ```sh
   git clone https://github.com/SeidSmatti/reddituntranslate.git
   ```

1. Open Firefox and navigate to about:debugging.
2. Click on "This Firefox" on the left sidebar.
3. Click on "Load Temporary Add-on..." and select the manifest.json file inside the reddit-untranslate directory from the cloned repository.

The extension should now be installed temporarily. Note that it will be removed when you restart Firefox, so repeat these steps if needed.

## Usage

Once installed, the Reddit Untranslate extension works automatically. Simply navigate to any Reddit URL, and the extension will remove any language parameters, redirecting you to the original version of the site.

## Permissions

This extension requires the following permissions:

- **`declarativeNetRequest`**: To intercept and modify network requests, ensuring the removal of language parameters from Reddit URLs.
- **`declarativeNetRequestWithHostAccess`**: To apply the redirection rules specifically to Reddit URLs.
- **`declarativeNetRequestFeedback`**: To monitor and ensure that the redirection rules are functioning as intended.
- **Host Access to `https://www.reddit.com/*`**: This is necessary to apply the modifications only to Reddit URLs.

## Privacy

The redditUntranslate extension does not collect, store, or transmit any personal data. All URL processing is done locally on your device.


## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.

An asset of the logo is from [Freepik](https://fr.freepik.com/)


