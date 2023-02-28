## CLASS EXERCISES DAY 4

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


### Europe Map

In this exercise, we will combine SVG with several of the topics we have been around this semester such as AJAX and REST-endpoints to obtain data, and Javascript for DOM-manipulation.

The task is to create a web-page with a map of Europe which, when a country is selected with a mouse click, should highlight the country and print details about the country as sketched below.

1. Create a new folder called `EuropeMap` and create a new HTML-file called `index.html` in it.
2. Create also a new Javascript-file called `index.js` in the same folder.
3. Create a new file called `index.css` and copy the following CSS into it:

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

4. Run `npm init` to create a `package.json` file. 
5. Get the map [Countries_Europe.svg](https://github.com/Cphdat3sem2017f/StartcodeExercises/blob/master/JS/Countries_Europe.svg) and copy it into the clipboard. 
6. This is an SVG image where each country is given the ISO-country code as the id. This is very convenient, because using the public REST API given here: http://restcountries.com/v3.1/alpha/de
7. Hook up an event handler on the map, get the id, perform an AJAX request to fetch the JSON-data from the link given above and update the GUI using the JSON returned with following information:
   * Name
   * Capital
   * Population
   * Area 
   * Borders (list of countries)

Hints:

* You can use the `fetch` function to perform the AJAX request.
* You can use the `then` function to get the JSON data from the response.
* You can use the `innerHTML` property to update the GUI.
* You can use the `forEach` function to iterate over the borders array.
* You can use the `getElementById` function to get the element with a given id.
* You can hook up a click-handler on the overall map (id =svg2), and in that, find the id for the actual element that was clicked (= the country code) via the target property of the event handler.
* You can change the colour of the selected country by changing its fill property 








