const { Before, After, AfterStep } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
const config = require('../../config/config');

let browser;
let context;
let page;

Before(async function () {
  if (config.browser === 'firefox') browser = await firefox.launch({ headless: config.headless });
  else if (config.browser === 'webkit') browser = await webkit.launch({ headless: config.headless });
  else browser = await chromium.launch({ headless: config.headless });

  context = await browser.newContext();
  page = await context.newPage();

  this.page = page;
});

AfterStep(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
});

After(async function () {
  await this.page.close();
  await browser.close();
});