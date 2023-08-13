import React, { useState } from 'react';

const ItemList = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [newMovie, setNewMovie] = useState('');

  const handleAddItem = () => {
    if (newMovie.trim() !== '') {
      const newItem = {
        id: Date.now(), // Use the current timestamp as a simple unique ID
        name: newMovie,
      };

      setItems((prevItems) => [...prevItems, newItem]);
      setNewMovie('');
    }
  };

  const handleRemoveItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>List of Movies</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (ID: {item.id}) {/* Display the ID along with the name */}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Enter movie name"
        />
        <button onClick={handleAddItem}>Add Movie</button>
      </div>
    </div>
  );
};

export default ItemList;

