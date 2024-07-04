import { Component } from '@angular/core';
import { NavController, Platform, ModalController, AlertController, NavParams } from 'ionic-angular';
import { DriverService } from '../../services/driver-service';
import { HomePage } from "../home/home";
import { TripService } from "../../services/trip-service";
import {
    POSITION_INTERVAL,
    TRIP_STATUS_GOING,
    SOS,
    TRIP_STATUS_WAITING,
    TRIP_STATUS_PAID,
    TRIP_STATUS_FINISHED,
    TRIP_STATUS_NOTIFIED,
    TRIP_STATUS_CANCELED
} from "../../services/constants";
import { PlaceService } from "../../services/place-service";
import { PaymentGatewayComponent } from "../../components/payment-gateway/payment-gateway";
import { AngularFireDatabase } from "@angular/fire/database";
import { AuthService } from "../../services/auth-service";
import 'rxjs/add/operator/take';

// Firebase App (the core Firebase SDK) is always required and must be listed first
//import * as firebase from "firebase/app";
import firebase from "firebase/app";


declare var google: any;

@Component({
    selector: 'page-tracking',
    templateUrl: 'tracking.html',
    providers: [
        PaymentGatewayComponent
    ]
})
export class TrackingPage {
    public driver: any;
    public map: any;
    public trip: any = {};
    public trackingDriverTracking: any;
    public marker: any;

    public tripStatus: string;
    public distance: any;
    public duration: any;
    public sos: any;
    public alertCnt: any = 0;

    public driver_name: any;
    public driver_photo: any;
    public alertShown: boolean = false;
    public mapId = Math.random() + 'map';
    public distanceText: any = '';
    public durationText: any = '';
    public rotation:any = 0;

