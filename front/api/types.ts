export interface ResponseType<T> {
  data: T;
}

enum MatchState {
  WaitingForStart = 1,
  InProgress = 2,
  Finished = 3,
}

export interface Identity<T> {
  id: T;
}

export interface Player extends Identity<string> {
  name: string;
  position: Number;
}

export interface Team extends Identity<string> {
  name: string;
  img: string;
  players: Player[];
}

export interface MatchResult extends Identity<string> {
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchState;
  date: Date;
}
