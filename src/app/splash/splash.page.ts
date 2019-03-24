import { Component, OnInit } from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {ViewController} from '@ionic/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage {
  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {

  }

  ionViewDidEnter() {

    this.splashScreen.hide();

    setTimeout(() => {
      this.viewCtrl._destroy();
    }, 4000);

  }
}
