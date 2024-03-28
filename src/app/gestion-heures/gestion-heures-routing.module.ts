import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionHeuresComponent } from './gestion-heures.component';

const routes: Routes = [  { path: '', component: GestionHeuresComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionHeuresRoutingModule { }
