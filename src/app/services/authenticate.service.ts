import { promises } from 'dns';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials: any){
    
   return new Promise((accept, reject)=>{
    const descriptar = this.GetRegisterUser();
    descriptar.then(usuario => {
      if ( atob(usuario.password) == credentials.password && usuario.email == credentials.email)
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    })
    });
  }
  registerUser(userData: any){
    console.log(userData);
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }

  GetRegisterUser(){
    return this.storage.get("user");
  }
}
