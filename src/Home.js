import React, { Component } from 'react';
import BookShelf from './BookShelf';

class Home extends Component {
  state = {
    bookCategories: [
      'Currently Reading',
      'Want to Read',
      'Read'
    ]
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
           {this.state.bookCategories.map((type, index) => 
              <BookShelf key={index}
                         type={type}
                         list={this.props.list.filter(book => book.shelf.toLowerCase() === type.split(' ').join('').toLowerCase())}>
             </BookShelf>
             )}
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.props.onSearch()}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default Home;
