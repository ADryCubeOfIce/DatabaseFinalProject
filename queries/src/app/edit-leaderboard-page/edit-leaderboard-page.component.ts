import { Component, OnInit } from '@angular/core';
import { LeaderboardInfo } from '../types';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-edit-leaderboard-page',
  templateUrl: './edit-leaderboard-page.component.html',
  styleUrls: ['./edit-leaderboard-page.component.css']
})
export class EditLeaderboardPageComponent implements OnInit{
  leaderboard!: LeaderboardInfo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private leaderboardService: LeaderboardService,
  ) {}

  ngOnInit(): void {
    const pID = this.route.snapshot.paramMap.get('pID');
    const gID = this.route.snapshot.paramMap.get('gID');
    this.leaderboardService.getLeaderboardInfo(pID, gID)
      .subscribe(leaderboard => this.leaderboard = leaderboard);
  }

  onSubmit({ timePlayed, killDeathRatio, winLossRatio, playerRank }: LeaderboardInfo): void {
    const pID = this.route.snapshot.paramMap.get('pID');
    const gID = this.route.snapshot.paramMap.get('gID');
    this.leaderboardService.editLeaderboard(Number(pID), Number(gID), timePlayed, killDeathRatio, winLossRatio, playerRank)
      .subscribe(() => {
        this.router.navigateByUrl('/q5');
      }); 
  }
}
