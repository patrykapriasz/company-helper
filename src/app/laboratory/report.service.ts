import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Report } from './report.model';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

import { ReportItem } from './report-item.model';

@Injectable({providedIn: 'root'})
export class ReportService {

  private report: Report;
  private updatedReport = new Subject<Report>();

  private reports: Report[] = [];
  private updatedReports = new Subject<Report[]>();

  private reportsShortList: Report[];
  private updatedreportsShortList = new Subject<Report[]>();


  constructor(private http: HttpClient){}

  createReport(report: Report, reportItem: ReportItem[]){
    const reportData = {
      report: report,
      reportItem: reportItem
    }

    this.http.post<{message: string, content: Report}>(environment.apiUrl+'/reports',reportData).subscribe(result => {
      report.id = result.content.id;
      report.user = result.content.user;
      this.reports.push(report);
      this.reportsShortList.unshift(report);
      this.reportsShortList.pop();
      this.updatedReports.next([...this.reports]);
      this.updatedreportsShortList.next([...this.reportsShortList]);
    });
  }

  updateReport(report: Report, reportItem: ReportItem[]) {
    const reportData = {
      report: report,
      reportItems: reportItem
    }

    this.http.patch<{message: string, content: {report:Report, reportItems:ReportItem[]}}>(environment.apiUrl+'/reports/edit/'+report.id,reportData).subscribe(result=> {
      console.log(result);
    })
  }

  // getReportById(id: Number) {
  //   this.http.get<{message: string, content: Report}>(environment.apiUrl+'/reports/'+id).subscribe(result => {
  //     console.log(result);
  //     this.report = result.content;
  //     this.updatedReport.next(this.report);
  //   })
  // }

  getReportById(id: Number) {
    return {...this.reportsShortList.find(r=>r.id === id)}
  }

  getPaginatedReports(limitPerSite: number, siteIndex: number) {
    const params = `/${limitPerSite}/${siteIndex}`;
    this.http.get<{message: string, content: Report[]}>(environment.apiUrl+'/reports/last'+params)
      .subscribe(result => {
        this.reportsShortList = result.content,
        this.updatedreportsShortList.next([...this.reportsShortList])
    });
  }

  getUpdatedReport() {
    return this.updatedReport.asObservable();
  }

  getUpdatedReports() {
    return this.updatedReports.asObservable();
  }

  getUpdatedReportShortList() {
    return this.updatedreportsShortList.asObservable();
  }

}
