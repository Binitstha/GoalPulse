import { sports_results } from "@/types/matchResult";
import { unstable_noStore } from "next/cache";
import { getJson } from "serpapi";

const API_KEY = process.env.SERPAPI_KEY;

const matchData = async (
  query: string,
): Promise<sports_results> => {
  unstable_noStore();
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  return new Promise((resolve) => {
    getJson(
      {
        q: query,
        api_key: API_KEY,
      },
      (data: any) => {
        if (data && data.sports_results) {
          resolve(data.sports_results as sports_results);
        } else {
          resolve({
            title: "",
            league: "",
            thumbnail: "",
            games: []
          } as sports_results);
        }
      }
    ).catch(() => {
      resolve({
        title: "",
        league: "",
        thumbnail: "",
        games: []
      } as sports_results);
    });
  });
};

export default matchData;
