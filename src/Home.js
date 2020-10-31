import React from 'react';
import BookShelf from './BookShelf';

function Home(props) {
  function isSameCategory(bookCategory, type) {
    return bookCategory.toLowerCase() === type.split(' ').join('').toLowerCase();
  }

  return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
           {props.categories.filter(category => category.toBeShown)
                            .map((category, index) =>
              <BookShelf key={index}
                         type={category.displayText}
                         categories={props.categories}
                         changeShelf={props.onAddBook}
                         list={props.list.filter(book => isSameCategory(book.shelf, category.type))}>
              </BookShelf>
             )}
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => props.onSearch()}>Add a book</button>
        </div>
      </div>
    );
}

export default Home;
