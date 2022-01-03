import { createAction, props } from '@ngrx/store';
import { Option } from 'src/app/modules/home/models/filter.interface';
import { GameForm } from 'src/app/modules/home/models/form.interface';

export const filterGames = createAction(
  '[Home Page] Filter Games',
  props<{ payload: GameForm }>()
);

export const sortGames = createAction(
  '[Home Page] Sort Games',
  props<{ payload: Option }>()
);

export const noFilter = createAction('[Home Page] No Filters ');

export const filterGenres = createAction(
  '[Home Page] Filter Genres',
  props<{ payload: GameForm }>()
);

export const filterPlatforms = createAction(
  '[Home Page] Filter Platforms',
  props<{ payload: GameForm }>()
);
