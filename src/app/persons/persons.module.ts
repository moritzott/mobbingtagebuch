import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewPersonComponent } from './pages/new-person/new-person.component';
import { EditPersonComponent } from './pages/edit-person/edit-person.component';
import { ReadPersonComponent } from './pages/read-person/read-person.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonsComponent,
    OverviewComponent,
    NewPersonComponent,
    EditPersonComponent,
    ReadPersonComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    FormsModule
  ]
})
export class PersonsModule { }
