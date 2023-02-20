
//The try catch JavaScript statement can keep a program running even when it encounters an error
/* try {
    console.log(a+b)
} catch (error) {
    console.log(error)
    console.log('There was an error')
    console.log('The error was saved in the error log')    
}
console.log('My program does not stop') */

try {
   throw new ReferenceError();
} catch (error) {
    console.log(error)
    console.log('There was an error')
}
console.log('My program does not stop') 
