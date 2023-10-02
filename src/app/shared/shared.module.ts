import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    PageContainerComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageContainerComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
