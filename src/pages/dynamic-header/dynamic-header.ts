import { Component, Input } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'dynamic-header',
  templateUrl: 'dynamic-header.html'
})

export class DynamicHeaderComponent {
    
  public pageTitle: any;

  constructor(private toastCtrl: ToastController) {}
  
  @Input()
  set title(newTitle: string) {
    newTitle = newTitle.trim();
    
    if (newTitle.length === 0) {
      newTitle = 'this.defaultTitle';
    }
    this.pageTitle = newTitle;
  }

  get title() {
    return this.pageTitle;
  }

  openProfilePage() {
    const toast = this.toastCtrl.create({
      message: 'Em breve',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    
    toast.present();
  }

}