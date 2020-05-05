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
  chooseItem(id){
    var arrayNumber = 0;
    console.log(arrayNumber);
    for (const i in this.myMenu) {
      if( this.myMenu[i].id === id){
        
        console.log(this.myMenu[i]) ;
      }
      arrayNumber++;
    }
    console.log(this.menuList.getMenuByID(id));
    this.router.navigateByUrl('/home/menu-detail/6');
    //this.router.navigate(['/home/menu-detail/id'], { queryParams: { id: id } });
    
  }
 /*gotoConsulting(questionId: number): void {   

    let navigationExtras: NavigationExtras = {
       queryParams: { 'origine': questionId.toString },
       fragment: 'anchor'
    };
   console.log("idquestion"  + questionId);
     this._router.navigateByUrl('/consulting',navigationExtras);
 }*/
}
