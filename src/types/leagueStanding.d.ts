// types/leagueStanding.ts
export type leagueStandings = {
    filters: { season: string };
    area: Area;
    competition: Competition;
    season: seasonDetail;
    standings: standing[];
  };
  
  export type Area = {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  
  export type Competition = {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  
  export type seasonDetail = {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null | string;
  };
  
  export type standing = {
    stage: string;
    type: string;
    group: null | string;
    table: Table[];
  };
  
  export type Table = {
    position: number;
    team: Team;
    playedGames: number;
    form: null | string;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
  };
  
  export type Team = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  