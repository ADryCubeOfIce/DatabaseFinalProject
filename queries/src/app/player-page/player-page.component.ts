import { Component, OnInit } from '@angular/core';
import { PlayerR } from '../types';
import { LeaderboardService } from '../leaderboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit{
  isLoading: boolean = true;
  player!: PlayerR;

  constructor(
    private leaderboardService: LeaderboardService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.leaderboardService.getPlayerInfo(id)
      .subscribe(player => {
        this.player = player;
        this.isLoading = false
      });
  }

  onDeleteClicked(playerID: number): void {
    this.leaderboardService.deletePlayer(playerID)
      .subscribe(() => {
        this.router.navigateByUrl('/q1');
      });
  }
}
