const {expect}=require('@playwright/test')

class AccountCreated {
constructor(page) {
      this.page = page;
this.accountCreatedHeading=page.getByTestId('account-created')

}

async assertAccountCreatedHeading (registerData) {
         
await expect (this.accountCreatedHeading).toHaveText(registerData.accountCreatedHeading)

}





















}
module.exports={AccountCreated}
