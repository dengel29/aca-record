import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit, OnChanges {
  @Input() subjects: [];
  constructor() { }


  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
}
