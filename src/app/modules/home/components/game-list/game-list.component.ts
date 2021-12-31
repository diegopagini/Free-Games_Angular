import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from 'src/app/core/models/game.model';
import { selectGames } from 'src/app/core/store/selectors/api.selector';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  gameList$: Observable<Game[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.gameList$ = this.store.select(selectGames);
  }
}
