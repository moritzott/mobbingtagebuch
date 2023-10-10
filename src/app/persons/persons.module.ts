import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewPersonComponent } from './pages/new-person/new-person.component';


@NgModule({
  declarations: [
    PersonsComponent,
    OverviewComponent,
    NewPersonComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule
  ]
})
export class PersonsModule { }
