# JavaScript In Classroom

## Tuesday objectives

- recap from yesterday 
  - arrays like map, filter, reduce, callbacks
  - objects like keys(), values(), entries()
  - for in, for of loops
- node, npm, npx
- create a new project with npm init
- the dom
- events
- forms
- bubbling or event delegation
- bootstrap
- keydown event
- guess my number game
- homework
- what to improve until next semester

## In Class

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

### Guess my number game

To solve the guess my number game, we need to use the following:

1. document.querySelector
2. textContent
3. addEventListener
4. click event
5. get the value from an input
6. add text to an element by using textContent
7. how to style an element
8. Math.trunc and Math.random
9. if else statements
10. logical operators like ternary operator

## Tuesday homework

- [READING](https://github.com/dat3startcode/javaScriptExercises3sem/blob/main/day2/READING.md)
- [EXERCISES](https://github.com/dat3startcode/javaScriptExercises3sem/blob/main/day2/HOMEWORK.md)

## Tuesday resources

## What to improve until next semester

- improve the homework by making new exercises or update the old ones
- when solving the guess my number game, let them do most of it. Explain the code and the logic behind it. Then let them do it on their own. If they get stuck, help them.

