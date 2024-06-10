// src/pages/BookshelfPage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const handleRemoveFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <header>
        <h1>My Bookshelf</h1>
        <Link to="/">
          <button className="bookshelf-button">Back to Search</button>
        </Link>
      </header>
      <div className="results">
        {bookshelf.length > 0 ? (
          bookshelf.map(book => (
            <BookCard
              key={book.key}
              book={book}
              onAddToBookshelf={handleRemoveFromBookshelf}
              buttonLabel="Remove from Bookshelf"
            />
          ))
        ) : (
          <p>No books in your bookshelf.</p>
        )}
      </div>
    </div>
  );
};

export default BookshelfPage;
