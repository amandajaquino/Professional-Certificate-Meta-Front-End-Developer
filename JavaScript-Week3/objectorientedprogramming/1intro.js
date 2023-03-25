// functional programming - functional programming approach, where the data used in the app needs to be kept separate from functions that operate on that data
/* var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, stateTax) {
  return shoes * stateTax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay); */

//OOP 1 -  OOP revolves around the idea of organizing our programs using objects to group related data and functionality 
/* var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price is: ' + calculation);
    }
}
purchase1.totalPrice(); //120 */

//OOP 2
/* var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price is: ' + calculation);
    }
}
purchase2.totalPrice(); //60 */

//OOP3 - THIS keyword: ALLOW US TO REFER TO THE OBJECT THAT IS CURRENTLY BEING EXECUTED. this approach allows for the reuse of existing code. 

/* var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price is: ' + calculation);
    }
}
purchase1.totalPrice(); */

/* var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price is: ' + calculation);
    }
}
purchase2.totalPrice(); */

