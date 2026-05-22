const {expect}=require('@playwright/test')
class Payment {
constructor(page) {
      this.page = page;


this.paymentName=page.getByTestId('name-on-card')
this.cardNumber=page.getByTestId('card-number')
this.cvc=page.getByTestId('cvc')
this.expirationMonth=page.getByTestId('expiry-month')
this.expirationYear=page.getByTestId('expiry-year')
this.payAndConfirmButton=page.getByTestId('pay-button')
this.orderPlacedSuccessText=page.getByTestId('order-placed')

}

 
async fillPaymentInfo(paymentinfo){
await this.paymentName.fill(paymentinfo.name)
await this.cardNumber.fill(paymentinfo.cardnumber)
await this.cvc.fill(paymentinfo.cvc)
await this.expirationMonth.fill(paymentinfo.expirationmonth)
await this.expirationYear.fill(paymentinfo.expirationyear)
}

async clickOnPayAndConfirm () {
   await this.payAndConfirmButton.click()}

async assertOrderIsPlaced () {
  await  expect (this.orderPlacedSuccessText).toBeVisible()
    await expect(this.page).toHaveURL(/payment_done/)

}

}
module.exports={Payment}
