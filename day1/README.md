# JAVASCRIPT EXERCISES DAY 1

## JAVASCRIPT FUNCTIONS

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

var y = myFunction.apply(null, [4, 3]);   // Function is applied, return value will end up in y
```

### Function Constructor

The Function constructor creates a new Function object. In JavaScript every function is actually a Function object.

Example:

```javascript
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
```

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

Example:

```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

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

### JAVASCRIPT OBJECTS

### What are objects in JavaScript?

In JavaScript, almost "everything" is an object. Only JavaScript primitives (strings, numbers, and booleans) are not objects. 

### Object Definition

Objects are variables too. But objects can contain many values. Objects are written with curly braces {}. Objects are containers for named values called properties or methods. The values are written as name:value pairs (name and value separated by a colon).

Example:

```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

### Object Properties

You can access object properties in two ways:

```javascript   
objectName.propertyName
objectName["propertyName"]
```

Example:

```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var x = person.age;
var y = person["lastName"];
```

### Object Methods

Objects can also have methods. Methods are actions that can be performed on objects.

Example:

```javascript
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

### ES6 Classes

ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.

Example:

```javascript
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var s = new Square(5);
```

### Array

An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
    
```javascript
var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";
```

in an array it could look like this:

```javascript   
var cars = ["Saab", "Volvo", "BMW"];
```

### Array Definition

An array is a special type of variable. It doesn't just store one value; it stores a list of values. You should think of an array as a list (of items) rather than a single item. 

### Array Properties

The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

Example:

```javascript
var cars = ["Saab", "Volvo", "BMW"];
cars.length = 2;
```

### Array Methods

The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects. 
These are the most common array methods:

| method                                                                                       | description                                                                      |
|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| concat()	              | joins two or more arrays and returns a copy of the joined arrays                 |
| copyWithin()	          | copies array elements within the array, to and from specified positions          |
| entries()	          | returns a key/value pair Array Iteration Object                                  |
| every()	              | checks if every element in an array pass a test                                  |
| fill()	              | fill the elements in an array with a static value                                |
| filter()	              | creates a new array with every element in an array that pass a test              |
| find()                 | 	returns the value of the first element in an array that pass a test             |
| findIndex()            | 	returns the index of the first element in an array that pass a test             |
| forEach()	           | calls a function for each array element                                          |
| from()	              | creates an array from an object                                                  |
| includes()             | 	check if an array contains the specified element                                |
| indexOf()	          | search the array for an element and returns its position                         |
| isArray()	         | checks whether an object is an array                                             |
| join()               | 	joins all elements of an array into a string                                    |
| keys()	| returns a Array Iteration Object, containing the keys of the original array      |
| lastIndexOf()	| search the array for an element, starting at the end, and returns its position   |
 | map()	| creates a new array with the result of calling a function for each array element |
 | pop()	| removes the last element of an array, and returns that element                   |
 | push()	| adds new elements to the end of an array, and returns the new length             |
| reduce()| 	reduces the array to a single value                                             |
 | reduceRight()| 	reduces the array to a single value (from right-to-left)                        |
| reverse()| 	reverses the order of the elements in an array                                  |
 | shift()| 	removes the first element of an array, and returns that element                 |
| slice()| 	selects a part of an array, and returns the new array                           |
| some()	| checks if any of the elements in an array pass a test                            |
| sort()| 	sort the elements of an array                                                   |
| splice()	| adds/removes elements from an array                                              |
| toString()| 	converts an array to a string, and returns the result                           |
|  unshift()	| adds new elements to the beginning of an array, and returns the new length       |
| valueOf()	|                                                                                  | returns the primitive value of an array                                          |


### Array Constructor


