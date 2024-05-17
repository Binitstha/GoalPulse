export type league = {
  leagueId: string,
  seasonId: string,
  standing: standing[]
}

export type standing = {
  position: number,
  teamId: string,
  teamName : string,
  overall: overall[],
  total: number,
  status: string,
  result: string,
  points: number,
}
export type overall = {
  gameplayed: number,
  won: number,
  draw: number,
  lost: number,
  goalDiff: number,
  goalScored: number,
  goalAgaints: number,
  points: number,
}
