import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from '../report.model';
import { ReportService } from '../report.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { Data } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Products } from 'src/app/share/Enums/products.enum';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit, OnDestroy {

  totalCard: Number = 100;
  cardPerSite: number = 5;
  currentPage: number = 1;
  cardPerSitesOptions = [5,10];
  dateFrom: Date = new Date('2020-01-01');
  dateTo: Date = new Date();
  fameReport:boolean = true;
  rapeseedOilReport: boolean = true;
  ucoReport: boolean = true;
  methanolReport: boolean = true;
  products = [
    Products.FAME,
    Products.MET,
    Products.OIL_BUT,
    Products.OIL_RZ,
    Products.OIL_UCO
  ];

  reports: Report[];
  reportsSubscriber: Subscription
  count: Subscription;

  constructor(private reportService: ReportService, public dialog:MatDialog, private datePipe: DatePipe) { }

  openDialog(report: Report) {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '500px',
      data: {
        id: report.id,
        user: report.user,
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
    //this.reportService.getPaginatedReports(this.cardPerSite,this.currentPage);
    this.filterReports();
  }

  filterReports() {
    let formatedDateFrom = this.datePipe.transform(this.dateFrom,'yyyy-MM-dd');
    let formatedDateTo = this.datePipe.transform(this.dateTo, 'yyyy-MM-dd 23:59:59');

    this.reportService.getFilteredReports(this.cardPerSite,this.currentPage, formatedDateFrom, formatedDateTo,this.products);
    this.count = this.reportService.getReportsCount().subscribe((result: Number)=>{
      this.totalCard = result
    });
  }

  buildQueryCondition(value) {
    let index = null;
    this.products.find(item => {
      if(item === value) {
        index = this.products.findIndex(i=>i===item);
      }
    });
    if(index!==null) {
      this.products.splice(index,1);
    } else {
      this.products.push(value)
    }
  }

  ngOnInit(): void {
    //this.reportService.getPaginatedReports(this.cardPerSite,this.currentPage);
    this.filterReports();
    this.reportsSubscriber = this.reportService.getUpdatedReportShortList().subscribe((reports: Report[]) => {
      this.reports = reports
    })
  }

  ngOnDestroy(): void {
    this.reportsSubscriber.unsubscribe();
  }

}
