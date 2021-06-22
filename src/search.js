import React, { Component } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class Search extends Component {
  // initiate state by calling constructor and setting initial state
  constructor(props) {
    super(props);
    this.state = { shownBooks: [], error: "" };
  }
  // Creating a method to handle search events by calling BooksAPI and setting the returned result as the shownBooks state,
  // also if the API returns an error, it is handled accordingly.
  // query.length is checked first to reset the state if the search bar is empty
  onSearch = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((result) => {
        if (result.error) {
          this.setState(() => ({
            shownBooks: [],
            error: result.error,
          }));
        } else {
          this.setState(() => ({ shownBooks: result }));
        }
      });
    } else {
      this.setState({ shownBooks: [] });
    }
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => {
                this.onSearch(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* the following two lines contain a conditional to check if the shownBooks state contains any elements \
            and if so to render them as needed */}

            {this.state.shownBooks.length > 0 &&
              this.state.shownBooks.map((book) => (
                <Book
                  key={book.id}
                  backgroundImage={
                    book.imageLinks && `url(${book.imageLinks.thumbnail})`
                  } //checks if imageLinks property exists before passing prop to Book component
                  authors={book.authors} //authors is passed as an array and is joined inside the element
                  title={book.title}
                  changeShelf={this.props.changeShelf}
                  book={book}
                />
              ))}
          </ol>
          {/* the following line checks if the api has returned an error and then renders a message accordingly */}
          {this.state.error && (
            <h3 key="error">
              Search term not found. Please change the search term.
            </h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
