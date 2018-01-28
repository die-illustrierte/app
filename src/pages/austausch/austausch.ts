import { Component, ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { SuperTabs } from 'ionic2-super-tabs';

@IonicPage({
  segment: 'austausch/:type'
})
@Component({
  selector: 'page-austausch',
  templateUrl: 'austausch.html'
})
export class Austausch {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  partnersuche: any = 'PartnersuchePage';
  unterstuetzung: any = 'UnterstuetzungPage';
  zusammenkuenfte: any = 'ZusammenkuenftePage';

  showIcons: boolean = false;
  showTitles: boolean = true;
  pageTitle: string = 'Die Illustrierte';

  constructor(public navCtrl: NavController, private navParams: NavParams, private superTabsCtrl: SuperTabsController) {
  }

}
