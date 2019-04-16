import React, { Component } from "react";
import { requestToken } from "../services/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    };
  }

  async login() {
    try {
      console.log("Login in...");
      const { data } = await requestToken();
      console.log("data ===>", data);
      const code = data.data.Login;
      this.setState({ code });

      window.open(
        `https://getpocket.com/auth/authorize?request_token=${code}&redirect_uri=http://www.google.com`,
        "_blank"
      );
    } catch (error) {
      console.log(error);
    }
  }

  authorize = async () => {
    console.log("Authorizing", this.state);
  };

  render() {
    return (
      <div>
        <button onClick={this.login.bind(this)}>Login</button>
        <div>
          <button onClick={this.authorize} style={{ "margin-top": "20px" }}>
            Authorize
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
