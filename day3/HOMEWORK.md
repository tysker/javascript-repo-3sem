## AJAX with fetch and DOM manipulation

### Exercise 1

1. clone the following repo: https://github.com/dat3startcode/ajaxFetchAndDomExercise
2. Run `npm install` and `npm run dev`
3. Open the project in your browser and open the console
4. Read the code and try to understand what is happening
5. Take a look inside index.html in the public folder, and locate the part marked for exercise-1. Here you should see an ul-tag with id=jokes.
6. In index.js, get all jokes from the jokeFacade and create, using the arrays map-method, list-items for all jokes and place them in the ul tag.
7. In the index.html file, below the ul-tag we used above add an input field.
8. Add button with the text `getJoke`, and a p-tag to hold the joke you will find. 
9. Investigate the start code and implement functionality (in index.js) to find a joke, given it’s id.
10. In the index.html file, below what you did in the previous step , add the necessary changes to add new jokes to the internal joke-facade.

### Exercise 2

1. Locate the section in index.html reserved for exercise-2 and add a button + an empty p-tag (which will hold the quote we fetch), both with id’s so they are easy to “find” 
2. Add an event listener to the button’s click event and pass a callback that will update the p-tag in the index.html with a new quote fetched from the API given below 
3. Initially, fetch the quote from a remote API: https://api.chucknorris.io/jokes/random
4. Change the functionality to get a new quote every minute. (Hint: use setInterval() )


### Exercise 3

1. Use our MongoDB mockserver as we used in several exercises this semester to visualize the data in a table.
2. Locate the section in index.html reserved for exercise-3 and complete the code in index.js to fetch all students from the mockserver and display them in a table.
3. Under the table in index.html add the functionality to add, find, update and delete students.

Hint: 
- You have to add a form to the add Student section, and add event listeners to the buttons in the find, update and delete sections.
- You have to use a input field and a button to delete or find a student.
- To update a student, you have to add a form with input fields for all the student properties, and a button to update the student or reuse the form from the add student section.



