# ES6 Promises

This project focuses on JavaScript ES6 Promises, covering Promise creation, handling, chaining, and async/await patterns.

## Learning Objectives

- Understanding Promises and their use cases
- How to use the `then`, `resolve`, and `catch` methods
- How to handle multiple promises with methods like `Promise.all`
- Using the `async/await` syntax for cleaner asynchronous code
- Proper error handling in asynchronous operations

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest and `npm run test`
- Code will be verified against lint using ESLint
- All functions must be exported

## Setup

### Install NodeJS 12.11.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:
```bash
nodejs -v  # Should output v12.11.1
npm -v     # Should output 6.11.3
```

### Install Project Dependencies
```bash
npm install
```

## Project Tasks

### 0. Keep every promise you make and only make promises you can keep
- Create a Promise using the prototype function `getResponseFromAPI()`

### 1. Don't make a promise...if you know you can't keep it
- Return a promise based on a boolean parameter
- When true, resolve with status 200 and body 'Success'
- When false, reject with an error message

### 2. Catch me if you can!
- Append three handlers to handle API response promises
- Log appropriate messages to the console

### 3. Handle multiple successful promises
- Import and use `uploadPhoto` and `createUser` functions
- Collectively resolve all promises and log the results

### 4. Simple promise
- Create a function that returns a resolved promise with user information

### 5. Reject the promises
- Create a function that returns a rejected promise with an error message

### 6. Handle multiple promises
- Create a function that handles the settlement of multiple promises
- Return an array with the status and value of each promise

### 7. Load balancer
- Create a function that returns the value of the promise that resolves first

### 8. Throw error / try catch
- Create a division function that throws an error when dividing by zero

### 9. Throw an error
- Create a guardrail function that processes the result of a math function
- Handle errors and append messages to a queue

### 10. Await / Async (Advanced)
- Create an async function that handles multiple promises
- Return an object with the responses or null values if they fail

## Files

- `0-promise.js`: Basic promise creation
- `1-promise.js`: Conditional promise resolution/rejection
- `2-then.js`: Promise handlers
- `3-all.js`: Multiple promise handling
- `4-user-promise.js`: User signup promise
- `5-photo-reject.js`: Photo upload rejection
- `6-final-user.js`: Multiple promise settlement handling
- `7-load_balancer.js`: Race condition with promises
- `8-try.js`: Error handling with try/catch
- `9-try.js`: Advanced error handling
- `100-await.js`: Async/await implementation

## Author
Shighi
