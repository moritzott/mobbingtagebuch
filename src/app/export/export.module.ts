import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportRoutingModule } from './export-routing.module';
import { ExportComponent } from './export.component';
import { FileComponent } from './pages/file/file.component';
import { PdfComponent } from './pages/pdf/pdf.component';


@NgModule({
  declarations: [
    ExportComponent,
    FileComponent,
    PdfComponent
  ],
  imports: [
    CommonModule,
    ExportRoutingModule
  ]
})
export class ExportModule { }
