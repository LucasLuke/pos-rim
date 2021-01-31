import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdlMedicacaoPageRoutingModule } from './mdl-medicacao-routing.module';

import { MdlMedicacaoPage } from './mdl-medicacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MdlMedicacaoPageRoutingModule
  ],
  declarations: [MdlMedicacaoPage]
})
export class MdlMedicacaoPageModule {}
