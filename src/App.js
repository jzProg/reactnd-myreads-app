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

  componentDidMount() {
    this.fetchUserBooks();
  }

  storeBook = (book) => {

  }

  search = (searchTerm) => {

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
         <Search list={this.state.listOfSearchedBooks} onClose={this.toHome}/>
        ) : (
         <Home list={this.state.listOfUserBooks} onSearch={this.toSearch}/>
        )}
      </div>
    )
  }
}

export default BooksApp
