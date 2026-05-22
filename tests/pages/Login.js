const {expect}=require('@playwright/test')
const loginData=require('../../testdata/login.json')

class Login {
constructor(page) {
      this.page = page;
this.emailLogin=page.locator('.login-form').getByPlaceholder('Email Address')
this.passwordLogin=page.locator('.login-form').getByPlaceholder('Password')
this.loginButton=page.getByRole('button',{name:'Login'})
this.loginFailedMessage=page.getByText(loginData.invalidUser.message)
}

async Login (user) {
await this.emailLogin.fill(user.email)
await this.passwordLogin.fill(user.password)

     await this.loginButton.click()
     
}

}
module.exports={Login}
