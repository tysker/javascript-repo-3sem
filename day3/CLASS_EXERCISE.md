## CLASS EXERCISES DAY 4

### Forms

In this exercise, we will create a form and handle the form data using Javascript.
Use the following HTML code as a starting point:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Exercise</title>
</head>
<body>
    <form id="form_id">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

1. Create a new folder called `FormExercise` and create a new javascript file called `index.js` in it.
2. Create a function called `logFormEntries` which takes a `FormData` object as a parameter and logs the entries in the form to the console.
3. Create a function called `resetValue` which resets the value of the input fields to an empty string.
4. Hook up an event handler on the form which calls the `logFormEntries` function and the `resetValue` function when the form is submitted.
5. Test the form by entering some data and submitting the form.

Hint: 
- Use the `FormData` object to get the form data.
- Use the `addEventListener` function to hook up an event handler on the form.
- Use the `preventDefault` function to prevent the form from being submitted.
- Use the `querySelector` function to get the input fields.
- Use the `getElementById` ot `querySelector` function to get the form.
- Use the `value` property to get the value of the input fields.

***

### Fetch data from a REST-endpoint (Mongo-DB Docker Server)

In this exercise, we will fetch data from a REST-endpoint using the `fetch` function. The REST-endpoint is a Docker container running a Mongo-DB server. 
The data is stored in a collection called `students` and the REST-endpoint is running on port 3000.

- LinkClone the following repository: https://github.com/dat3startcode/mockserver/tree/main/mockserver_crud_exercises
- Create a new folder called CrudExercises and create a new javascript file called `index.js` in it.
- The endpoint documentation is here: https://app.swaggerhub.com/apis-docs/tysker/student/1.0.0
- Create a function called `getAllStudents` which fetches all students from the endpoint and returns the JSON data.
- Create a function called `getStudentById` which fetches a student with a given id from the endpoint and returns the JSON data.
- Create a function called `addStudent` which adds a student to the endpoint and returns the JSON data.
- Create a function called `deleteStudent` which deletes a student with a given id from the endpoint and returns the JSON data.
- Create a function called `updateStudent` which updates a student with a given id from the endpoint and returns the JSON data.

***

## Europe Map

In this exercise, we will combine SVG with several of the topics we have been around this semester such as AJAX and REST-endpoints to obtain data, and Javascript for DOM-manipulation.

The task is to create a web-page with a map of Europe which, when a country is selected with a mouse click, should highlight the country and print details about the country like name, capital, population, area and borders.

1. Create a new folder called `EuropeMap` and create three files in it:
    - index.html
    - index.js
    - style.css
2. Into the style.css file, copy the following CSS into it:

```css
body {
  margin: 0;
  padding: 0;
}

svg {
  width: 100%;
  height: 100%;
}
```

3. Connect the style and javascript file to the html file.
4. Add the europe svg map to the html file [Countries_Europe.svg](https://github.com/dat3startcode/javaScriptExercises3sem/blob/main/exercises/europwMap.svg)
5. Run the index.html file in a browser and see the map. 
6. Study the code of the svg file. 
7. You will notice that each country is given the ISO-country code as the id. This is very convenient, because we can use the id to identify the country. 
8. With the country id we can fetch the JSON-data for the country from the following REST-endpoint:

```javascript
const url = `https://restcountries.com/v3.1/alpha/${countryId}`;
```

9. Hook up an event handler on the map, to get the country id. 
10. Perform an AJAX request to fetch the JSON-data for the country. 
11. Update the GUI using the JSON that is returned with following information:
    * Name
    * Capital
    * Population
    * Area
    * Borders (list of countries)


**Hints:**

* To get the country id of each country tag, you have to use the knowledge about event delegation or also called event bubbling.
* You can use the `fetch` function to perform the AJAX request.
* You can hook up a click-handler on the overall map (id =svg2), and in that, find the id for the actual element that was clicked (= the country code) via the target property of the event handler.
* You can change the colour of the selected country by changing its fill property 








