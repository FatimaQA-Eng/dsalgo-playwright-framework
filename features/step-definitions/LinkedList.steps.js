const { Given, When, Then } = require('@cucumber/cucumber');
const TreePage = require('../../pages/TreePage');
const LoginPage = require('../../pages/loginPage');
const QueuePage = require('../../pages/QueuePage');
const LinkedListPage = require('../../pages/LinkedListPage');
const TryEditorPage = require('../../pages/TryEditorPage');
const config = require('../../config/config');
const loginData = require('../../test-data/loginData.json');
const LinkedListData = require('../../test-data/LinkedList.json');
const { expect } = require('@playwright/test');

// Scenario: Verify that user is able to navigate to "linkedlist" page
var result;
When('user clicks Get Started button under linkedlist section', { timeout: 60000 }, async function() {
  const linkedlistpage = new LinkedListPage(this.page);
  await linkedlistpage.goToLinkedListPage();
  console.log('Clicked on Get Started button under linkedlist section');
});

Then('user should be navigated to linkedlist page successfully',{ timeout: 60000 }, async function () {
  const linkedlistPage = new LinkedListPage(this.page);
  await linkedlistPage.verifyLinkedListPageContent();
});

 //Scenario: Verify that user is able to see the content of "Introduction" section
Given('user is on the linkedlist page', { timeout: 60000 }, async function () {
  console.log('User is on the linkedlist page');
});

When('user clicks on "Introduction" section', { timeout: 60000 }, async function () {
 const linkedlistPage = new LinkedListPage(this.page);
 await linkedlistPage.gotolinkedlistpagelinks("introduction");
});

Then('user should be able to see the content of "Introduction" section', { timeout: 60000 }, async function () {
  const linkedlistPage = new LinkedListPage(this.page);
  result = await linkedlistPage.verifylinkedlistpagelinks("Introduction", "Linked lists are an ordered collection of objects");
  expect(result).toBeTruthy();
});     

//Scenario: Verify that user is able to see the content of "Creating Linked List" section
When('user clicks on "Creating Linked List"', { timeout: 60000 }, async function () {
  
    const linkedlistPage = new LinkedListPage(this.page);   
    await linkedlistPage.gotolinkedlistpagelinks("creating-linked-list");  
});

Then('user should be able to see the content of "Creating Linked List"', { timeout: 60000 }, async function () {
    const linkedlistPage = new LinkedListPage(this.page); 
   result = await linkedlistPage.verifylinkedlistpagelinks("Creating Linked List", "Why you need to create your linked list if Python has its own");
expect(result).toBeTruthy();
  });

//Scenario: validate Types of Linked List Operations
When('user clicks on "Types of Linked List"', { timeout: 60000 }, async function () {
  
    const linkedlistPage = new LinkedListPage(this.page);   
    await linkedlistPage.gotolinkedlistpagelinks("types-of-linked-list");  
});

Then('user should be able to see the content of "Types of Linked List"', { timeout: 60000 }, async function () {
    const linkedlistPage = new LinkedListPage(this.page);
    result = await linkedlistPage.verifylinkedlistpagelinks("Types of Linked List", "A singly linked list can be simply called a linked list.");
    expect(result).toBeTruthy();
});

//Scenario:validate Implement Linked List in Python Operations
When('user clicks on "Implement Linked List in Python"', { timeout: 60000 }, async function () {
  
    const linkedlistPage = new LinkedListPage(this.page);   
    await linkedlistPage.gotolinkedlistpagelinks("implement-linked-list-in-python");  
   
});

Then('user should be able to see the content of "Implement Linked List in Python"', { timeout: 60000 }, async function () {
    const linkedlistPage = new LinkedListPage(this.page);
    result = await linkedlistPage.verifylinkedlistpagelinks("Implement Linked List in Python", "We implement the concept of linked lists using the list in Python");
    expect(result).toBeTruthy();
  });

//Scenario:validate Traversal in Python Operations
When('user clicks on "Traversal"', { timeout: 60000 }, async function () {
  
    const linkedlistPage = new LinkedListPage(this.page);   
    await linkedlistPage.gotolinkedlistpagelinks("traversal");  
});

Then('user should be able to see the content of "Traversal"', { timeout: 60000 }, async function () {
    const linkedlistPage = new LinkedListPage(this.page);
    result = await linkedlistPage.verifylinkedlistpagelinks("Traversal", "Singly linked lists can be traversed in only forward direction");
    expect(result).toBeTruthy();
});

//Scenario:validate Insertion in Python Operations
When('user clicks on "Insertion"', { timeout: 60000 }, async function () {
  
    const linkedlistPage = new LinkedListPage(this.page);   
    await linkedlistPage.gotolinkedlistpagelinks("insertion-in-linked-list");  
});

Then('user should be able to see the content of "Insertion"', { timeout: 60000 }, async function () {
    const linkedlistPage = new LinkedListPage(this.page);
    result = await linkedlistPage.verifylinkedlistpagelinks("Insertion", "Inserting element in the linked list involves re-assigning");
    expect(result).toBeTruthy();
});

//Scenario:validate Deletion in Python Operations
When('user clicks on "Deletion"', { timeout: 60000 }, async function () {
  
    const linkedlistPage = new LinkedListPage(this.page);   
    await linkedlistPage.gotolinkedlistpagelinks("deletion-in-linked-list");  
});

Then('user should be able to see the content of "Deletion"', { timeout: 60000 }, async function () {
    const linkedlistPage = new LinkedListPage(this.page);
    result = await linkedlistPage.verifylinkedlistpagelinks("Deletion", "We can remove an existing node using the key");
    expect(result).toBeTruthy();
});


//Verify that user is able to navigate to "Try Here>>>" page from "Introduction" section
Given('The user is in the "Introduction" page', { timeout: 60000 }, async function () {  
  const linkedlistPage = new LinkedListPage(this.page);
  await linkedlistPage.gotolinkedlistpagelinks("introduction");
}); 
When('user clicks on "Try Here>>>" button in "Introduction" section', { timeout: 60000 }, async function () {
  const linkedlistPage = new LinkedListPage(this.page);
  await linkedlistPage.clickTryHereLinkedList();
  
});

Then('user should be navigated to "Try Editor" page successfully from "Introduction" section', { timeout: 60000 }, async function () {
  const tryEditorPage = new TryEditorPage(this.page);
  alertmsg = await tryEditorPage.verifycodeinput(LinkedListData.Validcode);
  console.log("Alertmsg" + alertmsg);
  expect(alertmsg).toBeNull();
});

//Verify that user is able to navigate to "Try Here>>>" page from "Creating Linked List" section
Given('The user is in the "Creating Linked List" page', { timeout: 60000 }, async function () {  
  const linkedlistPage = new LinkedListPage(this.page);
  await linkedlistPage.gotolinkedlistpagelinks("creating-linked-list");
}); 
When('user clicks on "Try Here>>>" button in "Creating Linked List" section', { timeout: 60000 }, async function () {
  const linkedlistPage = new LinkedListPage(this.page);
  await linkedlistPage.clickTryHereLinkedList();
 
});

Then('user should be navigated to "Try Editor" page successfully from "Creating Linked List" section', { timeout: 60000 }, async function () {
  const tryEditorPage = new TryEditorPage(this.page);
  alertmsg = await tryEditorPage.verifycodeinput(LinkedListData.Invalidcode);
  expect(alertmsg.toLowerCase()).toContain('syntax');

});



