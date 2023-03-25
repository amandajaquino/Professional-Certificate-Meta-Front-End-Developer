
//1
/* var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}

var eagle1 = Object.create(bird);
console.log('eagle1: ', eagle1); // eagle1:  {}

console.log('eagle1 has wings: ', eagle1.hasWings); // eagle1 has wings:  true
console.log('eagle1 can fly: ', eagle1.canFly); // eagle1 can fly:  true
console.log('eagle1 has feathers: ', eagle1.hasFeathers); // eagle1 has feathers:  true

var penguin1 = Object.create(bird);
console.log('penguin1: ', penguin1); // penguin1:  {}
penguin1.canFly = false;
console.log('penguin1 has feathers: ', penguin1.hasFeathers); // pinguin1 has wings:  true
console.log('penguin1 can fly: ', penguin1.canFly); // penguin1 can fly:  false */

//2 - for use new keyword i need to create a class
class bird {
    constructor() {
        this.hasWings = true;
        this.canFly = true;
        this.hasFeathers = true;
    }
}

var penguin1 = new bird();

console.log('penguin1: ', penguin1); // penguin1:  {}
penguin1.canFly = false;
console.log('penguin1 has feathers: ', penguin1.hasFeathers); // pinguin1 has wings:  true
console.log('penguin1 can fly: ', penguin1.canFly); // penguin1 can fly:  false


