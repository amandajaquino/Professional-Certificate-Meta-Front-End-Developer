function DessertsList3(props) {
    // Implement the component here.
    /* The list should be sorted by calories in an ascending manner and any desserts with more than 500 calories should be excluded.
For that you have to use a combination of `map`, `filter` and `sort` array operators. */
    // Filter desserts with calories less than 500
  const filteredDesserts = props.data.filter((dessert) => dessert.calories < 500);

  // Sort desserts in ascending order based on calories
  filteredDesserts.sort((a, b) => a.calories - b.calories);

  return (
    <div>
      <ul>
        {/* Map through filtered and sorted desserts */}
        {filteredDesserts.map((dessert) => (
          <li key={dessert.name}>
            {/* Display dessert name and calories */}
            {dessert.name} - {dessert.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
    
   /*  const listItems = props.data.map((dessert) => {
      const itemText = `${dessert.name} - ${dessert.calories} calories`;
      return <li key={dessert.name}>{itemText}</li>;
    });
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    ); */
  }
  
  export default DessertsList3;