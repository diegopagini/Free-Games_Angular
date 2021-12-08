import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectGamesState = createFeatureSelector<any>('app');

export const selectGames = createSelector(selectGamesState, (app) => app.games);

export const selectLoading = createSelector(
  selectGamesState,
  (app) => app.loading
);
