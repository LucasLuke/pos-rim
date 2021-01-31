import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SvColetaService {

  dadosColeta: any;

  constructor( private db: AngularFireDatabase,
               private http: HttpClient ) { }

  coletar(coletarSinais: any){
    console.log(coletarSinais)
    try{
      this.db.database.ref('/coleta').push(coletarSinais)
      .then(() => {
          return true;
      });
    }catch(e){
      console.error(e);
    }
  }

  getDados(){
    try{
     return this.http.get('https://pos-rim.firebaseio.com/coleta.json');
     // return this.dadosColeta;
    }catch(e){
      console.error(e);
    }
  }
}
