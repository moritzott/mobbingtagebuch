import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'export',
        loadChildren: () =>
            import('./export/export.module').then((m) => m.ExportModule),
    },
    {
        path: 'import',
        loadChildren: () =>
            import('./import/import.module').then((m) => m.ImportModule),
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('./settings/settings.module').then((m) => m.SettingsModule),
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'info',
        loadChildren: () =>
            import('./info/info.module').then((m) => m.InfoModule),
    },
    {
        path: 'report',
        loadChildren: () =>
            import('./report/report.module').then((m) => m.ReportModule),
    },
    {
        path: 'reports',
        loadChildren: () =>
            import('./reports/reports.module').then((m) => m.ReportsModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
