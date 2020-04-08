import React, { Component } from "react";
import config from "../config.json";
import http from "../services/httpService";

class About extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    // call database: axios.get(URL)
    const { data: books } = await http.get(config.apiEndpoint);
    this.setState({ books });
  }

  render() {
    return <h1>About</h1>;
  }
}

export default About;
