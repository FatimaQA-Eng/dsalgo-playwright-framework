const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../../pages/homePage');
//const loginData = require('../../test-data/loginData.json');
const path = require('path');

const loginData = require(path.resolve(__dirname, '../../test-data/loginData.json'));

let homePage;

Given('User is in Launch page', async function () {
  homePage = new HomePage(this.page);
  await homePage.launch();
});

When('User clicks Get Started button', async function () {
  await homePage.clickGetStarted();
});

Then('User lands on Home page', async function () {
  await expect(this.page).toHaveURL(/home/);
});

Then('Page title should be {string}', async function (title) {
  await expect(this.page).toHaveTitle(title);
});

Then('Register and Sign in links should be visible', async function () {
  await expect(homePage.registerLink).toBeVisible();
  await expect(homePage.signInLink).toBeVisible();
});

When('User clicks Register link', async function () {
  await homePage.registerLink.click();
});

Then('User lands on Register page', async function () {
  await expect(this.page).toHaveURL(/register/);
});

When('User clicks Sign in link', async function () {
  await homePage.signInLink.click();
});

Then('User lands on Login page', async function () {
  await expect(this.page).toHaveURL(/login/);
});

When('User clicks {string} card Get Started', async function (card) {
  await homePage.clickCard(card);
});

When('User selects {string} from dropdown', async function (option) {
  await homePage.selectDropdown(option);
});

Then('Alert message {string} should be displayed', async function (msg) {
  const banner = this.page.locator('.alert');
  await expect(banner).toContainText(msg);
});

Given('User logs in with valid credentials', async function () {
  await homePage.login(loginData.username, loginData.password);
});

Then('User should land on Home page', async function () {
  await expect(this.page).toHaveURL(/home/);
});

Then('Username should be visible on top', async function () {
  await this.page.waitForURL('**/home');
  await this.page.waitForLoadState('networkidle');
  // Use registered username from context, fallback to loginData if not available
  const usernameValue = this.username || require(require('path').resolve(__dirname, '../../test-data/loginData.json')).username;
  const username = this.page.locator('text=' + usernameValue);
  await username.waitFor({ state: 'visible', timeout: 15000 });
  await expect(username).toBeVisible();
});

Then('User should navigate to {string} page', async function (pageName) {

  if (pageName === "Linked List") {
    await this.page.waitForURL('**/linked-list/**');
  }

  if (pageName === "Array") {
    await this.page.waitForURL('**/array/**');
  }

  if (pageName === "Data") {
    await this.page.waitForURL('**/data-structures-introduction/**');
  }

  if (pageName === "Tree") {
    await this.page.waitForURL('**/tree/**');
  }

  if (pageName === "Graph") {
    await this.page.waitForURL('**/graph/**');
  }

});

When('User clicks Sign out', async function () {
  await homePage.signOut();
});

Then('Logout message should be displayed', async function () {
  await expect(this.page.locator('.alert'))
    .toContainText('Logged out successfully');
});