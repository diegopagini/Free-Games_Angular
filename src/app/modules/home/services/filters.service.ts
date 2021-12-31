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
          value: 'All Platforms',
        },
        {
          name: 'Windwos (PC)',
          value: 'Windwos (PC)',
        },
        {
          name: 'Browser (WEB)',
          value: 'Browser (WEB)',
        },
      ],
    },
    {
      name: 'Genre/Tag',
      options: [
        {
          name: 'All Genres',
          value: 'All Genres',
        },
        {
          name: 'MMO',
          value: 'MMO',
        },
        {
          name: 'MMORPG',
          value: 'MMORPG',
        },
        {
          name: 'Shooter',
          value: 'Shooter',
        },
        {
          name: 'Strategy',
          value: 'Strategy',
        },
        {
          name: 'Moba',
          value: 'Moba',
        },
      ],
    },
    {
      name: 'Sort By',
      options: [
        {
          name: 'Relevance',
          value: 'Relevance',
        },
        {
          name: 'Popularity',
          value: 'Popularity',
        },
        {
          name: 'Release Date',
          value: 'Release Date',
        },
        {
          name: 'Alphabetical',
          value: 'Alphabetical',
        },
      ],
    },
  ];

  getFilters(): Filter[] {
    return this.filters;
  }
}
