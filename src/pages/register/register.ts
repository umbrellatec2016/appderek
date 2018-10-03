import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    // Your app login API web service call triggers 
   //this.navCtrl.push(WelcomePage, {}, {animate: false});
   const toast = this.toastCtrl.create({
    message: 'por favor revise su correo electronico ',
    duration: 3000
  });
  toast.present();
  }
  login(){
    // Your app login API web service call triggers 
    this.navCtrl.push(WelcomePage, {}, {animate: true});
  }
}
