import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Home from './Home';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    listOfUserBooks: [],
    listOfSearchedBooks: [],
    showSearchPage: false,
    bookCategories: [
      { type: 'move', displayText: 'Move to...', toBeSelected: false, toBeShown: false },
      { type: 'currentlyReading', displayText: 'Currently Reading', toBeSelected: true, toBeShown: true },
      { type: 'wantToRead', displayText: 'Want to Read', toBeSelected: true, toBeShown: true },
      { type: 'read', displayText: 'Read', toBeSelected: true, toBeShown: true },
      { type: 'none', displayText: 'None', toBeSelected: true, toBeShown: false },
    ]
  }

  componentDidMount() {
    this.fetchUserBooks();
  }

  storeBook = (bookObj) => {
    BooksAPI.update(bookObj.book, bookObj.type).then(() => {
      this.fetchUserBooks();
    });
  }

  search = (searchTerm) => {
    console.log('searching...')
  }

  fetchUserBooks = () => {
    return BooksAPI.getAll().then((res) => {
      this.setState({ listOfUserBooks: res });
    });
  }

  toSearch = () => {
    this.setState({showSearchPage: true});
  }

  toHome = () => {
    this.setState({showSearchPage: false});
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
         <Search list={this.state.listOfSearchedBooks}
                 categories={this.state.bookCategories}
                 onClose={this.toHome}
                 onSearch={this.search}
                 onAddBook={this.storeBook}/>
        ) : (
         <Home list={this.state.listOfUserBooks}
               categories={this.state.bookCategories}
               onSearch={this.toSearch}
               onAddBook={this.storeBook}/>
        )}
      </div>
    )
  }
}

export default BooksApp
