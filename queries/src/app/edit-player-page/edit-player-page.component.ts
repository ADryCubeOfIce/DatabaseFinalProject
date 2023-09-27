import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../types';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-edit-player-page',
  templateUrl: './edit-player-page.component.html',
  styleUrls: ['./edit-player-page.component.css']
})
export class EditPlayerPageComponent implements OnInit{
  player!: Player;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private leaderboardService: LeaderboardService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.leaderboardService.getPlayerInfo(id)
      .subscribe(player => this.player = player);
  }

  onSubmit({ firstName, lastName, gamertag, platform, age, regionID }: Player) : void {
    this.leaderboardService.editPlayer(this.player.playerID, firstName, lastName, gamertag, platform, age, regionID)
      .subscribe(() => {
        this.router.navigateByUrl('/query');
      }); 
  }
}
