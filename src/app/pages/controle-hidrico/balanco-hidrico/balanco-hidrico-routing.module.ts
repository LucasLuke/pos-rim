import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancoHidricoPage } from './balanco-hidrico.page';

const routes: Routes = [
  {
    path: '',
    component: BalancoHidricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancoHidricoPageRoutingModule {}
