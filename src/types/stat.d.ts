// types/stat.ts
export type PlayerStats = {
  player: Player;
  team: Team;
  playedMatches: number;
  goals: number;
  assists: number;
  penalties: number;
};

export type Team = {
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

export type Player = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  section: string;
  position: string | null;
  shirtNumber: number;
  lastUpdated: string;
};
