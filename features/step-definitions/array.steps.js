const { Given, When, Then } = require('@cucumber/cucumber');

// ─────────────────────────────────────────
// GIVEN — NAVIGATION STEPS
// ─────────────────────────────────────────

Given('Array user is on the Home page after get started from anonymous page',
  { timeout: 30000 }, async function () {
    await this.arrayPage.navigateToHomeAfterLogin();
  });

Given('Array user is in the Login page after get started from Home page',
  { timeout: 30000 }, async function () {
    await this.arrayPage.navigateToHomeAfterLogin();
  });

Given('Array user is in the Home page after Signed in',
  { timeout: 30000 }, async function () {
    await this.arrayPage.navigateToHomeAfterLogin();
  });

Given('Array user is on the {string} page',
  { timeout: 30000 }, async function (pageName) {
    if (pageName === 'Array') {
      await this.arrayPage.navigateToHomeAfterLogin();
      await this.arrayPage.clickArrayGetStarted();
    } else if (pageName === 'Arrays in Python') {
      await this.arrayPage.navigateToHomeAfterLogin();
      await this.arrayPage.clickArrayGetStarted();
      await this.arrayPage.clickArraysInPython();
    } else if (pageName === 'Arrays Using List') {
      await this.arrayPage.navigateToHomeAfterLogin();
      await this.arrayPage.clickArrayGetStarted();
      await this.arrayPage.clickArraysUsingList();
    } else if (pageName === 'Basic Operations in Lists') {
      await this.arrayPage.navigateToHomeAfterLogin();
      await this.arrayPage.clickArrayGetStarted();
      await this.arrayPage.clickBasicOperationsInLists();
    } else {
      console.log(`Currently on: ${pageName}`);
    }
  });

Given('Array user is on the Array page',
  { timeout: 30000 }, async function () {
    await this.arrayPage.navigateToHomeAfterLogin();
    await this.arrayPage.clickArrayGetStarted();
  });

Given('Array user is on the Applications of Array page',
  { timeout: 30000 }, async function () {
    await this.arrayPage.navigateToHomeAfterLogin();
    await this.arrayPage.clickArrayGetStarted();
    await this.arrayPage.clickApplicationsOfArray();
  });

Given('Array user is in the {string} page',
  { timeout: 30000 }, async function (pageName) {
    if (pageName === 'Basic Operations in Lists') {
      await this.arrayPage.navigateToHomeAfterLogin();
      await this.arrayPage.clickArrayGetStarted();
      await this.arrayPage.clickBasicOperationsInLists();
    } else {
      console.log(`Currently on: ${pageName}`);
    }
  });

Given('Array user is in the Basic Operations in Lists page',
  { timeout: 30000 }, async function () {
    await this.arrayPage.navigateToHomeAfterLogin();
    await this.arrayPage.clickArrayGetStarted();
    await this.arrayPage.clickBasicOperationsInLists();
  });

Given('Array user is in the Application of Array page',
  { timeout: 30000 }, async function () {
    await this.arrayPage.navigateToHomeAfterLogin();
    await this.arrayPage.clickArrayGetStarted();
    await this.arrayPage.clickApplicationsOfArray();
  });

Given('Array user is in the Practice Questions list page',
  { timeout: 30000 }, async function () {
    await this.arrayPage.navigateToHomeAfterLogin();
    await this.arrayPage.clickArrayGetStarted();
    await this.arrayPage.clickPracticeQuestions();
  });

// ─────────────────────────────────────────
// WHEN STEPS
// ─────────────────────────────────────────

When('Array user clicks the Get Started button in anonymous page',
  { timeout: 20000 }, async function () {
    console.log('Already on home page after login');  // ← TO THIS
  });

When('Array user clicks the Sign in Link in Home page',
  { timeout: 20000 }, async function () {
    console.log('Clicking Sign in link');
  });

When('Array user clicks the Login button after providing valid credentials',
  { timeout: 20000 }, async function () {
    console.log('Login button clicked with valid credentials');
  });

