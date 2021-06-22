import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div>
        <li key={this.props.key}>
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
                  value={this.props.book.shelf ? this.props.book.shelf : "none"}
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
              {this.props.authors && this.props.authors.join(", ")}{" "}
              {/* checks if authors property exists before printing it to page */}
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default Book;
