import { createAction, props } from '@ngrx/store';

export const loadGames = createAction('[App] Start Loading Games');

export const loadGamesSuccess = createAction(
  '[Effect] Loading Games Success',
  props<{ payload: any }>()
);

export const loadGamesFail = createAction('[Effect] Load Games Fail');
