import React, { Component } from "react";
// import Book from "/Users/jose/Documents/Full Stack Web Developer/CoffeeShop11/src/components/book";

class Book {

  constructor(title, author,year,isbn,copies,available){
      this.title = title;
      this.autor = author;
      this.year = year;
      this.isbn = isbn;
      this.copies = copies;
      this.available = available;
  }
}

class Admin extends Component {

  state = {
    //books: [],
  };

  onAdd = () => {
    // alert(document.getElementById("book-title").value);
    var book = new Book(document.getElementById("book-title").value, document.getElementById("book-author").value, document.getElementById("year-of-publication").value, document.getElementById("book-isbn").value, document.getElementById("book-copies").value, document.getElementById("book-copies").value);
    // addToDataBase(book);
    alert(book.copies);
  }

  onCancel = () => {
    document.getElementById("new-book-form").reset();
    // document.getElementById("book-title").value = "klk";
  }

  state = {};
  render() {
    return(
    <div className="admin-page" id="library-display">
      <h1>Admin</h1>
      <div className="new-book-form">
        <h3>Add a book:</h3>
        <form id="new-book-form">
          <div className="form-group row">
            <label for="book-title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-10">
              <input type="text" className="form-control col-6" id="book-title"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="book-author" className="col-sm-2 col-form-label">Author</label>
            <div className="col-sm-10">
              <input type="text" className="form-control col-6" id="book-author"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="year-of-publication" className="col-sm-2 col-form-label">Year of Publication</label>
            <div className="col-sm-10">
              <input type="number" className="form-control col-2 col-lg-1 col-md-2 col-sm-2" id="year-of-publication"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="book-isbn" className="col-sm-2 col-form-label">ISBN</label>
            <div className="col-sm-10">
              <input type="text" className="form-control col-6" id="book-isbn"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="book-copies" className="col-sm-2 col-form-label"># of copies</label>
            <div className="col-sm-10">
              <input type="number" className="form-control col-2 col-lg-1 col-md-2 col-sm-2" id="book-copies"></input>
            </div>
          </div>
        </form>
        <button id="add-to-inventory-button" className="btn btn-success btn-md" onClick={() => this.onAdd()}>Add to inventory</button>
        <button id="cancel-button" className="btn btn-danger btn-md" onClick={() => this.onCancel()}>Cancel</button>
      </div>
    </div>

    );
  }
}

export default Admin;
