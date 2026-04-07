const { Before, After, AfterStep } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
const config = require('../../config/config');
const LoginPage = require('../../pages/loginPage');
const RegisterPage = require('../../pages/registerPage');
const LaunchPage = require('../../pages/launchPage');
const HomePage = require('../../pages/homePage');
const StackPage = require('../../pages/stackPage');
const DatastructurePage = require('../../pages/datastructurePage');
const GraphPage = require('../../pages/graphpage');
const ArrayPage = require('../../pages/arraypage');

let browser;
let context;
let page;

Before({ timeout: 60000 }, async function () {
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
  this.graphPage = new GraphPage(this.page);
  this.arrayPage = new ArrayPage(this.page);
  this.loginPage = new LoginPage(this.page);
});

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
