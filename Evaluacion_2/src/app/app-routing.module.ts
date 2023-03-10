import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
   redirectUnauthorizedTo,
   redirectLoggedInTo,
   canActivate,
  } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
//const redirectLoggedInToHome = () => redirectLoggedInTo(['']);


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
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
    path: 'noticias',
    redirectTo: 'noticias',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'malware',
    redirectTo: 'malware',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'nf404',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => 
      import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
      //...canActivate(redirectLoggedInToHome) 
  },
  {
    path: 'informacion',
    loadChildren: () => 
      import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'eltiempo',
    loadChildren: () =>
      import('./pages/eltiempo/eltiempo.module').then( m => m.EltiempoPageModule)
  },
  {
    path: 'divisas',
    loadChildren: () => 
      import('./pages/divisas/divisas.module').then( m => m.DivisasPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => 
      import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'malware',
    loadChildren: () => import('./pages/malware/malware.module').then( m => m.MalwarePageModule)
  },
  {
    path: 'login',
    loadChildren: () => 
      import('./pages/login/login.module').then( m => m.LoginPageModule),
    
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'nf404',
    loadChildren: () => 
      import('./pages/nf404/nf404.module').then( m => m.Nf404PageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
