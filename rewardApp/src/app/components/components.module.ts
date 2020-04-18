import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FacebookbuttonComponent } from './facebookbutton/facebookbutton.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [SlidesComponent, LogoComponent, StartComponent, FacebookbuttonComponent, LogoutComponent],
  exports: [SlidesComponent, LogoComponent, StartComponent, FacebookbuttonComponent, LogoutComponent], 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
