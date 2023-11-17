import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './pages/info/info.component';
import { AboutComponent } from './pages/about/about.component';
import { LicensesComponent } from './pages/licenses/licenses.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

const routes: Routes = [
    { path: '', component: InfoComponent, title: 'Info – Mobbingtagebuch' },
    {
        path: 'about',
        component: AboutComponent,
        title: 'Über – Mobbingtagebuch',
    },
    {
        path: 'licenses',
        component: LicensesComponent,
        title: 'Lizenzen – Mobbingtagebuch',
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
        title: 'Datenschutz – Mobbingtagebuch',
    },
    {
        path: 'imprint',
        component: ImprintComponent,
        title: 'Impressum – Mobbingtagebuch',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
