//if and els

/*var result = 30;

if(result > 40) {
    console.log('You passed the test')
} else {
    console.log('You did not pass the test')
}*/

// if, else if, else

/*var place = 'first';

if(place == 'first') {
    console.log('Gold')
} else if (place == 'second') {
    console.log('Silver')
} else if (place == 'third') {
    console.log('Bronze')
} else {
    console.log('No medal')
}

var light = 'orange';
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}
*/

// switch statement - for more than 3 conditions?!
/*var place = 'first';
switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}*/

//converting the previous if-else example with switch-case

var light = 'red';
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }
