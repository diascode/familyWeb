import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageserviceService } from '../services/storageservice.service';
import { AlertService } from '../services/alert.service';
import { AuthConstant } from '../config/auth-constant';

@Injectable({
  providedIn: 'root'
})
export class IndexguardGuard implements CanActivate {

  constructor(private storageService: StorageserviceService,
              private router: Router,
              private alert: AlertService) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      resolve(true);
      this.storageService.get(AuthConstant.AUTH).then(res => {
        if (res) {
          this.router.navigate(['home/feed'])
          resolve(false);// false means guard will not block user and it will redirect to home as storage is present
        } else {
          resolve(true)
        }
      }).catch(err => {
        this.alert.presentToast("Erro", err)
        resolve(false)
      })
    });
  }

}
