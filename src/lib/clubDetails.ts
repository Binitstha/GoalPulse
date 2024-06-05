import { getJson } from "serpapi";
import { knowledge_graph, top_stories } from "@/types/clubDetail";
import { sports_results } from "@/types/matchResult";
import { unstable_noStore as no_store } from "next/cache";

const API_KEY = process.env.SERPAPI_KEY;

interface CombineResult {
  sports_results: sports_results;
  knowledge_graph: knowledge_graph;
  top_stories: top_stories[];
}

const clubData = async (query: string): Promise<CombineResult> => {
  no_store();
  if (!API_KEY) {
    throw new Error("API key is missing");
  } else {
    return new Promise((resolve, reject) => {
      getJson(
        {
          q: query,
          api_key: API_KEY,
        },
        (data: any) => {
          if (
            data &&
            data.sports_results &&
            data.knowledge_graph &&
            data.top_stories
          ) {
            const combineResult: CombineResult = {
              sports_results: data.sports_results,
              knowledge_graph: data.knowledge_graph,
              top_stories: data.top_stories,
            };
            resolve(combineResult);
          } else {
            reject(new Error("Incomplete data found"));
          }
        }
      ).catch((error: any) => {
        reject(new Error(`Failed to fetch data: ${error.message}`));
      });
    });
  }
};

export default clubData;
