import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerItemComponent } from './player-item/player-item.component';
import { GradesBoxComponent } from './grades-box/grades-box.component';
import { HeaderComponent } from './header/header.component';
import { SubjectItemComponent } from './subject-item/subject-item.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectCreatorService } from './services/subject-creator.service';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerItemComponent,
    GradesBoxComponent,
    HeaderComponent,
    SubjectItemComponent,
    SubjectListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [SubjectCreatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
