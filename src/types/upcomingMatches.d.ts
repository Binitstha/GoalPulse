export type sports_results = {
  title: string;
  rankings: string;
  thumbnail: string;
  game_spotlight?: Game[];
  games?: Game[];
};

export type Game = {
  league: string;
  stadium: string;
  stage: string;
  date: string;
  teams: Team[];
  status: string;
};

export type Team = {
  name: string;
  thumbnail: string;
};

export type upcomingMatchResponse = {
  sports_results: sports_results;
};
