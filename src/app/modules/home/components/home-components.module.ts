import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListModule } from './game-list/game-list.module';
import { GameModule } from './game/game.module';

const components = [GameListModule, GameModule];

@NgModule({
  imports: [CommonModule, components],
  exports: [components],
})
export class HomeComponentsModule {}
