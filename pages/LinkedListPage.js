const { timeout } = require("../config/config");
const LoginPage = require("./loginPage");
const { expect, errors } = require('@playwright/test');
//const LinkedListData = require('../../test-data/LinkedList.json');

class LinkedListPage {
  constructor(page) {
    this.page = page;
  }
    async goToLinkedListPage() {    
    await this.page.goto('https://dsportalapp.herokuapp.com/linked-list/');
    console.log('Navigated to Linked List page:', this.page.url());
    }   
    async gotolinkedlistpagelinks(linkname) {
     await this.page.goto(`https://dsportalapp.herokuapp.com/linked-list/${linkname}/`);
    console.log(await this.page.url());
    } 
  

    async clickTryHereLinkedList() {
    console.log("Verifying Try Here in:", this.page.url());
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    await this.page.getByRole('link', { name: 'Try here>>>' }).click();
     }

    async verifyLinkedListPageContent() {
    console.log('Verifying Linked list page content');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    const titleLocator = await this.page.locator('h4').filter({ hasText: 'Linked List' }).first();
    //await this.page.waitfor(titleLocator, {timeout: 4000});
    const titleText = await titleLocator.textContent();
    console.log('Page Title:', titleText); 
    try{
    await expect.soft(titleLocator).toContainText('Linked List');
    console.log('Title verification passed');
    } catch (error) {
      console.log('Title verification failed');
    } 
    
    const paragraph = await this.page.locator('p').filter({ hasText: ' A linked list is a linear collection of data' }).first();
    //const paragraphtext = await paragraph.textContent();
      try{
    await expect.soft(paragraph).not.toBeEmpty();
    console.log('Page content is present');
    } catch (error) {
      console.log('Page content is blank');

  }
  }

    async verifylinkedlistpagelinks(titlemsg, paragraphmsg) {
     var val = 0;
    console.log(`Verifying ${titlemsg} content`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    const titleLocator = await this.page.locator(`p:has-text("${titlemsg}")`).first();
    const titleText = await titleLocator.textContent();
    console.log('Page Title:', titleText); 
    try{
    await expect.soft(titleLocator).toContainText(`${titlemsg}`);
    console.log('Title verification passed');
    val = val+1;
    } catch (error) {
      console.log('Title verification failed');
    } 

    const paragraph = await this.page.locator('p').filter({ hasText: `${paragraphmsg}`}).first();
    //const paragraphtext = await paragraph.textContent();
      try{
    await expect.soft(paragraph).not.toBeEmpty();
    console.log('Page content is present');
    val = val+1;
    } catch (error) {
      console.log('Page content is blank');
    } 

    if(val == 2) {return true} 
    else {false}
    }
  
  

  
}
module.exports = LinkedListPage;   