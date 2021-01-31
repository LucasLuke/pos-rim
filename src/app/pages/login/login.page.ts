import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, MenuController } from '@ionic/angular';
import { duration } from 'moment';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  public user: any;
  formLogin = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.min(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private router: Router,
              public firebaseauth: AngularFireAuth,
              public toastCtrl: ToastController,
              public menuCtrl: MenuController) {
                
           firebaseauth.user.subscribe((data=> {
              this.user = data;
              console.log(this.user);
           }));    
  }

  ngOnInit() {  }

  onLogar(){
    
    let login = this.formLogin.value["username"];
    let password = this.formLogin.value["password"];

    this.firebaseauth.signInWithEmailAndPassword(login, password)
    .then(()=>{
      this.menuCtrl.enable(true);
      this.exibirToast("Login efetuado com sucesso!");
      this.router.navigateByUrl("/home");
    }).catch((error)=>{
      this.exibirToast("Não foi possível efetuar o login. Entre em contato com nossa equipe!");
    });
  }

  async exibirToast(msg: any){
    const toast = await this.toastCtrl.create({duration: 3000,
      position:'bottom',
      message: msg
    });
    toast.present(); 
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

}
