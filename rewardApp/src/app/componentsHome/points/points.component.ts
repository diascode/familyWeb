import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss'],
})
export class PointsComponent implements OnInit {
userName:string;
userPoints:number;
  constructor() { }

  ngOnInit() {
    this.userName = "Paulo";
    this.userPoints = 5000;
  }

}
