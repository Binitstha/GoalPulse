import { MatchResponse } from "@/types/matchResult";
import { upcomingMatchResponse } from "@/types/upcomingMatches";
import { getJson } from "serpapi";

const API_KEY = process.env.SERPAPI_KEY;

const matchData = async (
  query: string
): Promise<MatchResponse | upcomingMatchResponse> => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  return new Promise((resolve, reject) => {
    getJson(
      {
        q: query,
        api_key: API_KEY,
      },
      (data: any) => {
        if (data && data.sports_results) {
          if (query.includes("results"))
            resolve(data.sports_results as MatchResponse);
          else if (query.includes("upcoming matches"))
            resolve(data.sports_results as upcomingMatchResponse);
        } else {
          reject(new Error("No sports results found"));
        }
      }
    ).catch((error: any) => {
      reject(new Error(`Failed to fetch data: ${error.message}`));
    });
  });
};

export default matchData;
