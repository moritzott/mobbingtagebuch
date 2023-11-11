import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewPersonComponent } from './pages/new-person/new-person.component';
import { EditPersonComponent } from './pages/edit-person/edit-person.component';
import { hasProjectSelectedGuard } from '../shared/guards/has-project-selected.guard';
import { ReadPersonComponent } from './pages/read-person/read-person.component';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: 'overview',
        component: OverviewComponent,
        title: 'Personenübersicht – Mobbingtagebuch',
    },
    {
        path: 'new',
        component: NewPersonComponent,
        title: 'Neue Person – Mobbingtagebuch',
    },
    {
        path: 'edit',
        component: EditPersonComponent,
        canActivate: [hasProjectSelectedGuard],
        title: 'Person bearbeiten – Mobbingtagebuch',
    },
    {
        path: 'read',
        component: ReadPersonComponent,
        canActivate: [hasProjectSelectedGuard],
        title: 'Personendetails – Mobbingtagebuch',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PersonsRoutingModule {}
