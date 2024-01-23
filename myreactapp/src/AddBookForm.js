import React, { useState } from 'react';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddBook = () => {
    // Implement the logic to add a book using API
  };

  return (
    <form onSubmit={handleAddBook}>
      <label>Title:</label>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />

      <label>Author:</label>
      <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />

      <label>Genre:</label>
      <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
