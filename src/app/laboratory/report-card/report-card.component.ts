import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from '../report.model';
import { ReportService } from '../report.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit, OnDestroy {

  count: number = 10;

  reports: Report[];
  reportsSubscriber: Subscription

  constructor(private reportService: ReportService, public dialog:MatDialog) { }

  openDialog(report: Report) {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '500px',
      data: {
        id: report.id,
        description: report.description,
        createdAt: report.createdAt,
        product: report.product,
        warehouse: report.warehouse,
        reportItems: report.reportItems
      }
    });
  }

  ngOnInit(): void {
    this.reportService.getLastReports(this.count);
    this.reportsSubscriber = this.reportService.getUpdatedReportShortList().subscribe((reports: Report[]) => {
      this.reports = reports
    })
  }

  ngOnDestroy(): void {
    this.reportsSubscriber.unsubscribe();
  }

}
