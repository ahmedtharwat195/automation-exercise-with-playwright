// @ts-check
const { test, expect } =require ('@playwright/test');
const loginData=require('../testdata/login.json')
const {Header} = require ('./pages/Header.js');
const {Login} = require ('./pages/Login.js');
let context, page;
let LoginPage
let headerPage
test.describe ('login&logout tests',()=>{

test.beforeEach(async({browser}) =>{
     context = await browser.newContext({
  storageState: undefined
});
    page = await context.newPage();
headerPage=new Header(page)
LoginPage=new Login (page)

})
 test.afterEach(async () => {
    await context.close();
  });

test('Login with correct credntials & Save storage state & LogOut',async ()=>{   
    await page.goto('https://automationexercise.com/login')
        await LoginPage.Login(loginData.validUser);
                   await page.context().storageState({ path: 'storageState.json' });
   await headerPage.clickOnlogOutButton();
    await expect(page).toHaveURL(/login/)

})
test('Login with incorrect credntials',async ()=>{   
    await page.goto('https://automationexercise.com/login')
        await LoginPage.Login(loginData.invalidUser);
          await expect(LoginPage.loginFailedMessage).toBeVisible()
})

})