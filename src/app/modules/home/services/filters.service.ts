import { Injectable } from '@angular/core';
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
}
