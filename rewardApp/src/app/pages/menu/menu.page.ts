import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  myMenu: any[] ;

  detailPage: any;

  constructor(private menuList: MenuService,
              private router: Router,
              public navCtrl: NavController) { }

  ngOnInit(){
    
    this.grabMenu();
  }
  grabMenu(){
    this.menuList.getItemDB()
      .then(menuData => {
        this.myMenu = menuData
      });
     
  }
}
