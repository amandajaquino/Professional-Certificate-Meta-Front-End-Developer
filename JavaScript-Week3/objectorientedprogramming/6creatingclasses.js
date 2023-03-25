/* class Train {
    constructor(color, lightOn) {
        this.color = color;
        this.lightOn = lightOn;
    }
}

var myFirstTrain = new Train('red', true);
console.log(myFirstTrain); // Train { color: 'red', lightOn: true }
var mySecondTrain = new Train('blue', false);
console.log(mySecondTrain); // Train { color: 'blue', lightOn: false } */

class Train {
    constructor(color, lightOn) {
        this.color = color;
        this.lightOn = lightOn;
    }
    toogleLights() {
        this.lightOn = !this.lightOn;
    }
    lightsStatus() {
        console.log('Lights on: ', this.lightOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train4 = new Train('red', true);
// train4.toogleLights()); // undefined
// console.log(train4.lightsStatus()); // Lights on:  true undefined
// console.log(train4.getSelf()); // Train { color: 'red', lightOn: false } undefined
console.log(train4.getPrototype()); //{} undefined
