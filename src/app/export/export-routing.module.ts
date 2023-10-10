import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportComponent } from './export.component';
import { FileComponent } from './pages/file/file.component';
import { PdfComponent } from './pages/pdf/pdf.component';

const routes: Routes = [
    { path: '', component: ExportComponent },
    {
        path: 'file',
        component: FileComponent,
    },
    {
        path: 'pdf',
        component: PdfComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExportRoutingModule {}
