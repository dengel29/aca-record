import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SubjectCreatorService } from '../services/subject-creator.service';



@Component({
  selector: 'app-grades-box',
  templateUrl: './grades-box.component.html',
  styleUrls: ['./grades-box.component.scss']
})
export class GradesBoxComponent implements OnInit, OnChanges {
  constructor(public scService: SubjectCreatorService) {
  }



  ngOnInit() {}

  onSubmit(form) {
    this.scService.makeNewSubject(form);
    let titleInput: HTMLInputElement =  <HTMLInputElement>document.getElementById('title');
    let scoreInput: HTMLInputElement =  <HTMLInputElement>document.getElementById('score');
    titleInput.focus();
    titleInput.value = " ";
    scoreInput.value = " ";
   
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
