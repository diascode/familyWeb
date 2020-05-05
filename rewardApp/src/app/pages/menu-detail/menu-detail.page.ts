import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit {

itemSelected : any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    console.log('menuDetails')
    if(this.route.snapshot.data['itemByID']){
      this.itemSelected = this.route.snapshot.data['itemByID'];
      console.log(this.itemSelected);
      
    }
    
  }

}
