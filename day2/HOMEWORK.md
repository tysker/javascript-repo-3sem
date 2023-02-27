## Dom Manipulation And Events

### Exercise 1 Simple Dom Manipulation

1. Create a new HTML file and add a script tag to it.
2. Add three divs to the body of the page with each div having a unique id.
3. Add some styling to each of the divs, so they have different colors. Hint: use the style property and document.getElementsByTagName() to get all the divs.
4. Add a button to the page.
5. Assign a click event listener to the button. When the button is clicked, change the background color of each div to a different color.

### Exercise 2 Event Bubbling and event argumants

1. Create a new HTML file and add a script tag to it.
2. Add two divs to the body of the page with each div having a unique id.
3. Style both id's with this class: 

```CSS
.mydiv {
    width: 25px;
    height: 25px;
    background-color: red;
    margin: 1px
}
```

4. Add a click handler to each id and write code, so when clicked, each div will write to the console "Hi from idOfTheDiv".
5. Now, using cut and paste, add 10 more divs (still each with a unique id).

Adding an event handler to each div would be cumbersome and non-efficient. We will use JavaScript's event bubbling mechanism to solve 
this with only a single event handler. https://javascript.info/bubbling-and-capturing

6. Add a new div with the id="outer" around all our div’s and assign a single click eventhandler (with the event argument)  to this div.
7. In the event handler, write code to get the id of the div that was clicked and write it to the console.
8. Add an empty paragraph tag, with an id, to your HTML and change the code for both exercises above, so that output is not written to the console, but into this paragraph.


### Exercise 3 Using map to create a dynamic list

1. Create a new HTML file and add a script tag to it.
2. Create a FORM with a text input and a submit button.
3. Create a new array with the following values: "Banana", "Orange", "Apple", "Mango".
4. Create a event handler for the submit button, that will add the value of the text input to the array.
5. Create a new function that will create a unsorted list of all the values in the array. Use the map function to create the list.
6. Add the list to the DOM, so it is visible in the browser.
7. When you click on the button, you will notice that the screen is refreshed. This is the default behavior of a button. Prevent this behavior.
8. Add two more buttons to the form. The first one should remove the first element from the array and the second one should remove the last element from the array.

### Exercise 4 Using map to create a dynamic table

1. Create a new HTML file and add a script tag to it.

```JS
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
```
2. Add the above array to the script tag.
3. Write a function which, given this array, will return an HTML string with a table that has a header row with the following columns: id, year, make, model, price.
4. Add the table to the DOM, so it is visible in the browser. Hint: use the map function to create the table.
5. Add a button to the page. When the button is clicked, sort the table by the year column. Hint: use either sort() or the filter() function.

### Exercise 5 Implementing a simple calculator

1. Create a new HTML file and add a script and a style tag to it.
2. Add the following HTML to the body of the page:

```HTML
<div id="container">
      <div id="display" class="t4"></div>
      <div id="buttons">
        <div class="t1">7</div>
        <div class="t1">8</div>
        <div class="t1">9</div>
        <div class="t1">/</div>

        <div class="t1">4</div>
        <div class="t1">5</div>
        <div class="t1">6</div>
        <div class="t1">*</div>

        <div class="t1">1</div>
        <div class="t1">2</div>
        <div class="t1">3</div>
        <div class="t1">-</div>

        <div class="t1">0</div>
        <div class="t1">.</div>
        <div class="t1">+</div>
        <div id="calculate"class="t1">=</div>
      </div>
    </div>
```
3. Add the following CSS to the style tag:

```CSS
#container{
	width: 226px;
	height: 274px;
	border: 3px solid darkblue;
	margin: auto
}
.t1, .t4{
	border: 1px solid black;
	height: 48px;
	margin-left: 3px;
	margin-top: 3px;
	display: inline-block;
	text-align: center;
	line-height: 48px;
}
.t1{
	width: 48px;
}
.t4{
	width: 219px;
}
```
4. Add a click event handler to each of the buttons. Hint: use your knowledge of event bubbling to add a single event handler to the buttons div;
5. When a button is clicked, the value of the button should be added to the display div. Hint: use the innerHTML property.
6. When the equal sign is clicked the result of the calculation must be presented.
7. Add a clear button to the calculator. When clicked, the display div should be cleared.

Hints:

* Assign a single click event handler to the div with the buttons id to handle anything but the “=” button.
* Use your knowledge about event bubbling and the events target property to get the text in the div that was clicked (via the innerText property).
* Assign a new event handler to the div with the “calculate” id. Use the event arguments .stopPropagation() method, to prevent this event from bubbling up to your “outer” event handler.
* Use the indexOff(..) method to test whether a string contains *, /, + or -.
* Use split(..) (with one of the four operators) to get the two numeric values and use Number(..) to convert a numeric string into a number before you do the calculation.

Warning !!

Don't use the eval() function to do the calculation. It is a security risk, and it is not recommended to use it.
With eval(), malicious code can run inside your application without permission.
With eval(), third-party code can see the scope of your application, which can lead to possible attacks.
