import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-facebookbutton',
  templateUrl: './facebookbutton.component.html',
  styleUrls: ['./facebookbutton.component.scss'],
})
export class FacebookbuttonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  navigateToHomePage(){
    this.router.navigate(['home/feed']);

  }
}
