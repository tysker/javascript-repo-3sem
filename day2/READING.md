# JAVASCRIPT THE DOM

## The Web Browser

The web browser is a program that displays web pages. It is a software application that uses a rendering engine to display the requested content. The rendering engine parses the HTML and CSS and 
displays the parsed content on the screen. The rendering engine may use a JavaScript engine to parse and execute JavaScript code. We use node.js to run JavaScript code on the server. 

## The Document Object Model or DOM

The Document Object Model, or DOM, is a programming interface for HTML and XML documents. It represents the structure of the document as a tree-like structure, 
where each element, attribute, and text node in the document is represented as a node in the tree.

The DOM allows you to access and manipulate the content and structure of the document using JavaScript or other programming languages. This means that you can 
dynamically modify the content and appearance of a web page, respond to user actions, and create interactive web applications.

In simpler terms, the DOM is like a map of a webpage that allows developers to manipulate and change the content and structure of the webpage. It's an essential part of 
web development and is used extensively in creating dynamic and interactive websites.

## The difference between Html and the DOM

The HTML and the DOM are related but different concepts.

HTML, or Hypertext Markup Language, is the standard markup language used to create web pages. HTML consists of a series of elements, 
such as <html>, <head>, <body>, and <p>, which define the structure and content of a webpage. HTML documents are text files that are 
interpreted by web browsers to display web pages.

The DOM, or Document Object Model, is a programming interface for HTML and XML documents. It is a representation of the HTML document as a 
tree-like structure, where each element, attribute, and text node in the document is represented as a node in the tree. The DOM allows you to 
access and manipulate the content and structure of the document using JavaScript or other programming languages.

In simpler terms, HTML is a language used to define the structure and content of web pages, while the DOM is a programming interface that allows 
you to access and manipulate that content and structure dynamically using JavaScript or other programming languages.

To summarize, HTML is a markup language used to define the structure and content of web pages, while the DOM is a programming interface 
that provides a way to access and manipulate the HTML document in real-time using programming languages.

## The DOM Tree

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. 
DOM methods allow programmatic access to the tree; with them, you can change the document's structure, style, or content. 

## How to interact with the Dom

To interact with the DOM, you can use JavaScript. Here are some of the basic steps to interact with the DOM:

1. Accessing Elements: The first step to interact with the DOM is to access the elements you want to manipulate using JavaScript selectors. 
You can use selectors such as **getElementById(), querySelector(), or getElementsByClassName()** to select the elements you want to interact with.
2. Modifying Elements: Once you have selected an element, you can modify its content, attributes, and styling using JavaScript methods and properties. 
For example, you can use the innerHTML property to change the content of an element, the **setAttribute()** method to set an attribute on an element, 
or the style property to modify the styling of an element.
3. Creating and Removing Elements: You can also create new elements and remove existing elements from the DOM using JavaScript. 
You can use methods such as **createElement(), appendChild(), insertBefore(), or removeChild()** to add or remove elements from the DOM.
4. Handling Events: Finally, you can use event listeners to handle user input and other events on the page. You can attach event listeners 
to elements using methods such as **addEventListener()**, and then respond to events such as clicks, key presses, or form submissions by executing JavaScript code.

Overall, interacting with the DOM using JavaScript allows you to create dynamic and interactive web pages that respond to user input and other events. 
By mastering the basics of DOM manipulation in JavaScript, you can create powerful and engaging user experiences on the web.


## Events

Events in JavaScript and HTML are actions or occurrences that happen in the browser, such as a user clicking a button or scrolling down a webpage. 
Events can be triggered by the user, the browser, or by other scripts on the page.

In JavaScript and HTML, events are handled through event listeners or event handlers. An event listener is a function that is called when an event 
occurs, and it is attached to an element in the HTML document. The event handler is the code that is executed in response to the event.

For example, if you want to add a click event to a button element in HTML, you can add an event listener to the button element in JavaScript:

```JS
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

```

In this example, when the user clicks the button, the function that is passed to addEventListener is called, which logs the message "Button clicked!" to the console.

Events can be used to create interactive web pages and web applications, and are an essential part of front-end web development. 
By using events and event listeners, you can respond to user actions and create dynamic and engaging user experiences.

## Event Bubbling

Event bubbling is a phenomenon that occurs when an event is triggered on an element in the HTML document, and then the event propagates through the parent elements of that element in the DOM tree.

In other words, when an event occurs on an element, it "bubbles up" through its ancestors in the DOM hierarchy, triggering any event listeners that may be attached to those elements along the way.

For example, consider the following HTML code:

```HTML
<div>
  <p>
    <button>Click me</button>
  </p>
</div>
```

If a click event is triggered on the button element, it will first be handled by the button's event listener (if there is one), 
and then it will "bubble up" to the `<p>` element, and then to the `<div>` element. If there are event listeners attached to the `<p>` or `<div>` elements, they will also be triggered. 
To prevent event bubbling, you can use the **stopPropagation()** method on the event object that is passed to the event listener. This will prevent the event from propagating any further up the DOM tree.

In summary, event bubbling is the process by which an event is triggered on an element and then propagates up the DOM tree to all its parent elements. 
This can be useful for handling events on parent elements, but can also lead to unexpected behavior if not handled properly.


### Node, NPM and NPX

NEEDS TO BE DONE!!!!!!!!!!!!!!!!!!!!!!!!!!



Important Links:

* [The DOM, MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
* [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
* [Event bubbling](https://javascript.info/bubbling-and-capturing)





























