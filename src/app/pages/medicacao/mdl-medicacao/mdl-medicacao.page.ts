import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ConfMedicacaoService } from './conf-medicacao.service';
import {ConfMedicacao} from './confMedicacao';

@Component({
  selector: 'app-mdl-medicacao',
  templateUrl: './mdl-medicacao.page.html',
  styleUrls: ['./mdl-medicacao.page.scss'],
})
export class MdlMedicacaoPage implements OnInit {

  confMed = new ConfMedicacao();

  constructor(public viewModal: ModalController, private confMedicService: ConfMedicacaoService) {}

  formConfig = new FormGroup({
    hora: new FormControl('', [
      Validators.required
    ]),
    intervalo: new FormControl('',[
        Validators.required
    ]),
    notificar: new FormControl('',[
      Validators.required
    ])
  });

  ngOnInit() {
  }
 

  Salvar(){
    this.confMed.horaInicial = this.formConfig.value['hora'];
    this.confMed.intervalo = this.formConfig.value['intervalo'];
    this.confMed.notificar = this.formConfig.value['notificar'];
    this.confMedicService.insert(this.confMed);
    //console.log(this.formConfig.value);
  }
  dismiss(){
   // this.dismiss();
   console.log('teste');
    this.viewModal.dismiss();
  }

}
