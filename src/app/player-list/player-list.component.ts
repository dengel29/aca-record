import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import {SubjectCreatorService} from '../services/subject-creator.service';
import {Player} from '../models/player.model';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  // @Input() vertical: boolean;
  scService: SubjectCreatorService;
  @Input() players: Player[];
  @Input() currentPlayer;
  previousValue;
  @ViewChild('group', {static: true}) itemValue;

  constructor(scService: SubjectCreatorService) {
    this.scService = scService;
    this.players = this.scService.allPlayers();
    // this.scService.getPlayers().subscribe(result => {
    //   console.log(result);
    // }, error => {
    //   console.log(error);
    // });
  }

  ngOnInit() {
    this.scService.currentStudent = this.players[0];
  }

  selectPlayer() {
    // tslint:disable-next-line: radix
    this.scService.setCurrentDetails(parseInt(this.itemValue.value));
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.currentPlayer.firstChange) {
  //     document.getElementById(changes.currentPlayer.currentValue.id).classList.add('selected')
  //   } else {
  //     document.getElementById(changes.currentPlayer.currentValue.id).classList.toggle('selected')
  //     document.getElementById(changes.currentPlayer.previousValue.id).classList.toggle('selected')
  //   }
  // }

}
