import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './report.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ReportService {

  private reports: Report[];
  private updatedReport = new Subject<Report[]>();

  constructor(private http: HttpClient){}

  createReport(report: Report){

    this.http.post<{message: string, content: Report}>('',report).subscribe(result => {
      this.reports.push(result.content);
      this.updatedReport.next([...this.reports])
    });

  }

}
