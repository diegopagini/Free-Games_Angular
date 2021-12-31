import { Component, Input } from '@angular/core';
import { Filter } from '../../models/filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() filter: Filter;
}
