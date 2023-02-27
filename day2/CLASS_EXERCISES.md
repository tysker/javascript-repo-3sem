## CLASS EXERCISES DAY 2

### Monday exercises

### Recap from yesterday

1. arrays map(), filter(), Map(), reduce()
2. Objects (keys(), values(), entries())
3. Object prototypes
4. for in, for of loops

### Part 1 Basic DOM knowledge (events, selectors, etc.)

1. use the querySelector or getElementByID to show how to select the following elements:
    1. the title element
    2. the paragraph element
    3. the list element
    4. the button element
2. show how to add styling css to the elements
3. show how to add an event listener to the button element.
4. change from writing code in the script tag to writing code in an external js file and link it to the html file. Same for the css file.
5. show how to use Bootstrap to style the page.
6. add a form to the page with a text input and a submit button. When the submit button is clicked, the text in the input should be added to the list.
7. add a second button to the page. When the button is clicked, the first element in the list should be removed.
8. show how to use the map function to create a list of all the values in the array.
9. remember to show how to prevent the default behavior of the button.
10. show the DOM tree in the browser console.
11. explain how bubbling works.


### Part 2 Keydown Event

https://www.toptal.com/developers/keycode

```JS   
<body>
    <h1 id="title">The DOM</h1>
    <p id="pid"></p>

    <ul id="list">
    </ul>

    <button id="btn">CLICK ME!</button>

    <script>

        const btnTag = document.querySelector("#btn");

        addEventListener('keydown', (event) => {
        if (event.keyCode === 32) {
        console.log("Pressed spacebar")
        console.log(event)
    } else {
        console.log("Something else")
    }
    })

    </script>
</body>
```
