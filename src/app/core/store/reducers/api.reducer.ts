import { createReducer, on } from '@ngrx/store';
import { Game } from '../../models/game.model';
import { InitialState } from '../../models/state.model';
import {
  loadGames,
  loadGamesFail,
  loadGamesSuccess,
} from '../actions/api.actions';
import { filterGames } from '../actions/filter.actions';

export const initialState: InitialState = {
  unfilteredGames: [],
  games: [],
  loading: false,
  selectedGame: null,
};

export const apiReducer = createReducer(
  initialState,
  on(loadGames, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(loadGamesSuccess, (state, action) => ({
    ...state,
    loading: false,
    games: action.payload,
    unfilteredGames: action.payload,
  })),
  on(loadGamesFail, (state, action) => ({
    ...state,
    loading: false,
  })),
  on(filterGames, (state, action) => {
    if (action.payload.category === 'Platform') {
      return {
        ...state,
        games: [
          ...state.unfilteredGames.filter(
            (game: Game) => game.platform === action.payload.name
          ),
        ],
      };
    } else {
      return {
        ...state,
        games: [
          ...state.unfilteredGames.filter(
            (game: Game) => game.genre === action.payload.name
          ),
        ],
      };
    }
  })
);
