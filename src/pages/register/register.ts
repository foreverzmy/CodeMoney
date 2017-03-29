import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public type: string;
  public title: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.type = navParams.get('type');
  }

  ionViewDidLoad() {
    this.title = this.title === 'register' ? '注册' : '找回密码';
  }

  regist() {
    this.navCtrl.pop();
  }

}
