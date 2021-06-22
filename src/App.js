import React from "react";

import "./App.css";
import { Route } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import Search from "./search";
import MainPage from "./MainPage";

class BooksApp extends React.Component {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */

  // };
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showSearchPage: false,
    };
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  //the following method is used to change the shelf in the backend and then update the state with the new value.
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books });
      });
    });
  };

  render() {
    // setting identifiers for the shelves
    const shelves = [
      { name: "Currently Reading", id: "currentlyReading" },
      { name: "Want to Read", id: "wantToRead" },
      { name: "Read", id: "read" },
    ];
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => <Search changeShelf={this.changeShelf} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              shelves={shelves}
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
