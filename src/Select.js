import React from 'react';

function Select(props) {
 const { book, options } = props;

 function sendBook(event) {
   event.preventDefault();
   return props.onChange({ book: book, type: event.target.value});
 }

 return (
   <select value={book.shelf} onChange={event => sendBook(event)}>
     {options.map(option =>
       <option key={option.type} value={option.type} disabled={!option.toBeSelected}>
         {option.displayText}
       </option>)}
   </select>
  );
}

export default Select;
