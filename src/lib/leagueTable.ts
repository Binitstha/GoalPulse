import { leagueStandings, Table } from "@/types/leagueStanding";

const api_key = process.env.FOOTBALL_ORG_KEY;

export const leagueStandingData = async (league:string): Promise<Table[]> => {
  const response = await fetch(
    `https://api.football-data.org/v4/competitions/${league}/standings`,
    { headers: { "X-Auth-Token": api_key ?? "" } }
  );

  if (!response.ok) {
    throw new Error(`HTTP response error ${response.status}`);
  }

  const data: leagueStandings = await response.json();
  return data.standings[0].table;
};
