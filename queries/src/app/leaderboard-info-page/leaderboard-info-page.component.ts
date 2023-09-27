import { Component, OnInit } from '@angular/core';
import { LeaderboardInfo, LeaderboardInfoR, Player } from '../types';
import { LeaderboardService } from '../leaderboard.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard-info-page',
  templateUrl: './leaderboard-info-page.component.html',
  styleUrls: ['./leaderboard-info-page.component.css']
})
export class LeaderboardInfoPageComponent implements OnInit{
  // isLoading: boolean = true;
  leaderboard!: LeaderboardInfoR;

  constructor(
    private leaderboardService: LeaderboardService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const pID = this.route.snapshot.paramMap.get('pID');
    const gID = this.route.snapshot.paramMap.get('gID');
    this.leaderboardService.getLeaderboardInfoR(pID, gID)
      .subscribe(leaderboard => this.leaderboard = leaderboard);
  }

  onDeleteClicked(playerID: number, gameID: number): void {
    this.leaderboardService.deleteLeaderboard(playerID, gameID)
      .subscribe(() => {
        this.router.navigateByUrl('/q5');
      });
  }
}
