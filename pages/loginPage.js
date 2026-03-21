class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async launchApp(baseURL) {
    await this.page.goto(baseURL);
  }

  async clickSignIn() {
    await this.page.click('text=Sign in');
  }

  async enterCredentials(username, password) {
    await this.page.fill('#id_username', username);
    await this.page.fill('#id_password', password);
  }

  async clickLogin() {
    await this.page.click('input[value="Login"]');
  }
}

module.exports = LoginPage;