import React from 'react';
import Book from './Book';

function BookList(props) {

  const { list, categories, onChange } = props;

  return (
      <ol className="books-grid">
       {list.map(book =>
         <li key={book.id}>
           <Book book={book} options={categories} onChangeCategory={onChange}/>
         </li>)}
      </ol>
  );
}

export default BookList;
