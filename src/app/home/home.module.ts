import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './component/hero/hero.component';
import { NewProjectCardComponent } from './component/new-project-card/new-project-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    NewProjectCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
