import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SvColetaPage } from './sv-coleta/sv-coleta.page';
import { SvColetaService } from './sv-coleta/sv-coleta.service';
import { ColetaSinais } from './sinais-vitais';
import * as moment from 'moment';

@Component({
  selector: 'app-sinais-vitais',
  templateUrl: './sinais-vitais.page.html',
  styleUrls: ['./sinais-vitais.page.scss'],
})
export class SinaisVitaisPage implements OnInit {

  dadosColeta: any;
  dataHora = moment().format("DD/MM/yyyy")


  constructor(public modalSinais: ModalController,
              private svColeta: SvColetaService) { }

  ngOnInit() {
    this.carregarDados();
  }

  async coletar(){
    const modal = await this.modalSinais.create({
      component: SvColetaPage,
      componentProps: {
      'modal': this.modalSinais
      }
    });
    console.log(this.modalSinais);
    this.carregarDados();
    return await modal.present();
  }

  carregarDados(){
    try{
      this.svColeta.getDados().subscribe(data => {
         this.dadosColeta = Object.keys(data).map(i => data[i]); 
         this.dadosColeta = this.dadosColeta[this.dadosColeta.length -1];
         console.log(this.dadosColeta.dataColeta);
         console.log(this.dataHora);
      });
   }catch(e){
     console.error(e);
   }
  }

}
