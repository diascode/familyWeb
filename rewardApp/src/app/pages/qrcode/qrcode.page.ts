import { Component, OnInit } from '@angular/core';

import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  qrData = "VieiraDias";
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';

  constructor(private qrScanner: QRScanner,
              private base64ToGallery: Base64ToGallery,
              private alert: AlertService
  ) { }

  ngOnInit() {
  }

  scanCode() {
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
       this.alert.presentAlert('Permission','Permission problem');
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
       this.alert.presentAlert('Denied','Denied');
     }
  })
  .catch((e: any) => console.log('Error is', e));
  }
  downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/jpeg').toString();

    const data = imageData.split(`,`)[1];

    // access photo library

    this.base64ToGallery.base64ToGallery(data, {
      prefix: '_img', mediaScanner: true
    })
      .then(res => {
        this.alert.presentToast('Download', 'QRcode salvo na sua biblioteca de fotos')
      })
      .catch(err => this.alert.presentAlert('Erro', err));
  }
}
