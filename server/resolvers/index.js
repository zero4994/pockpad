const axios = require("axios");

const resolvers = {
  Login: async () => {
    try {
      console.log("logging in");
      const { data } = await axios({
        method: "post",
        url: `https://getpocket.com/v3/oauth/request?consumer_key=${
          process.env.CONSUMER_KEY
        }&redirect_uri=test`
      });
      console.log("this is the data===>", data);
      return data.substring(5, data.length);
    } catch (error) {
      console.log(error);
      return `${error.response.status} ${error.response.statusText}`;
    }
  },
  Authorize: async params => {
    try {
      console.log("Authorizing...");
      const { data } = await axios({
        method: "POST",
        url: `https://getpocket.com/v3/oauth/authorize?consumer_key=${
          process.env.CONSUMER_KEY
        }&code=${params.code}`
      });
      console.log("This is the response ==>", data);

      const userData = data.split("&").map(element => {
        return element.toString().split("=")[1];
      });

      return {
        access_token: userData[0],
        username: userData[1]
      };
    } catch (error) {
      console.log(error);
      return `${error.response.status} ${error.response.statusText}`;
    }
  }
};

module.exports = { resolvers };
