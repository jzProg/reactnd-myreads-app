import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Home from './Home';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    listOfUserBooks: [],
    listOfSearchedBooks: [],
    bookCategories: [
      { type: 'move', displayText: 'Move to...', toBeSelected: false, toBeShown: false },
      { type: 'currentlyReading', displayText: 'Currently Reading', toBeSelected: true, toBeShown: true },
      { type: 'wantToRead', displayText: 'Want to Read', toBeSelected: true, toBeShown: true },
      { type: 'read', displayText: 'Read', toBeSelected: true, toBeShown: true },
      { type: 'none', displayText: 'None', toBeSelected: true, toBeShown: false }
    ]
  }

  componentDidMount() {
    this.fetchUserBooks();
  }

  storeBook = (bookObj, input) => {
    BooksAPI.update(bookObj.book, bookObj.type).then(() => {
      this.setState((state) => ({
         listOfUserBooks: this.setShelfStateOnLocalUserBook(state.listOfUserBooks, bookObj),
         listOfSearchedBooks: this.setShelfStateBasedOnUserBooks(state.listOfSearchedBooks) // update searched books "shelf" property
      }));
    });
  }

  search = (searchTerm) => {
    BooksAPI.search(searchTerm).then((res) => {
      let filteredSearchedBooks = this.getFilteredBooks(res);
      filteredSearchedBooks = this.setShelfStateBasedOnUserBooks(filteredSearchedBooks);
      this.setState({ listOfSearchedBooks:  filteredSearchedBooks });
    });
  }

  fetchUserBooks = () => {
    return BooksAPI.getAll().then((res) => {
      this.setState({ listOfUserBooks: this.getFilteredBooks(res) });
    });
  }

  onSearchClose = () => {
    this.setState({ listOfSearchedBooks: [] });
  }

  getFilteredBooks = (books) => {
    return Array.isArray(books) ? books.filter(book => book.imageLinks && book.authors) : [];
  }

  setShelfStateBasedOnUserBooks = (books) => {
    return books.map(book => {
      const foundBookInUserBooks = this.state.listOfUserBooks.find(b => b.id === book.id);
      return foundBookInUserBooks || book; // return book from users collection in order to have the "shelf" property for search page
    });
  }

  setShelfStateOnLocalUserBook = (books, bookObj) => {
    return books.map(book => {
      book.shelf = book.id === bookObj.book.id ? bookObj.type : book.shelf;
      return book;
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={({ history }) =>
            <Home list={this.state.listOfUserBooks}
                  categories={this.state.bookCategories}
                  history= {history}
                  onAddBook={this.storeBook}/>
          }/>
          <Route path="/search" render={({ history }) =>
            <Search list={this.state.listOfSearchedBooks}
                    categories={this.state.bookCategories}
                    onSearch={this.search}
                    history= {history}
                    onClose={this.onSearchClose}
                    onAddBook={this.storeBook}/>
          }/>
        </div>
      </Router>
    )
  }
}

export default BooksApp
