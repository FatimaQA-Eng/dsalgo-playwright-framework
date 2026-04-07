const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const RegisterPage = require('../../pages/registerPage');
const data = require('../../test-data/registerData.json');

let registerPage;

Given('User is on Registration page', async function () {
  registerPage = new RegisterPage(this.page);
  await registerPage.navigate();
});

When('User enters registration data {string}', async function (type) {

  const testData = data[type];

  // generate unique username for valid case
  if (type === 'valid') {
    testData.username = 'user' + Date.now();
    this.username = testData.username; // store for later validation
  }

  await registerPage.enterData(
    testData.username,
    testData.password,
    testData.confirmPassword
  );
});

When('User clicks Register button', async function () {
  await registerPage.clickRegister();
});


// FIX 1: Validation (NO TIMEOUT NOW)
Then('Required field validation should be displayed', async function () {

  const isUsernameValid = await this.page.locator('#id_username')
    .evaluate(el => el.checkValidity());

  const isPasswordValid = await this.page.locator('#id_password1')
    .evaluate(el => el.checkValidity());

  const isConfirmValid = await this.page.locator('#id_password2')
    .evaluate(el => el.checkValidity());

  if (isUsernameValid && isPasswordValid && isConfirmValid) {
    throw new Error('Validation not triggered');
  }
});


// FIX 2: Password mismatch
Then('Password mismatch error should be displayed', async function () {
  await expect(this.page.locator('.alert'))
    .toContainText('password_mismatch');
});

When('User logs in with same credentials', async function () {

  // Go directly to login page (NO UI dependency)
  await this.page.goto('https://dsportalapp.herokuapp.com/login');

  // wait for page to load
  await this.page.waitForLoadState('domcontentloaded');

  // fill credentials
  await this.page.fill('#id_username', this.username);
  await this.page.fill('#id_password', 'Test@123');

  // click login
  await this.page.click('input[type="submit"]');

  // wait for successful navigation
  await this.page.waitForURL('**/home', { timeout: 15000 });
});
// FIX 3: Success message (MAIN FIX )
Then('Success message should be displayed', async function () {

  // wait for navigation AFTER registration
  await this.page.waitForLoadState('networkidle');

  const alert = this.page.locator('.alert');

  await expect(alert).toBeVisible({ timeout: 10000 });

  await expect(alert).toContainText('New Account Created');
});



// FIX 4: Username visible (MAIN ISSUE FIX - wait for username to appear after registration)
/*Then('Username should be visible on top', async function () {

  const usernameText = this.page.locator('text=' + this.username);

  await expect(usernameText).toBeVisible({ timeout: 10000 });
});*/