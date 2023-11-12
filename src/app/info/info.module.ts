import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { AboutComponent } from './pages/about/about.component';
import { LicensesComponent } from './pages/licenses/licenses.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';


@NgModule({
  declarations: [
    InfoComponent,
    AboutComponent,
    LicensesComponent,
    ImprintComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
