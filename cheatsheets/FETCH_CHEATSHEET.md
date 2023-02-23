# Fetch Cheat Sheet

## Fetch, with POST, PUT and DELETE

For requests other than GET, you need to provide fetch with an object containing the options for the request you plan to do. As an example, this is how you could make a POST request:

```JS
        let options = {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            age: 34,
            name: "lis Benson",
            gender: "female",
            email: "lis@lis.com"
        })
        }
        fetch("http://localhost:3000/users",options);
```

Replace method in options above, with the actual request-method you need (PUT, DELETE). For more info read here. Please observe, that what you include for the request are (obviously) similar to how you would make the request using Postman or a http file in vscode or Intellij;

```JS
        // Example POST method implementation:
        async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
        }

        postData('https://example.com/answer', { answer: 42 })
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
        });
```

## Error Handling with fetch

A problem, which has annoyed many developers is that fetch only rejects a promise when “a network error is encountered, although this usually means permissions issues or similar.”
When a promise is rejected we can “catch” it as sketched below (using arrow notation for simplicity)

```JS
    fetch('https://swapi.co/api/people/999999999999')
    .then(res=> res.json())
    .then(data => console.log(data.name))
    .catch(err =>console.log("UPPS"));
```

This request returns a JSON response like this `{"detail": "Not found"}` and the status code 404. But as explained above, this http-error is not considered an error by fetch, so the example above, will not “catch” the error.

In order to handle this error (and HTTP-errors in general), and also get the error-response, we have to hook into the first then-method and check the status code. If we want to “catch” the error, in a way, with access to the json-error, it can then be done like sketched below:

```JS
    fetch('https://swapi.co/api/people/999999999999')
    .then(res=> {
    if(!res.ok){ //OK is false for statuscodes >= 400
        return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
    })
    .then(data => console.log(data.name))
    .catch(err =>{
        if(err.status){
        err.fullError.then(e=> console.log(e.detail))
        }
        else{ console.log("Network error"); }
    })
```

If you like this strategy (i.e. you cannot come up with something better ;-) you can create a helper function and use it for ALL your fetch-request (assuming the backend supply errors as json)

```JS
    function handleHttpErrors(res){
    if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
    }
```

---

```JS
    fetch('https://swapi.co/api/people/999999999999')
    .then(handleHttpErrors)
    .then(data => console.log(data.name))
    .catch(err =>{
        if(err.status){
        err.fullError.then(e=> console.log(e.msg))
        }
        else{console.log("Network error"); }
    });
```

## Fetch utility methods

This page contains some small utility functions to make your life with fetch more “fun”
Utility method for POST, PUT and DELETE requests
Remember, for requests other than GET, you need to provide an options object to fetch.

This small method (refer to the spec, for additional properties you can set):

```JS
        function makeOptions(method, body) {
        var opts =  {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
        }
        if(body){
        opts.body = JSON.stringify(body);
        }
        return opts;
        }
```

---

You can make the POST request from our previous example as simple as this:

```JS
        const data = {age: 34,name: "lis Benson", gender: "female",email: "lis@lis.com"};
        const options = makeOptions("POST",data);
        fetch("http://localhost:3000/users",options);
```

---

Utility Method to handle http-errors with fetch
This is the same as was introduced earlier in the section “Error handling with fetch”

```JS
        function handleHttpErrors(res){
        if(!res.ok){
        return Promise.reject({status: res.status, fullError: res.json() })
        }
        return res.json();
        }
```

---

```JS
        fetch('https://swapi.co/api/people/999999999999')
        .then(handleHttpErrors)
        .then(data => console.log(data.name))
```
