import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ComponentsHomeModule } from 'src/app/componentsHome/componentsHome.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule, 
    ComponentsModule,
    ComponentsHomeModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
