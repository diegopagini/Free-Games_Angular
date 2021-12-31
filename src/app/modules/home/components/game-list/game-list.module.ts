import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import { GameModule } from '../game/game.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FilterModule } from '../filter/filter.module';

@NgModule({
  declarations: [GameListComponent],
  imports: [CommonModule, GameModule, MaterialModule, FilterModule],
  exports: [GameListComponent],
})
export class GameListModule {}
