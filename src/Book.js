import React, { Component } from "react";

// Book is the smallest building Component for the app and it is used to render every book elements in the UI in both app pages
class Book extends Component {
  render() {
    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: this.props.backgroundImage,
                }}
              />
              <div className="book-shelf-changer">
                <select
                  value={
                    this.props.booksOnShelf.filter(
                      (b) => b.id === this.props.book.id
                    ).length == 1 //comparing books on shelf with the current book, should return true if it is present.
                      ? this.props.booksOnShelf.filter(
                          (b) => b.id === this.props.book.id
                        )[0].shelf
                      : "none"
                  }
                  onChange={(event) => {
                    console.log("change");
                    this.props.changeShelf(this.props.book, event.target.value);
                  }}
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">
              {this.props.authors && this.props.authors.join(", ")}
              {/* checks if authors property exists before printing it to page */}
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default Book;
