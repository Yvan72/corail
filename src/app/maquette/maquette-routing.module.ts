import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaquetteComponent } from './maquette.component';

const routes: Routes = [  { path: '', component: MaquetteComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaquetteRoutingModule { }
