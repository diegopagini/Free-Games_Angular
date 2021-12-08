import { createReducer, on } from '@ngrx/store';
import {
  loadGames,
  loadGamesFail,
  loadGamesSuccess,
} from '../actions/api.actions';

export const initialState = {
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
  })),
  on(loadGamesFail, (state, action) => ({
    ...state,
    loading: false,
  }))
);
