import React, { useEffect, useState } from 'react';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from Django API
    fetch('your_api_endpoint')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
