import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MainPage } from '../pages';
import { RegisterPage } from '../register/register'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
  }

  doLogin() {
    this.navCtrl.setRoot(MainPage);
  }

  register() {
    this.navCtrl.push(RegisterPage, {
      type: 'register'
    });
  }
  retrievePass() {
    this.navCtrl.push(RegisterPage, {
      type: 'retrieve'
    });
  }
}
