import React, { Component } from "react";
import { getBooks } from "../services/fakeBooksService";

class Books extends Component {
  state = {
    books: getBooks(),
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year of Publication</th>
            <th>ISBN</th>
            <th>Available Copies</th>
          </tr>
        </thead>
        <tbody>
          {this.state.books.map((book) => (
            <tr>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publication_year}</td>
              <td>{book.isbn}</td>
              <td>{book.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Books;
