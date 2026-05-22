// @ts-check
const { test } =require ('@playwright/test');
const {Header} = require ('./pages/Header.js');
const {Products} = require ('./pages/Products.js');
const productsData = require ('../testdata/products.json')
const {Cart} = require ('./pages/Cart.js');
const {Payment} = require ('./pages/Payment.js');
const paymentData = require ('../testdata/paymentinfo.json')

let context, page;
let paymentPage
let productPage
let headerPage
let cartPage
test.describe ('cart tests',()=>{

test.beforeEach(async({browser}) =>{
  context = await browser.newContext();
    page = await context.newPage();
 headerPage=new Header(page)
 productPage=new Products (page)
 cartPage=new Cart (page)
 paymentPage=new Payment (page)


})
 test.afterEach(async () => {
    await context.close();
  });
test('complete payment',async ()=>{   
  
                await page.goto('https://automationexercise.com')
    await headerPage.clickProductsPage()
     await productPage.clickOnaddItemToCart(productsData.sleevelessDress.name)
  await productPage.ClickOnViewCartLink()
await cartPage.assertProductCardContents (productsData.sleevelessDress)
await cartPage.clickOnProceedtoChekoutButton()
await cartPage.clickOnCheckoutButton()
await paymentPage.fillPaymentInfo(paymentData)
await paymentPage.clickOnPayAndConfirm()
await paymentPage.assertOrderIsPlaced()

})

})