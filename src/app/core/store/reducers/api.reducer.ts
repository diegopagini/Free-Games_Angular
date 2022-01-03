import { createReducer, on } from '@ngrx/store';
import { Game } from '../../models/game.model';
import { InitialState } from '../../models/state.model';
import {
  loadGames,
  loadGamesFail,
  loadGamesSuccess,
} from '../actions/api.actions';
import {
  filterGames,
  filterGenres,
  filterPlatforms,
  noFilter,
} from '../actions/filter.actions';

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
  on(noFilter, (state, action) => ({
    ...state,
    games: [...state.unfilteredGames],
  })),
  on(filterGenres, (state, action) => ({
    ...state,
    games: [
      ...state.unfilteredGames.filter(
        (game: Game) => game.genre === action.payload.genres
      ),
    ],
  })),
  on(filterPlatforms, (state, action) => ({
    ...state,
    games: [
      ...state.unfilteredGames.filter(
        (game: Game) => game.platform === action.payload.platform
      ),
    ],
  })),
  on(filterGames, (state, action) => ({
    ...state,
    games: [
      ...state.unfilteredGames.filter(
        (game: Game) =>
          game.platform === action.payload.platform &&
          game.genre === action.payload.genres
      ),
    ],
  }))
);
