import { ProfilePage } from './../profile/profile';
import { HomePage } from './../home/home';
import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMenuPage() {
    this.navCtrl.setRoot(MenuPage);
  }

  openHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  openProfilePage() {
    this.navCtrl.setRoot(ProfilePage);
  }

}
