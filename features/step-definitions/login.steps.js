const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');
const data = require('../../test-data/loginData.json');

let loginPage;

// ---------- Background ----------
Given('User is on Launch page', async function () {
  await this.page.goto('https://dsportalapp.herokuapp.com/');
});

When('User clicks on Get Started button', async function () {
  await this.page.click('text=Get Started');
});

Then('User should land on Home Page', async function () {
  await expect(this.page).toHaveURL(/home/);
});

When('User clicks on Sign in link', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.gotoLogin();
});

Then('User should land on Login Page', async function () {
  await expect(this.page).toHaveURL(/login/);
});

// ---------- Login Scenarios ----------
When('User enters username {string} and password {string}', async function (userKey, passKey) {
  await loginPage.fillCredentials(data[userKey], data[passKey]);
});

When('User clicks Login button', async function () {
  await loginPage.clickLogin();
});

Then('Error message should be displayed', async function () {
  await expect(this.page.locator('.alert')).toBeVisible();
});

Then('Validation message should be displayed', async function () {
  const valid = await this.page.locator('#id_username')
    .evaluate(el => el.checkValidity());

  if (valid) throw new Error('Validation not triggered');
});

Then('User should be redirected to Home page', async function () {
  await expect(this.page).toHaveURL(/home/);
});

// ---------- Logout ----------
Given('User is logged in', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.gotoLogin();
  await loginPage.login(data.username, data.password);
});

When('User clicks Sign out from login', async function () {
  await loginPage.logout();
});

Then('User should be redirected to Home page with logout message', async function () {
  await expect(this.page.locator('.alert')).toContainText('Logged out successfully');
});

// ---------- Non-functional ----------
Then('Cursor should be in username field', async function () {
  await expect(this.page.locator('#id_username')).toBeFocused();
});

When('User presses Tab key', async function () {
  await this.page.keyboard.press('Tab');
});

Then('Focus should move in correct order', async function () {
  await expect(this.page.locator('#id_password')).toBeFocused();
});