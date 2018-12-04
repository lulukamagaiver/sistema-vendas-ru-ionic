import { PurchaseConfirmationPage } from './../pages/purchase-confirmation/purchase-confirmation';
import { SignupPage } from './../pages/signup/signup';
import { ProfilePage } from './../pages/profile/profile';
import { ShopPage } from './../pages/shop/shop';
import { MenuPage } from './../pages/menu/menu';
import { DynamicHeaderComponent } from './../pages/dynamic-header/dynamic-header';
import { LoginPageModule } from './../pages/login/login.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RuapiProvider } from '../providers/ruapi/ruapi';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Stripe } from '@ionic-native/stripe';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    DynamicHeaderComponent,
    MenuPage,
    HomePage,
    ProfilePage,
    PurchaseConfirmationPage,
    ShopPage,
    SignupPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, 
    HttpModule,
    LoginPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    DynamicHeaderComponent,
    MenuPage,
    HomePage,
    ProfilePage,
    PurchaseConfirmationPage,
    ShopPage,
    SignupPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    InAppBrowser,
    RuapiProvider,
    Stripe
  ]
})
export class AppModule {}
