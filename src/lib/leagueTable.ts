// src/lib/index.ts
import { leagueStandings } from "@/types/leagueStanding";

const api_key = process.env.FOOTBALL_ORG_KEY;

export const leagueStandingData = async (): Promise<leagueStandings> => {
  const response = await fetch(
    "https://api.football-data.org/v4/competitions/BL1/standings",
    { headers: { "X-Auth-Token": api_key ?? "" } }
  );

  if (!response.ok) {
    throw new Error(`HTTP response error ${response.status}`);
  }
  const data = await response.json();
  return data;
};
