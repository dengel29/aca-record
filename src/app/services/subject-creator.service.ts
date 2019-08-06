import {Player} from '../models/player.model';
import {Subject} from '../models/subject.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class SubjectCreatorService {
  constructor(private http: HttpClient) {
    // this.getPlayers();
    // this.launch();
    this.getPlayers();
  }
  static headers = new HttpHeaders().set('Content-Type', 'application/json');
  public currentStudent;
  public currentStudentId;
  public currentSubjects;
  players: Player[] = [];
  deletedSubjects = [];
  createSubjectsUrl = 'https://localhost:5001/api/subject/BatchSave';
  deleteSubjectsUrl = 'https://localhost:5001/api/subject/BatchDelete';


  // fetchCharacters() {
  //   this.http.get('https://swapi.co/api/people/')
  //     .pipe(map((response) => {
  //       const data: any = response;
  //       const extractedChars = data.results;
  //       const chars = extractedChars.map((char) => {
  //         return {name: char.name, side: ''}
  //       })
  //       return chars;
  //     }))
  //     .subscribe((data) => {
  //        console.log(data);
  //        this.characters = data;
  //        this.charactersChanged.next();
  //   });
  // };

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'text/json'
    })
  };

  async getPlayers() {
    const testUrl = 'https://localhost:5001/api/player';
    console.log(testUrl)
    this.http.get(testUrl)
      .subscribe((res: Player[]) => {
        res.forEach(element => {
          this.players.push(element);
        });
      }, error => {
        console.log(error);
      });
    return this.players;
  }


  getCurrentStudent() {
    return this.players.find(player => player.id === this.currentStudentId);
  }

  getCurrentSubjects() {
    return this.getCurrentStudent().subjects;
  }

  setCurrentDetails(id) {
    const currentPlayer = this.players.find(player => {
      return player.id === id;
    });
    this.currentStudent = currentPlayer;
    this.currentSubjects = this.currentStudent.subjects;
    this.currentStudentId = this.currentStudent.id;
  }

  onSaveSubjects() {
    const subjects = [];
    this.allPlayers().forEach( player => {
      subjects.push(player.subjects);
    });
    // checks for deleted subjects and deletes
    if (this.deletedSubjects.length > 0 ) {
      const subjectsInDb = this.deletedSubjects.filter(s => s.id);
      this.http.post(this.deleteSubjectsUrl, subjectsInDb, {headers: SubjectCreatorService.headers}).subscribe(
        res => {
          console.log('deletions saved in the db');
          console.log('clearing in-memory deletions');
          this.deletedSubjects.length = 0;
        }, err => {
          console.log(err);
        }
      );
    };
    this.postSubjects(subjects.flat());
  }

  postSubjects(subjects) {
    // const jsonBody = JSON.stringify(body);
    return this.http.post(this.createSubjectsUrl, subjects, {headers: SubjectCreatorService.headers}).subscribe(
      res => {
        console.log('saved');
      },err => {
        console.log(err);
      }
    );
  }

  async launch() {
    // this.id.next(this.players[0].id)
    await this.getPlayers();
    // this.currentStudent = this.players[0];
    // this.setCurrentDetails(this.currentStudent.id);
  }

  deleteSubject(id) {
    const index = this.currentStudent.subjects.findIndex( c => {
        return c.id === id;
    });
    const deletedSubject = this.currentStudent.subjects.splice(index, 1)[0];
    this.deletedSubjects.push(deletedSubject);
  }

  makeNewSubject(formData) {
    const subject = new Subject(undefined, formData.value.title, formData.value.score,
      this.currentStudent.id);
    this.currentStudent.subjects.push(subject);
    this.currentSubjects = this.currentStudent.subjects;
  }

  allPlayers() {
    return this.players;
  }

   // Error handling
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
