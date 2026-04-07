/*class LaunchPage {
  constructor(page) {
    this.page = page;
    this.getStartedButton = page.locator("button");
  }



    async navigateToPortal() {
    await this.page.goto(config.baseURL);
    }

  async verifyPageLoaded() {
    const title = await this.page.title();
    if (!title.includes("NumpyNinja")) {
      throw new Error("User not landed on dsAlgo portal");
    }
  }

  async verifyButtonPresent() {
    const count = await this.getStartedButton.count();
    if (count !== 1) {
      throw new Error("Button not present on launch page");
    }
  }

  async verifyButtonEnabled() {
    if (!(await this.getStartedButton.isEnabled())) {
      throw new Error("Button is not enabled");
    }
  }

  async verifyTitle(expectedTitle) {
    const title = await this.page.title();
    if (!title.includes(expectedTitle)) {
      throw new Error("Page title is incorrect");
    }
  }

  async verifyText(text) {
    await this.page.locator(`text=${text}`).waitFor();
  }
}

module.exports = LaunchPage;*/
class LaunchPage {
  constructor(page) {
    this.page = page;

    this.getStartedBtn = page.locator('text=Get Started');
    this.pageContent = page.locator('body');
  }

  async navigate() {
    await this.page.goto('https://dsportalapp.herokuapp.com/');
  }
}

module.exports = LaunchPage;