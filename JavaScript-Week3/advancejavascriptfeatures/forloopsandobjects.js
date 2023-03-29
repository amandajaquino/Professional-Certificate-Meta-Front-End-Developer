//1 Problem


/* const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}// TypeError: car is not iterable */

//2 for in
/* const person = {
    name: 'John',
    age: 30,
    occupation: 'Software Developer'
  };

  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  } */


//3 for of the array
/*   const customers = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 42 }
  ];

  for (const customer of customers) {
    console.log(customer.name);
  } */

//4 Built-in methods 

//object.keys returns an array of the object's own enumerable property names

/* const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); 
 */

// object.values returns an array of the object's own enumerable property values
/* const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow'] */

// object.entries returns an array of the object's own enumerable property [key, value] pairs

/* const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); */

//5 for...of loop - solution coursera
/* var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key]) 
} */


/* function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess(); */

  const car = {
    engine: true,
    steering: true,
    speed: 'slow'
    }
    const sportsCar = Object.create(car);
    sportsCar.speed = 'fast';
    console.log('The sportsCar object:', sportsCar);

    console.log('----- for-in is unreliable -----');
    for (prop in sportsCar) {
        console.log(':)', prop);
    }
    console.log(':)', 'Iterating over object AND its prototype!');

    console.log('----- for-of is 3222reliable -----');
    for (prop of Object.keys(sportsCar)) {
        console.log('***', prop + ': ' + sportsCar[prop]);
    }
    console.log('***', "Iterating over object's OWN PROPERTIES only!");

 /*  const car = {
    engine: true
    }
    const sportsCar = Object.create(car);
    sportsCar.speed = 'fast';
    console.log('The sportsCar object:', sportsCar);

    for (prop in sportsCar) {
        console.log(':)', prop);
    }

    for (prop of Object.keys(sportsCar)) {
        console.log('***', prop + ': ' + sportsCar[prop]);
    }
 */
