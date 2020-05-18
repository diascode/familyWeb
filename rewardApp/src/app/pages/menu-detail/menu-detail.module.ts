import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDetailPageRoutingModule } from './menu-detail-routing.module';

import { MenuDetailPage } from './menu-detail.page';
import { ComponentsHomeModule } from 'src/app/componentsHome/componentsHome.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDetailPageRoutingModule,
    ComponentsHomeModule,
    ComponentsModule
    
  ],
  declarations: [MenuDetailPage]
})
export class MenuDetailPageModule {}
