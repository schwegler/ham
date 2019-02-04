import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';
import { GifApiService } from './gif-api.service';
import { CandidateAddComponent } from './candidate-add/candidate-add.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateShowComponent } from './candidate-show/candidate-show.component';
import { PageNotFoundComponent } from "./page-not-found.component";

const appRoutes: Routes = [
  { path: 'candidate/:id', component: CandidateShowComponent },
  {
    path: 'candidates',
    component: CandidateListComponent,
    data: { title: 'Candidates List' }
  },
  {
    path: 'candidates/add',
    component: CandidateAddComponent
  },
  {
    path: 'candidate/add/:id',
    component: CandidateAddComponent
  },
  { path: '',
    redirectTo: '/candidates',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CandidateAddComponent,
    CandidateListComponent,
    CandidateShowComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [ApiService, GifApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
