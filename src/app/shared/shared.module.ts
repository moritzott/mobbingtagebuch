import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SomethingWentWrongComponent } from './pages/something-went-wrong/something-went-wrong.component';
import { CustomErrorComponent } from './pages/custom-error/custom-error.component';
import { NoProjectSelectedComponent } from './pages/no-project-selected/no-project-selected.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageContainerComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    SomethingWentWrongComponent,
    CustomErrorComponent,
    NoProjectSelectedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageContainerComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    SomethingWentWrongComponent,
    CustomErrorComponent,
    NoProjectSelectedComponent,
  ]
})
export class SharedModule { }
