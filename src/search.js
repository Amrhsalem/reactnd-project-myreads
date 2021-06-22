import React, { Component } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { shownBooks: [], error: "" };
  }
  onSearch = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((result) => {
        // if (result == "error") {
        //   this.setState(() => ({ shownBooks: [], error: result + "1" }));
        // } else
        if (result.error) {
          this.setState(() => ({
            shownBooks: [],
            error: result.error.concat("2"),
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
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchQuery}
              onChange={(event) => {
                this.onSearch(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.shownBooks.length > 0 &&
              this.state.shownBooks.map((book) => (
                <Book
                  key={book.id}
                  backgroundImage={
                    book.imageLinks && `url(${book.imageLinks.thumbnail})`
                  } //checks if imageLinks property exists before passing prop to Book component
                  authors={book.authors}
                  title={book.title}
                  changeShelf={this.props.changeShelf}
                  book={book}
                />
              ))}
          </ol>
          <div key="error">{this.state.error}</div>
        </div>
      </div>
    );
  }
}
export default Search;
