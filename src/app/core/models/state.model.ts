import { Game } from './game.model';

export interface InitialState {
  unfilteredGames: Game[];
  games: Game[];
  loading: boolean;
  selectedGame: Game | null;
}
