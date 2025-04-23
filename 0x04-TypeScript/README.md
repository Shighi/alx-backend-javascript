# TypeScript Project

This project contains a series of tasks designed to help learn TypeScript concepts including interfaces, types, classes, namespaces, and ambient modules.

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- TS scripts will be checked with jest (version 24.9.*)
- Code should use the ts extension when possible
- The TypeScript compiler should not show any warning or error when compiling your code

## Project Setup

### Install Dependencies

```bash
npm install
```

### Build the Project

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Project Structure

The project is divided into several tasks, each focusing on different TypeScript concepts:

### Task 0: Creating an interface for a student

- Directory: `task_0/`
- Files: 
  - `js/main.ts`
  - `package.json`
  - `.eslintrc.js`
  - `tsconfig.json`
  - `webpack.config.js`

This task involves creating a Student interface and rendering student data in a table using vanilla JavaScript.

### Task 1-4: Teacher Interface and Extensions

- Directory: `task_1/`
- Files:
  - `js/main.ts`
  - `webpack.config.js`
  - `tsconfig.json`
  - `package.json`

These tasks involve:
- Building a Teacher interface
- Extending the Teacher interface with a Directors interface
- Creating a print teacher function
- Implementing a StudentClass with proper TypeScript interfaces

### Task 5-7: Advanced Types

- Directory: `task_2/`
- Files:
  - `js/main.ts`
  - `webpack.config.js`
  - `tsconfig.json`
  - `package.json`

These tasks focus on:
- Creating and implementing interfaces for Director and Teacher
- Working with type predicates
- Using string literal types

### Task 8: Ambient Namespaces

- Directory: `task_3/`
- Files:
  - `js/main.ts`
  - `js/interface.ts`
  - `js/crud.d.ts`
  - `webpack.config.js`
  - `tsconfig.json`
  - `package.json`

This task involves creating type declarations for external JS libraries using ambient modules.

### Task 9-10: Namespace & Declaration Merging

- Directory: `task_4/`
- Files:
  - `js/subjects/Teacher.ts` 
  - `js/subjects/Subject.ts`
  - `js/subjects/Cpp.ts`
  - `js/subjects/Java.ts`
  - `js/subjects/React.ts`
  - `js/main.ts`
  - `tsconfig.json`
  - `package.json`

These tasks focus on namespaces and declaration merging to create subject classes with specific requirements.

### Task 11: Brand Convention & Nominal Typing

- Directory: `task_5/`
- Files:
  - `js/main.ts`
  - `package.json`
  - `webpack.config.js`
  - `tsconfig.json`

This task demonstrates brand properties and nominal typing with credit interfaces.

## Key TypeScript Concepts Covered

- Interfaces and Types
- Classes and Inheritance
- Type checking and Type predicates
- Namespaces
- Declaration merging
- Ambient modules
- Brand properties and nominal typing

## Repository

- GitHub repository: alx-backend-javascript
- Directory: 0x04-TypeScript
