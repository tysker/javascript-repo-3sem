## CLASS EXERCISES DAY 2

#### Part 1 The DOM and Events

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
