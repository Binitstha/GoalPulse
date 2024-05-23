// src/lib/index.ts
import { leagueStandings } from "@/types/leagueStanding";



export const matches = async () => {
  const response = await fetch(
    "https://api.football-data.org/v4/competitions/PL/standings",
    { headers: { "X-Auth-Token": "f7df7abbc1c84acdab28c5aafd614c1b" } }
  );

  if (!response.ok) {
    throw new Error(`HTTP response error ${response.status}`);
  }
  const data = await response.json()
  return data
};
