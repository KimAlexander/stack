import { Component, OnInit } from '@angular/core';
import { FetchData } from '../query.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html'
})

export class AnswersComponent implements OnInit { 
  public answers: {};
  constructor(private fetchData: FetchData, 
              private rout: ActivatedRoute) {}
  
  ngOnInit () {
    this.rout.queryParams.subscribe((params) => {
      this.fetchData.getAnswers(params.query)
        .subscribe(data => {
          this.answers = data
        }) 
    }) 
  }
}