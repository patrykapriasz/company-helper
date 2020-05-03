import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from '../report.model';
import { ReportService } from '../report.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit, OnDestroy {

  totalCard: number = 100;
  cardPerSite: number = 5;
  currentPage: number = 1;
  cardPerSitesOptions = [5,10];

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

  onChangePage(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.cardPerSite = event.pageSize;
    this.reportService.getPaginatedReports(this.cardPerSite,this.currentPage);
  }

  ngOnInit(): void {
    this.reportService.getPaginatedReports(this.cardPerSite,this.currentPage);
    this.reportsSubscriber = this.reportService.getUpdatedReportShortList().subscribe((reports: Report[]) => {
      this.reports = reports
    })
  }

  ngOnDestroy(): void {
    this.reportsSubscriber.unsubscribe();
  }

}
