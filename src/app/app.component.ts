import {Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { Austausch } from '../pages/austausch/austausch';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class DieIllustrierte {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  rootParams: any;

  menuItems: any[] = [
    {
      name: 'Aktuelle Ausgabe',
      page: 'MainPage'
    },
    {
      name: 'Archiv',
      page: 'MainPage'
    },
    {
      name: 'Web-Ansicht',
      page: 'MainPage'
    },
    {
      name: 'Einstellungen',
      page: 'MainPage'
    },
    {
      name: 'Über uns',
      page: 'MainPage'
    }
  ];

  constructor(platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar) {
    this.rootPage = this.menuItems[0].page;
    this.rootParams = this.menuItems[0].params;
    platform.ready().then(() => {
      splashScreen.hide();
      statusBar.backgroundColorByHexString('#BBBBBB');
    });
  }

  openPage(page) {
    this.nav.setRoot(page.page, page.params);
  }

}