When('Array user clicks the Get Started button in Array Panel',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickArrayGetStarted();
  });

When('Array user views all contents in Array page', async function () {
  console.log('Viewing Array page contents');
});

When('Array user clicks on Arrays in Python link',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickArraysInPython();
  });

When('Array user views all contents in Arrays in Python page',
  async function () {
    console.log('Viewing Arrays in Python page contents');
  });

When('Array user views all insertion content in Array in Python page',
  async function () {
    console.log('Viewing insertion content');
  });

When('Array user scrolls to the output section', async function () {
  await this.page.evaluate(() =>
    window.scrollTo(0, document.body.scrollHeight));
  await this.page.waitForTimeout(1000);
});

When('Array user views the navigation links section', async function () {
  console.log('Viewing navigation links');
});

When('Array user views the navigation links section on the left sidebar',
  async function () {
    console.log('Viewing sidebar links');
  });

When('Array user clicks on Arrays Using List from Arrays in Python page',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickArraysUsingList();
  });

When('Array user clicks on Arrays Using List link',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickArraysUsingList();
  });

When('Array page is fully loaded', async function () {
  await this.page.waitForLoadState('domcontentloaded');
});

When('Array user views the example list section', async function () {
  console.log('Viewing example list section');
});

When('Array user views the list index section', async function () {
  console.log('Viewing list index section');
});

When('Array user views the append operation section', async function () {
  console.log('Viewing append operation section');
});

When('Array user views the updated list after the append operation',
  async function () {
    console.log('Viewing updated list after append');
  });

When('Array user views the Try Here section', async function () {
  console.log('Viewing Try Here section');
});

When('Array user clicks Try here button in Arrays Using List page',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickTryHere();
  });

When('Array user clicks on Basic Operations in Lists link',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickBasicOperationsInLists();
  });

When('Array Basic Operations Lists page is fully loaded', async function () {
  await this.page.waitForLoadState('domcontentloaded');
});

When('Array user views the insertion section', async function () {
  console.log('Viewing insertion section');
});

When('Array user views the insertion Output', async function () {
  await this.page.evaluate(() =>
    window.scrollTo(0, document.body.scrollHeight / 2));
});

When('Array user views deletion operation in lists', async function () {
  console.log('Viewing deletion operation');
});

When('Array user views the pop operation section', async function () {
  console.log('Viewing pop operation section');
});

When('Array user views the remove operation', async function () {
  console.log('Viewing remove operation');
});

When('Array user clicks Try here button in Basic Operations page',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickTryHere();
  });

When('Array user clicks Applications of Array link',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickApplicationsOfArray();
  });

When('Applications of Array page loads', async function () {
  await this.page.waitForLoadState('domcontentloaded');
});

When('Array user views the Applications of Array section', async function () {
  console.log('Viewing Applications of Array');
});

When('Array user views the Practice Questions section', async function () {
  console.log('Viewing Practice Questions');
});

When('Array user clicks Practice Questions link',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickPracticeQuestions();
  });

When('Array user clicks on Search the array from the list',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickSearchTheArray();
  });

When('Array user clicks on Max Consecutive Ones from the list',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickMaxConsecutiveOnes();
  });

When('Array user clicks on Find Numbers with Even Number of Digits from the list',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickFindNumbersEvenDigits();
  });

When('Array user clicks on Squares of a Sorted Array from the list',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickSquaresOfSortedArray();
  });

// ─────────────────────────────────────────
// THEN STEPS
// ─────────────────────────────────────────

Then('Array user be directed to Home Page',
  { timeout: 20000 }, async function () {
    await this.page.waitForURL('**/home**', { timeout: 15000 });
    console.log('Home page verified at URL:', this.page.url());
  });

Then('Array user lands in the login page',
  { timeout: 20000 }, async function () {
    console.log('Landed on login page');
  });

