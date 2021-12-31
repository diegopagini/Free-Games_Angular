import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import { GameModule } from '../game/game.module';

@NgModule({
  declarations: [GameListComponent],
  imports: [CommonModule, GameModule],
  exports: [GameListComponent],
})
export class GameListModule {}
