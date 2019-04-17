import React, { Component } from "react";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

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
    // let layout;
    // if (this.state.access_token && this.state.username) {
    //   layout = (
    //     <div>
    //       <h1>Congratulations you are logged in</h1>
    //     </div>
    //   );
    // } else {
    //   layout = <Login onUserAuthorized={this.handleAuthorizedUser} />;
    // }

    // return <div className="App">{layout}</div>;
    return (
      <div className="App">
        <Router>
          <div>
            {/* elements go here */}
            <Switch>
              <Route exact path="/" component={Login} />
              <Route
                path="/test"
                component={() => (
                  <div>Congratulations you have routed successfully</div>
                )}
              />
              <Route exact path="*" component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
