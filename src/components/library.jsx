import React, { Component } from "react";
import Books from "./books";

class Library extends Component {
  state = {};
  render() {
    return (
      <div id="library-display">
        <Books />
      </div>
    );
  }
}

export default Library;
