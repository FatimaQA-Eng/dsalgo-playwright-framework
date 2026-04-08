const { Given, When, Then } = require('@cucumber/cucumber');
const TreePage = require('../../pages/TreePage');
const LoginPage = require('../../pages/loginPage');
const QueuePage = require('../../pages/QueuePage');
const TryEditorPage = require('../../pages/TryEditorPage');
const config = require('../../config/config');
const loginData = require('../../test-data/loginData.json');
const QueueData = require('../../test-data/QueueData.json');
const { expect } = require('@playwright/test');

let result;
//const queuePage = new QueuePage(this.page);
// Scenario: Verify that user is able to navigate to "Queue" page

When('user clicks Get Started button under Queue section', { timeout: 60000 }, async function() {
  const queuepage = new QueuePage(this.page);
  await queuepage.goToQueuePage();
  console.log('Clicked on Get Started button under Queue section');
});

Then('user should be navigated to Queue page successfully',{ timeout: 60000 }, async function () {
  const queuePage = new QueuePage(this.page);
  await queuePage.verifyQueuePageContent();
});

 //Scenario: Verify that user is able to see the content of "Implementation of Queue in Python" section

Given('user is on the Queue page', { timeout: 60000 }, async function () {
  console.log('User is on the Queue page');
});

When('user clicks on "Implementation of Queue in Python" section', { timeout: 60000 }, async function () {
  console.log('Navigating to implementation of queue in python page');
 const queuePage = new QueuePage(this.page);
 await queuePage.goToQueuePagelinks("implementation-lists");
});

Then('user should be able to see the content of "Implementation of Queue in Python" section', { timeout: 60000 }, async function () {
  const queuePage = new QueuePage(this.page);
  result = await queuePage.verifyqueuepagelinks("Implementation of Queue in Python","There are various ways to implement queue" );
  expect(result).toBeTruthy();
});

//Scenario: Verify that user is able to see the content of "Implementation using collections.deque" section         
When('user clicks on "Implementation using collections.deque" section', { timeout: 60000 }, async function () {
  console.log('Navigating to implementation using collections.deque page');
  const queuePage = new QueuePage(this.page);
  await queuePage.goToQueuePagelinks("implementation-collections");
});

Then('user should be able to see the content of "Implementation using collections.deque" section', { timeout: 60000 }, async function () {
  const queuePage = new QueuePage(this.page);
  result = await queuePage.verifyqueuepagelinks("Implementation using collections.deque", "Queue in Python can be implemented using deque class");
expect(result).toBeTruthy();
});     


//scenario : validate Implementation using array

Given('user clicks on "Implementation using array"', { timeout: 60000 }, async function () {
  const queuePage = new QueuePage(this.page);
  await queuePage.goToQueuePagelinks("Implementation-array");
});

Then('user should be able to see the content of "Implementation using array"',{ timeout: 60000 }, async function () {
  const queuePage = new QueuePage(this.page);
  result = await queuePage.verifyqueuepagelinks("Implementation using array", "Python Lists have made it so easy to implement Queue");
  expect(result).toBeTruthy();
}); 

//scenario : validate Queue Operations

Given('user clicks on "Queue Operations"', { timeout: 60000 }, async function () {
  const queuePage = new QueuePage(this.page);
  await queuePage.goToQueuePagelinks("QueueOp");
});

Then('user should be able to see the content of "Queue Operations"',{ timeout: 60000 }, async function () {
  const queuePage = new QueuePage(this.page);
  result = await queuePage.verifyqueuepagelinks("Queue Operations", "Now, when you are trying to enqueue elements");
  expect(result).toBeTruthy();
}); 

//Verify that user is able to navigate to "Try Here>>>" page from "Implementation of Queue in Python" section
Given('The user is in the "Implementation of Queue in Python" page', { timeout: 60000 }, async function () {  
  const queuePage = new QueuePage(this.page);
  await queuePage.goToQueuePagelinks("implementation-lists");
});

When('user clicks on "Try Here>>>" button in "Implementation of Queue in Python" section', { timeout: 60000 }, async function () {
  const queuePage = new QueuePage(this.page);
  await queuePage.clickTryHereQueue();

}); 

Then('user should be navigated to "Try Editor" page successfully from "Implementation of Queue in Python" section', { timeout: 60000 }, async function () {
   console.log('Verifying Try editor in:', await this.page.url());
  const tryeditorpage = new TryEditorPage(this.page);
  alertmsg = await tryeditorpage.verifycodeinput(QueueData.Validcode);
  expect(alertmsg).toBeNull();
  console.log('Verified code output successfully ');
 
});

//Verify that user is able to navigate to "Try Here>>>" page from "Implementation using collections.deque" section
Given('The user is in the "Implementation using collections.deque" page', { timeout: 60000 }, async function () {     
  const queuePage = new QueuePage(this.page);
  await queuePage.goToQueuePagelinks("implementation-collections");
});                 

When('user clicks on "Try Here>>>" button in "Implementation using collections.deque" section', { timeout: 60000 }, async function () {
  const queuePage = new QueuePage(this.page);
  await queuePage.clickTryHereQueue();
});

Then('user should be navigated to "Try Editor" page successfully from "Implementation using collections.deque" section', { timeout: 60000 }, async function () {
   console.log('Verifying Try editor in:', await this.page.url());
  const tryeditorpage = new TryEditorPage(this.page);
  alertmsg = await tryeditorpage.verifycodeinput(QueueData.Invalidcode);
  expect(alertmsg.toLowerCase()).toContain('syntax');
    console.log('Verified code output successsfully');

});

