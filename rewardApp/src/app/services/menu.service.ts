import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

    menuData: any[] = [
    {id:'cof', name:'Coffee', description:'The classic standard, our exclusive select blend',
    img: 'assets/img/test/coffee.jpg', small: 1.50, medium: 2.50, large: 3.25},
    
    {id:'lat', name:'Latte', description: 'A blend of espresso, steam milk, and foam',
    img: 'assets/img/test/latte.jpg', small: 2.00, medium: 3.00, large: 3.75},
    
    {id:'moc', name:'Mocha', description:'Espresso, melted chocolate, and steamed milk',
    img: 'assets/img/test/mocha.jpg', small: 2.30, medium: 3.15, large: 4.00},

    {id:'esp', name:'Espresso', description:'The classic espresso',
    img: 'assets/img/test/espresso.jpg', small: 1.75, medium: 2.50, large: 3.50},

    {id:'cap', name:'Cappuccino', description: 'Espresso, steamed milk, and a layer of foam',
    img: 'assets/img/test/cappuccino.jpg', small: 1.85, medium: 2.75, large: 3.65},

    {id:'ame', name:'Americano', description:'Espresso and hot water',
    img: 'assets/img/test/americano.jpg', small: 1.60, medium: 2.50, large: 3.45},

    {id:'mac', name:'Macchiato', description:'Espresso topped with foamed milk',
    img: 'assets/img/test/macchiato.jpg', small: 2.10, medium: 3.05, large: 3.90  }

  ];

  constructor() { }

  getItemDB(){
    return Promise.resolve(this.menuData);
  }
  getMenuByID(id){
    return this.menuData[id];
  }
  setMenuByID(id,menuData){
    return this.menuData[id] = menuData;
  }

}
