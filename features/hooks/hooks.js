const { setDefaultTimeout, Before, After, AfterStep, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
const config = require('../../config/config');
const TreePage = require('../../pages/TreePage');

let browser;
let context;
let page;

// Set Cucumber step timeout globally before any tests start
setDefaultTimeout(config.timeout || 90000);

BeforeAll(async function () {
  if (config.browser === 'firefox') browser = await firefox.launch({ headless: config.headless });
  else if (config.browser === 'webkit') browser = await webkit.launch({ headless: config.headless });
  else browser = await chromium.launch({ headless: config.headless });

  context = await browser.newContext();
  page = await context.newPage();
  });

Before({ timeout: 60000 }, async function () {
  this.context = context; 
  this.page = page;
 
});


AfterStep(async function (scenario) {

  if (scenario.result.status === 'FAILED') {
    const screenshot = await this.page.screenshot();
  this.attach(screenshot, 'image/png');
  path: `reports/screenshots/${Date.now()}.png`
  
 } });



AfterAll(async function () {
  setTimeout(async () => {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (browser) await browser.close();
  }, 3000); // Adjust the timeout as needed

});