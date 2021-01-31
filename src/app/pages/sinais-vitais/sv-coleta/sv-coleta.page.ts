import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators}  from '@angular/forms';
import * as moment from 'moment';

import { ColetaSinais } from '../sinais-vitais';
import { AlertController, ModalController } from '@ionic/angular';
import { SvColetaService } from '../sv-coleta/sv-coleta.service';


@Component({
  selector: 'app-sv-coleta',
  templateUrl: './sv-coleta.page.html',
  styleUrls: ['./sv-coleta.page.scss'],
})
export class SvColetaPage implements OnInit {

  coletaSinais = new ColetaSinais();
  salvou = false;
  
  formColeta = new FormGroup({
    pa_Max: new FormControl('',[Validators.required ]),
    pa_Min: new FormControl('',[Validators.required]),
    pulso: new FormControl('',[Validators.required]),
    temperatura: new FormControl('',[Validators.required]),
    glicose: new FormControl('',[Validators.required])
  })

  constructor(public alertController: AlertController,
                      public mdlView: ModalController,
                      public svColeta: SvColetaService) { }

  ngOnInit() {

  }
  
  SalvarColeta(){
    
    this.coletaSinais.pa_Max = this.formColeta.value['pa_Max']
    this.coletaSinais.pa_Min = this.formColeta.value['pa_Min']
    this.coletaSinais.pulso  = this.formColeta.value['pulso']
    this.coletaSinais.temperatura = this.formColeta.value['temperatura']
    this.coletaSinais.glicose = this.formColeta.value['glicose']
    this.coletaSinais.dataColeta = moment().format("DD/MM/yyyy")
    console.log(this.coletaSinais);
    this.svColeta.coletar(this.coletaSinais);
    this.presentAlert();
    this.salvou = true;
    this.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sinais Vitais',
      message: 'Os sinais vitais foram coletados com sucesso!',
      buttons: ['OK']
    });
    await alert.present();
  }
  

  dismiss(){
    // this.dismiss();
    console.log('teste');
     this.mdlView.dismiss();
   }

  ionViewWillLeave(){
    if(this.salvou) window.location.reload();
    console.log(" ionViewWillLeave()");
  }

}
