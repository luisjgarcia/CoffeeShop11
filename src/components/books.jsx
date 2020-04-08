import React, { Component } from "react";
import { getBooks } from "../services/booksService";

class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const { data: books } = await getBooks();
    this.setState({ books });
  }

  onDelete = (book) => {
    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index] = { ...books[index] };
    if(books[index].available > 0){
      books[index].available -= 1;
    }
    this.setState({ books });
  };

  onReturn = (book) => {
    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index] = { ...books[index] };
    if(books[index].available < book.copies){
      books[index].available += 1;
    }
    this.setState({ books });
  };

  showReturnButton = (book) => {
    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index] = { ...books[index] };
    if(books[index].available === book.copies){
      document.getElementById("return-button" + index.toString).disabled = true;
    }
    else{
      document.getElementById("return-button").disabled = false;
    }
    return "Return";
  }

  render() {
    return (
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Book Title</th>
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
              <td>
                {" "}
                {book.available}/{book.copies}
              </td>
                <td>
                  {" "}
                  <button
                    id="return-button"
                    className="btn btn-success btn-sm"
                    onClick={() => this.onReturn(book)}
                  >
                    Return
                  </button>
                </td>
              <td>
                {" "}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.onDelete(book)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Books;
