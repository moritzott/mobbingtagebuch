import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewReportComponent } from './pages/new-report/new-report.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EditReportComponent } from './pages/edit-report/edit-report.component';
import { ReadReportComponent } from './pages/read-report/read-report.component';


@NgModule({
  declarations: [
    ReportsComponent,
    OverviewComponent,
    NewReportComponent,
    EditReportComponent,
    ReadReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ReportsModule { }
