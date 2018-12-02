import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public toastCtrl: ToastController) {
    this.platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openConfigPage() {
    this.makeToast('Em Breve');
  }

  exitApp(){
    this.platform.exitApp();
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
