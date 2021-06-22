import React, { Component } from "react";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    const { changeShelf, shelves, booksOnShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <Bookshelf
                key={shelf.id}
                shelf={shelf.name}
                booksOnShelf={booksOnShelf.filter((book) => {
                  return book.shelf === shelf.id;
                })}
                onChangeShelf={changeShelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link className="search" to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}
export default MainPage;
