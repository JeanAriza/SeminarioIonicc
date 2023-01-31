import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router){}
  async canActivate(){
    const home = await this.storage.get('IsHomeShowed');

    if(home){
      return true;
    }else{
      this.router.navigateByUrl("/intro");
      return false;
    }
  }
}