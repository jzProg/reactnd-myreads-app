import React from 'react';

function Select(props) {
  
 const { book, options } = props;

 function sendBook(event) {
   event.preventDefault();
   return props.onChange({ book: book, type: event.target.value});
 }

 function isInShelf() {
   return book.shelf || 'none';
 }

 return (
   <select value={isInShelf()} onChange={event => sendBook(event)}>
     {options.map(option =>
       <option key={option.type} value={option.type} disabled={!option.toBeSelected}>
         {option.displayText}
       </option>)}
   </select>
  );
}

export default Select;
