import { SportsResult,MatchResponse } from "@/types/match";

import { getJson } from "serpapi";

const api_key = process.env.SERPAPI_KEY;
getJson({
  q: "manchester united",
  location: "austin, texas, united states",
  api_key: api_key
}, (json:MatchResponse) => {
  console.log(json.sports_results);
});
"secret_api_key"