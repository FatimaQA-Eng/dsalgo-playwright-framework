const { timeout } = require("../config/config");
const homePage = require("./homePage");
//const loginData = require('C:\DsAlgo-Playwright\PlaywrightCucumberBDD\test-data\loginData.json);
const { expect } = require('@playwright/test');
//const TreeData = require('../../test-data/TreeData.json');


class TreePage {
  constructor(page) {
   this.page = page;
  }
   
  async goToTreePage()
  {
   await this.page.goto("https://dsportalapp.herokuapp.com/tree/");
    console.log(await this.page.url());

  }

   async verifyTreePageContent() {
    console.log('Verifying Tree page title and content');
    console.log('______________________________________');
    const titleLocator = await this.page.getByRole('heading').first();
    //await this.titleLocator.waitFor({ state: 'visible', timeout: 90000 });
    const Titletext = await titleLocator.textContent();
    console.log('Page Title:', Titletext);
    try{
    await expect.soft(titleLocator).toContainText('Tree');
    console.log('Title verification passed');
    }
    catch (error) {
      console.log('Title verification failed');
       }
  

    const paragraph = this.page.locator("//p").filter({ hasText:'We can extend the concept of linked data structure'}).first();
    //paragraph.waitFor({ state: 'visible', timeout: 60000 });
    //const paragraphtext = await paragraph.textContent();
    try{
    await expect.soft(paragraph).not.toBeEmpty();
    console.log('Page Content verification passed');
      }
      catch (error) {
      console.log('Page Content is empty');
    }
  }
    
  

  async gotoTreepagelinks(linkname) { 
    await this.page.goto(`https://dsportalapp.herokuapp.com/tree/${linkname}/`);
    console.log(await this.page.url());
  }

  

  async verifyTreepagelinks(titlemsg,paragraphmsg) {
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
  }
    catch (error) {
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
    if(val ==2 )
      
      {return true;} 
    else {return false;}
    
  }


    /*async verifytypeoftreescontent() {
    console.log('Verifying Type of Trees page content');
     console.log('___________________________________');

    const titleLocator = await this.page.locator('p').filter({ hasText: 'Types of Trees' }).first()
    const titleText = await titleLocator.textContent();
    console.log('Page Title:', titleText); 
    try{
    await expect.soft(titleLocator).toContainText('Types of Trees');
    console.log('Title verification passed');
    } catch (error) {
      console.log('Title verification failed');
    } 

    const paragraph = await this.page.locator('p').filter({ hasText: 'If a tree has no constraint' }).first();
    //const paragraphtext = await paragraph.textContent();
      try{
    await expect.soft(paragraph).not.toBeEmpty();
    console.log('Page content is present');
    } catch (error) {
      console.log('Page content is blank');
    } 
  }*/

  async clickTryHereTree() {
    console.log("Veryifying 'Try Here' in: ", this.page.url());
    console.log('__________________________________________');
    await this.page.getByRole('link', { name: 'Try here' }).click();
  }
  
  async gotopracticequestions()
  {
     await this.page.goto('https://dsportalapp.herokuapp.com/tree/practice');
    console.log(await this.page.url());
    

}

  async verifypracticequestions(){
    let val = 0;
      console.log('Verifying Practice Question Page');
     console.log('___________________________________');

    try{
    await expect.soft(this.page).not.toBeEmpty();
    console.log('Page Content is Present');
       val = val + 1;
    } catch (error) {
      console.log('Page is blank');
    } 
    if(val == 1){
      return true; 
    }
    else
    {
      return  false;
    }
  }


}
module.exports = TreePage;     

   

 
