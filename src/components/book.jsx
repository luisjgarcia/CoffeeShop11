import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import config from "../config.json";
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
    console.log(book);
    this.setState({ book });
  }

  render() {
    const book = this.state.book;
    return (
      <React.Fragment>
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
              <img src={this.state.book.image_url_l} alt="book cover" />
            </div>
          </div>
          <Link to="/Library" className="btn btn-secondary">
            Back to Library
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Book);
