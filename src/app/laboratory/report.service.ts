import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './report.model';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

import { ReportItem } from './report-item.model';

@Injectable({providedIn: 'root'})
export class ReportService {

  private reports: Report[];
  private updatedReport = new Subject<Report[]>();

  constructor(private http: HttpClient){}

  createReport(report: Report, reportItem: ReportItem[]){

    const reportData = {
      report: report,
      reportItem: reportItem
    }
    this.http.post<{message: string, content: Report}>(environment.apiUrl+'reports',reportData).subscribe(result => {
      this.reports.push(result.content);
      this.updatedReport.next([...this.reports])
    });

  }

}
