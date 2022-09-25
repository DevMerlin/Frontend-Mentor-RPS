import { Component, OnInit, Input } from '@angular/core';
//@ts-ignore
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/system/game.service';

@Component({
  selector: 'gameheader',
  templateUrl: './gameheader.component.html',
  styleUrls: ['./gameheader.component.scss']
})
export class GameheaderComponent implements OnInit {
  score: number = 0;
  @Input() game: any = 0;
  scoresub: Subscription = new Subscription();
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.scoresub = this.gameService.score.subscribe((next: number) => {
      this.score = next;
    });
  }

  ngOnDestroy() {
    this.scoresub.unsubscribe();
  }
}