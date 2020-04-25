import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Report } from '../report.model';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-laboratory-report',
  templateUrl: './laboratory-report.component.html',
  styleUrls: ['./laboratory-report.component.scss']
})
export class LaboratoryReportComponent implements OnInit {


  constructor(private reportService: ReportService) { }

  ngOnInit(): void {

  }

}
