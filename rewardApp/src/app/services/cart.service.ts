import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageserviceService } from './storageservice.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart: any [] = [];
rewards: any[] = [];
private cartItemCount = new BehaviorSubject(0);


  constructor(private storage: StorageserviceService ) { }

  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product) {
    let ncart: any = [];
    this.storage.storageControl('get', 'CART')
    .then( returned => {
      if (!returned || null || undefined) {
        console.log('A');
        this.cart.push(product);
        this.storage.storageControl('set', 'CART', this.cart)
        .then(res => console.log(this.cart));
      }
      else {
        console.log('B');
        
        var  it = returned ;
        console.log(it[0]);

       

        this.cart.push(returned);
        console.log(this.cart);
        this.cart.push(product);
        this.storage.storageControl('set', 'CART', this.cart)
        .then(res => console.log(this.cart));       
      }
    });

  }
  decreaseProduct(product){

  }
  removeProduct(product){

  }

}
