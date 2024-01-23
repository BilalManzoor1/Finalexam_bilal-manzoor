import React from 'react';

const Book = ({ title, author, genre }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default Book;
