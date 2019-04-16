import axios from "axios";

export const requestToken = () => {
  return axios({
    method: "POST",
    url: "/graphql",
    data: JSON.stringify({
      query: `
                {
                  Login
                }
              `
    }),
    headers: { Accept: "application/json", "Content-Type": "application/json" }
  });
};