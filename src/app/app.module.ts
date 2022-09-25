import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RulesComponent } from './game/rules/rules.component';
import { NavigationComponent } from './game/navigation/navigation.component';
import { GameoneComponent } from './game/gameone/gameone.component';
import { GametwoComponent } from './game/gametwo/gametwo.component';
import { GameheaderComponent } from './game/gameheader/gameheader.component';
import { StateComponent } from './game/state/state.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from './game/footer/footer.component';
import { GameComponent } from './game/game/game.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    NavigationComponent,
    GameoneComponent,
    GametwoComponent,
    GameheaderComponent,
    StateComponent,
    FooterComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
