import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LaboratoryComponent } from './laboratory.component';
import { LaboratoryReportComponent } from './laboratory-report/laboratory-report.component';
import { LaboratoryReportCreateComponent } from './laboratory-report/laboratory-report-create/laboratory-report-create.component';
import { LaboratoryReportListComponent } from './laboratory-report/laboratory-report-list/laboratory-report-list.component';
import {  LaboratoryReportListItemComponent } from './laboratory-report/laboratory-report-list-item/laboratory-report-list-item.component'
import { AngularMaterialModule } from '../angular-material.module';
import { ReportItemComponent } from './report-item/report-item.component';
import { LaboratoryRouting } from './laboratory-routing.module';
import { LaboratoryDashboardComponent } from './laboratory-dashboard/laboratory-dashboard.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';

@NgModule({
  declarations: [
    LaboratoryComponent,
    LaboratoryReportComponent,
    LaboratoryReportCreateComponent,
    LaboratoryReportListComponent,
    LaboratoryReportListItemComponent,
    ReportItemComponent,
    LaboratoryDashboardComponent,
    ReportCardComponent,
    ReportDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    LaboratoryRouting,
    FlexLayoutModule
  ]
})
export class LaboratoryModule {}
