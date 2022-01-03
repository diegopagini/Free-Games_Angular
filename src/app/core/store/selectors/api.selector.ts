import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InitialState } from '../../models/state.model';

export const selectGamesState = createFeatureSelector<InitialState>('app');

export const selectGames = createSelector(selectGamesState, (app) => app.games);

export const selectLoading = createSelector(
  selectGamesState,
  (app) => app.loading
);
