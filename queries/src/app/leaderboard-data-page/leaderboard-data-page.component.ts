import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LeaderboardInfo } from '../types';

@Component({
  selector: 'app-leaderboard-data-page',
  templateUrl: './leaderboard-data-page.component.html',
  styleUrls: ['./leaderboard-data-page.component.css']
})
export class LeaderboardDataPageComponent implements OnInit{
  @Input() buttonText: any;
  @Input() currentGameID = 0;
  @Input() currentTimePlayed = 0;
  @Input() currentKDR = 0;
  @Input() currentWLR = 0;
  @Input() currentRank = '';

  gameID: number = 0;
  timePlayed: number = 0;
  killDeathRatio: number = 0;
  winLossRatio: number = 0;
  playerRank: string = '';

  @Output() onSubmit = new EventEmitter<LeaderboardInfo>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.gameID = this.currentGameID;
    this.timePlayed = this.currentTimePlayed;
    this.killDeathRatio = this.currentKDR;
    this.winLossRatio = this.currentWLR;
    this.playerRank = this.currentRank;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      playerID: 0,
      gameID: this.gameID,
      timePlayed: this.timePlayed,
      killDeathRatio: this.killDeathRatio,
      winLossRatio: this.winLossRatio,
      playerRank: this.playerRank,
    });
  }
}
