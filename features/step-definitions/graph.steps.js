const { Given, When, Then } = require('@cucumber/cucumber');

// ─────────────────────────────────────────
// LAUNCH PAGE STEPS
// ─────────────────────────────────────────

Given('The user has browser open', async function () {
  await this.graphPage.openBrowser();
});

When('The user enters correct dsAlgo URL', async function () {
  await this.graphPage.navigateToURL();
});

Then('The user should be able to land on dsAlgo portal', async function () {
  await this.graphPage.verifyLandingPage();
});

Then('The user should see "Get Started" button in launch page',
  async function () {
    await this.graphPage.verifyGetStartedButtonVisible();
  });

Then('The button should be in enabled state', async function () {
  await this.graphPage.verifyGetStartedButtonEnabled();
});

Then('The page title should be "NumpyNinja"', async function () {
  await this.graphPage.verifyPageTitle();
});

Then('The user should see page content text', async function () {
  await this.graphPage.verifyPageContentText();
});

// ─────────────────────────────────────────
// GIVEN — NAVIGATION STEPS
// ─────────────────────────────────────────

Given('user is on the Home page after login', async function () {
  await this.graphPage.navigateToHomeAfterLogin();
});

Given('The user is in the {string} page after Sign in',
  { timeout: 30000 }, async function (pageName) {
    await this.graphPage.navigateToHomeAfterLogin();
    console.log(`Navigated and now on: ${pageName}`);
  });

Given('The user is in the {string} page',
  { timeout: 30000 }, async function (pageName) {
    if (pageName === 'Graph') {
      await this.graphPage.navigateToHomeAfterLogin();
      await this.graphPage.clickGraphGetStarted();
    } else if (pageName === 'Graph Representations') {
      await this.graphPage.navigateToHomeAfterLogin();
      await this.graphPage.clickGraphGetStarted();
      await this.graphPage.clickGraphRepresentationsLink();
    } else {
      console.log(`Currently on: ${pageName}`);
    }
  });

Given('The user is on the {string} page',
  { timeout: 30000 }, async function (pageName) {
    if (pageName === 'Graph') {
      await this.graphPage.navigateToHomeAfterLogin();
      await this.graphPage.clickGraphGetStarted();
    } else if (pageName === 'Graph Representations') {
      await this.graphPage.navigateToHomeAfterLogin();
      await this.graphPage.clickGraphGetStarted();
      await this.graphPage.clickGraphRepresentationsLink();
    } else if (pageName === 'Try Editor') {
      await this.graphPage.navigateToHomeAfterLogin();
      await this.graphPage.clickGraphGetStarted();
      await this.graphPage.clickTryHere();
    } else {
      console.log(`Currently on: ${pageName}`);
    }
  });

Given('The user is on the Try Editor page',
  { timeout: 30000 }, async function () {
    await this.graphPage.navigateToHomeAfterLogin();
    await this.graphPage.clickGraphGetStarted();
    await this.graphPage.clickTryHere();
  });

// ─────────────────────────────────────────
// WHEN STEPS
// ─────────────────────────────────────────

When('user clicks {string} in Graph module',
  { timeout: 20000 }, async function (button) {
    if (button === 'Get Started') {
      await this.graphPage.clickGraphGetStarted();
    }
  });

When('The user clicks {string} button in the Graph module at Home page',
  { timeout: 20000 }, async function (button) {
    await this.graphPage.clickGraphGetStartedDefect();
  });

When('The user verifies the content in {string} page',
  async function (pageName) {
    console.log(`Verifying content on: ${pageName}`);
  });

When('The user verifies the content in Graph Representations page',
  async function () {
    console.log('Verifying Graph Representations content');
  });

When('The page loads', async function () {
  await this.page.waitForLoadState('domcontentloaded');
});

When('The user verifies the content', async function () {
  // Specific checks happen in Then steps
});

When('The user clicks {string} link',
  { timeout: 20000 }, async function (linkName) {
    if (linkName === 'Graph Representations') {
      await this.graphPage.clickGraphRepresentationsLink();
    }
  });

