## CLASS EXERCISES DAY 5

- Deployment of a simple web application
- Car Game (OOP)

## Deployment of a simple web application

- [Info Link](https://github.com/dat3startcode/javaScriptExercises3sem/blob/main/day5/DEPLOYMENT.md)

1. Create a new Vite project
2. Build a simple web application
3. Deploy the application to NGINX

## CreditCard Exercise

- [CreditCard Link](https://github.com/dat3startcode/javaScriptInClass3sem/tree/main/day5/creditcardIterationExercise)

## Car Game (OOP)
- [Car Repo](https://github.com/dat3startcode/javaScriptInClass3sem/tree/main/day5/car_game)
- [Game Pic](https://i.imgur.com/9kwqEkO.png)
- Car URL IMG: "http://nostarch.com/images/car.png"



- [Car Link](https://github.com/dat3startcode/javaScriptInClass3sem/tree/main/day5/car_game)

Description:

This is a very simple car game where you can move the car around the screen using the arrow keys. 
The car is represented by an image. The car should be able to move in all directions. 
The car should not be able to move outside the screen.(optional). 

1. Create a folder called `car_game`
2. Copy both index.html, style.css and script.js from the above Car Repo into the folder 
3. In script.js file you will find a Car Class (ES6 Class Syntax) object. 
4. You have to add 3 properties to the Car object constructor: x, y and speed = 10. 
5. We need 6 methods in our Car object: moveUp, moveDown, moveLeft, moveRight, carPosition(is implemented) and draw 
6. The move methods should change the x and y properties of the car. 
7. The carPosition method is returning the current position of the car 
8. Create a method called moveCar outside the Car object. This method should take a car object and an event as parameter. 
9. Inside the moveCar function you use the event to check which key was pressed and call the correct move method on the car object. `ArrowUp` should call `moveUp`, `ArrowDown` should call `moveDown` etc. 
10. Create a new Car object and call the draw method on it. 
11. Add an event listener to the document. The event listener should call the moveCar function with the car object and the event as parameters. 
12. Call the carPosition method on the car object and display the result in the console.

Hints:

```JS
    this.carElement = document.createElement("img");

    this.carElement.src = imageUrl;

    this.carElement.style.cssText = this.carPosition();
    
    document.querySelector("body").appendChild(this.carElement);
```

