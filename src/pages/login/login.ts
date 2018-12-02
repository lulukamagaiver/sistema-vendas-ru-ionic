import { RuapiProvider } from './../../providers/ruapi/ruapi';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, 
    private ruapiProvider: RuapiProvider, private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'menu');
    this.navCtrl.swipeBackEnabled = false;
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'menu');
    this.navCtrl.swipeBackEnabled = true;
  } 

  signin() {
    if (this.ruapiProvider.validateUser()) {
      this.navCtrl.setRoot(HomePage);
    }
    else {
      this.makeToast('Usuário ou Senha Inválidos')
    }
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  forgotPassword() {
    this.makeToast('Em Breve');
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
