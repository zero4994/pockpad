import React, { Component } from "react";
import logo from "./logo.svg";
import Login from "./components/Login";
import "./App.css";

require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
