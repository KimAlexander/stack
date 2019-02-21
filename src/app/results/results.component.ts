import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FetchData } from '../query.service'
import { DialogComponent } from '../dialog/dialog.component'

import {MatDialog} from '@angular/material';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  public displayedColumns: string[] = ['Author', 'Question', 'Responses', 'Tags'];
  public query = {};
  public myDataSource = {};

  constructor(private rout: ActivatedRoute, private fetchData: FetchData,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.rout.queryParams.subscribe((params) => {
      this.fetchData.getData(params.query)
        .subscribe(data => {
          this.myDataSource = data
        })
    });
  }

  showAuthorPopularDialog(user_id: string): void{
    this.fetchData.getAuthorPopularQuestions(user_id)
      .subscribe(data => {
        this.dialog.open(DialogComponent, {
          width: '850px',
          data,
          autoFocus: false
        });
      });
  }

  showPopularByTag(tag: string) {
    this.fetchData.getPopularByTag(tag)
      .subscribe(data => {
        this.dialog.open(DialogComponent, {
          width: '850px',
          data,
          autoFocus: false
        });
      })
  }
}
