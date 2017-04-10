import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { EventCreatePage } from '../event-create/event-create';



import firebase from 'firebase';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;
  zone: NgZone;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, private statusBar: StatusBar, 
    private splashScreen: SplashScreen) {
    this.zone = new NgZone({});
    firebase.initializeApp({
     apiKey: "AIzaSyBmSoysC93_oxCfrx2UAxhImQhWJwjHaoQ",
    authDomain: "sp-login-94206.firebaseapp.com",
    databaseURL: "https://sp-login-94206.firebaseio.com",
    projectId: "sp-login-94206",
    storageBucket: "sp-login-94206.appspot.com",
    messagingSenderId: "1016015253859"
    });



    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else { 
          this.rootPage = TabsPage;
          unsubscribe();
        }
      });     
    });

     

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}