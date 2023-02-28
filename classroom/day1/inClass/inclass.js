// 1 Comments

// This is a single line comment

/*
This is a multi-line comment
 */

// 2 Prototype inheritance

const Job = {
    jobTitle: "Software Developer",
    fullName: "John Doe",
    getJob: function () {
        return "Software Developer";
    }
}

const Customer = function (firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

console.log(Customer.prototype);

Customer.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

Customer.prototype.getAge = function () {
    return this.age;
}

const michelle = new Customer("Michelle", "Doe", 25, "michelle@mail.com");
console.log(michelle.getFullName());
console.log("Age: ", michelle.getAge());

michelle.getMail = function () {
    return this.email;
}
console.log(michelle)
console.log(michelle.getMail());

console.log(michelle.__proto__);
console.log(michelle.__proto__ === Customer.prototype);

// 2 JavaScript variables, constants, and data types

var firstName = "John";
let height = 1.75;
const AGE = 25;
const PI = 3.14;
const isAdult = true;

// MY_AGE = 26; // error

// types
const number = 5;
const string = "Hello";
const boolean = true;
const BigInt = 1234567890123456789012345678901234567890n;
// values
const nullValue = null; // null is a value in JavaScript (not a type) that means a variable has been assigned a value of nothing; it is not the same as undefined
const undefinedValue = undefined; // undefined is a value in JavaScript (not a type) that means a variable has not been assigned a value yet;

console.log(typeof number); // "number"
console.log(typeof string); // "string"

// Equality operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
console.log(5 == "5"); // true
console.log(5 === "5"); // false


// 2 JavaScript string methods

const str = "My name is Steve and I am originally from Denmark. I work as a software developer in London. The firm I work for is called Steve's Software Solutions.";

const name = "Steve";
const strLiterals = `My ${name} is Steve.`; // template literals

const veryLongString = "This is a very long string that is \
split over multiple lines.";


console.log(str.length); // 80
console.log(str.indexOf("Steve")); // 11
console.log(str.lastIndexOf("Steve")); // 70
console.log(str.slice(11, 16)); // "Steve"
console.log(str.slice(11)); // "Steve and I am originally from Denmark. I work as a software developer in London. The firm I work for is called Steve's Software Solutions."
console.log(str.substring(11, 16)); // "Steve"

console.log(str.replace("Steve", "John"));
console.log(str.replaceAll("Steve", "John"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.concat(" I am 25 years old."));
console.log(str + " I am 25 years old.");

/*
    Regular expressions IN CLASS EXERCISE
 */
// get all words in the string starting with "S"
const words = str.match(/\bS\w+/g);
console.log(words);

/*
    Ternary operator IN CLASS EXERCISE
 */

const age = 12;
const adult = age >= 18 ? "adult" : age >= 13 ? "teenager" : "child";
console.log(adult);

// Ternary operator example

// At the car dealer you can choose between 3 different packages for your new car. The packages are called "Basic", "Medium" and "Full". The prices are 1000, 2000 and 3000 respectively.
// Write a ternary operator that will set the price variable to the correct price based on the package variable.

const package = "Basic";
const price = package === "Basic" ? 1000 : package === "Medium" ? 2000 : package === "Full" ? 3000 : 0;
console.log(price);


// 4 JavaScript functions

// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// Immediately invoked function expressions (IIFE)

(function () {
    console.log("This will never run again");
}());


// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

function scope() {
    var myName = "Steve";
    let myHeight = 1.80;
    const MY_AGE = 26;

    function innerFunction() {
        console.log("From Inner function: ", myName, myHeight, MY_AGE);
    }

    innerFunction();
    console.log(myName, myHeight, MY_AGE);
    // console.log(this)
}

scope()

// FUNCTIONS RETURNING FUNCTIONS/

const multiplier = (a, b) => {
    return (multi) => {
        return (div) => (a + b) * multi / div;
    }
}

const times3 = multiplier(2, 2)(3)(4);
console.log("Times 3: ", times3);

/*
    IN CLASS EXERCISE
 */
const interviewQuestion = (job) => {
    if (job === 'designer') {
        return (name) => {
            console.log(`${name}, can you please explain what UX design means?`);
        }
    } else if (job === 'teacher') {
        return (name) => {
            console.log(`${name}, which subject do you teach?`);
        }
    } else {
        return (name) => console.log("What do you do ?");
    }
};

let teacherQuestion = interviewQuestion("teacher");
console.log(teacherQuestion("John"));
console.log(interviewQuestion("designer")("John"));


// 5 JavaScript objects

const person = {
    firstName: "Steve",
    lastName: "Smith",
    weight: 75,
    height: 1.80,
    age: 25,
    hobbies: ["music", "sports"],
    calculateBMI: function () {
        return this.weight / (this.height * this.height);
    },
}

person.firstName = "John";
person["lastName"] = "Doe";

person.birthday = function (yearOfBirth) {
    const today = new Date();
    return today.getFullYear() - yearOfBirth;
}

console.log(person.birthday(1995));
console.log(person.calculateBMI());


// 6 JavaScript callbacks

const createMultiplier = function (a) {
    return (b) => a * b; // <= anonymous function
};

const cb = function (n1, n2, callback) {
    return `Result from the two numbers: ${n1} and ${n2} = ${callback(n1, n2)}`;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5));
console.log(triple(3));

// 7 JavaScript classes

class Person {
    constructor(name, age, job, hairColor) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.hairColor = hairColor;
    }

    yearOfBirth(year) {
        return year - this.age
    }
}

// Arrays and array methods

/*
    IN CLASS EXERCISE
 */

const countries = ["Sweden", "Norway", "Denmark", "Finland", "Iceland"];

const person2 = {
    name: "Steve",
    age: 25,
    job: "developer",
    city: "London"
};

for (const person2Key in person2) {
    console.log(person2Key, person2[person2Key]);
}

// Block Scope

// ES5
(function () {
    var c = 3;
}());

// console.log(c); // undefined

// ES6

// {
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }
//
// console.log(c); // 3
// console.log(a + b); // ReferenceError: a is not defined


