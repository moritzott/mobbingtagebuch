import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    OverviewComponent,
    NewProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
