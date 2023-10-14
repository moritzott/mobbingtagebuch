import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { FormsModule } from '@angular/forms';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    OverviewComponent,
    NewProjectComponent,
    EditProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