    constructor(public nav: NavController, public driverService: DriverService, public platform: Platform,
        public navParams: NavParams, public tripService: TripService, public placeService: PlaceService,
        public modalCtrl: ModalController, public alertCtrl: AlertController,
        public db: AngularFireDatabase,public authService: AuthService) {


        this.platform.ready()
            .then(() => {

                this.platform.registerBackButtonAction(() => {
                    if (this.alertShown == false) {
                        this.presentConfirm();
                    }
                }, 0)

                this.sos = SOS;
                localStorage.setItem('isPassengerNotified', "false");
                localStorage.setItem('isFinished', "false");

                let tripId;
                if (this.navParams.get('tripId'))
                    tripId = this.navParams.get('tripId');
                else
                    tripId = this.tripService.getId();

                this.tripService.getTrip(tripId).valueChanges().subscribe((snapshot: any) => {
                    this.trip = snapshot;
                    this.trip.key = tripId;
                    this.trip.id = tripId;
                    this.tripStatus = snapshot.status;

                    this.driverService.getDriver(this.trip.driverId).valueChanges().subscribe(snap => {
                        this.driver = snap;

                        this.loadMap();
                    })

                    this.authService.getUser(this.trip.driverId).valueChanges().subscribe((snap_driver: any) => {
                        let driver_infos = snap_driver;
                        this.driver_name = driver_infos.name;
                        this.driver_photo = driver_infos.photoUrl;
                    });
                });

            });

    }

    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja realmente sair do Till Passageiro?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                        this.alertShown = false;
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        console.log('Yes clicked');
                        this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(() => {
            this.alertShown = true;
        });
    }


    ngOnInit() {
    }

    ionViewWillEnter() {
    }

    ionViewWillLeave() {
    }



    showNotification() {

        let message = "Dados do seu motorista: <br/>" +
            "Nome: " + this.driver_name + "<br/>" +
            "Veículo: " + this.driver.brand + "/" + this.driver.model + "<br/>" +
            "Cor: " + this.driver.color + "<br/>" +
            "Placa: " + this.driver.plate;

        let confirm = this.alertCtrl.create({
            title: 'Seu Motorista Chegou!',
            message: message,
            cssClass: "alertcss",
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'okcss',
                    handler: () => { }
                }
            ]
        });

        confirm.present();

        return;

    }

    finishTrip() {
        let tripId = this.tripService.getId();
        //this.nav.push(PaymentsPage, {'tripId': tripId, 'fee': this.trip.fee});

        this.db.object('trips/' + tripId).update({
            status: 'paid',
            paypalId: tripId,
            payment_date: new Date()
        });

        //Stripe Code
        /* if (this.tripService.getPaymentMethod() == 'card'){
             let final = this.trip.fee - (this.trip.fee * (parseInt(this.trip.discount) / 100));
             const paymentRequest = stripe.paymentRequest({
                 country: 'BR',
                 currency: 'brl',
                 total: {
                     label: 'Corrida na Till #'+tripId,
                     amount: final,
                 },
                 requestPayerName: true,
                 requestPayerEmail: true,
             });
 
             const elements = stripe.elements();
             const prButton = elements.create('paymentRequestButton', {
                 paymentRequest,
             });
 
             (async () => {
                 // Check the availability of the Payment Request API first.
                 const result = await paymentRequest.canMakePayment();
                 if (result) {
                     prButton.mount('#payment-request-button');
                 } else {
                     document.getElementById('payment-request-button').style.display = 'none';
                 }
             })();
 
             paymentRequest.on('token', async (ev) => {
                 // Send the token to your server to charge it!
                 const response = await fetch('/charges', {
                     method: 'POST',
                     body: JSON.stringify({token: ev.token.id}),
                     headers: {'content-type': 'application/json'},
                 });
 
                 if (response.ok) {
                     // Report to the browser that the payment was successful, prompting
                     // it to close the browser payment interface.
                     ev.complete('success');
                 } else {
                     // Report to the browser that the payment failed, prompting it to
                     // re-show the payment interface, or show an error message and close
                     // the payment interface.
                     ev.complete('fail');
                 }
             });
         }*/

        this.showRateCard();
    }

    showRateCard() {
        let final = this.trip.fee - (this.trip.fee * (parseInt(this.trip.discount) / 100));
        let message = '<p>Valor: ' + this.trip.fee +
            '<br>Promo: ' + this.trip.promocode +
            '<br> Desconto (%): ' + this.trip.discount +
            '<br/>Método de  pagamento: ' + (this.trip.paymentMethod == 'cash' ? 'Dinheiro' : 'Cartão') +
            '</p><h2>' + this.trip.currency + ' ' + final + '</h2>' +
            '<h2>Obrigado por usar a Till!</h2>';
        this.alertCtrl.create({
            title: 'Corrida Finalizada!',
            message: message,
            enableBackdropDismiss: false,
            buttons: [{
                text: 'Avaliar a corrida',
                handler: data => {
                    this.showRatingAlert();
                }
            }],
        }).present();
    }

    showRatingAlert() {
        console.log(this.trip, this.driver);
        let alert = this.alertCtrl.create({
            title: 'Avaliar a corrida',
            enableBackdropDismiss: false
        });
        alert.addInput({ type: 'radio', label: 'Excelente', value: '5', checked: true });
        alert.addInput({ type: 'radio', label: 'Boa', value: '4' });
        alert.addInput({ type: 'radio', label: 'Normal', value: '3' });
        alert.addInput({ type: 'radio', label: 'Ruim', value: '2' });
        alert.addInput({ type: 'radio', label: 'Péssima', value: '1' });

        alert.addButton({
            text: 'Cancelar', handler: () => {
                this.nav.setRoot(HomePage)
            }
        });
        alert.addButton({
            text: 'OK',
            handler: data => {
                this.tripService.rateTrip(this.trip.key, data).then(() => {
                    this.nav.setRoot(HomePage)
                });
            }
        });
        alert.present();

    }


    trackDriver() {

        if (localStorage.getItem('interval_trackingDriverTracking') != null) {
            clearInterval(+localStorage.getItem('interval_trackingDriverTracking'));
        }
        let trackingDriverTracking = setInterval(() => {

            this.showDriverOnMap();

        }, POSITION_INTERVAL);
        localStorage.setItem('interval_trackingDriverTracking', trackingDriverTracking.toString());

    }

    cancelTrip() {
        this.tripService.cancelTrip(this.trip.key).then(data => {
            console.log(data);

            clearInterval(+localStorage.getItem('interval_trackingDriverTracking'));
            this.nav.setRoot(HomePage);
        })
    }

    // show user on map
    showDriverOnMap() {

        firebase.database()
            .ref('driversOnline/' + this.driver.uid)
            .orderByKey()
            .once('value')
            .then((snapshot: any) => {

                let vehicle = { key: snapshot.key, ...snapshot.val() };
                console.log("tracking - showDriverOnMap--->", vehicle);

                if (vehicle != null) {

                    // create or update
                    let latLng = new google.maps.LatLng(vehicle.lat, vehicle.lng);

                    if (this.marker != null) { 
                        this.marker.setMap(null); 
                    }
                    //this.map.setCenter(latLng);

                    let catIcon = {
                        url: 'assets/img/map-suv.png',
                        //state your size parameters in terms of pixels
                        size: new google.maps.Size(32,32),
                        scaledSize: new google.maps.Size(32, 32),
                        origin: new google.maps.Point(0,0),
                        anchor: new google.maps.Point(12,-290),
                        strokeWeight: 0,
                        scale: .25,
                        rotation: this.rotation
                    }

                    if (this.rotation>=300) {
                        this.rotation = 0;
                    }
                    else {
                        this.rotation += 150;
                    }
                    

                    ////
                    // {
                    //     url:  'assets/img/map-suv.png',
                    //     size: new google.maps.Size(32, 32),
                    //     origin: new google.maps.Point(0, 0),
                    //     anchor: new google.maps.Point(16, 16),
                    //     scaledSize: new google.maps.Size(32, 32)
                    // }

                    // show vehicle to map
                    this.marker = new google.maps.Marker({
                        map: this.map,
                        position: latLng,
                        optimized: false,
                        icon: catIcon
                    });

                    let myoverlay = new google.maps.OverlayView();
                            myoverlay.draw = function () {
                                            this.getPanes().markerLayer.id='markerLayer';
                                                };
                    myoverlay.setMap(this.map);

                    this.marker.setMap(this.map);



                    console.log('tracking - showDriverOnMap - TripStatus>', this.tripStatus);



                    if (this.tripStatus == TRIP_STATUS_GOING) {
                        //
                        //
                    }
                    else if (this.tripStatus == TRIP_STATUS_WAITING) {
                        let origin = this.tripService.getOrigin();
                        this.placeService.getDirection(vehicle.lat, vehicle.lng, origin.lat, origin.lng)
                            .subscribe((result:any) => {
                                if (result.routes.length != 0) {
                                    this.distance = result.routes[0].legs[0].distance.text;
                                    this.duration = (result.routes[0].legs[0].duration.text);
                                }
                            });
                    }
                    else if (this.tripStatus === TRIP_STATUS_NOTIFIED) {
                        if (localStorage.getItem('isPassengerNotified') == "false") {

                            localStorage.setItem('isPassengerNotified', "true");

                            this.showNotification();
                        }
                    }
                    else if ((this.tripStatus === TRIP_STATUS_FINISHED) ||
                        (this.tripStatus === TRIP_STATUS_PAID)) {

                            if (localStorage.getItem('isFinished').toString() != "true") {
                                localStorage.setItem('isFinished', "true");
                                clearInterval(+localStorage.getItem('interval_trackingDriverTracking'));
                                this.finishTrip();
        
                            }
                      
                    }
                    else if (this.tripStatus === TRIP_STATUS_CANCELED) {

                        clearInterval(+localStorage.getItem('interval_trackingDriverTracking'));
                        this.nav.setRoot(HomePage);
                       
                    }

                }


            });
    }

    loadMap() {


        let origin_latLng = new google.maps.LatLng(this.trip.origin.location.lat, this.trip.origin.location.lng);
        let destination_latLng = new google.maps.LatLng(this.trip.destination.location.lat, this.trip.destination.location.lng);

        let directionsDisplay;
        let directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();

        this.map = new google.maps.Map(document.getElementById(this.mapId), {
            zoom: 15,
            center: origin_latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: true,
            disableDefaultUI: false,
            streetViewControl: false,
            styles: this.placeService.temaWY()
        });

        let mapx = this.map;
        directionsDisplay.setMap(mapx);

        this.placeService.getDirection(
            this.trip.origin.location.lat,
            this.trip.origin.location.lng, 
            this.trip.destination.location.lat,
            this.trip.destination.location.lng).subscribe((result:any) => {

            this.distance = result.routes[0].legs[0].distance.value;
            this.duration = result.routes[0].legs[0].duration.value;

            this.distanceText = result.routes[0].legs[0].distance.text;
            this.durationText = result.routes[0].legs[0].duration.text;
           
        });


        var bounds = new google.maps.LatLngBounds();
        bounds.extend(origin_latLng);
        bounds.extend(destination_latLng);

        mapx.fitBounds(bounds);
        var request = {
            origin: origin_latLng,
            destination: destination_latLng,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                //// console.log(response);
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(mapx);
            } else {
                // console.log("error");
            }
        });


        this.trackDriver();
    }

    // make array with range is n
    range(n) {
        return new Array(Math.round(n));
    }

    
          
}
