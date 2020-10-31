import React from 'react';
import Select from './Select';

function Book(props) {
  
  const { book, options } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <Select options={options} book={book} onChange={props.onChangeCategory}/>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.join(', ')}</div>
    </div>
  );
}

export default Book;
