// @ts-check
const { test, expect } =require ('@playwright/test');
const {Footer} = require ('./pages/Footer.js');
const footerData = require ('../testdata/footer.json')

let footerPage
test.describe ('subscription tests',()=>{

test.beforeEach(async({page}) =>{

footerPage=new Footer (page)

})

test('subscribe With valid Email',async ({page})=>{   
    await page.goto('https://automationexercise.com')
       await footerPage.subscribeWithEmail(footerData.validEmail)
  await expect (footerPage.successMessage).toContainText(footerData.subscriptionMessage);

})

})