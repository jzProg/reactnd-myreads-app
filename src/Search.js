import React, { Component } from 'react';
import BookList from './BookList';

class Search extends Component {

  updateInput = (e) => {
    e.preventDefault();
    const input = e.target.value;
    input && this.props.onSearch(input);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.props.onClose()}>Close</button>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.updateInput}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
           <BookList list={this.props.list} categories= {this.props.categories} onChange={this.props.onAddBook}/>
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
