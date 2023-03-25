/* 1 - Constructor: a special method that is
called when a new object is created from
a class. The constructor method is a
great place to initialize properties of
the object. */

//1.1 - constructor for built-in objects

//Too: are special functions that allow us to build instances of these built-in native object
//console.log(new Date());

//However, not all the built-in objects come with a constructor function
//example 1
//console.log(new Math()); //Math is not a constructor

//1.2 - constructor for custom objects
//Besides constructor functions for the built-in objects, I can also define custom constructor functions.

//example
/* function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
 
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream); // --> Icecream { flavor: 'kiwi', meltIt: [Function (anonymous)] }
console.log(appleIcecream); // --> Icecream { flavor: 'apple', meltIt: [Function (anonymous)] } */

/* The most common use case of new is to use it with one of the built-in object types. */

//1.3 Others:

/* Note that using constructor functions on all built-in objects is sometimes not the best approach.
This is especially true for object constructors of primitive types, namely: String, Number, and Boolean. */

/* let apple = new String("apple");
console.log(apple); // --> String {'apple'}
let pear = "pear";
console.log(pear); // --> "pear" */

/* Obs: The pear variable, being a primitive value, will always be more performant than the apple variable, which is an object.
Besides being more performant, due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, even when their values are identical.
In other words, if you compare new String('plum') === new String('plum'), you'll get back false, while "plum" === "plum" returns true. You're getting the false when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.
Besides not using constructors to build object versions of primitives, you are better off not using constructors when constructing plain, regular objects.
Instead of new Object, you should stick to the object literal syntax: {}. */

//1.4 - RegExp constructor: is used to create a new regular expression object.  It takes a string as an argument, which is the regular expression pattern.

/* console.log("abcd".match(/d/)); // [ 'd', index: 3, input: 'abcd', groups: undefined ]
console.log("abcd".match(/a/)); // [ 'a', index: 0, input: 'abcd', groups: undefined ]

 */
/* 
Instead of using Array, Function, and RegExp constructors, you should use their array literal, function literal, and pattern literal varieties: [], () {}, and /()/ */

//create a RegExp object
let pattern = new RegExp("a");
console.log("abcd".match(pattern)); // [ 'a', index:     0, input: 'abcd', groups: undefined ]