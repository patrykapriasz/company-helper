import { Component, OnInit } from '@angular/core';
import { Report } from '../../report.model';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user/user.model';

@Component({
  selector: 'app-laboratory-report-create',
  templateUrl: './laboratory-report-create.component.html',
  styleUrls: ['./laboratory-report-create.component.scss']
})
export class LaboratoryReportCreateComponent implements OnInit {

  report: Report;
  users: User[] = [];

  constructor() { }

  addReport(form: NgForm) {

  };

  ngOnInit(): void {
  }

}
