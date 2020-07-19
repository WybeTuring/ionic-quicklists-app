import { Component } from '@angular/core';
import {Plugins} from "@capacitor/core";
import { Platform } from '@ionic/angular';
/*
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
*/

const {SplashScreen, StatusBar} = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    /*
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
    */
  ) {

    SplashScreen.hide().catch(err => {
      console.warn(err);
    });

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.hide().catch(err => {
        console.warn(err);
      })
    });
  }
}
