import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinaisVitaisPageRoutingModule } from './sinais-vitais-routing.module';

import { SinaisVitaisPage } from './sinais-vitais.page';
import {SvColetaPageModule} from './sv-coleta/sv-coleta.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinaisVitaisPageRoutingModule,
    SvColetaPageModule
  ],
  declarations: [SinaisVitaisPage]
})
export class SinaisVitaisPageModule {}
