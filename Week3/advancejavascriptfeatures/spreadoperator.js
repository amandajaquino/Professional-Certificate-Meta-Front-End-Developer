let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican"
];

function showItineracy(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with a visit to " + place3)
}

//without spread operator
/* showItineracy(top3[0], top3[1], top3[2]);  */

//with spread operator
showItineracy(...top3);