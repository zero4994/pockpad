import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  async login() {
    console.log("Login in...");
    const { data } = await axios({
      method: "post",
      url: `https://getpocket.com/v3/oauth/request?consumer_key=${
        process.env.REACT_APP_CONSUMER_KEY
      }&redirect_uri=test`,
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      withCredentials: true,
      credentials: "http://localhost:3000"
    });
    console.log("data ===>", data);
    this.authorize(data);
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
