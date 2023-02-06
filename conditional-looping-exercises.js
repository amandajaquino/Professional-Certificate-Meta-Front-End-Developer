
//1
/*var place = 1;

if(place == 1) {
    console.log('Gold')
} else if (place == 2) {
    console.log('Silver')
} else if (place == 3) {
    console.log('Bronze')
} else {
    console.log('No medal')
}*/

//2
/*var place = 1;
switch(place) {
    case 1:
        console.log('Gold');
        break;
    case 2:
        console.log('Silver');
        break;
    case 3:
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}*/

//response 1 
/*for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        //this block will run if no condition matches
        console.log(i)
    }
}*/

//response 2
for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}