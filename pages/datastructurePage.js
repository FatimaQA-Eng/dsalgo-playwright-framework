class DataStructurePage {
  constructor(page) {
    this.page = page;

    this.timeComplexityLink = page.locator('text=Time Complexity');
    this.practiceBtn = page.locator('text=Practice Questions');
    this.runBtn = page.locator('text=Run');
    this.editor = page.locator('textarea');
    this.output = page.locator('#output');
  }

  async clickTimeComplexity() {
    await this.timeComplexityLink.click();
  }

  async clickPracticeQuestions() {
    await this.practiceBtn.click();
  }

  async clickTryHere() {
    try {
      // Try 1: Look for button with "try" text using getByRole
      try {
        const button = this.page.getByRole('button', { name: /try/i });
        const count = await button.count();
        if (count > 0) {
          await button.first().click({ timeout: 5000 });
          // Wait for page and editor to fully load
          await this.page.waitForTimeout(1000);
          // Wait for textarea to appear
          const textarea = this.page.locator('textarea').first();
          await textarea.waitFor({ state: 'attached', timeout: 10000 });
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
        await this.page.waitForTimeout(1000);
        const textarea = this.page.locator('textarea').first();
        await textarea.waitFor({ state: 'attached', timeout: 10000 });
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
        await this.page.waitForTimeout(1000);
        const textarea = this.page.locator('textarea').first();
        await textarea.waitFor({ state: 'attached', timeout: 10000 });
        await this.page.waitForTimeout(500);
      } else {
        throw new Error('Could not find Try Here button on page');
      }
      
    } catch (e) {
      throw new Error(`Could not click Try Here button: ${e.message}`);
    }
  }

  async runCode(code) {
    await this.editor.fill(code);
    await this.runBtn.click();
  }
}

module.exports = DataStructurePage;