import { Component, Input } from '@angular/core';
import { Game } from 'src/app/core/models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() game: Game;
  front = true;
}
