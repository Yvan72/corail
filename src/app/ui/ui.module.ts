import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule {

  constructor(){
    console.log("===> UiModule instancié");

  }

 }
