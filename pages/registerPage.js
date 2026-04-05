class RegisterPage {
  constructor(page) {
    this.page = page;

    this.username = '#id_username';
    this.password = '#id_password1';
    this.confirmPassword = '#id_password2';
    this.registerBtn = 'input[type="submit"]';
    this.alert = '.alert';
  }

  async navigate() {
    await this.page.goto('https://dsportalapp.herokuapp.com/register');
  }

  async enterData(username, password, confirmPassword) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.fill(this.confirmPassword, confirmPassword);
  }

  async clickRegister() {
    await this.page.click(this.registerBtn);
  }
}

module.exports = RegisterPage;