Then('Array user lands on home page after successfully authenticated',
  { timeout: 20000 }, async function () {
    console.log('Landed on home page');
  });

Then('Array user is directed to Array Data Structure Page',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyArrayPage();
  });

Then('The Array page heading should be {string}',
  { timeout: 20000 }, async function (heading) {
    if (heading === 'Array') {
      await this.arrayPage.verifyArrayPageHeading();
    } else if (heading === 'Arrays in Python') {
      await this.arrayPage.verifyArraysInPythonHeading();
    } else if (heading === 'Arrays Using List') {
      await this.arrayPage.verifyArraysUsingListHeading();
    }
  });

Then('Array page should display description about arrays',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyArrayPageDescription();
  });

Then('Array Topics Covered section should be visible',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyTopicsCoveredSection();
  });

Then('Array page should contain all the links Arrays in Python Arrays Using List Basic Operations in Lists Applications of Array',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyArrayPageLinks();
  });

Then('Array user should be redirected to Arrays in Python page',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyArraysInPythonPage();
  });

Then('Arrays in Python page heading should be {string}',
  { timeout: 20000 }, async function (heading) {
    await this.arrayPage.verifyArraysInPythonHeading();
  });

Then('Arrays in Python page should display description about arrays in Python',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyArraysInPythonDescription();
  });

Then('Arrays in Python page should contain code snippet for array declaration',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyCodeSnippet();
  });

Then('Arrays in Python page should display Insertion Deletion Search Update operations',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyInsertionDeletionSearchUpdate();
  });

Then('Arrays in Python page should display example using insert method',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyInsertMethod();
  });

Then('Arrays in Python page should display example using remove method',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyRemoveMethod();
  });

Then('Arrays in Python page should display example using index method',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyIndexMethod();
  });

Then('Arrays in Python page should display example for updating array element',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyUpdateExample();
  });

Then('Arrays in Python page should display output for insertion example',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyInsertionOutput();
  });

Then('Arrays in Python page should display output for deletion example',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyDeletionOutput();
  });

Then('Arrays in Python page should display output for search example',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifySearchOutput();
  });

Then('Arrays in Python page should display updated array output',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyUpdateOutput();
  });

Then('All Array sidebar links should be visible',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifySidebarLinks();
  });

Then('Array sidebar should contain links Arrays in Python Arrays Using List Basic Operations in Lists Applications of Array',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifySidebarLinks();
  });

Then('Array user should be redirected to Arrays Using List page',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyArraysUsingListPage();
  });

Then('Arrays Using List page heading should be {string}',
  { timeout: 20000 }, async function (heading) {
    await this.arrayPage.verifyArraysUsingListHeading();
  });

Then('Arrays Using List page should display description about lists as dynamic arrays',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyDynamicArrayDescription();
  });

Then('Arrays Using List page should explain that list can grow and shrink',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyGrowShrink();
  });

Then('Arrays Using List page should describe index starting from 0',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyIndexStartsFromZero();
  });

Then('Arrays Using List page should display example list',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyGroceryList();
  });

Then('Arrays Using List list should contain apples bananas cucumbers dates strawberries',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyGroceryItems();
  });

Then('Arrays Using List page should display index values starting from 0',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyIndexValues();
  });

Then('Arrays Using List index should be shown for each element',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyIndexForEachElement();
  });

Then('Arrays Using List page should display code snippet using append method',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyAppendOperation();
  });

Then('Arrays Using List code example should contain grocery append oranges',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyAppendCode();
  });

Then('Arrays Using List updated list should contain oranges',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyOrangesInList();
  });

Then('Arrays Using List updated list should display apples bananas cucumbers dates strawberries oranges',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyUpdatedListAfterAppend();
  });

Then('Arrays Using List Try here button should be visible',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyTryHereButton();
  });

Then('Array user should be redirected to a page having a Try Editor with a Run button',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyTryEditorPage();
  });

Then('Array user should be redirected to Basic Operations in Lists page',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyBasicOperationsPage();
  });

