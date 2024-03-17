import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    UiModule,TemplatesModule
  ]
})

export class CoreModule {
  constructor(){
    console.log("===> CoreModule instancié");

  }
 }
