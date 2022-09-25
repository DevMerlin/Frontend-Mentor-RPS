import { Component, OnInit } from '@angular/core';
//@ts-ignore
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/system/game.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { RulesComponent } from '../rules/rules.component'; 

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  stateUpdate: Subscription = new Subscription();
  state: number = 0;

  constructor(private gameService: GameService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.stateUpdate = this.gameService.modeUpdate.subscribe((data: number) => {
      
      this.state = data;
      
    });

    
  }  

  openRules() {
    this.dialog.open(RulesComponent, {
      autoFocus: true,
      data: {
        state: this.state
      }
    });  
  }

  ngOnDestroy()
  {
    this.stateUpdate.unsubscribe();
  }

}
