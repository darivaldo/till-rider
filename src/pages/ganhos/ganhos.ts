import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../services/auth-service";
import {AngularFireAuth} from "@angular/fire/auth";
import {PremiosPage} from "../premios/premios";
import {CashbackPage} from "../cashback/cashback";

@Component({
  selector: 'page-ganhos',
  templateUrl: 'ganhos.html',
})
export class GanhosPage {

  user: any;
  me: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public authService: AuthService, public afAuth: AngularFireAuth) {

    afAuth.authState.subscribe(authData => {
      if (authData) {
        this.user = authService.getUserData();

        authService.getUser(this.user.uid).valueChanges().subscribe((snapshot:any) => {
          snapshot.uid = snapshot.$key;
          this.me = snapshot;
        });
      }
    });
  }

  goFirst(){
    this.navCtrl.push(PremiosPage);
  }

  goSecond(){
    this.navCtrl.push(CashbackPage);
  }

  ionViewDidLoad() {
  }

}
