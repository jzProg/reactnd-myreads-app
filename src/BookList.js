import React from 'react';
import Book from './Book';

function BookList(props) {
  return (
    <ol className="books-grid">
     {props.list.map(book => <li><Book/></li>)}
    </ol>
  );
}

export default BookList;
