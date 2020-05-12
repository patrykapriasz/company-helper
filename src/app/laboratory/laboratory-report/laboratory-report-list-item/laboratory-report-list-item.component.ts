import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Report } from '../../report.model';
import { ReportService } from '../../report.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-laboratory-report-list-item',
  templateUrl: './laboratory-report-list-item.component.html',
  styleUrls: ['./laboratory-report-list-item.component.scss']
})
export class LaboratoryReportListItemComponent implements OnInit, OnDestroy {

  reports: Report[]=[];
  updatedReports: Subscription;
  @Input()count: number;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.getPaginatedReports(this.count,1);
    this.updatedReports = this.reportService.getUpdatedReportShortList().subscribe((reports: Report[]) => {
      this.reports = reports;
    })
  }
  ngOnDestroy(): void {
    this.updatedReports.unsubscribe();
  }

}
