## CLASS EXERCISES DAY 2

### Monday exercises

### Part 1 Basic DOM knowledge (events, selectors, etc.)

```JS
const shopping = [
    {
        name: "Bread",
        price: 10
    },
    {
        name: "Milk",
        price: 20
    },
    {
        name: "Eggs",
        price: 30
    },
    {
        name: "Cheese",
        price: 40
    },
    {
        name: "Butter",
        price: 50
    }
]
```

1. Create a new html file and add a script tag to it.
2. Add a `h1` tag with the text "The DOM" to the html file and add an id attribute with the value "title".
3. Add a `p` tag with the text "This is a paragraph" to the html file and add an id attribute with the value "pid".
4. Add a `ul` tag to the html file and add an id tag with the value "list".
5. In the script tag, select the `h1` tag and change the text to "The DOM is awesome".
6. In the script tag, select the `p` tag and change the text to "This is a paragraph about the DOM".
7. In the script tag, select the `ul` tag and add with help of a loop and the array above, a list of all the items in the array. The list should look like this:

```HTML
<ul id="list">
    <li>Bread</li>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Cheese</li>
    <li>Butter</li>
</ul>
```

8. Add a `button` tag to the html file and add an id attribute with the value "btn".
9. Add a `input` tag to the html file and add an id attribute with the value "input".
10. Select the `button` tag and add an event listener to it. When the button is clicked, the text in the input should be added to the list.
11. Add a second button to the page. When the button is clicked, the first element in the list should be removed.
12. Add a `style` tag to the html file and add some styling to the page.
13. Add a `link` tag to the html file and link to an external css file.
14. Add a `script` tag to the html file and link to an external js file.
15. Now copy all the code from the script tag to the js file and remove the script tag from the html file.
16. Do the same with the css file.


### Part 2 Keydown Event

1. Lok at the code below and try to understand what it does.
   2. Use the code below to make some changes in the code from part 1. 
   - When the user presses the **spacebar**, the text in the input should be added to the list. 
   - When the user presses the **enter key**, the first element in the list should be removed.

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
