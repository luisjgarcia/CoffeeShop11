import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Library from "./components/library";
import Home from "./components/home";
import Admin from "./components/admin";
import About from "./components/about";
// import axios from "axios";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/Library" component={Library} />
            <Route path="/Admin" component={Admin} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
