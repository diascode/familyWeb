import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slides',
  templateUrl: './home-slides.component.html',
  styleUrls: ['./home-slides.component.scss'],
})
export class HomeSlidesComponent implements OnInit {
  items;
  queryItems;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { 
    this.initializeItems();
  }
  

  ngOnInit() {}
  initializeItems() {
    
    this.items = [
      'Comida',
      'Vestuário',
      'Materiais de Construção',
    ];
    this.queryItems=this.items;
  }

 /**/ 

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    //queryItems will hold filtered items
    if (val && val.trim() != '') {
      this.queryItems = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  onCancel($event){
    return this.items ;
  }
}
