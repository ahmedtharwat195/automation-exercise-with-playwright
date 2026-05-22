const { test, expect } =require ('@playwright/test');
const {Register} = require ('./pages/Register.js');
const registerData = require ('../testdata/registerData.js');
const {Header} = require ('./pages/Header.js');
const {AccountCreated} = require ('./pages/AccountCreated.js');
const {Login} = require ('./pages/Login.js');
let context, page;
let LoginPage
let registerPage
let headerPage
let AccountCreatedPage
test.describe ('create & Delete account',()=>{

test.beforeEach(async({browser}) =>{
   context = await browser.newContext({
  storageState: undefined
});
    page = await context.newPage();
registerPage=new Register(page)
headerPage=new Header(page)
AccountCreatedPage=new AccountCreated (page)
LoginPage=new Login (page)

})
 test.afterEach(async () => {
    await context.close();
  });
test('Create and Delete New Account',async ()=>{
  await headerPage.gotosignupandloginPage()
  await registerPage.gotoSignupPage(registerData)
  await registerPage.fillSignupForm(registerData);
  await registerPage.clickOnCreateAccountButton()
  await AccountCreatedPage.assertAccountCreatedHeading(registerData)
  await registerPage.ClickOncontinueButton()
  await headerPage.assertLoggedinAsText(registerData)
  await headerPage.clickOnDeleteAccountLink()
  await registerPage.assertAccountDeletedIsVisiable(registerData.accountDeletedText)

})



})