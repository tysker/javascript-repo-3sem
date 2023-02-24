## JAVASCRIPT EXERCISES DAY 1

#### Part 1 Basics

- [JavaScript for Beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

1. What is JavaScript used for?
2. Which other 2 components are working together with JavaScript and what are their purpose?
3. Explain what the difference between a programming language and a scripting language is.
4. Explain the difference between interpreted versus compiled code.
5. What does it mean that JavaScript is prototype-based? [READ THIS](https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/)

#### Part 2 Data Types

- [JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

1. Which data types are there in JavaScript?
2. Which are primitive and which are non-primitive data types? [READ THIS](https://techstacker.com/primitive-values-vs-non-primitive-values-javascript/)
3. How do you check types in JavaScript?
4. What is the difference between `==` and `===`?
5. What is the difference between `var`, `let` and `const`? 
6. What does `NaN` mean? 
7. What is the difference between `null` and `undefined`?

#### Part 3 Strings

- [JavaScript Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

1. What are Template Literals?
2. Explain the methods `indexOf()`, `lastIndexOf`, `includes()` and `match()`!
3. Explain the methods `replace()` and `replaceAll()`?
4. Explain the methods `slice()` and `substring()`?
5. Explain the methods `split()` and `join()`?
6. Explain the methods `trim()` and `trimStart()`/`trimEnd()`?

```JS
const str = 'My name is John, and I am 30 years old. I study at the University of Copenhagen. My other friend, what is also called John, is 25 years old.';
```

1. Find the length of the string
2. Find the index of the first occurrence of the word 'John'
3. Find the index of the last occurrence of the word 'John'
4. Check if the string contains the word 'Copenhagen', and if true replace it with 'Aarhus'.
5. Replace all occurrences of the word 'John' with 'Jane'. 
6. Split the string into an array of words. 
7. Split the string into an array of sentences. 
8. Now change the first letter of all words to uppercase using a loop. Use the string array in the first example.
9. Join the first array into a string again with `-` between the words. 
10. Remove the last `.` from the string.
11. Use the original string to find all occurrences of the word 'John'; [TRY THIS](https://rubular.com/)

#### Part 3 Objects

1. Create an object that represents a car. It should have the following
   properties: `brand`, `model`, `color`, `year`, `mileage`, `fuel`, `price`, `isDamaged`. Use the class syntax.
2. Create two cars with different values for the properties. 
3. Create a getter and a setter for the `price` property. The setter should
   check if the value is a number and if it is greater than 0. If not, it should
   not update the value. The getter should return the value of the price in a nice format like this `The price is 10000 DKK`. Use string interpolation.
4. Create a method that calculates the price of the car after 5 years. The
   price should be reduced by 10% every year. Use the `price` getter to get the price.
5. Create a toString method that returns a string with all the information
   about the car. Similar to this: `The car is a red Audi A3 from 2015 with 100000 km on the clock. It costs 10000 DKK and is in good condition.`. 
6. If the car is damaged, the last part should be `It costs 10000 DKK and is in bad condition.`. Use string interpolation and a ternary operator.


#### Part 3 Arrays

```JS
const cars = [
   new Car('BMW', 'X5', 'black', 2012, 100000, 'benzin', 50000, false),
   new Car('Opel', 'Crossland', 'red', 2018, 8000, 'diesel', 40000, true),
   new Car('Audi', 'A4', 'black', 2022, 5000, 'benzin', 35000, true),
   new Car('Mercedes', 'A3', 'white', 2018, 20000, 'benzin', 15000, false),
   new Car('Audi', 'A2', 'green', 1998, 252000, 'diesel', 25000, true),
];
```
1. Copy the array above into your code.
2. Loop through the array with help of a for loop and print out the
   information about each car. Use the `toString()` method from the previous exercise.
3. Create a new array with the cars that are from 2015 or later.
4. Create a new array with the cars that are damaged and have less than 10000 km on the clock.
5. Loop through the array and add 10000 to the price of each car. Use the `price` setter to update the mileage.

#### Part 4 Functions

1. Write a JavaScript function that reverse a number.
2. Write a JavaScript function that checks whether a passed string is palindrome or not?
3. Write a JavaScript function that returns a passed string with letters in alphabetical order. (Assume punctuation and numbers symbols are not included in the passed string).
4. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
   string in upper case.

#### Part 5 Callbacks

1. Create a `greeting` function that takes a name as a parameter and returns a greeting message with the name in upper case.
2. Create a function called `sayHello` that takes a callback and the name as parameters and calls the callback function with the name as a parameter.
3. Call the `sayHello` function with the `greeting` function as a parameter and your name as a parameter.
4. Create a function called `isOdd` that takes a number as a parameter and returns true if the number is odd and false if it is not.
5. Create a function called filter that takes an array and a callback as parameters and returns a new array with only the elements that return true when passed to the callback.
6. Call the `filter` function with the `isOdd` function as a callback and the array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` as a parameter.