When('The user clicks {string} button',
  { timeout: 20000 }, async function (buttonName) {
    if (buttonName === 'Try here>>>') {
      await this.graphPage.clickTryHere();
    } else if (buttonName === 'Run') {
      await this.graphPage.clickRun();
    }
  });

When('The user clicks {string} button without entering code',
  { timeout: 20000 }, async function (button) {
    await this.graphPage.verifyAlertOnEmptyRun();
  });

When('The user verifies the {string}', async function (item) {
  console.log(`Verifying: ${item}`);
});

When('The user enters valid {string}',
  { timeout: 20000 }, async function (type) {
    if (type === 'python code') {
      await this.graphPage.enterCode('print("Hello from Graph test")');
    }
  });

When('The user enters invalid input in text area',
  { timeout: 20000 }, async function () {
    await this.graphPage.enterCode('!@#$% not valid python');
  });

When('The user clicks Run button',
  { timeout: 20000 }, async function () {
    await this.graphPage.clickRun();
  });

// ─────────────────────────────────────────
// THEN STEPS
// ─────────────────────────────────────────

Then('user should be directed to Graph page',
  { timeout: 20000 }, async function () {
    await this.graphPage.verifyGraphPage();
  });

Then('The user should be redirected to {string} page',
  { timeout: 20000 }, async function (pageName) {
    if (pageName === 'Graph') {
      await this.graphPage.verifyGraphPage();
    } else if (pageName === 'Graph Representations') {
      await this.graphPage.verifyGraphRepresentationsPage();
    }
  });

Then('The user should be redirected to Try {string} page',
  { timeout: 20000 }, async function (pageName) {
    await this.graphPage.verifyTryEditorPage();
  });

Then('The user should see the content of {string} page',
  { timeout: 20000 }, async function (pageName) {
    await this.graphPage.verifyGraphPageContent();
  });

Then('The user should be able to see Graph definition',
  { timeout: 20000 }, async function () {
    await this.graphPage.verifyGraphPageContent();
  });

Then('The user should be able to see {string} explanation',
  { timeout: 20000 }, async function (topic) {
    if (topic.includes('vertices') || topic.includes('edges')) {
      await this.graphPage.verifyVerticesAndEdges();
    }
  });

Then('The user should be able to see {string} details',
  { timeout: 20000 }, async function (topic) {
    if (topic.includes('graph implementation')) {
      await this.graphPage.verifyGraphImplementation();
    }
  });

Then('The user should be able to see {string} examples',
  { timeout: 20000 }, async function (topic) {
    if (topic.includes('real-world')) {
      await this.graphPage.verifyRealWorldExamples();
    }
  });

Then('The user should be able to see {string}',
  { timeout: 20000 }, async function (item) {
    if (item === 'Adjacency Matrix') {
      await this.graphPage.verifyAdjacencyMatrix();
    } else if (item === 'Adjacency List') {
      await this.graphPage.verifyAdjacencyList();
    } else if (item === 'Incidence Matrix') {
      await this.graphPage.verifyIncidenceMatrix();
    } else if (item.includes('Graph applications')) {
      await this.graphPage.verifyGraphRepresentationsContent();
    }
  });

Then('The user should see a text area for {string} execution',
  { timeout: 20000 }, async function (type) {
    await this.graphPage.verifyTryEditorPage();
  });

Then('The user should be able to type {string} in the text area',
  { timeout: 20000 }, async function (type) {
    // Use #editor specifically — avoids strict mode with 2 textareas
    const isAttached = await this.page.locator('#editor').isVisible();
    console.log('Editor attached:', isAttached);
  });

Then('The user should be able to see output',
  { timeout: 20000 }, async function () {
    await this.graphPage.verifyCodeOutput();
  });

Then('The user should receive an {string} message',
  { timeout: 60000 }, async function (messageType) {
    if (messageType === 'alert') {
      await this.graphPage.verifyAlertOnEmptyRun();
    } else if (messageType === 'error') {
      await this.graphPage.verifyErrorOnInvalidCode();
    }
  });

Then('The user should be able to click Run button',
  { timeout: 20000 }, async function () {
    const runBtn = this.page.locator('button', { hasText: 'Run' });
    const isVisible = await runBtn.isVisible();
    if (!isVisible) throw new Error('Run button not visible');
  });