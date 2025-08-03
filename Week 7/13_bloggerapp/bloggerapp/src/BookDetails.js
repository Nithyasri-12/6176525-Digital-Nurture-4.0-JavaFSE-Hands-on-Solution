import React from 'react';

const books = [
  { id: 'b1', title: 'Master React', price: 670 },
  { id: 'b2', title: 'Deep Dive into Angular 11', price: 800 },
  { id: 'b3', title: 'Mongo Essentials', price: 450 },
];

function BookEntry({ book }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontWeight: '600' }}>{book.title}</div>
      <div>{book.price}</div>
    </div>
  );
}

function BookDetails() {
 
  if (!books || books.length === 0) {
    return (
      <div style={{ flex: 1, borderLeft: '5px solid green', paddingLeft: 20 }}>
        <h2>Book Details</h2>
        <p>No books available.</p>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, borderLeft: '5px solid green', paddingLeft: 20 }}>
      <h2>Book Details</h2>
      {books.map(b => (
        <BookEntry key={b.id} book={b} />
      ))}
    </div>
  );
}

export default BookDetails;
