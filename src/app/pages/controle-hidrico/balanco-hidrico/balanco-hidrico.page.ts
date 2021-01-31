import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import {FormControl, FormGroup, Validators}  from '@angular/forms';
import * as moment from 'moment';
import { ControleHidrico } from './balancoHidrico';
import { BalancoHidricoService } from '../balanco-hidrico.service';

@Component({
  selector: 'app-balanco-hidrico',
  templateUrl: './balanco-hidrico.page.html',
  styleUrls: ['./balanco-hidrico.page.scss'],
})
export class BalancoHidricoPage implements OnInit {

  salvou = false;
  balancoHidrico = new ControleHidrico();

  formHidrico = new FormGroup({
    qtdIngerida: new FormControl('',[Validators.required ]),
    qtdEliminada: new FormControl('',[Validators.required])
  })  

  constructor(public viewModal: ModalController,
              public alertController: AlertController,
              public svBalanco: BalancoHidricoService) { }

  ngOnInit() {
  }

  dismiss(){
     this.viewModal.dismiss();
   }

   Salvar(){
     try{
        console.log("oi")
        this.balancoHidrico.qtdIngerida = this.formHidrico.value['qtdIngerida'];
        this.balancoHidrico.qtdEliminada = this.formHidrico.value['qtdEliminada'];
        this.balancoHidrico.dataControle = moment().format("DD/MM/yyyy hh:mm");
        this.svBalanco.coletaBalanco(this.balancoHidrico);   
        this.salvou = true;
        this.dismiss();
     }catch(e){
        console.error(e);
     }
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Balanço Hidrico',
      message: 'Os dados do Balanço Hidrico foram coletados com sucesso!',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  ionViewWillLeave(){
    if(this.salvou) window.location.reload();
    console.log(" ionViewWillLeave()");
  }
  
}
