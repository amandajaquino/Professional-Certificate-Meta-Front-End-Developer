// functional programming

/* var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {    
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo); */

//console.log examples
/* console.log('Hello'); */

/* function consoleLog(val) {
    console.log(val)
    return val
}

consoleLog('Hello') */

// two functions

// Do the code bellow in the chrome console
/* function doubleIt(num) {
    return num * 2
}



function objectMaker(val) {
    return {
        prop: val
    }
}

objectMaker(20);

doubleIt(10).toString()
objectMaker( doubleIt(100) ); */

// function calling and recursion
/* let counter = 3;
function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    example();
}

example(); */

//functional programming - we use functions and variables
/* function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total); */

//In functional programming, functions return new values and then use those values somewhere else in the code
/* function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE! */

//object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.
/* var virtualPet = {
    sleepy: true,
    nap: function() {}
}

console.log(virtualPet); */

//In OOP, methods update properties stored in the object instead of generating new return values.

//creating an object
/* var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
console.log(virtualPet) */
/* For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.

However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change */

//First-class functions: pass to other functions, save in a variable, return from other functions
/* function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber()) */
/* 
This works because functions in JavaScript are truly first-class citizens, 
which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc. */

//Higher-order functions: take functions as arguments, return functions
/* function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number */

//Pure functions: always return the same output for the same input, don't have side effects
/*     function addTwoNums(a, b) {
    console.log (a + b)
    }
    addTwoNums(5,6); // 11 */
/*     Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

    This includes: 
    
    changing variable values outside of the function itself, or even relying on outside variables 
    
    calling a Browser API (even the console itself!) 
    
    calling Math.random() - since the value cannot be reliably repeated
    
    The topic of pure and impure functions can get somewhat complex.
    
    For now, it's sufficient to know that this concept exists and that it is related to functional programming. */