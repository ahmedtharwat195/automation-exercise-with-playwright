const {expect}=require('@playwright/test')

class Header {
constructor(page) {
      this.page = page;
this.signuplink=page.getByRole('link',{name:' Signup / Login'})
this.deleteAccountlink=page.getByRole('link',{name:'  Delete Account'})
this.logOutButtown=page.getByRole('link',{name:' Logout'})
this.productsLink=page.getByRole('link',{name:' Products'})
this.cartLink=page.getByRole('link',{name:'  Cart'})
this.loggedInAs=page.getByText(' Logged in as ')

}

async gotosignupandloginPage () {
            await this.page.goto('https://automationexercise.com')
            await this.signuplink.click()    
await expect (this.page).toHaveURL(/login/)

}
async clickProductsPage () {
          if (this.page.url().includes('google_vignette')){
                    await this.page.goBack();
          }
            await this.productsLink.click()    
await expect (this.page).toHaveURL(/products/)

}
async clickOnlogOutButton() {
     await this.logOutButtown.click()
    }
async clickOnCartButton(){
      await this.cartLink.click()
}

async assertLoggedinAsText (user) {

    await expect (this.loggedInAs).toContainText(user.username)


}
async clickOnDeleteAccountLink (){
      await this.deleteAccountlink.click()}


}
module.exports={Header}
