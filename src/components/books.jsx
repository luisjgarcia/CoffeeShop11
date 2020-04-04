import React, { Component } from "react";
import { getBooks } from "../services/fakeBooksService";

class Books extends Component {
  state = {
    books: getBooks(),
  };
  render() {
    return (
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year of Publication</th>
            <th>ISBN</th>
            <th>Available Copies</th>
            <th></th>
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
              <td>
                {" "}
                <button className="btn btn-danger btn-sm">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Books;
