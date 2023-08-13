import React from 'react';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

const ListComponent = () => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <h1>List of Items</h1>
      <ListComponent />
    </div>
  );
};



export default App;