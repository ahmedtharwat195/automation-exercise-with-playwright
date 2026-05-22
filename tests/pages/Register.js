const {expect}=require('@playwright/test');

class Register {
constructor(page) {
      this.page = page;
this.accoundDeletedMessage=page.getByTestId('account-deleted')
this.name=page.getByPlaceholder('Name')
this.email=page.locator('.signup-form').getByPlaceholder('Email Address')
this.signupButton=page.getByRole('button',{name:'Signup'})
this.genderCheck=page.getByRole('radio',{name:'Mr.'})
this.nameSignup=page.getByTestId('name')
this.passwordSignup=page.getByRole('textbox',{name:'password'})
this.birthDaySignup=page.getByTestId('days')
this.birthMonthSignup=page.getByTestId('months')
this.birthYearSignup=page.getByTestId('years')

this.signupNewsLetters=page.getByRole('checkbox',{name:'newsletter'})
this.countrySignup=page.getByRole('combobox',{name:'country'})

this.fnameSignup=page.getByTestId('first_name')
this.lnameSignup=page.getByTestId('last_name')
this.companyNameSignup=page.getByTestId('company')
this.addressSignup=page.getByTestId('address')
this.stateSignup=page.getByTestId('state')
this.citySignup=page.getByTestId('city')
this.zipCodeSignup=page.getByTestId('zipcode')
this.mobileNumberSignup=page.getByTestId('mobile_number')

this.createAccountButton=page.getByRole('button',{name:'Create Account'})
this.continueButton=page.getByTestId('continue-button')
}
async gotoSignupPage(registerData) {
await this.name.fill(registerData.username)
await this.email.fill(registerData.email)
await this.signupButton.click() 

    }
 
async fillSignupForm (user){
await expect (this.page).toHaveURL(/signup/)
await this.genderCheck.check()
await this.nameSignup.fill(user.username)
await this.passwordSignup.fill(user.password)

await this.birthDaySignup.selectOption(user.birthDaySignup)
await this.birthMonthSignup.selectOption(user.birthMonthSignup)
await this.birthYearSignup.selectOption(user.birthYearSignup)

await this.signupNewsLetters.check()
await this.countrySignup.selectOption(user.country)
await this.fnameSignup.fill(user.fname)
await this.lnameSignup.fill(user.lname)
await this.companyNameSignup.fill(user.company)
await this.addressSignup.fill(user.address)
await this.stateSignup.fill(user.state)
await this.citySignup.fill(user.city)
await this.zipCodeSignup.fill(user.zipCode)
await this.mobileNumberSignup.fill(user.mobile)
this.currentUser=user;
}
async clickOnCreateAccountButton(){await this.createAccountButton.click() 
}
async ClickOncontinueButton () {
    await this.continueButton.click() 
await expect (this.page).toHaveURL('https://automationexercise.com')

}


async assertAccountDeletedIsVisiable (accountDeletedText){
    await expect (this.accoundDeletedMessage).toHaveText(accountDeletedText)
    
}
























}
module.exports={Register}
