import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { GameComponent } from './game/game/game.component';
import { StateComponent } from './game/state/state.component';

const routes: Routes = [
  { path: 'normal', component: GameComponent },
  { path: 'bonus', component: GameComponent },
  { path: 'battle', component: StateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }