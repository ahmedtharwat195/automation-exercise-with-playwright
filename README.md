```
automationexcercise/
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI/CD pipeline
├── tests/
│   ├── pages/                   # Page Object Model classes
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── AccountCreated.js
│   │   ├── Products.js
│   │   ├── Cart.js
│   │   ├── Payment.js
│   │   ├── Footer.js
│   │   └── TestHelpers.js       # Shared helper flows
│   ├── Login.spec.js
│   ├── Register.spec.js
│   ├── homePage.spec.js
│   ├── ProductsPage.spec.js
│   ├── CartPage.spec.js
│   └── PaymentPage.spec.js
├── testdata/
│   ├── login.json
│   ├── registerData.js
│   ├── products.json
│   ├── paymentinfo.json
│   ├── footer.json
│   └── review.json
├── storageState.json            # Saved login session
├── playwright.config.js
└── package.json
```

---

## ✅ Test Coverage

| Spec File | Test Cases |
|-----------|-----------|
| `Login.spec.js` | Login with valid credentials + save storageState, Login + Logout, Login with invalid credentials |
| `Register.spec.js` | Create new account, verify account created, delete account |
| `homePage.spec.js` | Subscribe to newsletter with valid email |
| `ProductsPage.spec.js` | Add item to cart, view product details, submit product review |
| `CartPage.spec.js` | Add product to cart, verify cart contents, complete payment |
| `PaymentPage.spec.js` | Full order flow using TestHelpers, fill payment info, confirm order |

---

## ⚙️ Key Features

- **Page Object Model (POM)** – each page has its own class with locators and actions
- **storageState** – login session saved to avoid re-authenticating in every test
- **External test data** – all test inputs stored in JSON/JS files under `testdata/`

---

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS)
- npm

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/automationexercise-playwright.git
cd automationexercise-playwright
npm install
npx playwright install
```

### Run Tests

```bash
# Run all tests
npx playwright test

# Run a specific spec
npx playwright test tests/Login.spec.js

# Show HTML report
npx playwright show-report
```

### Generate / Refresh storageState
