# 0x05. NodeJS Basics

This project covers the fundamentals of Node.js backend development, including file operations, HTTP servers, Express.js framework, and modern JavaScript features with Babel.

## Learning Objectives

By the end of this project, you should be able to explain and demonstrate:

- Running JavaScript using Node.js
- Using Node.js modules effectively
- Reading files with specific Node.js modules
- Accessing command line arguments and environment variables with `process`
- Creating HTTP servers using Node.js built-in modules
- Building HTTP servers with Express.js framework
- Implementing advanced routing with Express.js
- Using ES6 features with Node.js and Babel-node
- Accelerating development with Nodemon

## Requirements

### Environment
- **Editors**: vi, vim, emacs, Visual Studio Code
- **OS**: Ubuntu 18.04 LTS
- **Node.js**: Version 12.x.x
- **File Extension**: `.js`
- **Line Endings**: All files must end with a new line

### Code Standards
- Code tested with **Jest**: `npm run test`
- Code linted with **ESLint**
- All tests and linting must pass: `npm run full-test`
- Export format: `module.exports = myFunction;`

## Setup

### Installation
```bash
npm install
```

### Available Scripts
- `npm run test` - Run tests with Jest
- `npm run full-test` - Run tests and linting
- `npm run dev` - Start development server with Nodemon

## Project Structure

```
0x05-Node_JS_basic/
├── 0-console.js              # Basic console output
├── 1-stdin.js                # Process stdin handling
├── 2-read_file.js            # Synchronous file reading
├── 3-read_file_async.js      # Asynchronous file reading
├── 4-http.js                 # Basic HTTP server
├── 5-http.js                 # HTTP server with routing
├── 6-http_express.js         # Basic Express server
├── 7-http_express.js         # Express server with routing
├── full_server/              # Complex Express application
│   ├── controllers/
│   │   ├── AppController.js
│   │   └── StudentsController.js
│   ├── routes/
│   │   └── index.js
│   ├── utils.js
│   └── server.js
├── database.csv              # Student data
├── package.json
├── babel.config.js
├── .eslintrc.js
└── README.md
```

## Tasks Overview

### 0. Basic JavaScript Execution
**File**: `0-console.js`

Create a function `displayMessage` that prints a string to STDOUT.

```javascript
const displayMessage = require('./0-console');
displayMessage("Hello NodeJS!");
```

### 1. Process stdin
**File**: `1-stdin.js`

Interactive command-line program that:
- Welcomes users and asks for their name
- Displays the entered name
- Shows closing message when program ends

### 2. Synchronous File Reading
**File**: `2-read_file.js`

Function `countStudents` that:
- Reads CSV database synchronously
- Counts and displays student statistics by field
- Handles file not found errors

### 3. Asynchronous File Reading
**File**: `3-read_file_async.js`

Asynchronous version of `countStudents`:
- Returns a Promise
- Non-blocking file operations
- Same output format as synchronous version

### 4. Basic HTTP Server
**File**: `4-http.js`

Simple HTTP server using Node.js `http` module:
- Listens on port 1245
- Returns "Hello ALX!" for any endpoint

### 5. HTTP Server with Routing
**File**: `5-http.js`

Enhanced HTTP server with:
- Root endpoint: "Hello ALX!"
- `/students` endpoint: Student statistics from CSV

### 6. Basic Express Server
**File**: `6-http_express.js`

Express.js server:
- Listens on port 1245
- Handles root route only
- Built-in 404 handling for undefined routes

### 7. Express Server with Routing
**File**: `7-http_express.js`

Express server with:
- Root route: "Hello ALX!"
- Students route: CSV data display

### 8. Complex Express Application
**Directory**: `full_server/`

Modular Express application with:
- **Controllers**: AppController, StudentsController
- **Routes**: Centralized routing configuration
- **Utils**: Database reading utilities
- **ES6 Support**: Babel-node for modern JavaScript

#### API Endpoints
- `GET /` - Homepage
- `GET /students` - All students list
- `GET /students/:major` - Students by major (CS or SWE)

## Database Format

The `database.csv` file contains student information:

```csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
...
```

## Development

### Running Individual Files
```bash
node 0-console.js
node 1-stdin.js
node 4-http.js
```

### Running with Command Arguments
```bash
node 5-http.js database.csv
node 7-http_express.js database.csv
```

### Development Mode
```bash
npm run dev
```

### Testing
```bash
# Run tests only
npm run test

# Run tests and linting
npm run full-test
```

## Key Concepts Demonstrated

### File Operations
- Synchronous vs asynchronous file reading
- CSV parsing and data processing
- Error handling for file operations

### HTTP Servers
- Native Node.js HTTP module
- Express.js framework
- Request routing and response handling

### Modern JavaScript
- ES6 imports/exports with Babel
- Promise-based asynchronous operations
- Modular code organization

### Development Tools
- ESLint for code quality
- Jest for testing
- Nodemon for development automation
- Babel for ES6 transpilation

## Error Handling

The project implements comprehensive error handling for:
- File not found scenarios
- Invalid route parameters
- Database connectivity issues
- Invalid input validation

## Repository

- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x05-Node_JS_basic`

---

This project provides a solid foundation in Node.js backend development, covering essential concepts from basic file operations to complex web server architecture.
