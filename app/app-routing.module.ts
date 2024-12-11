import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'peso-medio', pathMatch: 'full' },
  { path: 'peso-medio', loadComponent: () => import('./peso-medio/peso-medio.component').then(m => m.PesoMedioComponent) },
  { path: 'peso-meio-pesado', loadComponent: () => import('./peso-meio-pesado/peso-meio-pesado.component').then(m => m.PesoMeioPesadoComponent) },
  { path: 'peso-pesado', loadComponent: () => import('./peso-pesado/peso-pesado.component').then(m => m.PesoPesadoComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
