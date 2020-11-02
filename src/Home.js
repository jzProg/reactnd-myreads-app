import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {

 toSearch = () => {
   this.props.history.push('/search');
 }

 render() {
   const { categories, onAddBook, list } = this.props;

   return (
       <div className="list-books">
         <div className="list-books-title">
           <h1><FontAwesomeIcon icon={faBook}/><b> MyReads</b></h1>
         </div>
         <div className="list-books-content">
           <div>
            {categories.filter(category => category.toBeShown)
                       .map((category, index) =>
              <BookShelf key={index}
                         type={category.displayText}
                         categories={categories}
                         changeShelf={onAddBook}
                         list={list.filter(book => book.shelf === category.type)}>
               </BookShelf>
              )}
           </div>
         </div>
         <div className="open-search">
         <button onClick={this.toSearch}>Add a book</button>
         </div>
       </div>
     );
 }
}

export default Home;
