import React, { Component } from "react";

class Admin extends Component {
  state = {};
  render() {
    return(
    <div class="admin-page" id="library-display">
      <h1>Admin</h1>
      <div class="new-book-form">
        <h3>Add a book:</h3>
        <form>
          <div class="form-group row">
            <label for="book-title" class="col-sm-2 col-form-label">Title</label>
            <div class="col-10">
              <input type="text" class="form-control col-6" id="book-title"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="book-author" class="col-sm-2 col-form-label">Author</label>
            <div class="col-sm-10">
              <input type="text" class="form-control col-6" id="book-author"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="year-of-publication" class="col-sm-2 col-form-label">Year of Publication</label>
            <div class="col-sm-10">
              <input type="text" class="form-control col-6" id="year-of-publication"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="book-isbn" class="col-sm-2 col-form-label">ISBN</label>
            <div class="col-sm-10">
              <input type="text" class="form-control col-6" id="book-isbn"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="book-copies" class="col-sm-2 col-form-label"># of copies</label>
            <div class="col-sm-10">
              <input type="text" class="form-control col-6" id="book-copies"></input>
            </div>
          </div>
        </form>
        <button id="add-to-inventory-button" className="btn btn-success btn-md">Add to inventory</button>
        <button id="cancel-button" className="btn btn-danger btn-md">Cancel</button>
      </div>
    </div>

    );
  }
}

export default Admin;
