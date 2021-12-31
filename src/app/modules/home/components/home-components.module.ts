import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListModule } from './game-list/game-list.module';
import { GameModule } from './game/game.module';
import { FilterModule } from './filter/filter.module';

const components = [GameListModule, GameModule, FilterModule];

@NgModule({
  imports: [CommonModule, components],
  exports: [components],
})
export class HomeComponentsModule {}
