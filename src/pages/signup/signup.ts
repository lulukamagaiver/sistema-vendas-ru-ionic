import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomEmailValidator } from '../../validators/email';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public userForm: FormGroup;
  public barcode: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private barcodeScanner: BarcodeScanner) {

    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, CustomEmailValidator.isValid])),
      password: new FormControl('', Validators.required),
      password_confirm: new FormControl('', Validators.required),
      barcode: new FormControl(this.barcode, Validators.required)
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  barcodeScan() {
    this.barcodeScanner.scan().then(data => {
      // this is called when a barcode is found
      console.log(data.text);
      this.barcode = data.text;
    });      
    // this.barcode = '1515080624';
  }

  createUser() {
    var re = /^([0-9]{1,10}|[a-zA-Z0-9_\-\.]{1,20}@uea\.edu\.br)$/;

    if (this.userForm.invalid && this.userForm.value['email'] === '') {
      this.displayMessage('Por favor preencha todos os campos.');
    }
    else if (!re.test(String(this.userForm.value['email']).toLowerCase())) {
      this.displayMessage('Por favor, insira um email da UEA.');
    }
    else if (this.userForm.value['password'] !== this.userForm.value['password_confirm']) {
      this.displayMessage('As senhas não conferem.');
    }
    else if (!re.test(String(this.userForm.value['email']).toLowerCase())) {
      this.displayMessage('Por favor, insira um email da UEA.');
    }
    else {
      // create user code goes here

      this.displayMessage('Usuário criado com sucesso!');
      this.goBack();
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

  displayMessage(message) {
    const toast = this.toastCtrl .create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    
    toast.present();
  }
}
