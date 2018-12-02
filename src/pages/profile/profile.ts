import { HomePage } from './../home/home';
import { ShopPage } from './../shop/shop';
import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMenuPage() {
    this.navCtrl.setRoot(MenuPage);
  }

  openShopPage() {
    this.navCtrl.setRoot(ShopPage);
  }

  openHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

}
