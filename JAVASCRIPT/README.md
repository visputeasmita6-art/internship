
## 1. Introduction

* JavaScript is a high-level, interpreted programming language.
* It is used to create dynamic and interactive web applications.
* JavaScript works together with HTML and CSS to build modern websites.
* It is one of the core technologies of web development.

---

## 2. Starter JavaScript

### What is JavaScript?

* JavaScript is a scripting language that adds functionality to web pages.
* It allows websites to respond to user interactions.
* It enables dynamic content updates without reloading the page.
* It is commonly used for form validation and communication with servers.
* JavaScript can be used for both frontend and backend development.

### Example

```javascript
console.log("Hello World");
```

### Key Features

* Runs directly in web browsers.
* Manipulates HTML and CSS dynamically.
* Supports Object-Oriented Programming (OOP).
* Supports Functional Programming concepts.
* Widely used in modern web development.

---

## 3. Variables

### Definition

* Variables are containers used to store data values.
* They allow developers to reuse and modify data throughout a program.

### Syntax

```javascript
let name = "John";
let age = 20;
```

### Variable Naming Rules

* Must start with a letter, `_`, or `$`.
* Cannot start with a number.
* Cannot use reserved JavaScript keywords.
* Variable names are case-sensitive.
* Use meaningful names for better code readability.

### Example

```javascript
let username = "Alex";
let marks = 90;
```

---

## 4. Variable Keywords

JavaScript provides three keywords for declaring variables.

### var

```javascript
var city = "Mumbai";
```

#### Characteristics

* Function-scoped.
* Can be redeclared.
* Can be reassigned.
* Older way of declaring variables.

### let

```javascript
let age = 21;
```

#### Characteristics

* Block-scoped.
* Cannot be redeclared in the same scope.
* Can be reassigned.
* Recommended for variables whose values may change.

### const

```javascript
const PI = 3.14159;
```

#### Characteristics

* Block-scoped.
* Cannot be redeclared.
* Cannot be reassigned.
* Used for constant values.

### Quick Comparison

#### var

* Function scope
* Redeclaration allowed
* Reassignment allowed

#### let

* Block scope
* Redeclaration not allowed
* Reassignment allowed

#### const

* Block scope
* Redeclaration not allowed
* Reassignment not allowed

---

## 5. String Indexing

### Definition

* Strings are sequences of characters enclosed in quotes.
* Each character in a string has a unique index number.
* Indexing starts from `0`.

### Example

```javascript
let language = "JavaScript";
```

### Accessing Characters

```javascript
console.log(language[0]);
console.log(language[4]);
```

### Length Property

```javascript
console.log(language.length);
```

### Important Points

* The first character always has index `0`.
* The last character index is `length - 1`.
* Strings are immutable.

---

## 6. String Methods

### toUpperCase()

* Converts all characters to uppercase.

```javascript
let name = "javascript";
console.log(name.toUpperCase());
```

### toLowerCase()

* Converts all characters to lowercase.

```javascript
console.log(name.toLowerCase());
```

### trim()

* Removes whitespace from both ends of a string.

```javascript
let text = " Hello ";
console.log(text.trim());
```

### slice()

* Extracts a portion of a string.
* Returns a new string.

```javascript
let str = "JavaScript";
console.log(str.slice(0, 4));
```

---

## 7. Truthy and Falsy Values

### Falsy Values

The following values are automatically treated as `false`:

* `false`
* `0`
* `""` (empty string)
* `null`
* `undefined`
* `NaN`

### Example

```javascript
if (false) {
  console.log("Run");
}
```

### Truthy Values

The following values are generally treated as `true`:

* Non-empty strings
* Non-zero numbers
* Arrays (`[]`)
* Objects (`{}`)
* `true`

### Example

```javascript
if ("Hello") {
  console.log("Truthy Value");
}
```

---

## 8. Operators

### Arithmetic Operators

* `+` → Addition
* `-` → Subtraction
* `*` → Multiplication
* `/` → Division
* `%` → Modulus (Remainder)

### Example

```javascript
let result = 10 + 5;
```

### Comparison Operators

* `==` → Equal
* `===` → Strict Equal
* `!=` → Not Equal
* `!==` → Strict Not Equal
* `>` → Greater Than
* `<` → Less Than

### Example

```javascript
console.log(5 === "5");
```

### Logical Operators

* `&&` → Logical AND
* `||` → Logical OR
* `!` → Logical NOT

### Example

```javascript
let age = 20;

if (age > 18 && age < 60) {
  console.log("Eligible");
}
```

---

## 9. Loops

### for Loop

#### Purpose

* Used when the number of iterations is known.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### while Loop

#### Purpose

* Executes repeatedly while a condition remains true.

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

### do...while Loop

#### Purpose

* Executes at least once before checking the condition.

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

---

## Summary

### Topics Covered

* JavaScript Introduction
* JavaScript Basics
* Variables
* Variable Keywords (`var`, `let`, `const`)
* String Indexing
* String Methods
* Truthy and Falsy Values
* Operators
* Loops

### Learning Outcomes

After completing this section, you will be able to:

* Understand JavaScript fundamentals.
* Declare and manage variables effectively.
* Work with strings and built-in string methods.
* Differentiate between truthy and falsy values.
* Use arithmetic, comparison, and logical operators.
* Implement loops for repetitive tasks.
* Build a strong foundation for advanced JavaScript concepts.

