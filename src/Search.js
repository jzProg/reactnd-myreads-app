import React, { Component } from 'react';
import BookList from './BookList';

class Search extends Component {

  state = {
    currentInput: ''
  }

  updateInput = (e) => {
    e.preventDefault();
    const input = e.target.value;
    this.setState({ currentInput: input });
    this.props.onSearch(input);
  }

  close = () => {
    const { onClose, history } = this.props;
    onClose();
    history.push('/');
  }

  render() {
    const { list, categories, onAddBook } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.close}>Close</button>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.updateInput}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
           <BookList list={list} categories= {categories} onChange={(received) => onAddBook(received, this.state.currentInput)}/>
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
