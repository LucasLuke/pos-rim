import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'medicacao',
    loadChildren: () => import('./pages/medicacao/medicacao.module').then( m => m.MedicacaoPageModule)
  },
  {
    path: 'sinais-vitais',
    loadChildren: () => import('./pages/sinais-vitais/sinais-vitais.module').then( m => m.SinaisVitaisPageModule)
  },
  {
    path: 'controle-hidrico',
    loadChildren: () => import('./pages/controle-hidrico/controle-hidrico.module').then( m => m.ControleHidricoPageModule)
  },
  {
    path: 'informacoes',
    loadChildren: () => import('./pages/informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
