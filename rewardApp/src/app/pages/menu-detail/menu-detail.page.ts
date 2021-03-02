import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit {

  itemSelected =  {
    id:'',
    name:'',
    description:'',
    img:'',
    price:'',
    option1:'',
    option2:'',
    option3:'none',
    amount: 1,
  };
  cart:any = [];
  
  cartItemCount: BehaviorSubject<number>;


  
    constructor(private router: Router,
                private route: ActivatedRoute,
                private cartservices: CartService
                ) { }
  
    ngOnInit() {
      if(this.route.snapshot.data['itemByID']){
        let item = this.route.snapshot.data['itemByID'];
        this.initObject(item);
  
      }
      this.cart = this.cartservices.getCart;
    }
    initObject(myData){
      this.itemSelected.id = myData.id;
      this.itemSelected.name = myData.name;
      this. itemSelected.description =  myData.description;
      this.itemSelected.img = myData.img;
      this.itemSelected.price = myData.price;
    }
    addToCart(){
      console.log('clicked', this.itemSelected);
      this.cartservices.addProduct(this.itemSelected);
    }
  }
