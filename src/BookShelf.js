import React from 'react';
import BookList from './BookList';

function BookShelf(props) {
  return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.type}</h2>
        <div className="bookshelf-books">
         <BookList list={props.list}/>
        </div>
      </div>
  );
}

export default BookShelf;
