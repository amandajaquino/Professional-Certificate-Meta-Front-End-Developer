//1 - for each - is used to iterate over each of members of the an array
// forEach()  method accepts  a function that will work on each array item 
/* const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex); */

/* const fruit = ['kiwi','mango','apple','pear'];
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${fruit}`);
}); */


/* const fruit = ['kiwi','mango','apple','pear'];
const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach((veggie, index) => {
  console.log(`${index}. ${fruit}`);
}); */

// 2 filter - is used to filter out items from an array
//It filters your arrays  based on a specific test

/* const nums = [0, 10, 20, 30, 40, 50]
const filteredNums = nums.filter(function(num) {
   return  num > 20;   
});
console.log(filteredNums); // [30, 40, 50] */

// 3 map - is used to transform each item in an array
//This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter.

/* const mapExample = [0,10,20,30,40,50].map( function(num) {
    return num / 10
})

console.log(mapExample); // [0, 1, 2, 3, 4, 5] */

// 3 - the object data structure to complete a specific task. This task is to convert an object to an array:
/* const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result) // ["speed", 100, "color", "yellow"]
 */

// the Map constructor:
/* new Map();
let bestBoxers = new Map();
bestBoxers.set(1, 'The Champion');
bestBoxers.set(2, 'The Runner Up');
bestBoxers.set(3, 'The Third Place');

console.log(bestBoxers); */ // Map(3) { 1 => 'The Champion', 2 => 'The Runner Up', 3 => 'The Third Place' }

// the Set constructor:

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);