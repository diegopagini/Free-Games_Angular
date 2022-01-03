import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/core/models/game.model';
import { Filter } from '../models/filter.interface';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filters: Filter[] = [
    {
      name: 'Platform',
      options: [
        {
          name: 'All Platforms',
          category: 'Platform',
          type: 'filter',
        },
        {
          name: 'PC (Windows)',
          category: 'Platform',
          type: 'filter',
        },
        {
          name: 'Web Browser',
          category: 'Platform',
          type: 'filter',
        },
      ],
    },
    {
      name: 'Genre/Tag',
      options: [
        {
          name: 'All Genres',
          category: 'Genre/Tag',
          type: 'filter',
        },
        {
          name: 'MMO',
          category: 'Genre/Tag',
          type: 'filter',
        },
        {
          name: 'MMORPG',
          category: 'Genre/Tag',
          type: 'filter',
        },
        {
          name: 'Shooter',
          category: 'Genre/Tag',
          type: 'filter',
        },
        {
          name: 'Strategy',
          category: 'Genre/Tag',
          type: 'filter',
        },
        {
          name: 'Moba',
          category: 'Genre/Tag',
          type: 'filter',
        },
      ],
    },
    {
      name: 'Sort By',
      options: [
        {
          name: 'Relevance',
          category: 'Sort',
          type: 'sort',
        },
        {
          name: 'Popularity',
          category: 'Sort',
          type: 'sort',
        },
        {
          name: 'Release Date',
          category: 'Sort',
          type: 'sort',
        },
        {
          name: 'Alphabetical',
          category: 'Sort',
          type: 'sort',
        },
      ],
    },
  ];

  getFilters(): Filter[] {
    return this.filters;
  }

  sortGames(game$: Observable<Game[]>, sort: string): Observable<Game[]> {
    switch (sort) {
      case 'Alphabetical':
        sort = 'title';
        break;

      case 'Release Date':
        sort = 'release_date';
        break;

      case 'Relevance':
        sort = 'id';
        break;

      case 'Popularity':
        sort = 'short_description';
        break;

      default:
        sort = 'id';
        break;
    }

    return game$.pipe(
      map((games: Game[]) =>
        games.slice().sort((a: Game | any, b: Game | any) => {
          if (a[sort] > b[sort]) {
            return 1;
          }
          if (a[sort] < b[sort]) {
            return -1;
          }
          return 0;
        })
      )
    );
  }
}
