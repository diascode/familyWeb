import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuData: any[] = [
    {id:'ham', name:'Hamburguer', description:'Simplesmente Pão com carne',
    img: 'assets/img/qb-burguer/hamburguer.jpg', price: 15.00 },
    
    {id:'cbu', name:'Cheese Burguer', description: 'Pão, Carne e Queijo',
    img: 'assets/img/qb-burguer/hamburguer.jpg', price: 15.90},
    
    {id:'csl', name:'Cheese Salada', description:'Pão, carne e queijo, alface, tomate, cebola roxa',
    img: 'assets/img/qb-burguer/cheese-salad.jpg', price: 17.90},

    {id:'cba', name:'Cheese Bacon', description:'Pão, carne, queijo e bacon',
    img: 'assets/img/qb-burguer/cheese-bacon.jpg', price: 21},

    {id:'qub', name:'Quintal Burguer', description: 'Pão, carne, queijo, cebola caramelizada e bacon',
    img: 'assets/img/qb-burguer/quintal-burguer.jpg', price: 23},

    {id:'qve', name:'QB Vegie Salada', description:'Pão, hamburguer de abobrinha e beringela, queijo e salada',
    img: 'assets/img/qb-burguer/qb-salada-vegie.jpg', price: 22},

    {id:'qfr', name:'QB Frango Salada', description:'Pão, frango empanado, queijo, alface, tomate, cebola roxa e molho',
    img: 'assets/img/qb-burguer/qb-chicken-salada.jpg', price: 16  }

  ];

  constructor() { }

  getItemDB(){
    return Promise.resolve(this.menuData);
  }
  getMenuByID(id){
    return this.menuData.find( menuData => menuData.id === id);
  }
  setMenuByID(id,menuData){
    return this.menuData[id] = menuData;
  }

}
