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

- [Car Link](https://github.com/dat3startcode/javaScriptInClass3sem/tree/main/day5/car_game)

1. Create a Car (ES6 Class Syntax) object with 3 properties: x, y, speed = 10
2. We need 6 methods in our Car object: moveUp, moveDown, moveLeft, moveRight, carPosition and draw
3. The move methods should change the x and y properties. 
4. The carPosition method should return the current position of the car
5. Create a method called moveCar outside the Car object. This method should take a car object and an event as parameter. 
6. Inside the moveCar function you use the event to check which key was pressed and call the correct move method on the car object. `ArrowUp` should call `moveUp`, `ArrowDown` should call `moveDown` etc.
7. Create a new Car object and call the draw method on it.
8. Add an event listener to the document. The event listener should call the moveCar function with the car object and the event as parameters.
9. Call the carPosition method on the car object and display the result in the console.

