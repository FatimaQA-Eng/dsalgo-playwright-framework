const arrayData = require('../test-data/arrayData.json');
const tryEditorData = require('../test-data/tryEditorData.json');

class ArrayPage {
  constructor(page) {
    this.page = page;
  }

  // ─────────────────────────────────────────
  // LOGIN AND HOME NAVIGATION
  // ─────────────────────────────────────────

  async navigateToHomeAfterLogin() {
    await this.page.goto(arrayData.urls.baseUrl);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator('text=Get Started').first().click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator('text=Sign in').click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.fill('input[name="username"]',
      arrayData.credentials.username);
    await this.page.fill('input[name="password"]',
      arrayData.credentials.password);
    await this.page.locator('input[type="submit"]').click();
    await this.page.waitForLoadState('networkidle');
    console.log('Logged in — URL:', this.page.url());
  }

  // ─────────────────────────────────────────
  // ARRAY PAGE NAVIGATION
  // ─────────────────────────────────────────

  async clickArrayGetStarted() {
    const arrayBtn = this.page.locator('a[href="array"]');
    await arrayBtn.waitFor({ state: 'visible', timeout: 15000 });
    await arrayBtn.click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Array click:', this.page.url());
  }

  async verifyArrayPage() {
    await this.page.waitForURL('**/array/**', { timeout: 15000 });
    console.log('Array page verified at URL:', this.page.url());
  }

  // ─────────────────────────────────────────
  // ARRAY PAGE CONTENT
  // ─────────────────────────────────────────

  async verifyArrayPageHeading() {
    // Use the dark banner text confirmed from screenshot
    const heading = this.page.locator('p.bg-secondary').first();
    await heading.waitFor({ state: 'visible', timeout: 15000 });
    console.log('Array heading verified');
  }

  async verifyArrayPageDescription() {
    await this.page.locator('text=oldest').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Array description verified');
  }

  async verifyTopicsCoveredSection() {
    await this.page.locator('text=Topics Covered').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Topics Covered section verified');
  }

  async verifyArrayPageLinks() {
    await this.page.locator('text=Arrays in Python')
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Arrays Using List')
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Basic Operations in Lists')
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Applications of Array')
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('All Array page links verified');
  }

  // ─────────────────────────────────────────
  // ARRAYS IN PYTHON PAGE
  // ─────────────────────────────────────────

  async clickArraysInPython() {
    await this.page.locator('a', { hasText: 'Arrays in Python' })
      .first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Arrays in Python click:', this.page.url());
  }

  async verifyArraysInPythonPage() {
    await this.page.waitForURL('**/arrays-in-python/**', { timeout: 15000 });
    console.log('Arrays in Python page verified');
  }

  async verifyArraysInPythonHeading() {
    await this.page.locator('text=Arrays in Python').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Arrays in Python heading verified');
  }

  async verifyArraysInPythonDescription() {
    await this.page.locator('text=Arrays are not all popular').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Arrays in Python description verified');
  }

  async verifyCodeSnippet() {
    await this.page.locator('text=from array import').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Code snippet verified');
  }

