import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SvColetaPage } from './sv-coleta.page';

const routes: Routes = [
  {
    path: '',
    component: SvColetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SvColetaPageRoutingModule {}
