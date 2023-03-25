//1 - to create or instansiate objects of our classes.
/* The thing to remember about Objects 
is that they exist in a hierarchal 
tructure. Meaning that the original 
base or super class for everything is 
the Object class, all objects derive 
from this class. This allows us to 
utilize the Object.create() method. 
to create or instansiate objects of our 
classes. */

// class Animal { /* ...class code here... */ }
 
// var myDog = Object.create(Animal)
 
// console.log (Animal)
//output: [class Animal]

/* 2 - New keyword: more common method of creating obbjects 
from classes is to use the new keyword */

// class Animal { /* ...class code here... */ }

// var myDog = new Animal()

// console.log (Animal)
//output: [class Animal]

/* 3 - OOP principles: inheritance - the 
ability to create a new class from 
an existing class. This is done by 
using the extends keyword */

//example 1: class Eagle extends Bird { /* ...class code here... */ }

//example 2 - copilot
/* class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking`);
    }
}

class Cat extends Animal {   
    meow() {
        console.log(`${this.name} is meowing`);
    }
}

const dog1 = new Dog('Max', 3); */

/* 4 - OOP principles: encapsulation - the ability to hide the 
implementation details of a class from other objects. 
This is done by using the private keyword. */

//example 1: "abc".toUpperCase() 
/* I don't really need to worry or 
even waste time thinking about how the toUpperCase() method works. */

/* 5 - OOP principles: polymorphism - the ability to create
a generic interface that multiple classes can implement.
This is done by using the abstract keyword. */

/* Polymorphism is a word derived from the Greek language meaning "multiple forms". 
An alternative translation might be: "something that can take on many shapes" */

//example 1:
/* const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

bicycle.bell(); // "Get away, please"
door.bell(); // "Come here, please!"

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // Ring, ring! Come here, please!
 */

//example 2:
/* console.log("abc".concat("def")); // 'abcdef'
console.log(["abc"].concat(["def"])); // ['abc', 'def']
console.log(["abc"] + ["def"]); // ["abcdef"] */

/* This means that the concat() method is exhibiting polymorphic behavior since it behaves differently based on the context - in 
this case, based on what data types I give it */

//example 3:
/* class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!" */

//example 4:
//Do some practice with the above code, trycreating some of your own classes. (hint : think about things you know from everyday life)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}


const Amanda = new Student('Amanda', 25);

Amanda.study();
Amanda.eat();
Amanda.sleep();
Amanda.play();
console.log('The age of Amanda is', Amanda.age);
