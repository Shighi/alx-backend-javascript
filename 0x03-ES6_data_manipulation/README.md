# ES6 Data Manipulation

This project focuses on ES6 array methods and data structures in JavaScript, including Array, Set, Map, and WeakMap.

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Code should use the .js extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- All code needs to pass all tests and lint checks
- All functions must be exported

## Setup

### Install NodeJS 12.11.x

```bash
# In your home directory:
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

# Verify installation:
nodejs -v  # Should output v12.11.1
npm -v     # Should output 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint using the supplied package.json:

```bash
npm install
```

## Tasks

### 0. Basic list of objects

Create a function `getListStudents` that returns an array of objects with attributes:
- id (Number)
- firstName (String)
- location (String)

### 1. More mapping

Create a function `getListStudentIds` that returns an array of ids from a list of objects.
Uses the `map` function.

### 2. Filter

Create a function `getStudentsByLocation` that returns an array of objects located in a specific city.
Uses the `filter` function.

### 3. Reduce

Create a function `getStudentIdsSum` that returns the sum of all student ids.
Uses the `reduce` function.

### 4. Combine

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with new grades.
Uses `filter` and `map` combined.

### 5. Typed Arrays

Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

### 6. Set data structure

Create a function `setFromArray` that returns a Set from an array.

### 7. More set data structure

Create a function `hasValuesFromArray` that returns a boolean if all elements in an array exist within a set.

### 8. Clean set

Create a function `cleanSet` that returns a string of all set values that start with a specific string.

### 9. Map data structure

Create a function `groceriesList` that returns a map of groceries with specified items and quantities.

### 10. More map data structure

Create a function `updateUniqueItems` that updates the quantity of items with initial quantity of 1 to 100.

### 11. Weak link data structure (Advanced)

Export a WeakMap instance and a function `queryAPI` that tracks how many times the API is called for each endpoint.

## Repository

- GitHub repository: [alx-backend-javascript](https://github.com/Shighi/alx-backend-javascript)
- Directory: 0x03-ES6_data_manipulation
