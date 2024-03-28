import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquetteRoutingModule } from './maquette-routing.module';
import { MaquetteComponent } from './maquette.component';


@NgModule({
  declarations: [
    MaquetteComponent
  ],
  imports: [
    CommonModule,
    MaquetteRoutingModule
  ]
})
export class MaquetteModule { }
