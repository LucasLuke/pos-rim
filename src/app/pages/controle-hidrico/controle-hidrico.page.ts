import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BalancoHidricoPage } from './balanco-hidrico/balanco-hidrico.page';
import { BalancoHidricoService } from './balanco-hidrico.service';

@Component({
  selector: 'app-controle-hidrico',
  templateUrl: './controle-hidrico.page.html',
  styleUrls: ['./controle-hidrico.page.scss'],
})
export class ControleHidricoPage implements OnInit {

  dadosBalanco: any;

  constructor(public modalBalanco: ModalController,
              public svBalanco: BalancoHidricoService) { }

  ngOnInit() {
    this.carregarDados();
  }

  async presentModal(){
    console.log('entrou')
    const modal = await this.modalBalanco.create({
      component: BalancoHidricoPage,
      componentProps: {
      'modal': this.modalBalanco
      }
    });
    console.log(this.modalBalanco);
    return await modal.present();
  }


  carregarDados(){
    try{
      this.svBalanco.getBalanco().subscribe(data => {
         this.dadosBalanco = Object.keys(data).map(i => data[i]); 
         this.dadosBalanco = this.dadosBalanco[this.dadosBalanco.length -1];
         console.log(this.dadosBalanco);
         console.log(this.dadosBalanco);
      });
   }catch(e){
     console.error(e);
   }
  }


  dismiss(){
    this.modalBalanco.dismiss({
      'dismiss': true
    })
  }
  
}
