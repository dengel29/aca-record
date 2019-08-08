import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Player } from '../models/player.model';
import { SubjectCreatorService } from '../services/subject-creator.service';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit, OnChanges {
  @Input() player: Player;
  constructor(public scService: SubjectCreatorService) { 
  
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

}