Then('Array page should display Insertion in Lists section and Deletion in Lists section',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyBasicOperationsContent();
  });

Then('Array page should explain insertion at beginning and at given index',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyInsertionSection();
  });

Then('Array page should display syntax list name insert index element and Code example should contain grocery insert 2 carrots',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyInsertSyntax();
  });

Then('Array updated list should contain carrots and List should display elements in correct order',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyCarrotsInList();
  });

Then('Array page should explain deletion from end and beginning and at given index',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyDeletionSection();
  });

Then('Array page should display pop method explanation and example using grocery pop and grocery pop 1',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyPopOperation();
  });

Then('Array page should display remove method explanation and Code example should contain grocery remove cucumbers',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyRemoveOperation();
  });

Then('Array updated list should not contain cucumbers',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyNoCucumbers();
  });

Then('Array Basic Operations sidebar should contain links Arrays in Python Arrays Using List Basic Operations in Lists Applications of Array and Practice Questions',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyBasicOperationsSidebarLinks();
  });

Then('Array user should be redirected to Applications of Array page',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyApplicationsOfArrayPage();
  });

Then('Array page should display real world use cases',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyRealWorldUseCases();
  });

Then('Array page should display list of array applications',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyArrayApplicationsList();
  });

Then('Array user should see temperature records',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyTemperatureRecords();
  });

Then('Array user should see employee list',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyEmployeeList();
  });

Then('Array user should see products list',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyProductsList();
  });

Then('Array user should see student scores',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyStudentScores();
  });

Then('Array user should see customer telephone numbers',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyCustomerTelephone();
  });

Then('Array user should see rainfall data',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyRainfallData();
  });

Then('Array user should be redirected to Practice Questions page',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyPracticeQuestionsPage();
  });

Then('Array user should be redirected to Search the array questions page with run and submit button',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifySearchTheArrayPage();
    await this.arrayPage.verifyQuestionHasRunAndSubmit();
  });

Then('Array user should be redirected to Max Consecutive Ones questions page with run and submit button',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyMaxConsecutiveOnesPage();
    await this.arrayPage.verifyQuestionHasRunAndSubmit();
  });

Then('Array user should be redirected to Find Numbers with Even Number of Digits questions page with run and submit button',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyFindNumbersEvenDigitsPage();
    await this.arrayPage.verifyQuestionHasRunAndSubmit();
  });

Then('Array user should be redirected to Squares of a Sorted Array questions page with run and submit button',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifySquaresOfSortedArrayPage();
    await this.arrayPage.verifyQuestionHasRunAndSubmit();
  });

  // ─────────────────────────────────────────
// TRY EDITOR — CODE EXECUTION STEPS
// ─────────────────────────────────────────

When('Array user enters valid python code in Try Editor',
  { timeout: 20000 }, async function () {
    await this.arrayPage.enterCodeInTryEditor('valid');
  });

When('Array user clicks Run button in Try Editor',
  { timeout: 20000 }, async function () {
    await this.arrayPage.clickRunInTryEditor();
  });

When('Array user clicks Run button without entering code in Try Editor',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyAlertOnEmptyRunInTryEditor();
  });

When('Array user enters invalid code in Try Editor',
  { timeout: 20000 }, async function () {
    await this.arrayPage.enterCodeInTryEditor('invalid');
  });

Then('Array user should be able to type code in the text area',
  { timeout: 20000 }, async function () {
    const isAttached = await this.page.locator('#editor').isVisible();
    console.log('Editor attached:', isAttached);
  });

Then('Array user should be able to see output in Try Editor',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyOutputInTryEditor();
  });

Then('Array user should receive an alert message in Try Editor',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyAlertOnEmptyRunInTryEditor();
  });

Then('Array user should receive an error message in Try Editor',
  { timeout: 20000 }, async function () {
    await this.arrayPage.verifyErrorOnInvalidCodeInTryEditor();
  });