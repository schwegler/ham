import { Component, OnInit } from '@angular/core';

import { Candidate } from '../candidate';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-add',
  templateUrl: './candidate-add.component.html',
  styleUrls: ['./candidate-add.component.scss']
})
export class CandidateAddComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

  public candidate : Candidate  = new Candidate();

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
        this.apiService.get("candidates/"+data.id).subscribe((data : Candidate)=>{
          this.candidate = data;
        });
      }
      else
      {
        this.candidate = new Candidate();
      }
    })
  }

  public onSubmit(){
    console.log("Adding a candidate: " + this.candidate.name);
    if(this.candidate.id){
    this.apiService.update("candidates/"+this.candidate.id,this.candidate).subscribe((r)=>{
        console.log(r);
        alert("Candidate updated !");
    })
    }
    else
    this.apiService.post("candidates",this.candidate).subscribe((r)=>{
    console.log(r);
    this.candidate = new Candidate();
    alert("Candidate added !");

    });
}

}
