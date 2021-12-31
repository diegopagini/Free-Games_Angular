import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from 'src/app/core/models/game.model';
import { selectGames } from 'src/app/core/store/selectors/api.selector';
import { Filter } from '../../models/filter.interface';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  gameList$: Observable<Game[]>;
  filters: Filter[];

  constructor(private store: Store, private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.gameList$ = this.store.select(selectGames);
    this.filters = this.filtersService.getFilters();
  }
}
