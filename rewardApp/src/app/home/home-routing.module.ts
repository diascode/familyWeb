import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeguardGuard } from '../guards/homeguard.guard';
import { MenuDetailsResolverService } from '../services/menu-details-resolver.service';

const routes: Routes = [
  {
    path:'home',
    component: HomePage,
    canActivate: [HomeguardGuard],
    children: [
      {
          path:'feed',  
          loadChildren: () =>
          import('../pages/feed/feed.module').then(
            m => m.FeedPageModule
          )
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('../pages/notifications/notifications.module').then(
            m => m.NotificationsPageModule
          )
      },
      {
        path: 'qrcode',
        loadChildren: () =>
          import('../pages/qrcode/qrcode.module').then(
            m => m.QrcodePageModule
          )
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('../pages/menu/menu.module').then(
            m => m.MenuPageModule
          )
      },
      {
        path: 'menu-detail/:id',
        resolve:{
          itemByID: MenuDetailsResolverService
        },
        loadChildren: () =>
          import('../pages/menu-detail/menu-detail.module').then(
            m => m.MenuDetailPageModule
          )
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../pages/settings/settings.module').then(
            m => m.SettingsPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
