import React, { Component } from "react";
import logo from "./logo.svg";
import Login from "./components/Login";
import "./App.css";

require("dotenv").config();

class App extends Component {
  constructor() {
    super();

    this.state = {
      access_token: "",
      username: ""
    };
  }

  handleAuthorizedUser = (access_token, username) => {
    console.log(access_token, username);
    this.setState({
      access_token,
      username
    });
    console.log("is state changed?", this.state);
  };

  render() {
    let layout;
    if (this.state.access_token && this.state.username) {
      layout = (
        <div>
          <h1>Congratulations you are logged in</h1>
        </div>
      );
    } else {
      layout = <Login onUserAuthorized={this.handleAuthorizedUser} />;
    }

    return <div className="App">{layout}</div>;
  }
}

export default App;
