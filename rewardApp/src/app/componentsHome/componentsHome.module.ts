import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeSlidesComponent } from './home-slides/home-slides.component';
import { PointsComponent } from './points/points.component';




@NgModule({
  declarations: [HomeSlidesComponent, PointsComponent],
  exports: [HomeSlidesComponent, PointsComponent], 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsHomeModule { }