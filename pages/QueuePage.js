const LoginPage = require("./loginPage");
const { expect } = require('@playwright/test');
//const QueueData = require('../../test-data/QueueData.json');
class QueuePage {
  constructor(page) {
    this.page = page;
    
  }
    async goToQueuePage(){

    await this.page.goto('https://dsportalapp.herokuapp.com/queue/');
        //console.log('Navigated to Queue page:', this.page.url());
    }
   
    async goToQueuePagelinks(linkname) { 
        await this.page.goto(`https://dsportalapp.herokuapp.com/queue/${linkname}/`);
    console.log(await this.page.url());
    }



  async clickTryHereQueue() {
    console.log("Verifying Try Here in:", this.page.url());
    await this.page.getByRole('link', { name: 'Try here>>>' }).click();
  
  }

    async verifyQueuePageContent() {
      let val = 0;
    console.log('Verifying Queue page content');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    const titleLocator = await this.page.getByRole('heading').first();
    const titleText = await titleLocator.textContent();
    console.log('Page Title:', titleText); 
    try{
    await expect.soft(titleLocator).toContainText('Queue');
    console.log('Title verification passed');
    val  = val + 1;
    } catch (error) {
      console.log('Title verification failed');
    } 
    
    const paragraph = await this.page.locator('p').filter({ hasText: 'Queue is very similar to stacks' }).first();
    //const paragraphtext = await paragraph.textContent();
      try{
    await expect.soft(paragraph).not.toBeEmpty();
    console.log('Page content is present');
      val  = val + 1;
    } catch (error) {
      console.log('Page content is blank');

  }
  if(val == 2)
  {
    return true;
  }
  else 
  {
    return false;
  }
}

  async verifyqueuepagelinks(titlemsg, paragraphmsg) {
    let val = 0;
   console.log(`Verifying ${titlemsg} content`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    const titleLocator = await this.page.locator(`p:has-text("${titlemsg}")`).first();
    const titleText = await titleLocator.textContent();
    console.log('Page Title:', titleText); 
    try{
    await expect.soft(titleLocator).toContainText(`${titlemsg}`);
    console.log('Title verification passed');
    val = val + 1;
    } catch (error) {
      console.log('Title verification failed');
    } 

    const paragraph = await this.page.locator('p').filter({ hasText: `${paragraphmsg}`}).first();
    //const paragraphtext = await paragraph.textContent();
      try{
    await expect.soft(paragraph).not.toBeEmpty();
    console.log('Page content is present');
     val = val + 1;
    } catch (error) {
      console.log('Page content is blank');
    } 
    if (val == 2)
    { return true;
    }
    else { return false;}
  }
  

}
module.exports = QueuePage;   