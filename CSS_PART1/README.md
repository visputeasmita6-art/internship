Step 1: Create README.md Inside your CSS_Part_1 folder: touch README.md or create a file named: README.md
Step 2:CSS Styling Ways Objective: To understand different methods of applying CSS to HTML elements. Concepts Learned a. Inline CSS CSS is written directly inside the HTML element using the "style" attribute.
 Example:Hello World
b. Internal CSS CSS is written inside the "<style>" tag within the HTML document. 
Example:<style> p { color: blue; } </style>
c. External CSS CSS is written in a separate ".css" file and linked to HTML. Example:
--- 2. CSS Fonts Objective: To customize text appearance. Properties Studied: - font-family - font-size - font-weight - font-style Example: p{ font-family: Arial; font-size: 18px; font-weight: bold; } --- 3. CSS Colors Objective: To apply colors to text, backgrounds, and borders. Methods a. Named Colors color: red; b.RGB color: rgb(255,0,0); c. HEX color: #ff0000; --- 4. CSS Selectors Objectiv: To target specific HTML elements. a. Element Selector p{ color: blue; } b. Class Selector .highlight{ color: green; } c. ID Selector #header{ color: red; } --- 5. Utility Class, ID and Class Objective: To understand reusable styling. 1. Utility Classes Reusable classes created for common styles. Example: .text-center{ text-align:center; } --- 6. More CSS Selectors Concepts Learned: a. Descendant Selector div p{ color:red; } b. Child Selector div > p{ color:blue; } c. Adjacent Sibling Selector h1 + p{ color:green; } --- 7. CSS Attribute Selector Objective: To select elements based on attributes. Example: input[type="text"]{ border:1px solid black; } --- 8. Chrome Developer Tools Objective: To inspect and debug webpages. Activities Performed - Inspect Element - Edit CSS Live - Check Box Model - Debug Layout Issues --- 9. CSS Specificity Objective: To understand priority rules. Priority Order: 1. Inline CSS 2. ID Selector 3. Class Selector 4. Element Selector --- 10. CSS Border Properties Learned: border-width border-style border-color border-radius
Example: border:2px solid black;
CSS Box Model Components:
Content
Padding
Border
Margin Diagram: Margin └ Border └ Padding └ Content
CSS Exercise 2 Objective: Practical implementation of previously learned CSS concepts.
Margin Collapsing Objective: To understand how adjacent margins behave.
Inline vs Block Level Elements Inline Elements Examples:
span
a
strong Block Elements Examples:
div
p
h1
Image Element Objective: To style images. Properties: width height border-radius
Inline Block Display Property display:inline-block;
CSS Exercise 3 Practice all concepts learned so far.
CSS Box Sizing Types: a. Content Box box-sizing: content-box; b. Border Box box-sizing: border-box;
CSS Browser Styles Objective: To understand default browser styling. Learned why browsers render elements differently and how to reset styles.
CSS Inheritance Objective: To understand inherited properties. Example: body{ color:blue; } Child elements automatically inherit color.
CSS Text Align Values: text-align:left; text-align:right; text-align:center; text-align:justify;
Git Commands Used: Initialize Repository git init

Check Status git status

Add Files git add .

Commit Changes git commit -m "Added CSS Part 1 concepts"

Connect Repository git remote add origin

Push Code git push -u origin main

Step 3: Save the file Press: Ctrl + S

Step 4: Push README to GitHub git add README.md git commit -m "Added CSS Part 1 README" git push

