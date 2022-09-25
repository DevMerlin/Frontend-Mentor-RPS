import { Component, OnInit } from '@angular/core';
//@ts-ignore
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/system/game.service';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  output: any = "";
  stateUpdate: Subscription = new Subscription();
  game: number = 0;

  constructor(private gameService: GameService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    switch(this.route.snapshot.url[0].path)
    {
      case "normal":
        this.game = 0;
      break;
      case "bonus":
        this.game = 1;
      break;
    }

    this.stateUpdate = this.gameService.stateUpdate.subscribe((data: any) => {
      this.output = data.toString();
    });
  }

  ngOnDestroy()
  {
    this.stateUpdate.unsubscribe();
  }

}