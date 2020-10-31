import React from 'react';
import BookShelf from './BookShelf';

function Home(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
      <BookShelf list={props.list}/>
      </div>
      <div className="open-search">
        <button onClick={() => props.onSearch()}>Add a book</button>
      </div>
    </div>
  );
}

export default Home;
