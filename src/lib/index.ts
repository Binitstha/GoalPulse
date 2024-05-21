import { MatchResponse } from "@/types/type";
const { getJson } = require("serpapi");

export function matchData(query: string): Promise<MatchResponse | null> {
  return new Promise((resolve, reject) => {
    getJson(
      {
        q: query,
        location: "austin, texas, united states",
        api_key:
          "a0e0ac5eb42f47f71b8ea9db4335ea650ec1ef5375019eb0e8a53d078a1a8dfe",
      },
      (response: any) => {
        if (response && response.sports_results) {
          resolve(response.sports_results);
        } else {
          console.error("Invalid response or sports_results is undefined", response);
          reject(new Error("Invalid response or sports_results is undefined"));
        }
      }
    );
  });
}

// Usage example
matchData("premier league match")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error fetching match data:", error);
  });
