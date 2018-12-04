import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfilePage } from './../profile/profile';
import { HomePage } from './../home/home';
import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { PurchaseConfirmationPage } from '../purchase-confirmation/purchase-confirmation';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  public paymentForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, private stripe: Stripe, 
    private alertCtrl: AlertController, private toastCtrl: ToastController) {
    
    this.paymentForm= new FormGroup({
      number: new FormControl('', Validators.required),
      valid: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      document: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required)
    });

    this.stripe.setPublishableKey('my_publishable_key');
  }

  finish() {
    // validation code goes here

    if (this.paymentForm.invalid) {
      this.makeToast('Por favor preencha todos os campos.');
    }
    else {
      this.confirmPurchase();
    }
  }

  confirmPurchase() {

    let alert = this.alertCtrl.create({
      title: 'Confirmar Compra',
      message: 'Deseja realmente finalizar a compra?',
      buttons: [
        {text: 'Cancel',
         role: 'cancel',
         handler: () => {}},
        {text: 'Confirmar',
         handler: () => {
           this.openPurchaseConfirmation();
         }}
      ]
    });

    alert.present();
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

  openPurchaseConfirmation() {
    this.navCtrl.setRoot(PurchaseConfirmationPage);
  }

  makeToast(message) {
    const toast = this.toastCtrl .create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    
    toast.present();
  }    
}
