import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocationPage } from '../pages/location/location';
import { CameraPage } from '../pages/camera/camera';

@Component({
  templateUrl: 'app.html'
})
@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="heart" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="star" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
export class MyApp {
  rootPage:any = LocationPage;

  tab1: any;
  tab2: any;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.tab1 = LocationPage;
    this.tab2 = CameraPage;
  }
}

