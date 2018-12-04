import { CustomEmailValidator } from './../../validators/email';
import { FormGroup, Validators, FormControl } from '@angular/forms';
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
  public userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, 
    private ruapiProvider: RuapiProvider, private menuCtrl: MenuController) {

      this.userForm = new FormGroup({
        email: new FormControl('', Validators.compose([Validators.required, CustomEmailValidator.isValid])),
        password: new FormControl('', Validators.required)
      });
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
    var re = /^([0-9]{1,10}|[a-zA-Z0-9_\-\.]{1,20}@uea\.edu\.br)$/;

    if (this.userForm.invalid && this.userForm.value['email'] === '') {
      this.makeToast('Por favor preencha todos os campos.');
    }
    else if (!re.test(String(this.userForm.value['email']).toLowerCase())) {
      this.makeToast('Por favor, insira um email da UEA.');
    }
    else {
      if (this.ruapiProvider.validateUser()) {
        this.navCtrl.setRoot(HomePage);
      }
      else {
        this.makeToast('Usuário ou Senha Inválidos')
      }
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
