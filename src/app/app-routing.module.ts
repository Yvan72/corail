import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./clients/clients.module').then((m) => m.ClientsModule)},
 // { path: '', redirectTo: 'clients', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(){
    console.log("=> AppRoutingModule instancié");

  }


}
