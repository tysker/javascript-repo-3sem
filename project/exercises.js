const str = "My name is Steve and I am originally from Denmark. I work as a software developer in London. The firm I work for is called Steve's Software Solutions.";
//1
console.log(str.length)
console.log(str.indexOf("Steve"));
console.log(str.lastIndexOf("Steve"))
console.log(str.slice(11, 16));
console.log(str.substring(123, 128));
console.log(str.replace("Steve", "John"))
console.log(str.replaceAll("Steve", "John"))
const strArray = str.split(" ");
console.log(strArray);
const joinedArray = strArray.join("-")
console.log(joinedArray)
str.concat("Iam 25 years old")
const words = str.match(/\bS\w+/g);
console.log(words);

// ternary operator

const word = 5 === 10 ? "isEqual!" : "isNotEqual";
console.log(word);

const age = 18;
const adult = age >= 18 ? "adult" : age >= 13 ? "teenager" : "child";
console.log(adult);

const package = "Whatever".toLowerCase();
const price = package === "basic" ? 1000 : package === "medium" ? 2000 : package === "full" ? 3000 : "Is not existing!";
console.log(price);


// function declaration

function calcAge(yearOfBirth) {
    return 2023 / yearOfBirth;
}

// function expression

const greeting_ = function (name) {
          return `Hell my name is ${name}`;
}

console.log(greeting_("Joerg"));

// Immediately invoked function expressions (IIFE)
(function(){
    console.log("Hello from IIFE!!!")
})();

// Arrow function

const calcAge2 = (age, name) => 5+ age;
const calcAge3 = (age) => {
    let count = 0;
    return count;
}

const multiplier = (a, b) => {
    return (multi) => (a+b) * multi;
}



// const time2 = multiplier(5,5)
// const result = time2(2);
// console.log(result)
const time2_ = multiplier(5,5)(2)
const time3_ = multiplier(5,5)(3)
// console.log(time2_)
// const res = multiplier(5,6)(2)(4);
// console.log(res)

console.log(Math.pow(9,2));
console.log(9**2)

const toPower = function (num) {
    return Math.pow(num, 2);
}
// console.log(toPower(num));

const interviewQuestion = job => {
    if(job === 'designer'){
        return (name) => {
            console.log(`${name} can you please explain what UX design means?`)
        }
    } else if (job === 'teacher') {
        return (name) => {
            console.log(`${name}, which subject do you teach?`)
        }
    } else {
        return (name) => console.log("What do you do ?");
    }
}

interviewQuestion("designer")("Steve");

// Callback Calculator

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculator = (a, b, callback) => callback(a, b);
const addRes = calculator(5,5, add);
const divResult = calculator(10,5, divide)

console.log(addRes);
console.log(divResult);

// const multiply = (callback) => callback(4,5) * 4;
// console.log(multiply(add));

const numbers = [1,23,6,5,9,10];















