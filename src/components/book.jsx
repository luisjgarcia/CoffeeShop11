import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import config from "../config.json";
import http from "../services/httpService";

class Book extends Component {
  state = {
    book: {
      _id: "",
      isbn: "",
      title: "",
      author: "",
      publication_year: "",
      publisher:"",
      image_url_s: "",
      image_url_m: "",
      image_url_l: "",
      copies: 0,
      available: 0
    },
  };

  async componentDidMount() {
    // call database: axios.get(URL)
    const { data: book } = await http.get(config.apiEndpoint);
    this.setState({ book });
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg-dark text-light container-fluid">
          <div className="row">
            <div className="col">
              <h1>Title: {this.state.book.title}</h1>
              <h2>Author: {this.state.book.author}</h2>
              <h3>ISBN: {this.state.book.isbn}</h3>
              <h3>Publication Year: {this.state.book.publication_year}</h3>
              <h3>Publisher: {this.state.book.publisher}</h3>
              <h3>Available: {this.state.book.available} /  {this.state.book.copies} </h3>
            </div>
            <div className="col">
              <img src={this.state.book.image_url_l} alt="book cover"/>
            </div>
          </div>
          <Link to="/Library" className="btn btn-secondary">Back to Library</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Book);
