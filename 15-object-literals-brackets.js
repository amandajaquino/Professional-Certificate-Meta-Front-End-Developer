/* 
//alternative syntax brackets notation
var house2= {};
house2['rooms']=4;
house2['color']='pink';
house2["priceUSD"]=12345;
console.log(house2);  */

// can update with either the dot and brackets notation
/* var car = {};
car.color = "red";
car['color'] = "green";
car['speed'] = 200;
car.speed = 100;
console.log(car); 
 */
// //adding space characters
// car["number of doors"] = 4;
// console.log(car);

// //adding number as string
// car["2022"] = 1901;
// console.log(car)

// evaluate expressions
/* var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color:"red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(arrOfKeys[i], drone[arrOfKeys[i]])
}
 */
/* The value of i was 0 

The value of arrOfKeys[i] was arrOfKeys[0], which was "speed" 

Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100 */

var car = {};
car.color = "red";
car['color'] = "green";
car['speed'] = 200;
car.speed = 100;
console.log(car); 