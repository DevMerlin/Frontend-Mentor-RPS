import { Component, OnInit } from '@angular/core';
//@ts-ignore
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/system/game.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  playerSub: Subscription = new Subscription();
  computerPickSub: Subscription = new Subscription();
  modeCheckSub: Subscription = new Subscription();
  showRestart: boolean = false;
  playerPick = -1;
  computerPick = -1;
  holdComputerPick = -1;
  countdown = 3;
  winState: number = -1;
  intervalId: any;
  mode: number = 0;


  constructor(private gameService: GameService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.playerPick = -1;
    this.computerPick = -1;
    this.countdown = 4;


    this.playerSub = this.gameService.playerPick.subscribe((data: number) => {
      this.playerPick = data;
      console.log(this.playerPick);
    }); 
    
    this.computerPickSub = this.gameService.AIPick.subscribe((data: number) => {
      this.holdComputerPick = data;
    });

    this.modeCheckSub = this.gameService.modeUpdate.subscribe((data: number) => {
      this.mode = data;
    });

    this.intervalId = setInterval(() => {
      this.countdown--;
      if(this.countdown === 0) 
      {
        clearInterval(this.intervalId);
        this.computerPick = this.holdComputerPick;
        this.checkWinner();
      }
    }, 1000);
  }

  checkWinner()
  {
    // Does the computer move counter the player move, based on the game mode? //
    if (this.computerPick === this.playerPick) {
      // Draw 
      console.log("Draw!");
      this.winState = 0;
    } else if (this.gameService.matches[this.computerPick].beats.includes(this.playerPick)) {
      // The Computer Won //
      console.log("The Computer Won");
      this.winState = 2;
    } else if (this.gameService.matches[this.playerPick].beats.includes(this.computerPick)) {
      // The Player Won //
      console.log("The Player Won");
      this.winState = 1;
      this.gameService.updateScore();
      this.cookieService.set("score", this.gameService._Score.toString());
    }

    this.showRestart = true;
  }

  returnToGame()
  {
    if (this.mode == 0)
    {
      this.router.navigate(['normal']);
    } else if (this.mode == 1) {
      this.router.navigate(['bonus']);
    }
  }

  ngOnDestroy()
  {
    this.playerSub.unsubscribe();
    this.computerPickSub.unsubscribe();
    this.modeCheckSub.unsubscribe();
  }

}
