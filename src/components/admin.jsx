import React, { Component } from "react";
import config from "../config.json";
import http from "../services/httpService";

class Admin extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    // call database: axios.get(URL)
    const { data: books } = await http.get(config.apiEndpoint);
    this.setState({ books });
  }

  render() {
    return <h1>Admin</h1>;
  }
}

export default Admin;
