import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../config.json";
import { ToastContainer, toast } from "react-toastify";
import http from "../services/httpService";

class Book extends Component {
  state = {
    book: [],
  };

  async componentDidMount() {
    // call database: axios.get(URL)
    const { data: book } = await http.get(
      config.apiEndpoint + "/" + this.props.match.params.id
    );
    this.setState({ book });
  }

  onCheckout = async (book) => {
    if (book.available > 0) {
      book.available -= 1;

      // Update database
      // send book.id + book
      await http.put(config.apiEndpoint + "/" + book._id, book);
      toast.success(book.title + " has been checked out");
      this.setState({ book });
    } else toast.error("Out Of Stock");
  };

  onReturnBook = async (book) => {
    if (book.available < book.copies) {
      book.available += 1;

      // Update database
      // send book.id + book
      await http.put(config.apiEndpoint + "/" + book._id, book);
      toast(book.title + " has been returned");
      this.setState({ book });
    }
  };

  render() {
    const book = this.state.book;
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="bg-dark text-light container-fluid">
          <div className="row">
            <div className="col">
              <h1>Title: {book.title}</h1>
              <h2>Author: {book.author}</h2>
              <h3>ISBN: {book.isbn}</h3>
              <h3>Publication Year: {book.publication_year}</h3>
              <h3>Publisher: {book.publisher}</h3>
              <h3>
                Available: {book.available} / {book.copies}{" "}
              </h3>
            </div>
            <div className="col">
              <img src={book.image_url_l} alt="book cover" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <Link to="/Library" className="btn btn-secondary">
                Back to Library
              </Link>
              <button
                className="btn btn-success"
                onClick={() => this.onCheckout(book)}>Check-out
              </button>
              <button
                className="btn btn-primary"
                onClick={() => this.onReturnBook(book)}>Return
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Book);
