import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicacaoPageRoutingModule } from './medicacao-routing.module';

import { MedicacaoPage } from './medicacao.page';
import { MdlMedicacaoPageRoutingModule } from './mdl-medicacao/mdl-medicacao-routing.module';
import { MdlMedicacaoPageModule } from './mdl-medicacao/mdl-medicacao.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicacaoPageRoutingModule,
    MdlMedicacaoPageModule
  ],
  declarations: [MedicacaoPage]
})
export class MedicacaoPageModule {}
