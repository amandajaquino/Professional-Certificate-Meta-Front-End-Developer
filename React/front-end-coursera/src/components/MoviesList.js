import React from 'react';
import ItemList from '../ItemList';

const MoviesList = () => {
  const initialMovies = [
    { id: 1, name: 'Movie 1' },
    { id: 2, name: 'Movie 2' },
    { id: 3, name: 'Movie 3' },
  ];

  return (
    <div>
      <h1>My Movie App</h1>
      <ItemList initialItems={initialMovies} />
    </div>
  );
};

export default MoviesList;




