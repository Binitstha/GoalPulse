export type league = {
  leagueId: string;
  seasonId: string;
  standing: standing[];
};

export type standing = {
  position: number;
  teamId: string;
  teamName: string;
  overall: overall[];
  total: number;
  status: string;
  result: string;
  points: number;
};
export type overall = {
  gameplayed: number;
  won: number;
  draw: number;
  lost: number;
  goalDiff: number;
  goalScored: number;
  goalAgaints: number;
  points: number;
};

export type match = {
  id: string;
  status: string;
  time: Time[];
  statusPeriod: string;
  leg: string | null;
  seasonName: string;
  stageName: string | null;
  team: Team[];
  scores: Scores[];
  league: League[];
};

export type Scores = {
  homeScore: string;
  awayScore: string;
};

export type League = {
  name: string;
  type: string;
  countryName: string | null;
};
export type Team = {
  homeTeam: TeamData[];
  AwayTeam: TeamData[];
};

export type TeamData = {
  id: string;
  TeamName: string;
  shortName: string;
  img: string;
  kitColor: string;
};

export type Time = {
  dateTime: string;
  date: string;
  time: string;
  minute: number;
  timezone: string;
};
