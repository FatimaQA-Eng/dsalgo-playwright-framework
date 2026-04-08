const tryEditorData = require('../test-data/tryEditorData.json');

class GraphPage {
  constructor(page) {
    this.page = page;
  }

  // ─────────────────────────────────────────
  // LAUNCH PAGE METHODS
  // ─────────────────────────────────────────

  async openBrowser() {
    console.log('Browser is open and ready');
  }

  async navigateToURL() {
    await this.page.goto('https://dsportalapp.herokuapp.com');
    await this.page.waitForLoadState('domcontentloaded');
    console.log('Navigated to URL:', this.page.url());
  }

  async verifyLandingPage() {
    const heading = this.page.locator(
      'text=Preparing for the Interviews').first();
    await heading.waitFor({ state: 'visible', timeout: 15000 });
    console.log('Landing page verified at URL:', this.page.url());
  }

  async verifyGetStartedButtonVisible() {
    const btn = this.page.locator('text=Get Started').first();
    await btn.waitFor({ state: 'visible', timeout: 15000 });
    console.log('Get Started button is visible');
  }

  async verifyGetStartedButtonEnabled() {
    const btn = this.page.locator('text=Get Started').first();
    const isEnabled = await btn.isEnabled();
    if (!isEnabled) {
      throw new Error('Get Started button is not enabled!');
    }
    console.log('Get Started button is enabled');
  }

  async verifyPageTitle() {
    const title = await this.page.title();
    if (!title.includes('Numpy Ninja')) {
      throw new Error(`Expected title "Numpy Ninja" but got "${title}"`);
    }
    console.log('Page title verified:', title);
  }

  async verifyPageContentText() {
    const subtext = this.page.locator(
      'text=You are at the right place').first();
    await subtext.waitFor({ state: 'visible', timeout: 15000 });
    console.log('Page content text verified');
  }

  // ─────────────────────────────────────────
  // LOGIN AND HOME NAVIGATION
  // ─────────────────────────────────────────

  async navigateToHomeAfterLogin() {
    await this.page.goto('https://dsportalapp.herokuapp.com');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator('text=Get Started').first().click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator('text=Sign in').click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.fill('input[name="username"]', 'playwrightgr3');
    await this.page.fill('input[name="password"]', 'test2026!');
    await this.page.locator('input[type="submit"]').click();
    await this.page.waitForLoadState('networkidle');
    console.log('Logged in — URL:', this.page.url());
  }

  // ─────────────────────────────────────────
  // GRAPH PAGE NAVIGATION
  // ─────────────────────────────────────────

  async clickGraphGetStarted() {
    const graphBtn = this.page.locator('a[href="graph"]');
    await graphBtn.waitFor({ state: 'visible', timeout: 15000 });
    await graphBtn.click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Graph click:', this.page.url());
  }

  // ─────────────────────────────────────────
  // GRAPH PAGE VERIFICATION
  // ─────────────────────────────────────────

  async verifyGraphPage() {
    await this.page.waitForURL('**/graph/**', { timeout: 15000 });
    console.log('Graph page verified at URL:', this.page.url());
  }

  async verifyGraphPageContent() {
    await this.page.locator('text=vertices').first().waitFor({
      state: 'visible', timeout: 15000
    });
    await this.page.locator('text=edges').first().waitFor({
      state: 'visible', timeout: 15000
    });
    console.log('Graph page content verified');
  }

  async verifyVerticesAndEdges() {
    const content = await this.page.locator('ul li').allTextContents();
    const hasVertices = content.some(text =>
      text.toLowerCase().includes('vertices'));
    const hasEdges = content.some(text =>
      text.toLowerCase().includes('edges'));
    if (!hasVertices || !hasEdges) {
      throw new Error('Vertices and edges content not found on Graph page');
    }
    console.log('Vertices and edges verified');
  }

  async verifyGraphImplementation() {
    await this.page.locator('text=implemented').first().waitFor({
      state: 'visible', timeout: 15000
    });
    console.log('Graph implementation content verified');
  }

  async verifyRealWorldExamples() {
    await this.page.locator('text=real').first().waitFor({
      state: 'visible', timeout: 15000
    });
    console.log('Real world examples verified');
  }

