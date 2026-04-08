const { setDefaultTimeout, Before, After, AfterStep, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
const config = require('../../config/config');

const LoginPage = require('../../pages/loginPage');
const RegisterPage = require('../../pages/registerPage');
const LaunchPage = require('../../pages/launchPage');
const HomePage = require('../../pages/homePage');
const StackPage = require('../../pages/stackPage');
const DatastructurePage = require('../../pages/datastructurePage');
const TreePage = require('../../pages/TreePage');
const QueuePage = require('../../pages/QueuePage');
const LinkedlistPage = require('../../pages/LinkedListPage');

let browser;
let context;
let page;


Before({ timeout: 60000 }, async function () {
 // Launch browser based on config — supports Chrome, Firefox, Safari
  if (config.browser === 'firefox') {
    browser = await firefox.launch({ headless: config.headless });
  } else if (config.browser === 'webkit') {
    browser = await webkit.launch({ headless: config.headless });
  } else {
    browser = await chromium.launch({ headless: config.headless });
  }

  context = await browser.newContext();
  page = await context.newPage();

  this.page = page;
  this.launchPage = new LaunchPage(this.page);
  this.registerPage = new RegisterPage(this.page);
  this.homePage = new HomePage(this.page);
  this.stackPage = new StackPage(this.page);
  this.datastructurePage = new DatastructurePage(this.page);
});

// Takes screenshot automatically when any test FAILS
AfterStep(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
});

After({ timeout: 60000 }, async function () {
  if (this.page) {
    await this.page.close();
  }
  if (browser) {
    await browser.close();
  }
});