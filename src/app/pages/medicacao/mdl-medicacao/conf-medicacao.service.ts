import { Injectable } from '@angular/core';

import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../../database.provider';
import { ConfMedicacao } from './confMedicacao';

@Injectable({
  providedIn: 'root'
})
export class ConfMedicacaoService {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(confMedicacao: ConfMedicacao) {
    return this.dbProvider.getDB()
        .then((db: SQLiteObject) => {
          let sql = 'insert into confMedicacao (horaInicial, intervalo, notificar) values (?, ?, ?)';
          let data = [confMedicacao.horaInicial, confMedicacao.intervalo, confMedicacao.notificar];
          return db.executeSql(sql,data)
          .catch((e)=>console.error(e));
        }).catch((e)=> console.error(e));
  }


  public async update(confMedicacao: ConfMedicacao) {
   /* try {
      const db = await this.dbProvider.getDB();
      let sql = 'update confMedicacao set horaInical=?, intervalo=?, notificar=?';
      let data = [confMedicacao.horaInicial, confMedicacao.intervalo, confMedicacao.notificar];
      try {
        return db.executeSql(sql, data);
      }
      catch (e) {
        return console.error(e);
      }
    }
    catch (e_1) {
      return console.error(e_1);
    }   */
  }

  /**
   * get
   */
  public async get() {
    try {
      const db = await this.dbProvider.getDB();
      let sql = 'select * from confMedicacao';
      var data: any[];
      try {
        const data_1 = await db.executeSql(sql, data);
        if (data_1.rows.length > 0) {
          let item = data_1.rows.item(0);
          let conf = new ConfMedicacao();
          conf.id = item.id;
          conf.horaInicial = item.horaInicial;
          conf.intervalo = item.intervalo;
          conf.notificar = item.notificar;
          return conf;
        }
        return null;
      }
      catch (e) {
        return console.log(e);
      }
    }
    catch (e_1) {
      return console.log(e_1);
    }    
  }

}

