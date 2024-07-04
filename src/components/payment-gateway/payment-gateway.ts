import {Component} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {AlertController, App} from "ionic-angular";

/**
 * Generated class for the PaymentGatewayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'payment-gateway',
    templateUrl: 'payment-gateway.html'
})
export class PaymentGatewayComponent {

    constructor(public db: AngularFireDatabase,
                public alertCtrl: AlertController, public app: App) {
    }

    async makePayment(tripId: any, fee) {
        tripId = 0;
        fee=0;
        //const PRODUCTION_CLIENT_ID = '';
        //const SANDBOX_CLIENT_ID = 'Adir4laMT-WmIFU4U7nuHQaHEypcK7ydual-IkmVCisDd9xXHLRfue8qT29bTSdO5rbqo4fQF8kHqokM';
    }

}
