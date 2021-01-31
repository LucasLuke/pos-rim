import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class DatabaseProvider {

  constructor(private sqlite: SQLite, private platform: Platform) { }

  public getDB(){
   return this.sqlite.create({
      name: 'configMed.db',
      location: 'default'
    });
    //console.log(aux);
  }

  public async createDatabase(){
    return this.getDB()
          .then((db: SQLiteObject) => {
            this.createTables(db);
          })
          .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject){
    console.log('entrou');
  return  db.sqlBatch([['CREATE TABLE IF NOT EXITS confMedicacao (id integer primary key AUTOINCREMENT NOT NULL, horaInicial TEXT, intervalo TEXT, notificar boolean)']])
   .then(()=> console.log('Tabelas criadas'))
   .catch(e=> console.error('Erro ao criar as tabelas', e));
  }

 /* 
  private createInsertDefaultItems(db: SQLiteObject){
    db.executeSql('select COUNT(id) as qtd from confMedicacao', {})
    .then((data: any) => {
      if (data.rows.item(0).qtd == 0){
        db.sqlBatch([
          ['insert into confMedicacao (horaInicial)']
        ])

      }
    }
  } */
}
