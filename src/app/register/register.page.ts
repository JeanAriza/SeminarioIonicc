import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_message = {
    nombre: [
      { type: "required", message: "Campo Obligatorio" },
      { type: "pattern", message: "No Permite Numeros" }
    ],
    apellido: [
      { type: "required", message: "Campo Obligatorio" },
      { type: "pattern", message: "No Permite Numeros" }
    ],
    tipoDocumento: [
      { type: "required", message: "Campo Obligatorio" },
    ],
    numeroDocumento: [
      { type: "required", message: "Campo Obligatorio" },
      { type: "pattern", message: "No Permite Letras" }
    ],
    career: [
      { type: "required", message: "Campo Obligatorio" },
    ],
    email: [
      { type: "required", message: "Campo Obligatorio" },
      { type: "pattern", message: "Email Invalido" }
    ],
    password: [
      { type: "required", message: "Campo Obligatorio" },
      { type: "minLength", message: "Password Invalida" }
    ],
  }
  constructor(private navCtrl: NavController, 
    private authenticate: AuthenticateService, 
    private formBuilder: FormBuilder) { 

    this.registerForm = this.formBuilder.group({
      nombre: new FormControl("",
      Validators.compose([
        Validators.required,
        Validators.pattern("[a-z A-Z-]+$")
      ])),
      apellido: new FormControl("",
      Validators.compose([
        Validators.required,
        Validators.pattern("[a-z A-Z-]+$")
      ])),
      tipoDocumento: new FormControl("",
      Validators.compose([
        Validators.required,
      ])),
      numeroDocumento: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]+$")
        ])
      ),
      career: new FormControl("",
      Validators.compose([
        Validators.required,
      ])),
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

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }
  registerUser(register_form: any){
    console.log(register_form)
    this.authenticate.registerUser(register_form).then(() => {
      this.navCtrl.navigateForward("/login");
    });
  }
}
