// src/components/Bookshelf.js

import React from 'react';

const Bookshelf = ({ books }) => {
  return (
    <div className="bookshelf">
      {books.map((book, index) => (
        <div key={index} className="bookshelf-item">
          <h3>{book.title}</h3>
          <p>{book.author_name?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
