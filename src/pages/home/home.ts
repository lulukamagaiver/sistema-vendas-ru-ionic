import { ProfilePage } from './../profile/profile';
import { ShopPage } from './../shop/shop';
import { MenuPage } from './../menu/menu';
import { RuapiProvider } from './../../providers/ruapi/ruapi';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public wallet: any;
  public history: any[] = [];
  public user: any;

  constructor(public navCtrl: NavController, public ruapiProvider: RuapiProvider) {
    let fakeWalletResponse = {'valor': 35.80};
    let fakeUserResponse = {'id': 89, 'nome': 'Vitor'};
    let fakeHistoryResponse = [{'id': 5, 'item': 'Café da manhã', 'data': 1539993600000, 'valor': 0.45},
                               {'id': 10, 'item': 'Lanche', 'data': 1539907200000, 'valor': 0.45},
                               {'id': 22, 'item': 'Almoço', 'data': 1539129600000, 'valor': 0.80}];

    this.user = fakeUserResponse;
    
    this.wallet = fakeWalletResponse['valor'].toString().replace('.', ',');
    
    for (let item of fakeHistoryResponse) {
      this.history.push({'id': item['id'],
                         'item': item['item'],
                         'valor': item['valor'],
                         'data': new Date(item['data'])});
    }
  }

  openMenuPage() {
    this.navCtrl.push(MenuPage);
  }

  openShopPage() {
    this.navCtrl.push(ShopPage);
  }

  openProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

}
