import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from '../../models/game.model';
import { selectGames } from '../../store/selectors/api.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  games$: Observable<Game[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.games$ = this.store.select(selectGames);
  }
}
