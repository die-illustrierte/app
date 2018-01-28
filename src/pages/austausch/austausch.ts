import { Component, ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {SuperTabsController} from "ionic2-super-tabs";
import { SuperTabsController } from '../../ionic2-super-tabs/src';
import { SuperTabs } from "../../ionic2-super-tabs/src/components/super-tabs";

@IonicPage({
  segment: 'austausch/:type'
})
@Component({
  selector: 'page-austausch',
  templateUrl: 'austausch.html'
})
export class Austausch {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  page1: any = 'Page1Page';
  page2: any = 'Page2Page';
  page3: any = 'Page3Page';

  showIcons: boolean = false;
  showTitles: boolean = true;
  pageTitle: string = 'Die Illustrierte';

  constructor(public navCtrl: NavController, private navParams: NavParams, private superTabsCtrl: SuperTabsController) {
  }

}
