import { Component, OnInit } from '@angular/core';
import { GameService } from './system/game.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Rock Paper Scissors';

  constructor(private gameService: GameService, private cookieService: CookieService) {}

  // Load the score and check to verify that it is a number //
  ngOnInit()
  {
    let scoreCookie = this.cookieService.get('score');

    if (scoreCookie.length > 0) {
      let number:number = Number(scoreCookie);
      this.gameService.setScore(number);
    }
  }



}