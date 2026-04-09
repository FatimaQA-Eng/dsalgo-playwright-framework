
const { chromium, firefox, webkit } = require('playwright');

async function launchBrowser(browserName) {

  switch(browserName){
    case "firefox":
      return await firefox.launch({ headless: false });

    case "webkit":
      return await webkit.launch({ headless: false });

    case "chromium":
    default:
      return await chromium.launch({ headless: false });
  }

}
module.exports = { launchBrowser };