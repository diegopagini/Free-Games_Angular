import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { StoreService } from './core/services/store.service';
import { selectLoading } from './core/store/selectors/api.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean> = of(false);

  constructor(private storeService: StoreService, private store: Store) {}

  ngOnInit(): void {
    this.storeService.loadGames();
    this.loading$ = this.store.select(selectLoading);
  }
}
