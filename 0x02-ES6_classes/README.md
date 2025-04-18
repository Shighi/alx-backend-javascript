# ES6 Classes

This project explores the implementation of ES6 classes in JavaScript, covering various concepts like class creation, inheritance, getters, setters, static methods, and more.

## Requirements

- All files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- Code should use the .js extension
- Code tested using Jest and verified against ESLint
- All tests and lint should pass using `npm run full-test`

## Setup

### Install NodeJS 12.11.x

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:
```bash
nodejs -v  # Should show v12.11.1
npm -v     # Should show 6.11.3
```

### Install Jest, Babel, and ESLint

Run this command in your project directory:
```bash
npm install
```

## Tasks

### 0. ClassRoom
- Implement a class named `ClassRoom`
- Accept one attribute `maxStudentsSize` (Number)
- Assign it to `_maxStudentsSize`

### 1. Make Classrooms
- Import the `ClassRoom` class from previous task
- Implement function `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34

### 2. ALX Course Class
- Implement class `ALXCourse` with attributes:
  - `name` (String)
  - `length` (Number)
  - `students` (array of Strings)
- Verify attribute types during object creation
- Store each attribute in an "underscore" version
- Implement getters and setters for each attribute

### 3. Currency Class
- Implement class `Currency` with attributes:
  - `code` (String)
  - `name` (String)
- Store attributes in "underscore" versions
- Implement getters and setters
- Add method `displayFullCurrency` that returns formatted currency info

### 4. Pricing Class
- Import `Currency` class from task 3
- Implement class `Pricing` with attributes:
  - `amount` (Number)
  - `currency` (Currency)
- Store attributes in "underscore" versions
- Implement getters and setters
- Add method `displayFullPrice` and static method `convertPrice`

### 5. Building Abstract Class
- Implement class `Building` with attribute:
  - `sqft` (Number)
- Make it an abstract class that requires implementing `evacuationWarningMessage`
- Throw error when extended classes don't implement required method

### 6. SkyHighBuilding Class
- Import and extend `Building` class
- Add attributes:
  - `sqft` (Number) - inherited from parent
  - `floors` (Number)
- Override `evacuationWarningMessage` method

### 7. Airport Class
- Implement class `Airport` with attributes:
  - `name` (String)
  - `code` (String)
- Customize string description to return airport code

### 8. ALX Class with Type Conversion
- Implement class `ALXClass` with attributes:
  - `size` (Number)
  - `location` (String)
- Convert to Number: return size
- Convert to String: return location

### 9. Hoisting Fix
- Fix the provided code with proper class declarations and methods

### 10. Car Class with Cloning
- Implement class `Car` with attributes:
  - `brand` (String)
  - `motor` (String)
  - `color` (String)
- Add `cloneCar` method that returns a new object of the class

### 11. EVCar Class (Advanced)
- Import and extend `Car` class
- Add attributes:
  - `brand`, `motor`, `color` (from parent)
  - `range` (String)
- Override `cloneCar` to return a `Car` instance instead of `EVCar`

## Author
Shighi
