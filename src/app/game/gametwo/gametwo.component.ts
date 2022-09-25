import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/system/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'gametwo',
  templateUrl: './gametwo.component.html',
  styleUrls: ['./gametwo.component.scss'],
  animations: [
    trigger('clicked', [
      state('default', style({})),
      state('selected', style({
        transform: 'scale(0.85)'
      })),
      transition('default => selected', [
        animate('100ms')
      ]),
      transition('selected => default', [
        animate('100ms')
      ])
    ])
  ]
})
export class GametwoComponent implements OnInit {


  // Rock = 0
  // Paper = 1
  // Scissors = 2
  // Lizard = 3
  // Spock = 4
  choices: number[] = [0, 1, 2, 3, 4];
  pick: number = 0;
  hasPicked: boolean = false;
  countdown: number = 6;
  intervalId: any;
  

  constructor(private gameService: GameService, private router: Router) { }


  ngOnInit(): void {
    this.gameSetup();
  }
  
  gameSetup()
  {
    this.hasPicked = false;
    this.pick = -1;
    this.countdown = 6;
    this.gameService.updateMode(1);
  }

  triggerClick(input: number = 0)
  {
    this.pick = input;
    this.playerPicked();
  }
  
  playerPicked(): void
  {
    this.hasPicked = true;
    this.gameService.updateState("Thinking...");
    this.gameService.updatePick(this.pick);
    if (this.gameService.pick(this.choices, this.pick)) {
      this.intervalId = setInterval(() => {
        this.countdown--;

        if (this.countdown <= 3)
        {
          this.gameService.updateState(this.countdown);
        }
        
        if(this.countdown === 0) 
        {
          clearInterval(this.intervalId);
          this.router.navigate(['battle']);
        }
      }, 800);
    }
  }

  ngOnDestroy()
  {
    this.gameService.updateState("");
    clearInterval(this.intervalId);
  }

}
