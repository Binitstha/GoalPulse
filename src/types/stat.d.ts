export type statData = {
  count: number;
  filters: Filters[];
  competition: Competition[];
  season: Season[];
  scorers: Scorers[];
};

export type Filters = { season: string; limit: number };

export type Scorers = {
  player: Player[];
  team: Team[];
  playedMatches: number;
  goals: number;
  assists: number;
  penalties: number;
};
export type Competition = {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
};

export type Season = {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: null | string;
};

export type player = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  section: string;
  position: null | string;
  shirtNumber: number;
  lastUpdated: string;
};
export type team = {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
};
