# JAVASCRIPT AJAX, Promises, and Fetch

## AJAX

AJAX stands for Asynchronous JavaScript and XML. It is a technique used in web development to create dynamic and interactive web 
applications that can exchange data with a server in the background without the need to refresh the entire page.

Look at the following analogy: Imagine you're at a restaurant, and you want to order food. 
Instead of calling the waiter, you use your phone to send a message to the kitchen directly. The kitchen receives your order, prepares the food, 
and sends it back to your table. Meanwhile, you can continue to chat with your friends or read the menu, without any interruption. 
This is similar to how AJAX works.

In web development, AJAX allows you to send a request to a server and receive a response without reloading the entire page. 
This means that you can update specific parts of the page, such as a list of products or a chat box, without disrupting the user's experience. 
This is achieved by using JavaScript to send an asynchronous request to the server and manipulate the DOM (Document Object Model) to display the response.

To summarize, AJAX is a technique that allows web developers to create dynamic and interactive web applications that can exchange data with a server 
in the background, without the need to refresh the entire page.

Example:

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    console.log(`Done, got ${xhr.response.length} bytes`); // response is the server
  }
};
xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(xhr.response); // response is the server
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }
};
xhr.onerror = function() {
  console.log("Request failed");
};
```

## Fetch

The Fetch API is a modern JavaScript interface for making network requests, such as fetching data from a server. It is a powerful tool that simplifies 
the process of making AJAX requests and handling the responses.

To explain the Fetch API think about the following analogy: Imagine you want to order a book online. You visit a website, select the book, 
and click the "Order" button. The website sends a request to the server to check if the book is available and to calculate the total cost of the order. 
The server responds with the availability and cost information, which the website displays on the screen. This process is similar to how Fetch API works.

In web development, the Fetch API allows you to send HTTP requests to a server and receive responses, which can be used to update the content of a web 
page or to perform other actions based on the response. This is achieved by using JavaScript to create a Fetch object and calling its methods to send a 
request and handle the response.

One of the key benefits of using the Fetch API is that it provides a simpler and more consistent interface for making network requests than traditional 
methods like XMLHttpRequest. It also supports modern features like promises and async/await, which make it easier to write asynchronous code.

To summarize, the Fetch API is a JavaScript interface for making network requests, such as fetching data from a server. It simplifies the process of 
making AJAX requests and handling the responses, and provides a more modern and consistent interface than traditional methods.

Example:

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
```

## Promises

A Promise is a feature in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
It is a way of handling asynchronous code in a more readable and organized manner.

To explain Promises think about the following analogy: Imagine you're ordering a pizza. You call the pizza place and they tell you it will take 30 minutes 
to prepare and deliver the pizza. Instead of waiting on the phone for 30 minutes, you tell the pizza place to call you back when the pizza is ready. 
This is similar to how Promises work.

In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. 
It has three states: pending, fulfilled, or rejected. When a Promise is pending, it means that the operation is still in progress. 
When a Promise is fulfilled, it means that the operation was successful and the resulting value is available. When a Promise is rejected, 
it means that the operation failed and the reason for the failure is available.

To use a Promise in JavaScript, you create a new Promise object and pass in a function that contains the asynchronous operation. 
This function takes two parameters: resolve and reject. When the operation is complete, you call either resolve with the resulting 
value or reject with an error message.

One of the key benefits of using Promises in JavaScript is that they simplify the handling of asynchronous code. Instead of using 
callbacks or nested functions, you can chain Promises together using the then method and handle errors with the catch method. 
This makes the code more readable and easier to maintain.

To summarize, a Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. 
It simplifies the handling of asynchronous code and makes the code more readable and organized.

Example:

```js   
const promise = new Promise((resolve, reject) => {
  const x = "foo";
  const y = "bar";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});
promise
  .then(() => console.log("Success!"))
  .catch(() => console.log("Error!"));
```

## Async/Await

Async/await is a modern feature in JavaScript that provides a more readable and organized way to write asynchronous code. 
It is built on top of Promises and allows you to write asynchronous code that looks and behaves like synchronous code.

To understand async/await, think about the following analogy: Imagine you're waiting for a bus. Normally, 
you would wait at the bus stop until the bus arrives. With async/await, you can wait for the bus at home and do other things until 
the bus arrives. When the bus arrives, you can go to the bus stop and catch it. This is similar to how async/await works.

In JavaScript, async/await allows you to write asynchronous code that looks and behaves like synchronous code. It uses the async 
keyword to mark a function as asynchronous, and the await keyword to wait for the result of an asynchronous operation before moving on to the next line of code.

Here's an example of how to use async/await in JavaScript:

```JS
async function fetchUserData() {
  try {
    const response = await fetch('https://example.com/userdata');
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
}

```

In this example, the fetchUserData function is marked as asynchronous using the async keyword. Inside the function, 
the await keyword is used to wait for the response of the fetch operation, and then to wait for the response to be converted to JSON format. 
Finally, the userData is logged to the console.

One of the key benefits of using async/await in JavaScript is that it makes asynchronous code more readable and easier to understand. 
It also makes error handling easier, as you can use try/catch blocks to handle errors in a more synchronous-like manner.

To summarize, async/await is a modern feature in JavaScript that allows you to write asynchronous code that looks and behaves like synchronous code.
It is built on top of Promises and makes asynchronous code more readable and easier to understand.

## Synchronous vs Asynchronous

In JavaScript, synchronous and asynchronous are two ways of executing code. Synchronous code is executed in sequence, one line at a time, and blocks the execution until 
the current line of code is completed. Asynchronous code, on the other hand, allows other code to execute while it is waiting for a response, and does not block the execution of the program.

To understand the difference between synchronous and asynchronous you can think of the following analogy: Imagine you're at a restaurant and you order a pizza. 
If the restaurant is synchronous, the chef will start making the pizza right away and will not start on another order until your pizza is done. 
This means that the other orders have to wait until your pizza is ready. If the restaurant is asynchronous, the chef can start making your pizza,
but can also start making other orders while your pizza is cooking. This means that the other orders can be completed while your pizza is being made, 
and the chef can come back to your pizza when it's ready.

In JavaScript, synchronous code is executed in a blocking manner, which means that the code is executed one line at a time, and the program does not continue 
until the current line of code is completed. This can cause problems if the code takes a long time to execute, such as when making a network request or waiting for user input.

Asynchronous code, on the other hand, is executed in a non-blocking manner, which means that the program can continue executing while it waits for a response. 
This is achieved using callbacks, promises, and async/await, which allow the program to continue executing other code while it waits for the response.

One of the key benefits of using asynchronous code in JavaScript is that it allows the program to continue executing while it waits for a response, 
which can improve performance and user experience. It also makes it easier to handle complex tasks, such as making multiple network requests at once.

To summarize, synchronous code is executed in a blocking manner, which means that the program waits for each line of code to be completed before moving 
on to the next. Asynchronous code, on the other hand, is executed in a non-blocking manner, which allows the program to continue executing while it 
waits for a response.

Example:

```js   
// Synchronous
console.log("Hello");
console.log("World");

// Asynchronous
setTimeout(() => console.log("Hello"), 1000);
console.log("World");
```
