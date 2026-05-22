// @ts-check
const { test, expect } =require ('@playwright/test');
const {Payment} = require ('./pages/Payment.js');
const paymentData = require ('../testdata/paymentinfo.json')
const {TestHelpers} = require ('./pages/TestHelpers.js');
let context, page;
let testHelpers
let paymentPage
test.describe ('payment tests',()=>{

test.beforeEach(async({browser}) =>{
     context = await browser.newContext();
    page = await context.newPage();
paymentPage=new Payment (page)
testHelpers =new TestHelpers (page)

})
 test.afterEach(async () => {
    await context.close();
  });
test('complete payment',async ()=>{   
                await page.goto('https://automationexercise.com')
    await testHelpers.helperAddOrdersAndProceedToPayment()
await paymentPage.fillPaymentInfo(paymentData)
await paymentPage.clickOnPayAndConfirm()
await paymentPage.assertOrderIsPlaced()
})

})