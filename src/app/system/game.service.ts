import { Injectable } from '@angular/core';
//@ts-ignore
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private AIPickStorage: BehaviorSubject<number> = new BehaviorSubject(0);
  private playerPickStorage: BehaviorSubject<number> = new BehaviorSubject(0);
  private scoreStorage: BehaviorSubject<number> = new BehaviorSubject(0);
  private lastPlayerName: BehaviorSubject<string> = new BehaviorSubject("");
  private state: BehaviorSubject<any> = new BehaviorSubject("");
  private mode: BehaviorSubject<number> = new BehaviorSubject(0);

  // Public Score Access //
  public _Score: number = 0;

  public readonly score: Observable<number> = this.scoreStorage.asObservable();
  public readonly AIPick: Observable<number> = this.AIPickStorage.asObservable();
  public readonly playerPick: Observable<number> = this.playerPickStorage.asObservable();
  public readonly playerName: Observable<string> = this.lastPlayerName.asObservable();
  public readonly stateUpdate: Observable<any> = this.state.asObservable();
  public readonly modeUpdate: Observable<number> = this.mode.asObservable();

  // Compare all possibilities for a winning or losing match
  matches: any[] = [
    {element: "rock",     id: 0, beats: [3, 2]},
    {element: "paper",    id: 1, beats: [4, 0]}, 
    {element: "scissors", id: 2, beats: [1, 3]}, 
    {element: "lizard",   id: 3, beats: [1, 4]},
    {element: "spock",    id: 4, beats: [2, 0]}
  ]; 

  // Save the current mode of the game //
  updateMode(gameMode: number = 0)
  {
    this.mode.next(gameMode);
  }

  // Update the player score when called
  updateScore(increase: boolean = true)
  {
    let curScore = this.scoreStorage.value;

    if (increase)
    {
      curScore++;
    } else {
      curScore--;
    }

    this.scoreStorage.next(curScore);
    this._Score = curScore;
  }

  // Set the score directly - used for loading mainly
  setScore(score: number = 0)
  {
    this.scoreStorage.next(score);
    this._Score = score;
  }

  updateState(status: any)
  {
    this.state.next(status);
  }

  // Update the element picked by the player //
  updatePick(picked: number)
  {
    this.playerPickStorage.next(picked);
  }

  // Pick an element to play against the player
  pick(choices: number[], playerChoice: number = 0, mode: number = 0): boolean
  {
    let choiceArray: number[] = choices;
    let selected = 0;

    if (choices !== null || choiceArray.length == 0)
    {
         let opposites = [];
        // Rock Paper Scissors //
        // Randomly decide to pick the opposite or a random choice //
        if (Math.random() < 0.35)
        {
          // Pick the Opposite //
          switch(playerChoice)
          {
            case 0:
              selected = 2;
              break;
            case 1:
              selected = 0;
              break;
            case 2:
              selected = 1;
              break;
            case 3:
              opposites = [0, 2];
              selected = opposites[Math.floor(Math.random() * opposites.length)];
            break;
            case 4:
              opposites = [1, 3];
              selected = opposites[Math.floor(Math.random() * opposites.length)];
            break;
          }
        } else {
          // Pick a Random //
          selected = Math.floor(Math.random() * choiceArray.length);
        }

        this.AIPickStorage.next(selected);
        return true;
    }

    return false;
  } 
}