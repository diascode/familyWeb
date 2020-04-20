import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageserviceService } from '../services/storageservice.service';
import { AuthConstant } from '../config/auth-constant';
import { resolve } from 'url';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class HomeguardGuard implements CanActivate {
  
  constructor(private storageService: StorageserviceService,
              private router: Router,
              private alert: AlertService){}
  
  canActivate():  Promise<boolean>  {
    return new Promise(resolve =>{
      resolve(true);
      this.storageService.get(AuthConstant.AUTH).then(res =>{
        if(res){
          console.log(res)
          resolve(true)
        }else{
          this.alert.presentToast("","Usuário não informado, clique entrar")
          this.router.navigate([''])
          resolve(false)
        }
      }).catch(err => {
        this.alert.presentToast("Erro",err)
        resolve(false)
      })
    });
  }
}
