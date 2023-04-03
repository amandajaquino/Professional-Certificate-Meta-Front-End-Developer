// Task 1
/* **Step 1.** You are given an array of dairy products:  

    
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    


Create a function called `logDairy`. Within it, console log each of the items in the dairy array, using the for...of loop.   

After you create this function, call it as `logDairy()` to see the output on the console.

The expected output should be:

```
cheese
sour cream
milk
yogurt
ice cream
milkshake
```

<br>
 */
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
  for (let item of dairy) {
    console.log(item);
  }
}

logDairy(); // Output: cheese sour cream milk yogurt ice cream milkshake
// Task 2
/* <b>Step 2.</b> You are given the following starter code:  

```
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
```

Create a function called `birdCan`, within it, loop over the bird object's properties and console log each one, using the for...of loop. Finally call the function as `birdCan()` to see the output on the console.
Remember, you need to console log both the key and the value of each of the bird object's properties.

<br/>
Expected output should be:

```
canFly: true
hasFeathers: true
```


<br> */

const animal = {
    canJump: true
  };
  
  const bird = Object.create(animal);
  
  bird.canFly = true;
  bird.hasFeathers = true;
  
  function birdCan() {
    for (let prop in bird) {
      console.log(`${prop}: ${bird[prop]}`);
    }
  }
  
  birdCan(); // Output: canFly: true hasFeathers: true

// Task 3
/* <b>Step 3.</b> 
    Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop. Finally call the function as `animalCan()` to see the output on the console.

<br/><br/>
Expected outout should be:

```
canFly: true
hasFeathers: true
canJump: true
```
<br><br>
## Final Step: Let's submit your code!
Nice work! To complete this assessment:
- Save your file through File -> Save 
- Select "Submit Assignment" in your Lab toolbar. 

Your code will be autograded and return feedback shortly on the "Grades" tab.  
You can also see your score in your Programming Assignment "My Submission" tab.
<br> <br>  */

function animalCan() {
    for (let prop in bird) {
      console.log(`${prop}: ${bird[prop]}`);
    }
    for (let prop in bird.__proto__) {
      console.log(`${prop}: ${bird.__proto__[prop]}`);
    }
  }
  
  animalCan(); // Output: canFly: true hasFeathers: true canJump: true
/* 
  Result: Passed: Console logged expected values for logDairy
  FAILED: Console logged expected values for birdCan - returned canFly: truehasFeathers: truecanJump: true but expected canFly: truehasFeathers: true
  FAILED: Console logged expected values for animalCan - returned canFly: truehasFeathers: truecanJump: truecanJump: true but expected canFly: truehasFeathers: truecanJump: true */