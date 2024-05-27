import { statData } from "@/types/stat";

const statsData = async (): Promise<statData> => {
  const api_key = process.env.FOOTBALL_ORG_KEY;
  const response = await fetch(
    "http://api.football-data.org/v4/competitions/PD/scorers",
    { headers: { "X-Auth-Token": api_key ?? "" } }
  );

  if (!response.ok) {
    throw new Error(`HTTP response error ${response.status}`);
  }
  const data = await response.json();
  return data.scorers;
};

export default statsData;
