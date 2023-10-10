import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewReportComponent } from './pages/new-report/new-report.component';


@NgModule({
  declarations: [
    ReportsComponent,
    OverviewComponent,
    NewReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
