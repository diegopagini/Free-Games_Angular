import { Injectable } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
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
          value: 'All Platforms',
          type: 'filter',
        },
        {
          name: 'Windwos (PC)',
          value: 'Windwos (PC)',
          type: 'filter',
        },
        {
          name: 'Browser (WEB)',
          value: 'Browser (WEB)',
          type: 'filter',
        },
      ],
    },
    {
      name: 'Genre/Tag',
      options: [
        {
          name: 'All Genres',
          value: 'All Genres',
          type: 'filter',
        },
        {
          name: 'MMO',
          value: 'MMO',
          type: 'filter',
        },
        {
          name: 'MMORPG',
          value: 'MMORPG',
          type: 'filter',
        },
        {
          name: 'Shooter',
          value: 'Shooter',
          type: 'filter',
        },
        {
          name: 'Strategy',
          value: 'Strategy',
          type: 'filter',
        },
        {
          name: 'Moba',
          value: 'Moba',
          type: 'filter',
        },
      ],
    },
    {
      name: 'Sort By',
      options: [
        {
          name: 'Relevance',
          value: 'Relevance',
          type: 'sort',
        },
        {
          name: 'Popularity',
          value: 'Popularity',
          type: 'sort',
        },
        {
          name: 'Release Date',
          value: 'Release Date',
          type: 'sort',
        },
        {
          name: 'Alphabetical',
          value: 'Alphabetical',
          type: 'sort',
        },
      ],
    },
  ];

  constructor(private storeService: StoreService) {}

  getFilters(): Filter[] {
    return this.filters;
  }
}
