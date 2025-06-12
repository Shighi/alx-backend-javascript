# 0x06. Unittests in JS

## Description

This project focuses on learning and implementing unit testing and integration testing in JavaScript using Mocha, Chai, and Sinon. You'll learn how to write comprehensive test suites, use different assertion libraries, implement spies and stubs, work with hooks, handle async testing, and perform integration testing with Express.js.

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Requirements

- All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

## Setup

### Install Dependencies

```bash
# Install Mocha
npm install mocha

# Install Chai
npm install chai

# Install Sinon
npm install sinon

# For integration testing
npm install express request
```

### Package.json Setup

Add the following script to your `package.json`:

```json
{
  "scripts": {
    "test": "./node_modules/mocha/bin/mocha"
  }
}
```

## Tasks

### 0. Basic test with Mocha and Node assertion library
**File**: `0-calcul.js`, `0-calcul.test.js`

Create a function `calculateNumber` that:
- Accepts two arguments `a` and `b`
- Rounds both numbers and returns their sum
- Use Node's built-in `assert` library for testing

```javascript
// Example usage
calculateNumber(1, 3);     // 4
calculateNumber(1, 3.7);   // 5
calculateNumber(1.2, 3.7); // 5
calculateNumber(1.5, 3.7); // 6
```

### 1. Combining descriptions
**File**: `1-calcul.js`, `1-calcul.test.js`

Upgrade the previous function to accept a `type` parameter:
- `SUM`: Add rounded numbers
- `SUBTRACT`: Subtract rounded `b` from rounded `a`
- `DIVIDE`: Divide rounded `a` by rounded `b` (return "Error" if `b` rounds to 0)

```javascript
// Example usage
calculateNumber('SUM', 1.4, 4.5);      // 6
calculateNumber('SUBTRACT', 1.4, 4.5); // -4
calculateNumber('DIVIDE', 1.4, 4.5);   // 0.2
calculateNumber('DIVIDE', 1.4, 0);     // 'Error'
```

### 2. Basic test using Chai assertion library
**File**: `2-calcul_chai.js`, `2-calcul_chai.test.js`

Rewrite the previous test using Chai's `expect` syntax instead of Node's `assert`. This provides a more behavior-driven development (BDD) style that's easier to read and maintain.

### 3. Spies
**File**: `utils.js`, `3-payment.js`, `3-payment.test.js`

Learn to use Sinon spies to:
- Create a `Utils` module with the `calculateNumber` function
- Create `sendPaymentRequestToApi` function that uses `Utils.calculateNumber`
- Use spies to verify function calls without modifying behavior

### 4. Stubs
**File**: `4-payment.js`, `4-payment.test.js`

Learn to use Sinon stubs to:
- Replace expensive or external function calls with controlled responses
- Stub `Utils.calculateNumber` to always return `10`
- Verify both the stub usage and console output

### 5. Hooks
**File**: `5-payment.js`, `5-payment.test.js`

Use Mocha hooks (`beforeEach`, `afterEach`) to:
- Set up and tear down test environments
- Manage spies across multiple tests
- Ensure clean test isolation

### 6. Async tests with done
**File**: `6-payment_token.js`, `6-payment_token.test.js`

Test asynchronous functions using:
- Promise-based functions
- Mocha's `done` callback for proper async test completion
- Proper error handling in async contexts

### 7. Skip
**File**: `7-skip.test.js`

Learn to skip failing tests using Mocha's `.skip()` method instead of commenting out or removing tests. This is useful for:
- Temporarily disabling broken tests
- Environment-specific test execution
- Maintaining test suite integrity

### 8. Basic Integration testing
**Directory**: `8-api/`
**Files**: `package.json`, `api.js`, `api.test.js`

Create a basic Express.js server and test it:
- Set up an Express server on port 7865
- Create GET route `/` returning "Welcome to the payment system"
- Write integration tests using the `request` module
- Test status codes and response content

### 9. Regex integration testing
**Directory**: `9-api/`
**Files**: `api.js`, `api.test.js`, `package.json`

Extend the API with parameterized routes:
- Add GET `/cart/:id` route with numeric validation
- Use regex in route definition to accept only numbers
- Test both valid numeric IDs and invalid non-numeric IDs
- Verify proper 404 responses for invalid routes

### 10. Deep equality & Post integration testing
**Directory**: `10-api/`
**Files**: `api.js`, `api.test.js`, `package.json`

Add more complex endpoints and testing:
- GET `/available_payments` returning structured JSON object
- POST `/login` accepting JSON body and returning personalized message
- Test deep object equality for complex responses
- Test POST requests with JSON payloads

## Testing Commands

```bash
# Run individual test files
npm test 0-calcul.test.js
npm test 1-calcul.test.js
npm test 2-calcul_chai.test.js

# Run all tests
npm test *.test.js

# For API testing (server must be running)
node api.js  # In one terminal
npm test api.test.js  # In another terminal
```

## Key Concepts

### Testing Types
- **Unit Tests**: Test individual functions in isolation
- **Integration Tests**: Test how different parts work together
- **Spies**: Monitor function calls without changing behavior
- **Stubs**: Replace functions with controlled implementations

### Best Practices
- Always restore spies and stubs after tests
- Use hooks for setup and teardown
- Write descriptive test names and organize with `describe` blocks
- Test both happy paths and edge cases
- Handle async operations properly with `done` callback or promises

### Assertion Styles
- **Node Assert**: `assert.strictEqual(actual, expected)`
- **Chai Expect**: `expect(actual).to.equal(expected)`
- **Chai Should**: `actual.should.equal(expected)`

## File Structure

```
0x06-unittests_in_js/
├── README.md
├── package.json
├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── utils.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── 5-payment.js
├── 5-payment.test.js
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── 8-api/
│   ├── package.json
│   ├── api.js
│   └── api.test.js
├── 9-api/
│   ├── package.json
│   ├── api.js
│   └── api.test.js
└── 10-api/
    ├── package.json
    ├── api.js
    └── api.test.js
```

## Repository Information

- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`

---

*This project is part of the ALX Software Engineering Program focusing on backend JavaScript development and testing methodologies.*
