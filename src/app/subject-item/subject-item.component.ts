import { Component, OnInit, Input } from '@angular/core';
import {SubjectCreatorService} from '../services/subject-creator.service'

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.scss']
})
export class SubjectItemComponent implements OnInit {
  @Input() subject;
  scService: SubjectCreatorService;
  constructor(scService: SubjectCreatorService) {
    this.scService = scService;
   }

  ngOnInit() {
  }

  deleteItem(e) {
    console.log(e);
    // tslint:disable-next-line: radix
    this.scService.deleteSubject(parseInt(e.target.parentElement.id));
  }

}
