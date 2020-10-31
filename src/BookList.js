import React from 'react';
import Book from './Book';

function BookList(props) {
  return (
      <ol className="books-grid">
       {props.list.map(book =>
         <li key={book.id}>
           <Book book={book} options={props.categories} onChangeCategory={props.onChange}/>
         </li>)}
      </ol>
  );
}

export default BookList;
