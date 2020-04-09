import React, { Component } from "react";
import config from "../config.json";
import http from "../services/httpService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    // call database: axios.get(URL)
    const { data: books } = await http.get(config.apiEndpoint);
    this.setState({ books });
  }

  onCheckout = async (book) => {
    if (book.available > 0) {
      book.available -= 1;

      // Update database
      // send book.id + book
      await http.put(config.apiEndpoint + "/" + book._id, book);
      toast.success(book.title + " has been checked out");

      const books = [...this.state.books];
      const index = books.indexOf(book);
      books[index] = { ...book };

      this.setState({ books });
    } else toast.error("Out Of Stock");
  };

  onReturnBook = async (book) => {
    if (book.available < book.copies) {
      book.available += 1;

      // Update database
      // send book.id + book
      await http.put(config.apiEndpoint + "/" + book._id, book);
      toast(book.title + " has been returned");

      const books = [...this.state.books];
      const index = books.indexOf(book);
      books[index] = { ...books[index] };
      this.setState({ books });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Year Of Publication</th>
              <th>ISBN</th>
              <th>Available</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <tr key={book._id}>
                <td>
                  <Link to={`/Library/${book._id}`}>{book.title}</Link>
                </td>
                <td>{book.author}</td>
                <td>{book.publication_year}</td>
                <td>{book.isbn}</td>
                <td>
                  {book.available}/{book.copies}
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => this.onCheckout(book)}
                  >
                    Check-out
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => this.onReturnBook(book)}
                  >
                    Return
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Books;
