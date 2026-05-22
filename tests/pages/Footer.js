const{expect}=require ('@playwright/test')

class Footer {
constructor(page){
this.page=page;
this.emailAddress=page.getByPlaceholder('Your email address')
this.subscribeButton=page.locator('//button[@id="subscribe"]')
this.successMessage=page.locator('.alert-success')

}

async subscribeWithEmail (email) {
await this.emailAddress.fill(email)
await this.subscribeButton.click()


}

}
module.exports={Footer}