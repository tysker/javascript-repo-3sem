## JAVASCRIPT EXERCISES DAY 1

### JAVASCRIPT FUNCTIONS

What are functions in JavaScript?

A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

### Function Syntax

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

### Function Invocation

The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)

### Function Return

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

### Function Scope

JavaScript has function scope: Each function creates a new scope. Scope determines the accessibility (visibility) of these variables.
Variables defined inside a function are not accessible (visible) from outside the function.

### Function Hoisting

Before you can use a function, you must declare it.

### Function Arguments

JavaScript functions can be defined to accept any number of arguments. Arguments are passed to functions by value. If the function changes the value of an argument, this change is not reflected globally or in the calling function.

### Function Invocation

There are two ways to invoke a function: calling it and applying it.

Example:

```javascript
function myFunction(a, b) {
  return a * b;
}
var x = myFunction(4, 3);   // Function is called, return value will end up in x
```

### Function Constructor

The Function constructor creates a new Function object. In JavaScript every function is actually a Function object.

### Function Expression

A function can also be defined using an expression.

Example:

```javascript
const square = function(number) { return number * number }
const x = square(4) // x gets the value 16
```

### Immediately Invoked Function Expression (IIFE)

An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.

Example:

```javascript
(function () {
  const x = "Hello!!";      // I will invoke myself
})();
```

### Function Closures

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

### Function Callback

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Example:

```javascript
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

### Function Recursion

A JavaScript function can call itself. This is called recursion.

Example:

```javascript
function factorial(number) {
  if (number <= 0) {         // termination case
    return 1; 
  } else {     
    return (number * factorial(number - 1));     // function invokes itself
  } 
};
```

### Function Arrow

Arrow functions are a new way to write functions in JavaScript. Arrow functions are always anonymous. Arrow functions are best suited for non-method functions.

Example:

```javascript   
const square = (number) => { return number * number }
const x = square(4) // x gets the value 16
```




