import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRoutingModule } from './import-routing.module';
import { ImportComponent } from './import.component';
import { FileComponent } from './pages/file/file.component';


@NgModule({
  declarations: [
    ImportComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    ImportRoutingModule
  ]
})
export class ImportModule { }
