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
  }

  storeBook = (book) => {

  }

  search = (searchTerm) => {

  }

  fetchUserBooks = () => {

  }

  toSearch = () => {
    this.setState({showSearchPage: true});
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
         <Search list={this.state.listOfSearchedBooks}/>
        ) : (
         <Home list={this.state.listOfUserBooks} onSearch={this.toSearch}/>
        )}
      </div>
    )
  }
}

export default BooksApp
