import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleHidricoPage } from './controle-hidrico.page';

const routes: Routes = [
  {
    path: '',
    component: ControleHidricoPage
  },
  {
    path: 'balanco-hidrico',
    loadChildren: () => import('./balanco-hidrico/balanco-hidrico.module').then( m => m.BalancoHidricoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControleHidricoPageRoutingModule {}
