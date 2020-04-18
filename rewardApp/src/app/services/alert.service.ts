import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController, private toaster: ToastController) { }

  async presentAlert(headerText:string, messageText:string){
    console.log("alert");
    const alert = await this.alertController.create({
      header: headerText,
      message: messageText,
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async presentToast(headerText:string, messageText:string){
    console.log("alert");
    const toast = await this.toaster.create({
      header: headerText,
      message: messageText,
      buttons: ['OK']
    });
  
    await toast.present();
  }
}
