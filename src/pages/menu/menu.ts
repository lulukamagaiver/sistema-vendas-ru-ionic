import { ProfilePage } from './../profile/profile';
import { ShopPage } from './../shop/shop';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private browser: InAppBrowser) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    
    let urls = ['http://ru1.uea.edu.br/index.php?dest=cardapio', 
    'http://ru2.uea.edu.br/index.php?dest=cardapio', 
    'http://ru3.uea.edu.br/index.php?dest=cardapio'];

    this.browser.create(urls[0], '_self', options);
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
