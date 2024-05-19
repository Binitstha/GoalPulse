export interface Match {
  id: string;
  status: number;
  status_name: string;
  status_period: null;
  pitch: null;
  referee_id: null | string;
  round_id: string;
  season_id: string;
  season_name: string;
  stage_id: null;
  stage_name: null;
  group_id: null;
  group_name: null;
  aggregate_id: null;
  winner_team_id: null;
  venue_id: null | string;
  leg: null;
  deleted: null;
  time: {
    datetime: string;
    date: string;
    time: string;
    minute: number;
    timestamp: number;
    timezone: string;
  };
  teams: {
    home: {
      id: string;
      name: string;
      short_code: string;
      img: string;
      form: null | string;
      coach_id: null | string;
      color: null | string;
      kit_colors: null | string;
    };
    away: {
      id: string;
      name: string;
      short_code: string;
      img: string;
      form: null | string;
      coach_id: null | string;
      color: null | string;
      kit_colors: null | string;
    };
  };
  league: {
    id: null | string;
    name: null | string;
    type: string;
    country_id: null | string;
    country_name: null | string;
    country_flag: null | string;
  };
  scores: {
    home_score: null;
    away_score: null;
    ht_score: null;
    ft_score: null;
    et_score: null;
    ps_score: null;
  };
  standings: {
    home_position: null;
    away_position: null;
  };
  assistants: {
    first_assistant_id: null;
    second_assistant_id: null;
    fourth_assistant_id: null;
  };
  coverage: {
    has_lineups: string;
    has_tvs: string;
  };
  weather_report: boolean;
}
