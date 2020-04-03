import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Library from "./components/library";
import Home from "./components/home";
import Admin from "./components/admin";

class App extends Component {
  render() {
    return (
      <div>
        <h1 align="center">Coffee Shop Community Library (CSCL)</h1>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/Library" component={Library} />
            <Route path="/Admin" component={Admin} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
