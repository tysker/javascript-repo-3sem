"use strict";

class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
    }

    carPosition() {
        return (
            "position: absolute; left: " + this.x + "px; " + "top: " + this.y + "px;"
        );
    }

    draw() {
        this.carElement = document.createElement("img");
        this.carElement.src = "http://nostarch.com/images/car.png";

        this.carElement.style.cssText = this.carPosition();

        document.querySelector("body").append(this.carElement);
    }

    moveRight() {
        this.x += this.speed;

        this.carElement.style.cssText = this.carPosition();
    }

    moveLeft() {
        this.x -= this.speed;

        this.carElement.style.cssText = this.carPosition();
    }

    moveUp() {
        this.y -= this.speed;

        this.carElement.style.cssText = this.carPosition();
    }

    moveDown() {
        this.y += this.speed;

        this.carElement.style.cssText = this.carPosition();
    }

    speedUp() {
        if(this.speed < 30) {
            this.speed += 1;
        } else {
            this.speed = 30;
        }
    }

    speedDown() {
        if(this.speed > 0) {
            this.speed -= 1;
        } else {
            this.speed = 0;
        }
    }

    nitroBoost() {
        console.log(this.speed)
        const speed = this.speed;
        for (let i = 0; i < 5; i++) {
            this.speed += 1;
            console.log(this.speed)
        }
        this.speed = speed;
        console.log(this.speed)
    }
}

class Apples {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    applePosition() {
        return (
            "position: absolute; left: " + this.x + "px; " + "top: " + this.y + "px;"
        );
    }

    draw() {
        this.appleElement = document.createElement("img");
        this.appleElement.src = "https://nostarch.com/images/apple.png";

        this.appleElement.style.cssText = this.applePosition();

        document.querySelector("body").append(this.appleElement);
    }
}

const moveCar = (car, event) => {
    const code = event.code;
    if (code === "ArrowUp") {
        car.moveUp();
    } else if (code === "ArrowDown") {
        car.moveDown();
    } else if (code === "ArrowLeft") {
        car.moveLeft();
        car.speedDown();
    } else if (code === "ArrowRight") {
        car.moveRight();
        car.speedUp();
    }
};

const boost = (car, event) => {
    const code = event.code;
    if (code === "Space") {
        car.nitroBoost();
    }
}


const tesla = new Car(100, 200);
// const apple = new Apples(100, 100);

document.querySelector("body").addEventListener("keydown", (event) => {
    moveCar(tesla, event);
    boost(tesla, event);
    console.log(tesla.speed)
});

tesla.draw();
// apple.draw()
