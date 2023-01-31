import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_message = {
    email: [
      { type: "required", message: "Campo Obligatorio" },
      { type: "pattern", message: "Email Invalido" }
    ],
    password: [
      { type: "required", message: "Campo Obligatorio" },
      { type: "minLength", message: "Password Invalida" }
    ]
  }
  errorMessage: any;
  constructor(private formBuilder: FormBuilder,    
    private auth: AuthenticateService, 
    private navCtrl: NavController,
    private storage: Storage,
    private alertController: AlertController,
    private router: Router){ 

    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
  }

  ngOnInit() {
  }

  loginUser(credentials: any){
    console.log(credentials);
    this.auth.loginUser(credentials).then((res: any) =>{
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/menu/home")
    }).catch(error => {
      //this.errorMessage = error 
      this.presentAlert("Houston,", "tenemos un problema ", error)
    });
  }

 async presentAlert(header: any, subHeader: any, message: any){
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['Aceptar']
    })
    await alert.present();
  }
  registrate(){
    this.router.navigateByUrl("/register");
  }

}