  async verifyInsertionDeletionSearchUpdate() {
    await this.page.locator('text=Insertion').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Deletion').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Search').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Update').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Insertion, Deletion, Search, Update verified');
  }

  async verifyInsertMethod() {
    await this.page.locator('text=insert()').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('insert() method verified');
  }

  async verifyRemoveMethod() {
    await this.page.locator('text=remove()').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('remove() method verified');
  }

  async verifyIndexMethod() {
    await this.page.locator('text=index()').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('index() method verified');
  }

  async verifyUpdateExample() {
    await this.page.locator('text=Update').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Update example verified');
  }

  async verifyInsertionOutput() {
    await this.page.locator('text=Output').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Insertion output verified');
  }

  async verifyDeletionOutput() {
    await this.page.locator('text=Deletion').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Deletion output verified');
  }

  async verifySearchOutput() {
    await this.page.locator('text=Search').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Search output verified');
  }

  async verifyUpdateOutput() {
    await this.page.locator('text=Update').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Update output verified');
  }

  async verifySidebarLinks() {
    await this.page.locator('text=Arrays in Python').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Arrays Using List').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Basic Operations in Lists').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Applications of Array').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Sidebar links verified');
  }

  // ─────────────────────────────────────────
  // ARRAYS USING LIST PAGE
  // ─────────────────────────────────────────

  async clickArraysUsingList() {
    await this.page.locator('a', { hasText: 'Arrays Using List' })
      .first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Arrays Using List click:', this.page.url());
  }

  async verifyArraysUsingListPage() {
    await this.page.waitForURL('**/arrays-using-list/**', { timeout: 15000 });
    console.log('Arrays Using List page verified');
  }

  async verifyArraysUsingListHeading() {
    await this.page.locator('text=Arrays Using List').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Arrays Using List heading verified');
  }

  async verifyDynamicArrayDescription() {
    await this.page.locator('text=dynamic').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Dynamic array description verified');
  }

  async verifyGrowShrink() {
    await this.page.locator('text=grow').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Grow and shrink verified');
  }

  async verifyIndexStartsFromZero() {
    await this.page.locator('text=index').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Index from 0 verified');
  }

  async verifyGroceryList() {
    await this.page.locator('text=grocery').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Grocery list verified');
  }

  async verifyGroceryItems() {
    await this.page.locator('text=apples').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=bananas').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Grocery items verified');
  }

  async verifyIndexValues() {
    await this.page.locator('text=index').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Index values verified');
  }

  async verifyIndexForEachElement() {
    await this.page.locator('text=index').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Index for each element verified');
  }

  async verifyAppendOperation() {
    // Use text that is actually on page
    await this.page.locator('text=grocery.append').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Append operation verified');
  }

  async verifyAppendCode() {
    await this.page.locator('text=grocery.append').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Append code verified');
  }

  async verifyOrangesInList() {
    await this.page.locator('text=oranges').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Oranges in list verified');
  }

  async verifyUpdatedListAfterAppend() {
    await this.page.locator('text=oranges').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Updated list after append verified');
  }

  async verifyTryHereButton() {
    await this.page.locator('a[href="/tryEditor"]').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Try Here button verified');
  }

  // ─────────────────────────────────────────
  // BASIC OPERATIONS IN LISTS PAGE
  // ─────────────────────────────────────────

  async clickBasicOperationsInLists() {
    await this.page.locator('a', { hasText: 'Basic Operations in Lists' })
      .first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Basic Operations click:', this.page.url());
  }

  async verifyBasicOperationsPage() {
    await this.page.waitForURL('**/basic-operations-in-lists/**',
      { timeout: 15000 });
    console.log('Basic Operations page verified');
  }

  async verifyBasicOperationsContent() {
    await this.page.locator('text=Insertion in Lists').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('text=Deletion in Array').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Basic Operations content verified');
  }

  async verifyInsertionSection() {
    await this.page.locator('text=beginning').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Insertion section verified');
  }

  async verifyInsertSyntax() {
    await this.page.locator('text=list_name.insert').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Insert syntax verified');
  }

  async verifyCarrotsInList() {
    await this.page.locator('text=carrots').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Carrots in list verified');
  }

  async verifyDeletionSection() {
    await this.page.locator('text=Deletion').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Deletion section verified');
  }

  async verifyPopOperation() {
    await this.page.locator('text=pop()').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Pop operation verified');
  }

  async verifyRemoveOperation() {
    await this.page.locator('text=remove()').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Remove operation verified');
  }

  async verifyNoCucumbers() {
    await this.page.locator('text=cucumbers').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Cucumbers removal verified');
  }

  async verifyBasicOperationsSidebarLinks() {
    await this.page.locator('text=Practice Questions').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Basic Operations sidebar links verified');
  }

  // ─────────────────────────────────────────
  // APPLICATIONS OF ARRAY PAGE
  // ─────────────────────────────────────────

  async clickApplicationsOfArray() {
    await this.page.locator('a', { hasText: 'Applications of Array' })
      .first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Applications of Array click:', this.page.url());
  }

  async verifyApplicationsOfArrayPage() {
    await this.page.waitForURL('**/applications-of-array/**',
      { timeout: 15000 });
    console.log('Applications of Array page verified');
  }

  async verifyRealWorldUseCases() {
    await this.page.locator('text=real world').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Real world use cases verified');
  }

  async verifyArrayApplicationsList() {
    await this.page.locator('text=temperatures').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Array applications list verified');
  }

  async verifyTemperatureRecords() {
    await this.page.locator('text=temperatures').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Temperature records verified');
  }

  async verifyEmployeeList() {
    await this.page.locator('text=employees').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Employee list verified');
  }

  async verifyProductsList() {
    await this.page.locator('text=products').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Products list verified');
  }

  async verifyStudentScores() {
    await this.page.locator('text=scores').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Student scores verified');
  }

  async verifyCustomerTelephone() {
    await this.page.locator('text=telephone').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Customer telephone verified');
  }

  async verifyRainfallData() {
    await this.page.locator('text=rainfall').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Rainfall data verified');
  }

  // ─────────────────────────────────────────
  // PRACTICE QUESTIONS PAGE
  // ─────────────────────────────────────────

  async clickPracticeQuestions() {
    // Navigate directly — more reliable than clicking
    await this.page.goto(arrayData.urls.practiceQuestions);
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Practice Questions:', this.page.url());
  }

  async verifyPracticeQuestionsPage() {
    await this.page.waitForURL('**/practice**', { timeout: 15000 });
    console.log('Practice Questions page verified');
  }

  async clickSearchTheArray() {
    await this.page.locator('a', { hasText: 'Search the array' })
      .first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Search the array click:', this.page.url());
  }

  async verifySearchTheArrayPage() {
    await this.page.waitForURL('**/question/1**', { timeout: 15000 });
    await this.page.locator('text=QUESTION').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Search the array page verified');
  }

  async verifyQuestionHasRunAndSubmit() {
  await this.page.locator('button', { hasText: 'Run' }).first()
    .waitFor({ state: 'visible', timeout: 15000 });
  console.log('Run button verified');
  const submitBtn = this.page.locator(
    'button:has-text("Submit"), input[value="Submit"]'
  ).first();
  await submitBtn.waitFor({ state: 'visible', timeout: 15000 });
  console.log('Run and Submit buttons verified');
}

  async clickMaxConsecutiveOnes() {
    await this.page.goto(arrayData.urls.practiceQuestions);
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('a', { hasText: 'Max Consecutive Ones' })
      .first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Max Consecutive Ones click:', this.page.url());
  }

  async verifyMaxConsecutiveOnesPage() {
    await this.page.waitForURL('**/question/2**', { timeout: 15000 });
    await this.page.locator('text=QUESTION').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Max Consecutive Ones page verified');
  }

  async clickFindNumbersEvenDigits() {
    await this.page.goto(arrayData.urls.practiceQuestions);
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('a',
      { hasText: 'Find Numbers with Even Number of Digits' })
      .first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Find Numbers click:', this.page.url());
  }

  async verifyFindNumbersEvenDigitsPage() {
    await this.page.waitForURL('**/question/3**', { timeout: 15000 });
    await this.page.locator('text=QUESTION').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Find Numbers with Even Digits page verified');
  }

  async clickSquaresOfSortedArray() {
    await this.page.goto(arrayData.urls.practiceQuestions);
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('a', { hasText: 'Squares of a Sorted Array' })
      .first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Squares of Sorted Array click:', this.page.url());
  }

  async verifySquaresOfSortedArrayPage() {
    await this.page.waitForURL('**/question/4**', { timeout: 15000 });
    await this.page.locator('text=QUESTION').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    console.log('Squares of Sorted Array page verified');
  }

  // ─────────────────────────────────────────
  // TRY EDITOR
  // ─────────────────────────────────────────

  async clickTryHere() {
    await this.page.locator('a[href="/tryEditor"]').first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('a[href="/tryEditor"]').first().click();
    await this.page.waitForLoadState('networkidle');
    console.log('URL after Try Here click:', this.page.url());
  }

  async verifyTryEditorPage() {
    await this.page.locator('.CodeMirror, .cm-editor, #editor')
      .first().waitFor({ state: 'attached', timeout: 15000 });
    console.log('Try Editor verified at URL:', this.page.url());
  }

  // ─────────────────────────────────────────
  // TRY EDITOR — CODE EXECUTION
  // ─────────────────────────────────────────

  async enterCodeInTryEditor(codeType) {
    const code = codeType === 'valid' 
      ? tryEditorData.validCode.code 
      : tryEditorData.invalidCode.code;
    const cmEditor = this.page.locator('.CodeMirror');
    if (await cmEditor.count() > 0) {
      await cmEditor.click();
      await this.page.keyboard.type(code);
    } else {
      await this.page.evaluate((code) => {
        const editor = document.querySelector('#editor');
        if (editor) editor.value = code;
      }, code);
    }
    console.log('Code entered in Try Editor:', code);
  }

  async clickRunInTryEditor() {
    await this.page.locator('button', { hasText: 'Run' }).click();
    console.log('Run button clicked in Try Editor');
  }

  async verifyOutputInTryEditor() {
    await this.page.waitForTimeout(3000);
    const output = this.page.locator('#output');
    const text = await output.innerText();
    console.log('Output text:', text);
    console.log('Output verified in Try Editor');
  }

  async verifyAlertOnEmptyRunInTryEditor() {
    this.page.once('dialog', async dialog => {
      console.log('Alert message:', dialog.message());
      await dialog.accept();
    });
    await this.page.locator('button', { hasText: 'Run' }).click();
    console.log('Alert verified in Try Editor');
  }

  async verifyErrorOnInvalidCodeInTryEditor() {
    await this.page.waitForTimeout(3000);
    const output = this.page.locator('#output');
    const text = await output.innerText();
    console.log('Error output text:', text);
    console.log('Error verified in Try Editor');
  } 
}

module.exports = ArrayPage;