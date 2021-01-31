import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BalancoHidricoService {

  constructor(private db: AngularFireDatabase,
              private http: HttpClient ) { }

  coletaBalanco(coletaBalanco: any){
    try{
      this.db.database.ref('/balancoHidrico').push(coletaBalanco)
      .then(() => {
          return true;
      });
    }catch(e){
      console.error(e);
    }
  }

  getBalanco(){
    try{
     return this.http.get('https://pos-rim.firebaseio.com/balancoHidrico.json');
    }catch(e){
      console.error(e);
    };
  }
}
