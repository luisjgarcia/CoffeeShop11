import React, { Component } from "react";
import config from "../config.json";
import http from "../services/httpService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  onNewBook = (book) => {
    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index] = { ...books[index] };
    books[index].title = "update";

    //const responce = await axios.put(
    //  "https://aqueous-island-97232.herokuapp.com/api/books/" + book._id,
    //  book[index]
    // );

    //console.log(responce);

    this.setState({ books });
  };

  onpost = async () => {
    // Create object
    const obj = { title: "My Title", body: "My Body" };

    //  Pessimistic Update database
    // send book.id + book
    // returns a new book item
    const { data: book } = await http.post(config.apiEndpoint, obj);

    // update book list with new book
    const books = [book, ...this.state.books];
    toast.success("New Item Added");
    // update state
    this.setState({ books });
  };

  onput = async (book) => {
    // update item that came in
    book.title = "update";

    // update local books list
    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index] = { ...book };

    // Optimistic Update database
    // send book.id + book
    await http.get(config.apiEndpoint + "/" + book.id, book);

    toast("Item updated");
    // update state
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
      <React.Fragment>
        <ToastContainer />
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Year Of Publication</th>
              <th>ISBN</th>
              <th>Availible</th>
              <th></th>
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
