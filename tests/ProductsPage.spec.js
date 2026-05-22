// @ts-check
const { test, expect } =require ('@playwright/test');
const {Header} = require ('./pages/Header.js');
const {Products} = require ('./pages/Products.js');
const productsData = require ('../testdata/products.json')
const reviewData = require ('../testdata/review.json')
let context, page;
let productPage
let headerPage
test.describe ('buy tests',()=>{

test.beforeEach(async({browser}) =>{
    context = await browser.newContext();
    page = await context.newPage();
headerPage=new Header(page)
productPage=new Products (page)

})
 test.afterEach(async () => {
    await context.close();
  });
test('buying an item',async ()=>{   
                await page.goto('https://automationexercise.com')

    await headerPage.clickProductsPage()
     await productPage.clickOnaddItemToCart(productsData.sleevelessDress.name)
     await productPage.assertProductAddedToCartText()
  await productPage.ClickOnContinueButton()
     await productPage.goviewProduct(productsData.sleevelessDress.id)
    await productPage.assertProductName(productsData.sleevelessDress)
await productPage.fillReviewform(reviewData)
await productPage.clickonSubmitReviewbutton()
await productPage.assertReviewSuccessText()
})

})