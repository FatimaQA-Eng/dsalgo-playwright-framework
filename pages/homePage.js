class HomePage {
  constructor(page) {
    this.page = page;

    this.getStartedBtn = page.locator('text=Get Started').first();
    this.registerLink = page.locator('text=Register');
    this.signInLink = page.locator('text=Sign in');
    this.dropdown = page.locator('.nav-item.dropdown');
    this.signOutLink = page.locator('text=Sign out');
  }

  async launch() {
    await this.page.goto('https://dsportalapp.herokuapp.com/');
  }

  async clickGetStarted() {
    await this.getStartedBtn.click();
  }

async clickCard(cardName) {
  const card = this.page.locator('.card').filter({
    has: this.page.locator(`h5:has-text("${cardName}")`)
  });

  await card.locator('text=Get Started').click();
}

  async selectDropdown(option) {
    await this.dropdown.click();
    await this.page.locator(`.dropdown-menu >> text=${option}`).click();
  }

 async login(username, password) {
  await this.page.click('text=Sign in');

  await this.page.fill('#id_username', username);
  await this.page.fill('#id_password', password);

  await Promise.all([
    this.page.waitForNavigation(),
    this.page.click('text=Login')
  ]);
}
  async signOut() {
    await this.signOutLink.click();
  }
}

module.exports = HomePage;