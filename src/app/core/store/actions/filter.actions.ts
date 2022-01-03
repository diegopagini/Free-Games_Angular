import { createAction, props } from '@ngrx/store';
import { Option } from 'src/app/modules/home/models/filter.interface';

export const filterGames = createAction(
  '[Home Page] Filter Games',
  props<{ payload: Option }>()
);

export const filterAll = createAction(
  '[Home Page] See All Games',
  props<{ payload: Option }>()
);

export const sortGames = createAction(
  '[Home Page] Sort Games',
  props<{ payload: Option }>()
);
