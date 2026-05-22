const { expect } = require('@playwright/test')
const { Register } = require('./Register.js')
const { Header } = require('./Header.js')
const { AccountCreated } = require('./AccountCreated.js')
const { Login } = require('./Login.js')
const { Footer } = require('./Footer.js')
const { Products } = require('./Products.js')
const { Cart } = require('./Cart.js')
const { Payment } = require('./Payment.js')

const productsData = require('../../testdata/products.json')

class TestHelpers {
  constructor(page) {
    this.page = page

    this.registerPage = new Register(page)
    this.headerPage = new Header(page)
    this.accountCreatedPage = new AccountCreated(page)
    this.loginPage = new Login(page)
    this.footerPage = new Footer(page)
    this.productPage = new Products(page)
    this.cartPage = new Cart(page)
    this.paymentPage = new Payment(page)
  }

  async helperAddOrdersAndProceedToPayment() {
    await this.page.goto('https://automationexercise.com')

    await this.headerPage.clickProductsPage()

    await this.productPage.clickOnaddItemToCart(
      productsData.sleevelessDress.name
    )

    await this.productPage.ClickOnViewCartLink()

    await this.cartPage.assertProductCardContents(
      productsData.sleevelessDress
    )

    await this.cartPage.clickOnProceedtoChekoutButton()
    await this.cartPage.clickOnCheckoutButton()
  }
}

module.exports = { TestHelpers }