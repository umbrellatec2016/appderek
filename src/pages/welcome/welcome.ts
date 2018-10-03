import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {RegisterPage} from '../register/register'

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  login(){
    // Your app login API web service call triggers 
    this.navCtrl.push(TabsPage, {}, {animate: false});
  }
  register(){
    // Your app login API web service call triggers 
    this.navCtrl.push(RegisterPage, {}, {animate: false});
  }
  
}
