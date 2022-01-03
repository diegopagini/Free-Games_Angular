import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameForm } from 'src/app/modules/home/models/form.interface';
import { loadGames } from '../store/actions/api.actions';
import {
  filterGames,
  filterGenres,
  filterPlatforms,
  noFilter,
} from '../store/actions/filter.actions';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store) {}

  loadGames(): void {
    this.store.dispatch(loadGames());
  }

  dispatchFilterAction(filter: GameForm): void {
    if (filter.platform === 'All Platforms' && filter.genres === 'All Genres') {
      this.store.dispatch(noFilter());
    } else if (filter.platform === 'All Platforms') {
      this.store.dispatch(filterGenres({ payload: filter }));
    } else if (filter.genres === 'All Genres') {
      this.store.dispatch(filterPlatforms({ payload: filter }));
    } else {
      this.store.dispatch(filterGames({ payload: filter }));
    }
  }
}
