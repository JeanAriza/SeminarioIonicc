import { promises } from 'dns';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {

  urlServer = "https://librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

  
  constructor(private storage: Storage,
    private http: HttpClient) { }

 
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




  loginUserW(credentials: any){
    return new Promise( (accept, reject) => {
      let params = {
        "user": credentials
      }
      this.http.post(`${this.urlServer}login`, params, this.httpHeaders).subscribe( (data: any) => {
        if (data.status == "OK") {
          accept(data);
        }else{
          reject(data.errors)
        }
      }, (error) => {
        reject("Error en Login")
      })
    })
  }

  registerUserW(userData: any){
    let params = {
      "user": userData
    }
    return new Promise( (accept, reject) => {
      this.http.post(`${this.urlServer}signup`,params, this.httpHeaders).subscribe((data: any) => {
        if (data.status == "OK"){
          accept(data.msg);
        }else{
          reject(data.errors)
        }
      },(error) => {
        reject("Error al intentar registrarse")
      })
    })
  }
}

