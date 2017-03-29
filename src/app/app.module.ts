import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { ReceiptPage } from '../pages/receipt/receipt';
import { StatisticsPage } from '../pages/statistics/statistics';
import { AccountPage } from '../pages/account/account';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const pages = [
  MyApp,
  LoginPage,
  HomePage,
  RegisterPage,
  TabsPage,
  ReceiptPage,
  StatisticsPage,
  AccountPage
]

@NgModule({
  declarations: [
    pages
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot(highcharts),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    pages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
