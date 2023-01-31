import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';
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
    numeroDocumento: [
      { type: "required", message: "Campo Obligatorio" },
      { type: "pattern", message: "No Permite Letras" }
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
    private auth: AuthenticateService, 
    private formBuilder: FormBuilder,
    private storage: Storage,
    private router: Router) { 

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
      document_type: new FormControl(),
      numeroDocumento: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]+$")
        ])
      ),
      career: new FormControl(),
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
  }

}