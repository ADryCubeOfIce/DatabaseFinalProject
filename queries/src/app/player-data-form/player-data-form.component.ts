import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../types';

@Component({
  selector: 'app-player-data-form',
  templateUrl: './player-data-form.component.html',
  styleUrls: ['./player-data-form.component.css']
})
export class PlayerDataFormComponent implements OnInit{
  @Input() buttonText: any;
  @Input() currentFName = '';
  @Input() currentLName = '';
  @Input() currentGamertag = '';
  @Input() currentPlatform = '';
  @Input() currentAge = 0;
  @Input() currentRegion = 0;

  firstName: string = '';
  lastName: string = '';
  gamertag: string = '';
  platform: string = '';
  age: number = 0;
  regionID: number = 0;

  @Output() onSubmit = new EventEmitter<Player>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.firstName = this.currentFName;
    this.lastName = this.currentLName;
    this.gamertag = this.currentGamertag;
    this.platform = this.currentPlatform;
    this.age = this.currentAge;
    this.regionID = this.currentRegion;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      playerID: 0,
      firstName: this.firstName,
      lastName: this.lastName,
      gamertag: this.gamertag,
      platform: this.platform,
      age: this.age,
      teamID: 0,
      regionID: this.regionID,
    });
  }
}
