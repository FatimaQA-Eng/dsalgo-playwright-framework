const { Given, When, Then } = require('@cucumber/cucumber');
const TreePage = require('../../pages/TreePage');
const LoginPage = require('../../pages/loginPage');
const TryEditorPage = require('../../pages/TryEditorPage');
const config = require('../../config/config');
const loginData = require('../../test-data/loginData.json');
const TreeData = require('../../test-data/TreeData.json');
const { expect } = require('@playwright/test');

var treePage = new TreePage(this.page);
var alertmsg, result;

Given('user is on the Home page', { timeout: 60000 }, async function () {
  const loginPage = new LoginPage(this.page);
    await loginPage.launchApp(config.baseURL);
  });


When('user clicks Get Started button under Tree section', { timeout: 60000 }, async function() {
  const treePage = new TreePage(this.page);
  await treePage.goToTreePage();
});

Then('user should be navigated to Tree page successfully',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page);
 await treePage.verifyTreePageContent();
});             

Given('user is on the Tree page', { timeout: 60000 }, async function () {
 console.log('User is on the Tree page');
 //await treePage.navigateToTreePage();
});

When('user clicks on "Overview of Trees" section', { timeout: 60000 }, async function () {
console.log('navigating to overview of trees page');
const treePage = new TreePage(this.page);

await treePage.gotoTreepagelinks("overview-of-trees");
});


Then('user should be able to see the content of "Overview of Trees" section', { timeout: 60000 }, async function () {
  const treePage = new TreePage(this.page);
  result = await treePage.verifyTreepagelinks("Overview of Trees","Tree is a hierarchical data structure in which");
  expect(result).toBeTruthy();
});                                 


//Verify that user is able to navigate to "Type of Trees" page

When ('user clicks on "Type of Trees" section', { timeout: 60000 }, async function () {
const treePage = new TreePage(this.page);
await treePage.gotoTreepagelinks("types-of-trees");
});

Then('user should be able to see the content of "Type of Trees" section', { timeout: 60000 }, async function (){
 const treePage = new TreePage(this.page);
 result= await treePage.verifyTreepagelinks("Types of Trees", "If a tree has no constraint on its hierarchy");
  expect(result).toBeTruthy();
});

//validate "terminologies" page

When('user clicks on "terminologies"', { timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
 await treePage.gotoTreepagelinks("terminologies");
});

Then('user should be able to see the content of "terminologies"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
result = await treePage.verifyTreepagelinks("Terminologies","A tree has only one root node.");
 //expect(result).toBeTruthy();
});

//Validate "Traversals-Illustration" page
When('user clicks on "Traversals-Illustration"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("traversals-illustration");

});

Then('user should be able to see the content of "Traversals-Illustration"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
result = await treePage.verifyTreepagelinks("Traversals-Illustration","Below diagram will help in understanding");
 expect(result).toBeTruthy();
});

//Validate "Tree Traversals" page
When('user clicks on "Tree Traversals"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("tree-traversals");
});

Then('user should be able to see the content of "Tree Traversals"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
result = await treePage.verifyTreepagelinks("Tree Traversals","Tree traversal means reading or processing the data");
 expect(result).toBeTruthy();
});


//Validate "Binary Trees" page
When('user clicks on "Binary Trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("binary-trees");
});

Then('user should be able to see the content of "Binary Trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
result = await treePage.verifyTreepagelinks("Binary Trees","Binary trees are a type of tree Data structures");
 expect(result).toBeTruthy();
});

//Validate "Types of Binary Trees" page
When('user clicks on "Types of Binary Trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("types-of-binary-trees");
});

Then('user should be able to see the content of "Types of Binary Trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
result = await treePage.verifyTreepagelinks("Types of Binary Trees","In a binary tree if all levels are filled except");
 expect(result).toBeTruthy();
});

//Validate "Implementation in Python" page
When('user clicks on "Implementation in Python"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("implementation-in-python");
});

Then('user should be able to see the content of "Implementation in Python"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
result = await treePage.verifyTreepagelinks("Implementation in Python","First we are creating a node class where binary tree");
 expect(result).toBeTruthy();
});

//Validate "binary-tree-traversals" page
When('user clicks on "Binary Tree Traversals"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("binary-tree-traversals");
});

Then('user should be able to see the content of "Binary Tree Traversals"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
result = await treePage.verifyTreepagelinks("Binary Tree Traversals","Tree Traversals: The process of visiting each node");
 expect(result).toBeTruthy();
});

//Validate "binary-tree-traversals" page
When('user clicks on "Implementation of Binary Trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("implementation-of-binary-trees");
});

