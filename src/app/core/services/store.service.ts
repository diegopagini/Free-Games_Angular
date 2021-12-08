import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadGames } from '../store/actions/api.actions';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store) {}

  loadGames(): void {
    this.store.dispatch(loadGames());
  }
}
