// Step 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
  for (let item of dairy) {
    console.log(item);
  }
}

logDairy(); // Output: cheese sour cream milk yogurt ice cream milkshake


// Step 2
const animal = {
  canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (let prop of Object.keys(bird)) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

birdCan(); // Output: canFly: true hasFeathers: true


// Step 3
function animalCan() {
  for (let prop in bird) {
    if (bird.hasOwnProperty(prop)) {
      console.log(`${prop}: ${bird[prop]}`);
    }
  }
  for (let prop in bird.__proto__) {
    if (bird.__proto__.hasOwnProperty(prop)) {
      console.log(`${prop}: ${bird.__proto__[prop]}`);
    }
  }
}

animalCan(); // Output: canFly: true hasFeathers: true canJump: true