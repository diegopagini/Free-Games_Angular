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
          name: 'Windwos (PC)',
          value: 'Windwos (PC)',
        },
        {
          name: 'Browser (WEB)',
          value: 'Browser (WEB)',
        },
        {
          name: 'All Platforms',
          value: 'All Platforms',
        },
      ],
    },
    {
      name: 'Genre/Tag',
      options: [
        {
          name: 'Windwos (PC)',
          value: 'Windwos (PC)',
        },
      ],
    },
    {
      name: 'Sort By',
      options: [
        {
          name: 'Windwos (PC)',
          value: 'Windwos (PC)',
        },
      ],
    },
  ];

  getFilters(): Filter[] {
    return this.filters;
  }
}
