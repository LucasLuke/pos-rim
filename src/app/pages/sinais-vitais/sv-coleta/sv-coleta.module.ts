import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SvColetaPageRoutingModule } from './sv-coleta-routing.module';

import { SvColetaPage } from './sv-coleta.page';
import { SvColetaService } from './sv-coleta.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SvColetaPageRoutingModule
  ],
  declarations: [SvColetaPage]
})
export class SvColetaPageModule {}
