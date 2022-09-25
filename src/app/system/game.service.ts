import { Injectable } from '@angular/core';
//@ts-ignore
import { BehaviorSubject, Observable } from 'rxjs';

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

  public readonly score: Observable<number> = this.scoreStorage.asObservable();
  public readonly AIPick: Observable<number> = this.AIPickStorage.asObservable();
  public readonly playerPick: Observable<number> = this.playerPickStorage.asObservable();
  public readonly playerName: Observable<string> = this.lastPlayerName.asObservable();
  public readonly stateUpdate: Observable<any> = this.state.asObservable();

  public readonly modeUpdate: Observable<number> = this.mode.asObservable();

  matches: any[] = [
    {element: "rock",     id: 0, beats: [3, 2]},
    {element: "paper",    id: 1, beats: [4, 0]}, 
    {element: "scissors", id: 2, beats: [1, 3]}, 
    {element: "lizard",   id: 3, beats: [1, 4]},
    {element: "spock",    id: 4, beats: [2, 0]}
  ]; 

  constructor() { }

  updateMode(gameMode: number = 0)
  {
    this.mode.next(gameMode);
  }

  // Update the player score when called
  updateScore(increase: boolean = true)
  {
    if (increase)
    {
      let curScore = this.scoreStorage.value;
      curScore++;

      this.scoreStorage.next(curScore);
    } else {
      let curScore = this.scoreStorage.value;
      curScore--;

      this.scoreStorage.next(curScore);
    }
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
      if (mode === 0)
      {
        // Rock Paper Scissors //
        // Randomly decide to pick the opposite or a random choice //
        if (Math.random() < 0.25)
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
          }
        } else {
          // Pick a Random //
          selected = Math.floor(Math.random() * choiceArray.length);
        }

        this.AIPickStorage.next(selected);
        return true;
      } switch (mode === 1) {
        // Lizard Spock //
      }
    }

    return false;
  } 
}