const { getJson } = require("serpapi");

getJson({
  q: "manchester united",
  location: "austin, texas, united states",
  api_key: "a0e0ac5eb42f47f71b8ea9db4335ea650ec1ef5375019eb0e8a53d078a1a8dfe"
}, (json) => {
  console.log(json["sports_results"]);
});
