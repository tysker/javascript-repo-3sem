// const str = 'My name is John and I am 30 years old. I study at the University of Copenhagen. My other friend, what is also called John, is 25 years old.'
// // 1
// console.log(str.length)
// // 2
// console.log(str.indexOf('John'))
// // 3
// console.log(str.lastIndexOf('John'))
// // 4
// const str2 = str.includes('Copenhagen') ? str.replace('Copenhagen', 'Aarhus') : str;
// console.log(str2)
// // 5
// console.log(str.replaceAll('John', 'Jane'));
// // 6
// const split = str.split(' ');
// console.log(split)
// // 7
// const split2 = str.split('.');
// console.log(split2)
// // 8
// const split3 = str.split(' ');
// const upperCase = split3.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
// console.log(upperCase.join(' '));
// // 9
// console.log(split.join('-'))
// // 10
// const trim = str.trim();
// console.log(trim.slice(0, -1));
// // 11
// const regex = /John/g // g means global
// const result = str.match(regex);
// console.log(result);

// Objects

class Car {
    constructor(brand, model, color, year, mileage, fuel, price, isDamaged) {
        this._brand = brand;
        this._model = model;
        this._color = color;
        this._year = year;
        this._mileage = mileage;
        this._fuel = fuel;
        this._price = price;
        this._isDamaged = isDamaged;
    }

    calculatePriceAfterYears(years) {
        const price = this._price;
        this._price = price - (price * 0.1 * years);
    }


    get price() {
        return `The price is ${this._price} DKK`;
    }

    set price(value) {
        if (typeof value === 'number' && value > 0) {
            this._price = value;
        }
        return this._price;
    }


    toString = () => {
        return `The car is a ${this._color} ${this._brand} ${this._model} from ${this._year} with ${this._mileage} on the clock and it costs ${this._price} DKK and is in ${this._isDamaged ? "bad condition" : "good condition"}`;
    }
}

const car1 = new Car('BMW', 'X5', 'black', 2019, 10000, 'diesel', 50000, false);
const car2 = new Car('Audi', 'A6', 'white', 2018, 20000, 'diesel', 40000, true);

car1.price = 100000;
console.log(car1.price);

car1.calculatePriceAfterYears(5);
console.log(car1.price);
console.log(car1.toString());
console.log(car2.toString());

// Arrays
// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

const reverseNumber = (number) => {
    return parseInt(number.toString().split('').reverse().join(''));
}

console.log(reverseNumber(32243));

// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}

// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const sortString = (str) => {
    return str.split('').sort().join('');
}

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

const capitalizeFirstLetter = (str) => {
    return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Create an array with 5 different cars.

const cars = [
    new Car('BMW', 'X5', 'black', 2012, 100000, 'benzin', 50000, false),
    new Car('Opel', 'Crossland', 'red', 2018, 8000, 'diesel', 40000, true),
    new Car('Audi', 'A4', 'black', 2022, 5000, 'benzin', 35000, true),
    new Car('Mercedes', 'A3', 'white', 2018, 20000, 'benzin', 15000, false),
    new Car('Audi', 'A2', 'green', 1998, 252000, 'diesel', 25000, true),
];

cars.forEach((car) => {
    console.log(car.toString());
});

// Callbacks

const greeting = (name) => {
    return `Hello ${name.toUpperCase()}`;
}

const sayHello = (name, callback) => {
    return callback(name);
}

console.log(sayHello('John', greeting));


function isOdd(number) {
    return number % 2 !== 0;
}

function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
        if (fn(number)) {
            results.push(number);
        }
    }
    return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers, isOdd));












