import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from Django API
    fetch('http://localhost:8000/api/books/')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddBook = (newBook) => {
    // Add a new book to the backend
    fetch('http://localhost:8000/api/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then(response => response.json())
      .then(data => setBooks(prevBooks => [...prevBooks, data]))
      .catch(error => console.error('Error adding book:', error));
  };

  return (
      <div className="app">
          <h1>Book Catalogue</h1>

          {/* Add Book Form */}
          <AddBookForm onAddBook={handleAddBook}/>

          {/* Book List */}
          <BookList books={books}/>

          {/* Filter and Search */}
          {/* Add filtering and search UI components here */}

          {/* Edit and Delete functionality */}
          {/* Add components for editing and deleting books here */}
          <h1>Book List</h1>
      </div>
  );
};

export default App;
