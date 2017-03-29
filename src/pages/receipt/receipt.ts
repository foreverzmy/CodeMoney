import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html'
})
export class ReceiptPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiptPage');
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.alertCtrl.create({
        title: barcodeData.text,
        subTitle: barcodeData.format,
        buttons: ['OK']
      })

    }, err => {

    })
  }

}
