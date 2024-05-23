// types.ts
export type SportsResult = {
  title: string;
  league: string;
  thumbnail: string;
  games: Game[];
};

export type Game = {
  tournament?: string; // Optional since it's not present in all games
  stage?: string; // Optional since it's not present in all games
  status: string;
  date: string;
  time?: string; // Optional since it's not present in all games
  video_highlights?: VideoHighlight; // Optional since it's not present in all games
  teams: Team[];
};

export type VideoHighlight = {
  link: string;
  thumbnail: string;
  duration: string;
};

export type Team = {
  name: string;
  score?: string; // Optional since it's not present in all games
  thumbnail: string;
};

// The main type to represent the JSON structure
export type MatchResponse = {
  sports_results: SportsResult;
};
