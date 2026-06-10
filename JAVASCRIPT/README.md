1.Introduction
JavaScript is a high-level, interpreted programming language used to create dynamic and interactive web applications. It works alongside HTML and CSS to build modern websites.
2. Starter JavaScript
What is JavaScript?
JavaScript is a scripting language that enables web pages to respond to user actions, update content dynamically, validate forms, and communicate with servers.
Example
console.log("Hello World");
Key Points
Runs in the browser.
Can manipulate HTML and CSS.
Supports Object-Oriented and Functional Programming.
Used in both Frontend and Backend development.
3. Variables
Definition
Variables are containers used to store data values.
Syntax
let name = "John";
let age = 20;
Rules for Naming Variables
Must start with a letter, _, or $.
Cannot start with a number.
Cannot use reserved keywords.
Variable names are case-sensitive.
Examples
let username = "Alex";
let marks = 90;
4. Variable Keywords
JavaScript provides three ways to declare variables.
var
var city = "Mumbai";
Characteristics
Function scoped
Can be redeclared
Can be reassigned
let
let age = 21;
Characteristics
Block scoped
Cannot be redeclared
Can be reassigned
const
const PI = 3.14159;
Characteristics
Block scoped
Cannot be redeclared
Cannot be reassigned
Comparison Table
Keyword
Scope
Redeclare
Reassign
var
Function
Yes
Yes
let
Block
No
Yes
const
Block
No
No
5. String Indexing
Definition
Strings are sequences of characters enclosed in quotes.
let language = "JavaScript";
Index Position
J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9
Accessing Characters
console.log(language[0]);
console.log(language[4]);
Length Property
console.log(language.length);
6. String Methods
toUpperCase()
Converts text to uppercase.
let name = "javascript";
console.log(name.toUpperCase());
toLowerCase()
Converts text to lowercase.
console.log(name.toLowerCase());
trim()
Removes extra spaces.
let text = " Hello ";
console.log(text.trim());
slice()
Extracts a portion of a string.
let str = "JavaScript";
console.log(str.slice(0,4));
7. Truthy and Falsy Values
Falsy Values
The following values are treated as false:
false
0
""
null
undefined
NaN
Example
if(false){
    console.log("Run");
}
Truthy Values
Everything else is generally truthy.
"Hello"
1
[]
{}
true
Example
if("Hello"){
    console.log("Truthy Value");
}
8. Operators
Arithmetic Operators
Operator
Description
+
Addition
-
Subtraction
*
Multiplication
/
Division
%
Modulus
Example
let result = 10 + 5;
Comparison Operators
Operator
Description
==
Equal
===
Strict Equal
!=
Not Equal
!==
Strict Not Equal
>
Greater Than
<
Less Than
Example
console.log(5 === "5");
Logical Operators
Operator
Description
&&
AND


!
NOT
Example
let age = 20;

if(age > 18 && age < 60){
    console.log("Eligible");
}
9. Loops
for Loop
Used when the number of iterations is known.
for(let i = 1; i <= 5; i++){
    console.log(i);
}
while Loop
Executes while a condition is true.
let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}
do...while Loop
Executes at least once before checking the condition.
let i = 1;

do{
    console.log(i);
    i++;
}
while(i <= 5);



*Summary
This section covers the foundational concepts of JavaScript:
JavaScript Basics
Variables
Variable Keywords
String Indexing
String Methods
Truthy and Falsy Values
Operators
Loops