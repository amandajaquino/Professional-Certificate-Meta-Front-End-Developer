/* class Car1 {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    present() {
        return `I have a ${this.brand} ${this.model} from ${this.year}`;
    }
} */

// classes: a template for creating objects
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn() {
        console.log('Turbo is on!');
    } //It's important to remember that you don't use the function keyword here. Just the name of the method is needed.
}

const car1 = new Car('red', 120); //Like with regular functions, you can also pass parameters to the class methods and then use them the same as with regular functions
