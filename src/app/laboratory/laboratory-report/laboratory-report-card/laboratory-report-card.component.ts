import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Report } from '../../report.model';
import { ReportService } from '../../report.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-laboratory-report-card',
  templateUrl: './laboratory-report-card.component.html',
  styleUrls: ['./laboratory-report-card.component.scss']
})
export class LaboratoryReportCardComponent implements OnInit, OnDestroy {

  reports: Report[]=[];
  updatedReports: Subscription;
  @Input()count: number;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.getLastReports(this.count);
    this.updatedReports = this.reportService.getUpdatedReportShortList().subscribe((reports: Report[]) => {
      this.reports = reports;
    })
  }
  ngOnDestroy(): void {
    this.updatedReports.unsubscribe();
  }

}
