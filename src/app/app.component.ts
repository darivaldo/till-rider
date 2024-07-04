import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen';

// import pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { AngularFireAuth } from "@angular/fire/auth/auth";
import { AuthService } from "../services/auth-service";
import { UserPage } from "../pages/user/user";

import { TranslateService } from '@ngx-translate/core';
import {GanhosPage} from "../pages/ganhos/ganhos";
import {TermosPage} from "../pages/termos/termos";

import { SplashPage } from '../pages/splash/splash';

// end import pages

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})

export class MyApp {
  rootPage: any;
  nav: any;
  user = {};

  public pages = [
    {
      title: 'Perfil',
      icon: 'person',
      count: 0,
      component: UserPage
    },
    {
      title: 'Escritório Virtual',
      icon: 'briefcase',
      count: 0,
      component: GanhosPage
    },
    {
      title: 'Termos e condições',
      icon: 'paper',
      count: 0,
      component: TermosPage
    },
    {
      title: 'Logout',
      icon: 'exit',
      count: 0,
      component: LoginPage
    }
  ];


  constructor(platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,
    public authService: AuthService, 
    public modalController: ModalController,
    public translate: TranslateService) {
    this.translate.setDefaultLang('pt-br');
    this.translate.use('pt-br');
    
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //  statusBar.styleDefault();
      splashScreen.hide();


      let splash = modalController.create(SplashPage);
      splash.present();

      // check for login stage, then redirect
      afAuth.authState.subscribe(authData => {

        if (authData) {
          this.nav.setRoot(HomePage);
        } else {
           this.nav.setRoot(LoginPage , {'email':  'daridados@gmail.com','password':'120202' });
        }
      });

      // // get user data
      // afAuth.authState.subscribe(authData => {
      //   if (authData) {
      //     this.user = authService.getUserData();
      //   }
      // });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == 'Perfil'){
      this.nav.push(page.component, {user: this.authService.getUserData()});
    }
    else{
      this.nav.push(page.component);
    }

  }

  // view current user profile
  viewProfile() {
    this.nav.push(UserPage, {
      user: this.user
    });
  }

}
