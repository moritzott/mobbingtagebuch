import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportComponent } from './export.component';
import { FileComponent } from './pages/file/file.component';
import { PdfComponent } from './pages/pdf/pdf.component';

const routes: Routes = [
    { path: '', component: ExportComponent, title: 'Export – Mobbingtagebuch' },
    {
        path: 'file',
        component: FileComponent,
        title: 'Dateiexport – Mobbingtagebuch',
    },
    {
        path: 'pdf',
        component: PdfComponent,
        title: 'PDF-Export – Mobbingtagebuch',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExportRoutingModule {}
