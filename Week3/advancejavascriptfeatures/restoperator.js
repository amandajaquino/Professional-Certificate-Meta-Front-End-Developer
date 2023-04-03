//The rest operator is a way to represent an indefinite number of arguments as an array. The spread operator is a way to represent an array as a list of arguments.
//Example coursera
/* function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); */ // 55

/* is used to unpack a box, for example, to unpack an array.The rest operator, on the other hand, is used to build a smaller box, andpack items into */ 

function addTaxToPrices (taxRate, ...itemsBought) {
        return itemsBought.map(item => taxRate * item);
    }
    let shoppingCart = addTaxToPrices(1.1,46,89,35,79)
    console.log(shoppingCart); // [50.6, 97.9, 38.5, 86.9]