import { getJson } from "serpapi";
import { knowledge_graph } from "@/types/clubDetail";
import { sports_results } from "@/types/matchResult";

const API_KEY = process.env.SERPAPI_KEY;

interface CombineResult extends sports_results, knowledge_graph {}

const clubData = async (
  query: string
): Promise<knowledge_graph & sports_results> => {
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
          const combineResult: CombineResult = {
            ...data.sports_results,
            ...data.knowledge_graph,
          };
          resolve(combineResult);
        } else {
          reject(new Error("No sports results found"));
        }
      }
    ).catch((error: any) => {
      reject(new Error(`Failed to fetch data: ${error.message}`));
    });
  });
};

export default clubData;
