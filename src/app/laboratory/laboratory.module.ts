import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LaboratoryComponent } from './laboratory.component';
import { LaboratoryReportComponent } from './laboratory-report/laboratory-report.component';
import { LaboratoryReportCreateComponent } from './laboratory-report/laboratory-report-create/laboratory-report-create.component';
import { LaboratoryReportListComponent } from './laboratory-report/laboratory-report-list/laboratory-report-list.component';
import { LaboratoryReportCardComponent } from './laboratory-report/laboratory-report-card/laboratory-report-card.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReportItemComponent } from './report-item/report-item.component';

@NgModule({
  declarations: [
    LaboratoryComponent,
    LaboratoryReportComponent,
    LaboratoryReportCreateComponent,
    LaboratoryReportListComponent,
    LaboratoryReportCardComponent,
    ReportItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class LaboratoryModule {}
