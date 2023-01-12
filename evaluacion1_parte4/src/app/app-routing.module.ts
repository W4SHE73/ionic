import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'divisas',
    redirectTo: 'divisas',
    pathMatch: 'full'
  },
  {
    path: 'eltiempo',
    redirectTo: 'eltiempo',
    pathMatch: 'full'
  },
  {
    path: 'informacion',
    redirectTo: 'informacion',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'noticias',
    redirectTo: 'noticias',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'nf404',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'eltiempo',
    loadChildren: () => import('./pages/eltiempo/eltiempo.module').then( m => m.EltiempoPageModule)
  },
  {
    path: 'nf404',
    loadChildren: () => import('./pages/nf404/nf404.module').then( m => m.Nf404PageModule)
  },
  {
    path: 'divisas',
    loadChildren: () => import('./pages/divisas/divisas.module').then( m => m.DivisasPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
