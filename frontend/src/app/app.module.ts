import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ApiService } from './api.service';
import { CandidateAddComponent } from './candidate-add/candidate-add.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateAddComponent,
    CandidateListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: CandidateListComponent
      },
      {
        path: 'candidates/add',
        component: CandidateAddComponent
      },
      {
        path: 'candidate/add/:id',
        component: CandidateAddComponent
      },
    ]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
