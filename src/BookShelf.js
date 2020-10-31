import React, { Component } from 'react';
import BookList from './BookList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

class BookShelf extends Component {
  
  state = {
    toggle: true
  }

  updateToggle = () => {
    this.setState((state) => ({
      toggle: !state.toggle
    }));
  }

  render() {
    const { list, categories, changeShelf, type } = this.props;

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title" onClick={this.updateToggle}>
           <FontAwesomeIcon icon={faBookOpen}/> <i>{type}</i>
          </h2>
          {this.state.toggle && (
            <div className="bookshelf-books">
             <BookList list={list} categories={categories} onChange={changeShelf}/>
            </div>
          )}
        </div>
    );
  }
}

export default BookShelf;
