import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./clients/clients.module').then((m) => m.ClientsModule)},
  {
    path: 'maquette',
    loadChildren: () =>
      import('./maquette/maquette.module').then((m) => m.MaquetteModule),
  },
  {
    path: 'gestion-heures',
    loadChildren:() =>
    import('./gestion-heures/gestion-heures.module').then((m) => m.GestionHeuresModule),
  }


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
