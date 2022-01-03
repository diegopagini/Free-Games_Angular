import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Option } from 'src/app/modules/home/models/filter.interface';
import { loadGames } from '../store/actions/api.actions';
import {
  filterAll,
  filterGames,
  sortGames,
} from '../store/actions/filter.actions';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store) {}

  loadGames(): void {
    this.store.dispatch(loadGames());
  }

  dispatchFilterAction(filter: Option): void {
    if (filter.type === 'filter') {
      this.dispatchFilter(filter);
    } else {
      this.dispatchSort(filter);
    }
  }

  private dispatchFilter(filter: Option): void {
    console.log(filter);

    filter.name === 'All Platforms' || filter.name === 'All Genres'
      ? this.store.dispatch(filterAll({ payload: filter }))
      : this.store.dispatch(filterGames({ payload: filter }));
  }

  private dispatchSort(sort: Option): void {
    this.store.dispatch(sortGames({ payload: sort }));
  }
}
