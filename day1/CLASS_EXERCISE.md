## CLASS EXERCISES DAY 1

## Monday exercises

### Strings and string methods

```JS
   const str = "My name is Steve and I am originally from Denmark. I work as a software developer in London. The firm I work for is called Steve's Software Solutions.";
```

1. Find the length of the string
2. Find the index of the word "Steve"
3. Find the last index of the word "Steve"
4. Print out the first occurrence of the word "Steve" with help of the index you found in on of the previous step and the slice method.
5. Use substring tp print out the last occurrence of the word "Steve";
6. Use the replace method to replace all occurrences of the word "Steve" with "John".
7. Replace the word Denmark with the word Sweden.
8. Use the split method to split the string into an array of words.
9. Use the join method to join the array of words into a string again but with a `-` between each word.
10. Add `Iam 25 years old` to the end of the string using the concat method.
11. Get all words starting with the letter "S" with help of match and a regular expression.

### Ternary operator

At the car dealer you can choose between 3 different packages for your new car. The packages are called "Basic", "Medium" and "Full". The prices are 1000, 2000 and 3000 respectively.
Write a ternary operator that will set the price variable to the correct price based on the package variable.

### Math Library

The Math library has a lot of useful methods. Use the Math library to solve the following exercises:

1. Use the random method to generate a random number between 0 and 1.
2. Use the random method to generate a random number between 0 and 10.
3. Use the random method to generate a random number between 10 and 20.
4. Use the floor method to round a number down to the nearest integer.
5. Use the ceil method to round a number up to the nearest integer.
6. Use the round method to round a number to the nearest integer.
7. Use the max method to find the highest number in a list of numbers.
8. Use the min method to find the lowest number in a list of numbers.
9. Use the abs method to find the absolute value of a number.
10. Use the pow method to find the power of a number. For example 2^3 = 8.


### Functions

1. Write a function that takes a number as an argument and returns the square of the number.
2. Write a function called `intervieQuestion` that takes a job as an argument and returns a new function that takes a name as an argument. Depending on the job, the function should return a string with the name and a question about the job. For example if the job is "teacher" the function should return "What subject do you teach, NAME?" and if the job is "designer" the function should return "What is your favourite design, NAME?". If the job is not "teacher" or "designer" the function should return "Hello NAME, what do you do?".


### Arrays

```JS
const countries = ["Sweden", "Norway", "Denmark", "Finland", "Iceland"];
```

1. Find the length of the array.
2. Find the index of the element "Denmark".
3. Loop through the array and print out each element use a for loop.
4. Add a new element to the end of the array.
5. Add a new element to the beginning of the array.
6. Remove the last element from the array.
7. Remove the first element from the array.

```JS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

1. Loop through the array with help of the map method and print out each element multiplied by 2.
2. Loop through the array with help of the filter method and print out only the even numbers.


### Objects

```JS
const person = {
  lastName: "Steve",
  firstName: "Jobs",
  age: 25,
  job: "developer",
  city: "London"
};
```

1. Print out all the keys and values of the object using a for in loop.
2. Add a new key called "country" and give it a value.
3. Change the value of the "job" key to "software developer".
4. Add a function called "printInfo" to the object that prints out the full name of the person. For example "My name is Steve, and I am 25 years old".
5. Rewrite the person object by using ES6 class syntax.
