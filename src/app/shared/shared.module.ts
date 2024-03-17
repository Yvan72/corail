import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { HeaderTableComponent } from './component/header-table/header-table.component';



@NgModule({
  declarations: [
    HeaderTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TemplatesModule,
    HeaderTableComponent,
  ],
})
export class SharedModule {


  constructor(){
    console.log("===> SharedModule instancié");

  }

 }
