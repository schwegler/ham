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

  constructor(public apiService: ApiService, public gifApiService: GifApiService, public acRoute : ActivatedRoute) { }

  public candidate : Candidate  = new Candidate();
  public gifset = {};

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
        this.apiService.get("candidates/"+data.id).subscribe((data : Candidate)=>{
          this.candidate = data;
        });
    });
    this.gifset = this.gifApiService.get(this.candidate.name)
    debugger;
  }

}
