import { sports_results } from "@/types/matchResult";
import { getJson } from "serpapi";

const API_KEY = process.env.SERPAPI_KEY;

const matchData = async (
  query: string
): Promise<sports_results> => {
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
            resolve(data.sports_results as sports_results);
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
