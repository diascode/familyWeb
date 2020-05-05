import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class MenuDetailsResolverService implements Resolve<any> {

  constructor(private menuService: MenuService) { }

  resolve(route: ActivatedRouteSnapshot){
    let id = route.paramMap.get('id');
    return this.menuService.getMenuByID(id);

  }
}
