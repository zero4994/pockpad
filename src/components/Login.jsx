import React, { Component } from "react";
import { requestToken } from "../services/index";

class Login extends Component {
  async login() {
    try {
      console.log("Login in...");
      const { data } = await requestToken();
      console.log("data ===>", data);
      //this.authorize(data);
    } catch (error) {
      console.log(error);
    }
  }

  async authorize(token) {
    // //https://getpocket.com/auth/authorize?request_token=YOUR_REQUEST_TOKEN&redirect_uri=YOUR_REDIRECT_URI
    // const { data } = await axios({
    //   method: "post",
    //   url: `https://getpocket.com/auth/authorize?request_token=${token}&redirect_uri=test`
    // });
    // console.log("data ===>", data);

    window.location = `https://getpocket.com/auth/authorize?request_token=${token}&redirect_uri=http://www.google.com`;
  }

  render() {
    return (
      <div>
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
    );
  }
}

export default Login;
