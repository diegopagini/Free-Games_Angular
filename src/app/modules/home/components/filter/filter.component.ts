import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Filter, Option } from '../../models/filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  @Input() filter: Filter;
  @Output() filterEmitter = new EventEmitter<Option>();
  value: Option;

  ngOnInit(): void {
    this.value = this.filter.options[0];
  }

  onHandleSelect(event: Option): void {
    this.filterEmitter.emit(event);
  }
}
