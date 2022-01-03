import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filter } from '../../models/filter.interface';
import { GameForm } from '../../models/form.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  @Input() filters: Filter[];
  @Output() filterEmitter = new EventEmitter<GameForm>();
  gamesForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.gamesForm = this.fb.group({
      platform: [this.selectedValue('Platform'), [Validators.required]],
      genres: [this.selectedValue('Genre/Tag'), [Validators.required]],
      sort: [this.selectedValue('Sort By'), [Validators.required]],
    });
  }

  onHandleSelect(event: GameForm): void {
    this.filterEmitter.emit(this.gamesForm.value);
  }

  private selectedValue(filter: string): any {
    const options = this.filters.filter((el: Filter) => el.name === filter)[0];
    return options.options[0].name;
  }
}
