import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { MdlMedicacaoPage } from './mdl-medicacao/mdl-medicacao.page';

@Component({
  selector: 'app-medicacao',
  templateUrl: './medicacao.page.html',
  styleUrls: ['./medicacao.page.scss'],
})
export class MedicacaoPage implements OnInit {
  

  constructor(public mdlSettings: ModalController) { }

  ngOnInit() {
  }

  async presentModal(){
    const modal = await this.mdlSettings.create({
      component: MdlMedicacaoPage,
      componentProps: {
      'modal': this.mdlSettings
      }
    });
    console.log(this.mdlSettings);
    return await modal.present();
  }

  dismiss(){
    this.mdlSettings.dismiss({
      'dismiss': true
    })
  }

}
