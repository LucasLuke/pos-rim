import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancoHidricoPageRoutingModule } from './balanco-hidrico-routing.module';

import { BalancoHidricoPage } from './balanco-hidrico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BalancoHidricoPageRoutingModule
  ],
  declarations: [BalancoHidricoPage]
})
export class BalancoHidricoPageModule {}
