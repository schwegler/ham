import { Component, OnInit } from '@angular/core';

import { Candidate } from '../candidate';
import { ApiService } from '../api.service';
import { GifApiService } from '../gif-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-show',
  templateUrl: './candidate-show.component.html',
  styleUrls: ['./candidate-show.component.scss']
})
export class CandidateShowComponent implements OnInit {

  constructor(public apiService: ApiService, public gifApiService: GifApiService, public acRoute: ActivatedRoute) { }

  public candidate: Candidate;
  public gifs = [];

  ngOnInit() {
    this.acRoute.params.subscribe((data: any) => {
      if (data && data.id) {
        this.apiService.get("candidates/" + data.id).subscribe((data: Candidate) => {
          this.candidate = data;
          if (data && data.name) {
            this.gifApiService.get(data.name).subscribe((data: {}) => {
              this.gifs = data.data;
            });
          }
        });
      }
    });
  }

}
