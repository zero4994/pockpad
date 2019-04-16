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
  }
};

module.exports = { resolvers };