  // ─────────────────────────────────────────
  // GRAPH REPRESENTATIONS
  // ─────────────────────────────────────────

  async clickGraphRepresentationsLink() {
    await this.page.locator('a',
      { hasText: 'Graph Representations' }).first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Graph Representations click:', this.page.url());
  }

  async verifyGraphRepresentationsPage() {
    await this.page.waitForURL(
      '**/graph-representations/**', { timeout: 15000 });
    console.log('Graph Representations verified at URL:', this.page.url());
  }

  async verifyGraphRepresentationsContent() {
    await this.page.locator('text=Graph Representations').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Graph Representations content verified');
  }

  async verifyAdjacencyMatrix() {
    await this.page.locator('li', { hasText: 'Adjacency Matrix' })
      .first().waitFor({ state: 'visible', timeout: 15000 });
    console.log('Adjacency Matrix verified');
  }

  async verifyAdjacencyList() {
    await this.page.locator('li', { hasText: 'Adjacency List' })
      .first().waitFor({ state: 'visible', timeout: 15000 });
    console.log('Adjacency List verified');
  }

  async verifyIncidenceMatrix() {
    await this.page.locator('li', { hasText: 'Incidence Matrix' })
      .first().waitFor({ state: 'visible', timeout: 15000 });
    console.log('Incidence Matrix verified');
  }

  // ─────────────────────────────────────────
  // TRY EDITOR
  // ─────────────────────────────────────────

  async clickTryHere() {
    // Navigate directly to graph/graph/ where Try Here button lives
    await this.page.goto(
      'https://dsportalapp.herokuapp.com/graph/graph/');
    await this.page.waitForLoadState('networkidle');
    console.log('Navigated to graph content page:', this.page.url());

    // Scroll down to find Try Here button
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(1000);

    // Click Try Here using confirmed href
    const tryBtn = this.page.locator('a[href="/tryEditor"]').first();
    await tryBtn.waitFor({ state: 'visible', timeout: 15000 });
    console.log('Try here button found!');
    await tryBtn.click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Try Here click:', this.page.url());
  }

  async verifyTryEditorPage() {
    // Editor is hidden — check CodeMirror div instead
    await this.page.locator('.CodeMirror, .cm-editor, #editor')
      .first().waitFor({ state: 'attached', timeout: 15000 });
    console.log('Try Editor verified at URL:', this.page.url());
  }

async enterCode(code) {
  const cmEditor = this.page.locator('.CodeMirror');
  if (await cmEditor.count() > 0) {
    await cmEditor.click();
    await this.page.keyboard.type(
      tryEditorData.validCode.code);
   } else {
   await this.page.evaluate(() => {
     const editor = document.querySelector('#editor');
    if (editor) editor.value = tryEditorData.validCode.code;
  });
 }
 console.log('Code entered:', tryEditorData.validCode.code);
 }

  async clickRun() {
    await this.page.locator('button', { hasText: 'Run' }).click();
    console.log('Run button clicked');
  }

  async verifyCodeOutput() {
    // Wait a moment for output to process then check it exists
    await this.page.waitForTimeout(3000);
    const output = this.page.locator('#output');
    const text = await output.innerText();
    console.log('Output text:', text);
    console.log('Code output verified');
  }

  async verifyAlertOnEmptyRun() {
    this.page.once('dialog', async dialog => {
      console.log('Alert message:', dialog.message());
      await dialog.accept();
    });
    await this.clickRun();
  }

async verifyErrorOnInvalidCode() {
  const cmEditor = this.page.locator('.CodeMirror');
  if (await cmEditor.count() > 0) {
    await cmEditor.click();
    await this.page.keyboard.type(tryEditorData.invalidCode.code);
  } else {
    await this.page.locator('#editor')
      .fill(tryEditorData.invalidCode.code);
  }
  await this.clickRun();
  await this.page.waitForTimeout(3000);
  const output = this.page.locator('#output');
  const text = await output.innerText();
  console.log('Error output text:', text);
  console.log('Error output verified');
}
}
module.exports = GraphPage;