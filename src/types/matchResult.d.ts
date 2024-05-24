// types.ts
export type sports_results = {
  title: string;
  league: string;
  thumbnail: string;
  games: Game[];
};

export type Game = {
  tournament?: string;
  stage?: string;
  status: string;
  stadium: string;
  date: string;
  time?: string;
  video_highlights?: VideoHighlight;
  teams: Team[];
};

export type VideoHighlight = {
  link: string;
  thumbnail: string;
  duration: string;
};

export type Team = {
  name: string;
  score?: string;
  thumbnail: string;
};

export type MatchResponse = {
  sports_results: sports_results[];
};
