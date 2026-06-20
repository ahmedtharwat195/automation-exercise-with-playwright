const {expect}=require('@playwright/test')
const products=require('../../testdata/products.json')
class Products {
constructor(page) {
      this.page = page;
this.productCard;
  this.productName;
  this.viewCartLink=page.getByRole('link',{name:'View Cart'})
  this.ProductAddedToCartText=page.getByText('Your product has been added to cart.')
this.addToCart2=page.getByRole('button',{name:' Add to cart '})
this.continueButton=page.getByRole('button',{name:'Continue Shopping'})
this.viewCart=page.getByRole('link',{name:'View Cart'})
this.productQuantity=page.locator('#quantity')
this.reviewName=page.getByPlaceholder('Your Name')
this.reviewEmail=page.getByPlaceholder('Email Address',{exact:true})
this.reviewText=page.getByPlaceholder('Add Review Here!',{exact:true})
this.submitReviewButton=page.getByRole('button',{name:'Submit'})
this.reviewSuccessText=page.getByText('Thank you for your review.')
this.cartDescription=page.locator('.cart_description').getByText(`${products.blueTop.name}`)
//this.cartPrice=page.locator('.cart_price').getByText(`${products.blueTop.price}`)
this.proceedButton=page.locator('a.check_out:has-text("Proceed To Checkout")')
}

    async clickOnaddItemToCart (item) {
         this.ProductCard= this.page.locator(`.product-image-wrapper:has-text("${item}")`).locator('a:has-text("Add to cart")').first()
        await this.ProductCard.hover()
await this.ProductCard.click()

}
async ClickOnContinueButton(){await this.continueButton.click()}
async assertProductName(product){
    this.productName=this.page.getByRole('heading',{level:2,name:product.name})
    await expect(this.productName).toBeVisible()
}
async goviewProduct(id){
    await this.page.goto(`https://automationexercise.com/product_details/${id}`)
     await expect (this.page).toHaveURL(/product_details/)}

    async fillReviewform(reviewdata) {
await this.reviewName.fill(reviewdata.reviewName)
await this.reviewEmail.fill(reviewdata.reviewEmail)
await this.reviewText.fill(reviewdata.reviewText)


     
    }
   async clickonSubmitReviewbutton(){await this.submitReviewButton.click()}
async assertReviewSuccessText(){await expect(this.reviewSuccessText).toBeVisible()
}
async ClickOnViewCartLink(){await this.viewCartLink.click()}
async assertProductAddedToCartText() {
    await expect(this.ProductAddedToCartText).toBeVisible()
}





















}
module.exports={Products}
