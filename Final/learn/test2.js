const dishData = [
    { name: 'Pizza', price: 8.99 },
    { name: 'Burger', price: 6.99 },
    { name: 'Salad', price: 5.99 },
    { name: 'Italian pasta', price: 10.42 },
    { name: 'Rice with veggies', price: 9.44 },
    { name: 'Chicken with potatoes', price: 17.04 },
    { name: 'Vegetarian Pizza', price: 6.99 }
  ];
  
  function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
      let finalPrice;
      if (taxBoolean === true) {
        finalPrice = dishData[i].price * 1.1;
      } else if (taxBoolean === false) {
        finalPrice = dishData[i].price;
      } else {
        console.log('You need to pass a boolean to the getPrices call!');
        return;
      }
      console.log(`Dish: ${dishData[i].name} Price: $${finalPrice.toFixed(2)}`);
    }
  }
  
  function getDiscount(taxBoolean, guests) {
    let total = 0;
    getPrices(taxBoolean);
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
      for (let i = 0; i < dishData.length; i++) {
        let finalPrice;
        if (taxBoolean === true) {
          finalPrice = dishData[i].price * 1.1;
        } else {
          finalPrice = dishData[i].price;
        }
        total += finalPrice;
      }
      let discount = 0;
      if (guests < 5) {
        discount = 5;
      } else if (guests >= 5) {
        discount = 10;
      }
      console.log(`Discount is: $${discount.toFixed(2)}`);
      console.log(`Total cost: $${(total - discount).toFixed(2)}`);
    } else {
      console.log('The second argument must be a number between 1 and 29!');
    }
  }