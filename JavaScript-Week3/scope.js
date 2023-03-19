//VAR
/* console.log(user);
var user;// undefined
var user = "Mary";
var user = "Joanna";
console.log(user); // Joanna */

//LET
//we cannot access a let variable before it is declared
/* console.log(user);
let user; //ReferenceError: Cannot access 'user' before initialization */

//we can't redeclare
/* let user;
console.log(user); // undefined
let user = 'Anna'; // SyntaxError: Identifier 'user' has already been declared */

//we can reassign
/* let user;
console.log(user); // undefined
user = 'Anna';
console.log(user); // Anna */

//CONST
//must be initialized
/* console.log(user);
const user = 'Andrew'; // ReferenceError: Cannot access 'user' before initialization */

const user='Andrew';
console.log(user); // Andrew

//we can't reassign
user='Anna'; // TypeError: Assignment to constant variable.
