import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { hasProjectSelectedGuard } from '../shared/guards/has-project-selected.guard';
import { ReadProjectComponent } from './pages/read-project/read-project.component';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: 'overview',
        component: OverviewComponent,
    },
    {
        path: 'new',
        component: NewProjectComponent,
    },
    {
        path: 'edit',
        component: EditProjectComponent,
        canActivate: [hasProjectSelectedGuard]
    },
    {
        path: 'read',
        component: ReadProjectComponent,
        canActivate: [hasProjectSelectedGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectsRoutingModule {}
