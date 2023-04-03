//write a function declaration with two arguments true and false
 /* function lemonade (pedido, naopedido) {
    if (pedido) {
        console.log(`Prices with 20% tax:
        Dish: Italian pasta Price (incl.tax): $ 11.46
        Dish: Rice with veggies Price (incl.tax): $ 10.38
        Dish: Chicken with potatoes Price (incl.tax): $ 18.66
        Dish: Vegetarian Pizza Price (incl.tax): $ 7.74
        `);
    } else {
        console.log(`Prices without tax:
        Dish: Italian pasta Price: $ 9.55
        Dish: Rice with veggies Price: $ 8.65
        Dish: Chicken with potatoes Price: $ 15.55
        Dish: Vegetarian Pizza Price: $ 6.45
        `);
    } */

    function calculatePrices(inclTax) {
        const dishes = [
          { name: "Italian pasta", price: 9.55 },
          { name: "Rice with veggies", price: 8.65 },
          { name: "Chicken with potatoes", price: 15.55 },
          { name: "Vegetarian Pizza", price: 6.45 },
        ];
      
        console.log(inclTax ? "Prices with 20% tax:" : "Prices without tax:");
      
        dishes.forEach((dish) => {
          const tax = inclTax ? dish.price * 0.2 : 0;
          const price = inclTax ? dish.price + tax : dish.price;
          console.log(
            `Dish: ${dish.name} Price (incl.tax): $ ${price.toFixed(2)}`
          );
        });
      }

      