import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-data',
  templateUrl: './dialog.component.html'
})

export class DialogComponent implements OnInit {
  public myDataSource: {};
  public displayedColumns: string[] = ['Author', 'Question', 'Responses', 'Tags'];
  
  constructor (
    private matDialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.myDataSource = this.data.items;
  }

  dialogClose(): void {
    this.matDialogRef.close();
  }
}