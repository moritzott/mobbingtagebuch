import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { NewReportComponent } from './pages/new-report/new-report.component';
import { EditReportComponent } from './pages/edit-report/edit-report.component';
import { ReadReportComponent } from './pages/read-report/read-report.component';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: 'overview',
        component: OverviewComponent,
    },
    {
        path: 'new',
        component: NewReportComponent,
    },
    {
        path: 'edit',
        component: EditReportComponent
    },
    {
        path: 'read',
        component: ReadReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportsRoutingModule {}
