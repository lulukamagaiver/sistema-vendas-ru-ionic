import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-purchase-confirmation',
  templateUrl: 'purchase-confirmation.html',
})
export class PurchaseConfirmationPage {
  public purchaseInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goBack() {
    this.navCtrl.setRoot(HomePage);
  }

}
