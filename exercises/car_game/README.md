# CAR GAME

- [Game Pic](https://i.imgur.com/9kwqEkO.png)
- Car URL IMG: "http://nostarch.com/images/car.png"

Description:

This is a very simple car game where you can move the car around the screen using the arrow keys.
The car is represented by an image. The car should be able to move in all directions.
The car should not be able to move outside the screen.(optional).

1. Create a folder called `car_game`
2. Copy both index.html, style.css and script.js from the above Car Repo into the folder
3. Open the index.html file in your browser 
4. Open the script.js file where you will find a Car Class (ES6 Class Syntax) object. 
5. You have to add 3 properties to the Car object constructor: x, y and speed = 10. 
6. We need 6 methods in our Car object: moveUp, moveDown, moveLeft, moveRight, carPosition(is implemented) and draw 
7. The move methods should change the x and y properties of the car. 
8. The carPosition method is returning the current position of the car 
9. Create a method called moveCar outside the Car object. This method should take a car object and an event as parameter. 
10. Inside the moveCar function you use the event to check which key was pressed and call the correct move method on the car object. `ArrowUp` should call `moveUp`, `ArrowDown` should call `moveDown` etc. 
11. Create a new Car object and call the draw method on it. 
12. Add an event listener to the document. The event listener should call the moveCar function with the car object and the event as parameters. 
13. Call the carPosition method on the car object and display the result in the console.
14. Play the game and see if you can move the car around the screen.

Hints:

```JS
    this.carElement = document.createElement("img");

    this.carElement.src = imageUrl;

    this.carElement.style.cssText = this.carPosition();
    
    document.querySelector("body").appendChild(this.carElement);
```
