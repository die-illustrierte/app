import { Component } from '@angular/core';
import {NavController, NavParams, IonicPage, LoadingController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-unterstuetzung',
  templateUrl: 'unterstuetzung.html'
})
export class UnterstuetzungPage {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }
}
