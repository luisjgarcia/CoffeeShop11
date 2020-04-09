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
    const availableColor = (
      <span className="text-success">{book.available}</span>
    )
    const notAvailableColor = (
      <span className="text-danger">{book.available}</span>
    )
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="bg-dark text-light container-fluid p-3" id="library-display">
          <div className="row">
            <div className="col">
              <h3>Title: {book.title}</h3>
              <h3>Author: {book.author}</h3>
              <h4>ISBN: {book.isbn}</h4>
              <h4>Publication Year: {book.publication_year}</h4>
              <h4>Publisher: {book.publisher}</h4>
              <h4>
                Available: {book.available === 0 ? notAvailableColor : availableColor} / {book.copies}{" "}
              </h4>
            </div>
            <div className="col">
              <img src={book.image_url_l} alt="book cover" />
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <button
                  className="btn btn-success m-2 btn-block"
                  onClick={() => this.onCheckout(book)}>Check-out
                </button>
              </div>
              <div className="col-sm-6 col-md-3">
                <button
                  className="btn btn-primary m-2 btn-block"
                  onClick={() => this.onReturnBook(book)}>Return
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <Link to="/Library" className="btn btn-outline-light m-2 btn-block">
                  Back to Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Book);
