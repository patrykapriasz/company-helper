import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Report } from '../report.model';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss']
})
export class ReportDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ReportDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Report) { }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
