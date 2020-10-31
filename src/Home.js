import React, { Component } from 'react';
import BookShelf from './BookShelf';

class Home extends Component {

 toSearch = () => {
   this.props.history.push('/search');
 }

 render() {
   return (
       <div className="list-books">
         <div className="list-books-title">
           <h1>MyReads</h1>
         </div>
         <div className="list-books-content">
           <div>
            {this.props.categories.filter(category => category.toBeShown)
                             .map((category, index) =>
               <BookShelf key={index}
                          type={category.displayText}
                          categories={this.props.categories}
                          changeShelf={this.props.onAddBook}
                          list={this.props.list.filter(book => book.shelf === category.type)}>
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
