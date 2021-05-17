import { useState } from 'react';
import axios from 'axios';
function BookApi() {
    const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'https://www.anapioficeandfire.com/api/books?pageSize=300'
    );

    setBooks(response.data);
  };

  return(
      <div>
    <h1>Game of Thrones Books</h1>
    <h2>Fetch a list from an API and display it</h2>

    {/* Fetch data from API */}
    <div>
      <button className="fetch-button" onClick={fetchData}>
        Display Data
      </button>
      <br />
    </div>

    {/* Display data from API */}
    <div className="books">
      {books &&
        books.map((book, index) => {
          const cleanedDate = new Date(book.released).toDateString();
          const authors = book.authors.join(', ');

          return (
            <div className="book" key={index}>
              <h3>Book {index + 1}</h3>
              <h2>{book.name}</h2>

              <div className="details">
                <p>👨Author: {authors}</p>
                <p>📖Book: {book.numberOfPages} pages</p>
                <p>🏘️Country: {book.country}</p>
                <p>⏰Published Date: {cleanedDate}</p>
              </div>
            </div>
          );
        })}
        
    </div>
    </div>
  )}
export default BookApi;