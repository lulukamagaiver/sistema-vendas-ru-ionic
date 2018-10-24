import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public wallet: any;
  public history: any[] = [];

  constructor(public navCtrl: NavController) {
    let fakeWalletResponse = {'valor': 35.80};

    let fakeHistoryResponse = [{'id': 5, 'item': 'Café da manhã', 'data': 1539993600000, 'valor': 0.45},
                               {'id': 10, 'item': 'Lanche', 'data': 1539907200000, 'valor': 0.45},
                               {'id': 22, 'item': 'Almoço', 'data': 1539129600000, 'valor': 0.80}];
  
    this.wallet = fakeWalletResponse['valor'].toString().replace('.', ',');
    
    for (let item of fakeHistoryResponse) {
      this.history.push({'id': item['id'],
                         'item': item['item'],
                         'valor': item['valor'],
                         'data': new Date(item['data'])});
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
