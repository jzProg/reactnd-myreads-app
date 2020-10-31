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

  storeBook = (bookObj, input) => {
    BooksAPI.update(bookObj.book, bookObj.type).then(() => {
      this.fetchUserBooks().then(() => {
        this.setState((state, props) => ({
           listOfSearchedBooks: this.setShelfStateBasedOnUserBooks(state.listOfSearchedBooks) // update searched books "shelf" property
        }));
      });
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

  toSearch = () => {
    this.setState({ showSearchPage: true });
  }

  toHome = () => {
    this.setState({ showSearchPage: false, listOfSearchedBooks: [] });
  }

  getFilteredBooks = (books) => {
    return Array.isArray(books) ? books.filter(book => book.imageLinks && book.authors) : [];
  }

  setShelfStateBasedOnUserBooks = (books) => {
    const updatedBooks = books.map(book => {
      const foundBookInUserBooks = this.state.listOfUserBooks.find(b => b.id === book.id);
      return foundBookInUserBooks || book; // return book from users collection in order to have the "shelf" property for search page
    });
    return updatedBooks;
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
