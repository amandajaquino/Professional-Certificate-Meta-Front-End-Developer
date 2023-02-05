//1

/*var age = 45;
if ( age >= 65) {
    console.log("You get your income from your pension")
} else if ( age<65 && age>=18) {
    console.log("Each month you get a salary")
} else if ( age<18) {
    console.log("You get an allowance")
} else {
    console.log ("The value of the age variable is not numerical")
};*/

//2

var day = "Sunday";
switch (day) {
    case day='Monday' :
        console.log("Go to work");
        break;
    case day='Tuesday' :
        console.log("Go to the gym");
        break;
    case day='Wednesdday' :
        console.log("Go for a park");
        break;
    case day='Thursday' :
        console.log("Go to the restaurant");
        break;
    case day='Friday' :
        console.log("Play with kids");
        break;
    case day='Saturday' :
        console.log("Go for a party");
        break;
    case day='Sunday' :
        console.log("Go to the church");
        break;
    default:
        console.log("There is no such day")
}