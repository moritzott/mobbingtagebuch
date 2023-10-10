import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { SomethingWentWrongComponent } from './shared/pages/something-went-wrong/something-went-wrong.component';
import { NoProjectSelectedComponent } from './shared/pages/no-project-selected/no-project-selected.component';
import { CustomErrorComponent } from './shared/pages/custom-error/custom-error.component';
import { hasProjectSelectedGuard } from './shared/guards/has-project-selected.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'export',
        canActivate: [hasProjectSelectedGuard],
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
        path: 'reports',
        canActivate: [hasProjectSelectedGuard],
        loadChildren: () =>
            import('./reports/reports.module').then((m) => m.ReportsModule),
    },
    {
        path: 'persons',
        canActivate: [hasProjectSelectedGuard],
        loadChildren: () =>
            import('./persons/persons.module').then((m) => m.PersonsModule),
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./projects/projects.module').then((m) => m.ProjectsModule),
    },
    {
        path: 'errors',
        children: [
            {
                path: 'not-found',
                component: NotFoundComponent,
                title: '404',
            },
            {
                path: 'unspecified-error',
                component: SomethingWentWrongComponent,
                title: 'Unknown Error',
            },
            {
                path: 'no-project',
                component: NoProjectSelectedComponent,
                title: 'No project selected',
            },
            {
                path: 'custom-error',
                component: CustomErrorComponent,
                title: 'Custom Error',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
