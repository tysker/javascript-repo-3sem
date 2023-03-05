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









