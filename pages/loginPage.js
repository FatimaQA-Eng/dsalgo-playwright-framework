class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator('#id_username');
    this.password = page.locator('#id_password');
    //this.loginBtn = page.locator('input[value="Login"]');
    this.loginBtn = page.locator('text=Login');
    this.errorMsg = page.locator('.alert');
    this.signOut = page.locator('text=Sign out');
  }

  async gotoLogin() {
    await this.page.click('text=Sign in');
  }

  async fillCredentials(username, password) {
    await this.username.fill(username || '');
    await this.password.fill(password || '');
  }

  async login(username, password) {
    await this.fillCredentials(username, password);
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }),
      this.loginBtn.click()
    ]);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

  async logout() {
    await this.signOut.click();
  }
}

module.exports = LoginPage;