import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './pages/file/file.component';

const routes: Routes = [
    { path: '', component: FileComponent, title: 'Import – Mobbingtagebuch' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImportRoutingModule {}
