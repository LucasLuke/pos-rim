import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControleHidricoPageRoutingModule } from './controle-hidrico-routing.module';

import { ControleHidricoPage } from './controle-hidrico.page';
import { BalancoHidricoPageModule } from './balanco-hidrico/balanco-hidrico.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControleHidricoPageRoutingModule,
    BalancoHidricoPageModule,
  ],
  declarations: [ControleHidricoPage]
})
export class ControleHidricoPageModule {}
