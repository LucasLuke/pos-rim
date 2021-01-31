import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinaisVitaisPage } from './sinais-vitais.page';

const routes: Routes = [
  {
    path: '',
    component: SinaisVitaisPage,
    children: [
      {path:"/sv-coleta", loadChildren: () => import('../../pages/sinais-vitais/sv-coleta/sv-coleta.module').then( m => m.SvColetaPageModule)}
    ]
  },
  {
    path: 'sv-coleta',
    loadChildren: () => import('./sv-coleta/sv-coleta.module').then( m => m.SvColetaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinaisVitaisPageRoutingModule {}
