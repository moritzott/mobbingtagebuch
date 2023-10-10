import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewPersonComponent } from './pages/new-person/new-person.component';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: 'overview',
        component: OverviewComponent,
    },
    {
        path: 'new',
        component: NewPersonComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PersonsRoutingModule {}
