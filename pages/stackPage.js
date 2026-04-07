class StackPage {
  constructor(page) {
    this.page = page;

    this.dropdown = page.locator('.nav-item.dropdown');
    this.runBtn = page.locator('text=Run');
    this.editor = page.locator('#editor'); // Use ID to be specific
    this.output = page.locator('#output');
    this.practiceLink = page.locator('text=Practice Questions');
    this.signOutLink = page.locator('text=Sign out');
  }

  async selectFromDropdown(option) {
    await this.dropdown.click();
    await this.page.locator(`.dropdown-menu >> text=${option}`).click();
  }

  async clickLink(link) {
    await this.page.locator(`text=${link}`).click();
  }

  async clickTryHere() {
    try {
      // Try 1: Look for button with "try" text using getByRole
      try {
        const button = this.page.getByRole('button', { name: /try/i });
        const count = await button.count();
        if (count > 0) {
          await button.first().click({ timeout: 500 });
          // Wait briefly for any navigation
          await this.page.waitForTimeout(500);
          return;
        }
      } catch (e) {
        // Continue to next attempt
      }
      
      // Try 2: Look for link with text "Try Here"
      try {
        const tryLink = this.page.locator('a, button').filter({ hasText: /Try/i }).first();
        await tryLink.click({ timeout: 5000 });
        await this.page.waitForTimeout(500);
        return;
      } catch (e) {
        // Continue to javascript fallback
      }
      
      // Try 3: JavaScript fallback - find by text content
      const result = await this.page.evaluate(() => {
        const elements = document.querySelectorAll('a, button');
        for (const elem of elements) {
          if (elem.textContent.toLowerCase().includes('try')) {
            elem.click();
            return true;
          }
        }
        return false;
      });
      
      if (result) {
        await this.page.waitForTimeout(500);
      } else {
        throw new Error('Could not find Try Here button on page');
      }
      
    } catch (e) {
      throw new Error(`Could not click Try Here button: ${e.message}`);
    }
  }

  async runCode(code) {
    // Wait for editor to be ready
    await this.page.waitForTimeout(500);
    await this.editor.fill(code, { timeout: 10000, force: true });
    await this.runBtn.click();
  }
  async clickPractice() {
  await this.practiceLink.click();
}

async signOut() {
  await this.signOutLink.click();
}
}

module.exports = StackPage;