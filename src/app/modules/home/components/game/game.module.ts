import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, MaterialModule],
  exports: [GameComponent],
})
export class GameModule {}
