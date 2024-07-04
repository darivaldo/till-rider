import {Component} from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase} from "@angular/fire/database";


@IonicPage()
@Component({
    selector: 'page-payments',
    templateUrl: 'payments.html',
})
export class PaymentsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public db: AngularFireDatabase,
                public alertCtrl: AlertController, public app: App) {

    }

    ionViewDidLoad() {
        let tripId = this.navParams.get('tripId');
        let fee = this.navParams.get('fee');
        this.makePayment(tripId, fee);
    }

    makePayment(tripId: any, fee) {
        tripId = 0;
        fee=0;
        //const PRODUCTION_CLIENT_ID = '';
        //const SANDBOX_CLIENT_ID = 'Adir4laMT-WmIFU4U7nuHQaHEypcK7ydual-IkmVCisDd9xXHLRfue8qT29bTSdO5rbqo4fQF8kHqokM';
    }

}
