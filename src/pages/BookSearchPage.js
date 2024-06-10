// src/pages/BookSearchPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookSearch from '../components/BookSearch';

const BookSearchPage = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem('bookshelf')) || []
  );

  const handleAddToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <header>
        <h1>Search by book name:</h1>
        <Link to="/bookshelf">
          <button>My Bookshelf</button>
        </Link>
      </header>
      <BookSearch onAddToBookshelf={handleAddToBookshelf} />
    </div>
  );
};

export default BookSearchPage;
