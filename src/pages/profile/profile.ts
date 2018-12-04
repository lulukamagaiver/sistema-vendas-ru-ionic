import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HomePage } from './../home/home';
import { ShopPage } from './../shop/shop';
import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public updateProfileForm: FormGroup;
  public updatePasswordForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {

    let fakeUserResponse = {
      'id': 44,
      'name': 'Vitor Matheus de Souza Carvalho',
      'email': 'vmdsc.eng@uea.edu.br'
    }
    
    this.updateProfileForm = new FormGroup({
      email: new FormControl(fakeUserResponse['email'], Validators.required),
      name: new FormControl(fakeUserResponse['name'], Validators.required),
      nickname: new FormControl('', Validators.required),
      document: new FormControl('', Validators.required)
    });

    this.updatePasswordForm = new FormGroup({
      password: new FormControl('', Validators.required),
      new_password: new FormControl('', Validators.required),
      confirm_new_password: new FormControl('', Validators.required)
    });
  }

  updateProfile() {
    // update profile code goes here

    this.displayMessage('Usuário atualizado com Sucesso');
    this.navCtrl.setRoot(HomePage);
  }
  
  updatePassword() {
    // update password code goes here

    this.displayMessage('Usuário atualizado com Sucesso');
    this.navCtrl.setRoot(HomePage);
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

  displayMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

}
