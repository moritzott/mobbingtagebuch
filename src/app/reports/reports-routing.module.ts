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
        title: 'Berichtübersicht – Mobbingtagebuch',
    },
    {
        path: 'new',
        component: NewReportComponent,
        title: 'Neuer Bericht – Mobbingtagebuch',
    },
    {
        path: 'edit',
        component: EditReportComponent,
        title: 'Bericht bearbeiten – Mobbingtagebuch',
    },
    {
        path: 'read',
        component: ReadReportComponent,
        title: 'Berichtdetails – Mobbingtagebuch',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportsRoutingModule {}
