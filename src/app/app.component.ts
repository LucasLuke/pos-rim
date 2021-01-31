import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseProvider } from './database.provider';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  verifyPage: boolean;
  public selectedIndex = 0;
  
  public appPages = [
    {
      title: 'Inicio',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Medicação',
      url: 'medicacao',
      icon: 'flask'
    },
    {
      title: 'Sinais Vitais',
      url: 'sinais-vitais',
      icon: 'pulse'
    },
    {
      title: 'Controle Hídrico',
      url: 'controle-hidrico',
      icon: 'water'
    },
    {
      title: 'Informações Gerais',
      url: 'informacoes',
      icon: 'information-circle'
    },
    {
      title: 'Sair',
      url: 'login',
      icon: 'log-out'
    }
  ];

  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    dbProvider: DatabaseProvider
  ) {
    dbProvider.createDatabase();    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if(path == 'login'){
      this.verifyPage = true;
    }
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
  }
}
