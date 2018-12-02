import { ProfilePage } from './../profile/profile';
import { ShopPage } from './../shop/shop';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  openShopPage() {
    this.navCtrl.setRoot(ShopPage);
  }

  openProfilePage() {
    this.navCtrl.setRoot(ProfilePage);
  }

}
