const LoginPage = require("./loginPage");
const TreePage = require("./TreePage");
const QueuePage = require("./QueuePage");
const { expect } = require('@playwright/test');
const { timeout } = require("../config/config");



class TryEditorPage {
  constructor(page) {
    this.page = page;
  }

 async goToTryEditorPage()
  {
   await this.page.goto("https://dsportalapp.herokuapp.com/tryEditor");
    console.log(await this.page.url());

  }
  async verifycodeinput(codetext) {
    // Reload page
    await this.page.reload();

    // Type code in CodeMirror
    const codeInput = this.page.locator('.CodeMirror');
    await codeInput.click();
    console.log('Typing code:', codetext);
    await this.page.keyboard.type(codetext);

    // Run button
    const runBtn = this.page.getByRole('button', { name: /Run/i });
    await runBtn.waitFor({ state: "visible" });

    // Prepare dialog listener BEFORE clicking Run
    const dialogHandler = this.page.waitForEvent('dialog', { timeout: 3000 })
        .then(async dialog => {
            console.log("Alert message:", dialog.message());
            await dialog.accept(); // Only accepts once
            return dialog.message();
        })
        .catch(error => {
            if (error.name === 'TimeoutError') {
                console.log("No alert appeared.");
                return null;
            }
            throw error;
        });

    // Click Run
    await runBtn.click();

    // Wait for dialog message (if any)
    const alertMessage = await dialogHandler;

    // Capture output if visible
    const output = this.page.locator('#output');
    try {
        await output.waitFor({ state: "visible", timeout: 5000 });
        const result = await output.textContent();
        console.log('Code Output:', result);
        await expect.soft(output).not.toBeEmpty();
    } catch (error) {
        console.log("No output detected, possibly alert handled.");
    }

    return alertMessage; // return for assertion in step definitions
}

}
module.exports = TryEditorPage;    