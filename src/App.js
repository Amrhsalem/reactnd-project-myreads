import React from "react";

import "./App.css";
import { Route } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import Search from "./search";
import MainPage from "./MainPage";

class BooksApp extends React.Component {
  // Added constructor method to initiate state
  constructor(props) {
    super(props);
    this.state = {
      booksOnShelf: [],
      shownBooks: [],
      error: "",
      // removed showSearchPages state as it is no longer needed
    };
  }

  // componentDidMount method to retrieve books data from BooksAPI and set the initial state
  componentDidMount() {
    BooksAPI.getAll().then((booksOnShelf) => {
      this.setState({ booksOnShelf });
    });
  }

  //The following method is used to change the shelf in the backend (BooksAPI) and then update the state with the new value.
  //  It is passed as a prop down to the smallest component (Book)
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      BooksAPI.getAll().then((booksOnShelf) => {
        this.setState({ booksOnShelf });
      });
    });
  };
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
    // setting identifiers for the shelves
    const shelves = [
      { name: "Currently Reading", id: "currentlyReading" },
      { name: "Want to Read", id: "wantToRead" },
      { name: "Read", id: "read" },
    ];
    return (
      // the render function returns two routes home ("/") and search ("/search")
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              changeShelf={this.changeShelf}
              onSearch={this.onSearch}
              shownBooks={this.state.shownBooks}
              error={this.state.error}
              booksOnShelf={this.state.booksOnShelf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              shelves={shelves}
              booksOnShelf={this.state.booksOnShelf}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
