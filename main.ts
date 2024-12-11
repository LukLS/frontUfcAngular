import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';  // Importa o RouterModule e o tipo Routes

// Define explicitamente o tipo de routes
const routes: Routes = [
  { path: '', redirectTo: 'peso-medio', pathMatch: 'full' },
  { path: 'peso-medio', loadComponent: () => import('./app/peso-medio/peso-medio.component').then(m => m.PesoMedioComponent) },
  { path: 'peso-meio-pesado', loadComponent: () => import('./app/peso-meio-pesado/peso-meio-pesado.component').then(m => m.PesoMeioPesadoComponent) },
  { path: 'peso-pesado', loadComponent: () => import('./app/peso-pesado/peso-pesado.component').then(m => m.PesoPesadoComponent) },
];

// Registra as rotas diretamente no bootstrap
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],  // Registra as rotas diretamente no bootstrap
});
