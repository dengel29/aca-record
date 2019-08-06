import { Component, OnInit } from '@angular/core';
import { SubjectCreatorService } from './services/subject-creator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aca-record';
  currentPlayer;
  scService: SubjectCreatorService;

  constructor(scService: SubjectCreatorService) {
    this.scService = scService;
  }

  ngOnInit() {
    this.currentPlayer = this.scService.getCurrentStudent();
  }
}
