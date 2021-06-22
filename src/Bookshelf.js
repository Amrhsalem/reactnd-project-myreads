import React, { Component } from "react";
import Book from "./Book";

// This Component is used to render the three main shelves of the MainPage
class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksOnShelf.map((book) => (
              <Book
                key={book.id}
                backgroundImage={`url(${book.imageLinks.thumbnail})`}
                authors={book.authors}
                title={book.title}
                changeShelf={this.props.onChangeShelf}
                shelf={this.props.shelf}
                book={book}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Bookshelf;
