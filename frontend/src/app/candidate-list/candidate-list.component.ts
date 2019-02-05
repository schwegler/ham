import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Candidate } from '../candidate';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  constructor(public apiService: ApiService , public router : Router) {  }

  ngOnInit() {
    this.apiService.get("candidates").subscribe((data : Candidate[])=>{
      console.log(data);
      this.rows = data;
    });
  }

  public columns = ['id','name'];
  public rows : Array<Candidate>;

  public delete(id:string){
    console.log("delete : " + id);
    var path = 'candidates/' + id;
    this.apiService.delete(path).subscribe((r)=>{

    this.rows = this.rows.filter((p,i)=>{

        if(Number(id) === p.id )
        {
        return false;
        }
        return true;
    },this.rows)

    });
  }

  public update(id:string){
      console.log("update : " + id );
      this.router.navigateByUrl('/candidates/add/' + id);
  }

}
