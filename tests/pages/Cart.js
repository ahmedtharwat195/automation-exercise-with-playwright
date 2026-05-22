const {expect}=require('@playwright/test')
class Cart {
constructor(page) {
      this.page = page;
this.cartDescription;
this.cartPrice;
this.proceedButton=page.locator('a.check_out:has-text("Proceed To Checkout")')
this.checkOutButton=page.getByRole('link',{name:/place order/i})
}

async assertProductCardContents(product){
this.cartDescription=this.page.locator('.cart_description').getByText(`${product.name}`)
this.cartPrice=this.page.locator('.cart_price').getByText(`${product.price}`)
await expect(this.cartDescription).toBeVisible()
await expect(this.cartPrice).toBeVisible()

}
  

async clickOnCheckoutButton () {
   await this.checkOutButton.click()}

async clickOnProceedtoChekoutButton () {
  await  this.proceedButton.click()
    await expect(this.page).toHaveURL(/checkout/)

}

}
module.exports={Cart}
