import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboratoryReportComponent } from './laboratory-report/laboratory-report.component';
import { AuthGuard } from '../auth/auth.guard';
import { LaboratoryComponent } from './laboratory.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { LaboratoryDashboardComponent } from './laboratory-dashboard/laboratory-dashboard.component';

const routes: Routes = [
    { path: '', component: LaboratoryComponent, canActivate:[AuthGuard], children:[
      { path: 'reports/card-list', component: ReportCardComponent },
      { path: 'dashboard', component: LaboratoryDashboardComponent },
      { path: 'reports', component:LaboratoryReportComponent },
      { path: 'reports/edit/:reportId', component: LaboratoryReportComponent},
  ]},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LaboratoryRouting {

}