Then('user should be able to see the content of "Implementation of Binary Trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
  result = await treePage.verifyTreepagelinks("Implementation of Binary Trees","First we have defined a binary tree from the above");
 expect(result).toBeTruthy();
});

//Validate "Applications of Binary trees" page
When('user clicks on "Applications of Binary trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("applications-of-binary-trees");
});

Then('user should be able to see the content of "Applications of Binary trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
  result = await treePage.verifyTreepagelinks("Applications of Binary trees","Here are few applications of Binary tree");
expect(result).toBeTruthy();
});

//Validate "Binary Search Trees" page
When('user clicks on "Binary Search Trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("binary-search-trees");
});

Then('user should be able to see the content of "Binary Search Trees"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
result = await treePage.verifyTreepagelinks("Binary Search Trees","Binary Search Tree is a special case of Binary Tree");
 expect(result).toBeTruthy();
});

//Validate "Implementation Of BST" page
When('user clicks on "Implementation Of BST"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
await treePage.gotoTreepagelinks("implementation-of-bst");
});

Then('user should be able to see the content of "Implementation Of BST"',{ timeout: 60000 }, async function () {
 const treePage = new TreePage(this.page); 
result = await treePage.verifyTreepagelinks("Implementation Of BST","class BinarySearchTreeNode:");
 //expect(result).toBeTruthy();
});

// verify the user is able to navigate to "Practice Questions"
When('user clicks on "Practice Questions" section',{ timeout: 60000 }, async function () {
const treePage = new TreePage(this.page);
await treePage.gotopracticequestions();
});

Then('user should be able to see the content of "Practice Questions" section',{ timeout: 60000 }, async function () {
const treePage = new TreePage(this.page);
result = await treePage.verifypracticequestions();
console.log(result);
 expect(result).toBeTruthy();
});



//Verify that user is able to navigate to "Try Here>>>" page 

Given('The user is in the "Overview of Trees" page', { timeout: 60000 }, async function () {
const treePage = new TreePage(this.page);
await treePage.gotoTreepagelinks('overview-of-trees');
});

When('user clicks on "Try Here>>>" button in "Overview of Trees" section', { timeout: 60000 }, async function () {
console.log('Clicking on Try Here button in Overview of Trees section');
const treePage = new TreePage(this.page);
await treePage.clickTryHereTree();
});

Then('user should be navigated to "Try Editor" page successfully', { timeout: 60000 }, async function () {
console.log('Try editor URL:', await this.page.url());
});

// Verify that user is able to enter valid Java code in Text Box

Given('The user is in the "Try Editor" page', { timeout: 60000 }, async function () {
console.log('Ensuring user is on Try Editor page');

});

When('user enters valid Java code in Text Box and clicks on "Run" button', { timeout: 60000 }, async function () {
const tryeditorpage = new TryEditorPage(this.page);
alertmsg = await tryeditorpage.verifycodeinput(TreeData.Validcode);
});

Then('user should be able to see the output of the code in the output section', { timeout: 60000 }, async function () {
    expect(alertmsg).toBeNull();
  console.log('Verified code output successfully');
});

//Verify that user is getting alert by entering wrong syntax in text area and click on "Run" button


When('user enters invalid Java code in Text Box and clicks on "Run" button', { timeout: 60000 }, async function () {
const tryeditorpage = new TryEditorPage(this.page);

 alertmsg = await tryeditorpage.verifycodeinput(TreeData.Invalidcode);
//console.log('Entered invalid Java code and clicked Run');
});     

Then('The user should be able to see Alert Message "Syntax Error"', { timeout: 60000 }, async function () {
    expect(alertmsg.toLowerCase()).toContain('syntax');
    console.log('Alert Message : '+ alertmsg);
});

//Verify that user is getting alert by entering random alphanumeric characters in text area and click on "Run" button
When('user enters random alphanumeric characters in Text Box and clicks on "Run" button', { timeout: 60000 }, async function () {
  
  const tryeditorpage = new TryEditorPage(this.page);
 alertmsg = await tryeditorpage.verifycodeinput(TreeData.Alphanumeric);

});

Then('The user should be able to see Alert Message "Not Defined"', { timeout: 60000 }, async function () {
     expect(alertmsg.toLowerCase()).toContain('syntax');
    console.log('Alert Message : '+ alertmsg);
});
//Verify that user is getting alert by clicking on "Run" button leaving text area blank

When('user clicks on "Run" button leaving text area blank', { timeout: 60000 }, async function () {
const tryeditorpage = new TryEditorPage(this.page);
 alertmsg = await tryeditorpage.verifycodeinput(TreeData.blank);
});

Then('The user should be able to see Alert Message for blank text area', { timeout: 60000 }, async function () {
  expect(alertmsg).toContain('noinput');
console.log('Alert Message : '+ alertmsg);
});