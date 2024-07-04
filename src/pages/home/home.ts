import { VehiclesDto } from '../../Dto/VehiclesDto';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams, ToastController, Platform } from 'ionic-angular';

import 'rxjs/Rx'
import 'rxjs/add/operator/take';
//import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';

import { Geolocation } from '@ionic-native/geolocation';
import { PaymentMethodPage } from '../payment-method/payment-method';
import { UserPage } from "../user/user";
import { TrackingPage } from '../tracking/tracking';

import { PlaceService } from "../../services/place-service";
import { DealService } from "../../services/deal-service";
import { SettingService } from "../../services/setting-service";
import { DriverService } from "../../services/driver-service";
import { TripService } from "../../services/trip-service";
import {
    POSITION_INTERVAL,
    SHOW_VEHICLES_WITHIN,
    VEHICLE_LAST_ACTIVE_LIMIT
} from "../../services/constants";


import { AuthService } from "../../services/auth-service";
import { TranslateService } from '@ngx-translate/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
//import * as firebase from "firebase/app";

import { google } from '@google/maps';

declare var google: any;

// interface IFirebaseTodo {
//     lat?: any;
//     lng?: any;
//     name?: any;
//     last_active?: any;
//     distance?: any;
// }

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})


export class HomePage {

    mapId = Math.random() + 'map';
    mapHeight: number = 480;
    showModalBg: boolean = false;
    showVehicles: boolean = false;

    vehicles = new Array();
    vehicle = new VehiclesDto();

    currentVehicle: any;
    note: any = '';
    promocode: any = '';
    autocompleteItems: any;
    map: any;
    origin: any;
    destination: any;
    loading: any;
    distance: number = 0;
    duration: number = 0;
    base_fare: number = 0;
    currency: string;
    locality: any = {};
    paymentMethod: string = 'card';
    activeDrivers: Array<any> = [];
    driverMarkers: Array<any> = [];
    locateDriver: any = false;
    cancelDriver: any = false;
    drivers: any;
    user: any;
    me: any;
    discount: any = 0;
    startLatLng: any;
    destLatLng: any;
    directionsService: any;
    directionsDisplay: any;
    bounds: any;
    cardNumber: any;

    distanceText: any = '';
    durationText: any = '';

    //listagem lugares
    places: any = [];

    //palavras dos campos de busca (search)
    keyword = '';
    keyword_destino = '';
    keyword_origem = '';

    //latitude & longitude
    lat: number;
    lon: number;

    type: string = 'origem';
    not_show_list: boolean = true;
    driver_escolhido = '';
    show_msg = true;
    public alertShown: boolean = false;
    public driverTracking: any = null;
    public waitDriverDecision: any = null;
    public driverStatus: string = null;

    constructor(public nav: NavController, public platform: Platform, public alertCtrl: AlertController,
        public placeService: PlaceService, private geolocation: Geolocation, private chRef: ChangeDetectorRef,
        public loadingCtrl: LoadingController, public settingService: SettingService,
        public tripService: TripService, public driverService: DriverService,
        public afAuth: AngularFireAuth,
        public afDb: AngularFireDatabase,
        public toast: ToastController,
        public authService: AuthService, public translate: TranslateService,
        public dealService: DealService, public navParams: NavParams) {

        localStorage.setItem("isAccepted", "false");

        this.vehicle.id = 1;
        this.vehicle.name = "Vip";
        this.vehicle.icon = "./assets/icon/sedan.svg";
        this.vehicle.base_fare = 8.0;
        this.vehicle.minimum_price = 15.00;
        this.vehicle.fee = 30.50;
        this.vehicle.active = true;
        this.vehicles.push(this.vehicle);

        this.vehicle = new VehiclesDto();
        this.vehicle.id = 2;
        this.vehicle.name = "Luxo"
        this.vehicle.icon = "./assets/icon/luxo.svg"
        this.vehicle.base_fare = 5.0;
        this.vehicle.minimum_price = 10.00;
        this.vehicle.fee = 20.50;
        this.vehicle.active = true;
        this.vehicles.push(this.vehicle);

        this.vehicle = new VehiclesDto();
        this.vehicle.id = 3;
        this.vehicle.name = "Social"
        this.vehicle.icon = "./assets/icon/taxi.svg"
        this.vehicle.base_fare = 1.0;
        this.vehicle.minimum_price = 5.50;
        this.vehicle.fee = 10.50;
        this.vehicle.active = true;
        this.vehicles.push(this.vehicle);

        this.vehicle = new VehiclesDto();
        this.vehicle.id = 4;
        this.vehicle.name = "Vans"
        this.vehicle.icon = "./assets/icon/van.svg"
        this.vehicle.base_fare = 15.0;
        this.vehicle.minimum_price = 20.00;
        this.vehicle.fee = 50.50;
        this.vehicle.active = true;
        this.vehicles.push(this.vehicle);


        this.platform.ready()
            .then(() => {

                this.platform.registerBackButtonAction(() => {
                    if (this.alertShown == false) {
                        this.presentConfirm();
                    }
                }, 0)

                this.translate.setDefaultLang('pt-br');
                this.origin = tripService.getOrigin();
                this.origin = { "lat": -23.5336069, "long": -46.4465054, "vicinity": "Rua Bento Vieira de Castro, 474" };
                this.keyword_origem = this.origin ? this.origin.vicinity : '';

                this.destination = tripService.getDestination();
                this.destination = { "lat": -23.5629261, "long": -46.6570029 - 23.5336069, "vicinity": "Av.Paulista, 1374" };
                this.keyword_destino = this.destination ? this.destination.vicinity : '';

                afAuth.authState.subscribe(authData => {
                    if (authData) {
                        this.user = authService.getUserData();
                        authService.getUser(this.user.uid).valueChanges().subscribe((snapshot: any) => {
                            //snapshot.uid = snapshot.$key;
                            //snapshot.uid = snapshot.$key;
                            if (snapshot) {
                                snapshot.uid = "CfQswwkyeaht5raUOcO9ylH26zv2";
                                snapshot.name = "Teste";
                            }
                            else {
                                snapshot = {};
                                snapshot.uid = "CfQswwkyeaht5raUOcO9ylH26zv2";
                                snapshot.name = "Teste";
                            }

                            snapshot.uid = "CfQswwkyeaht5raUOcO9ylH26zv2";
                            this.me = snapshot;

                            if (this.me.itin == '' || this.me.id_card == '' || this.me.birthdate == '' ||
                                this.me.name == '' || this.me.email == '' || this.me.phoneNumber == '' ||
                                this.me.cnh == '') {
                                //Caso uma das informações obrigatórias não esteja preenchida, envia pra página do Perfil
                                this.nav.push(UserPage, { 'uid': this.user.uid });
                            }
                        });
                    }
                });
            });


    }


    ngOnInit() {

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

    //choose a place
    selectPlace(place) {
        if (this.type == 'origem') {
            this.tripService.setOrigin(place.name, place.geometry.location.lat, place.geometry.location.lng);
        } else {
            this.tripService.setDestination(place.name, place.geometry.location.lat, place.geometry.location.lng);
        }
        this.nav.setRoot(HomePage);
    }

    //search by address
    search(tipo) {
        this.not_show_list = false;
        if (tipo == 'origem') {
            this.keyword = this.keyword_origem;
        } else {
            this.keyword = this.keyword_destino;
        }
        this.type = tipo;
        this.placeService.searchByAddress(this.keyword, this.lat, this.lon).subscribe((result: any) => {
            this.hideLoading();
            this.places = result.results.slice(0, 10);

        });
    }

    // calculate distance from a place to current position
    calcDistance(place) {
        return this.placeService.calcCrow(place.geometry.location.lat, place.geometry.location.lng, this.lat, this.lon).toFixed(1);
    }

    ionViewWillEnter() {


        this.not_show_list = true;

        // on view ready, start loading map
        this.tripService.getTrips().then((trips: any) => {
            trips.forEach(trip => {

                if (trip.status == 'waiting' || trip.status == 'accepted' || trip.status == 'going') {
                    this.nav.setRoot(TrackingPage, { tripId: trip.key });
                }
            })
        });

        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lon = resp.coords.longitude;
            if (this.type == 'origem') {
                this.search(this.type);
            }
        }).catch((error) => {
            console.log('Erro na localização', error);
        });

        this.loadMap();


        //this.showDriverOnMap(this.locality);
    }

    ionViewWillLeave() {

        // if (localStorage.getItem("interval_driverTracking") != null) {
        //     clearInterval(+localStorage.getItem("interval_driverTracking"));
        // }

        // if (localStorage.getItem("interval_waitDriverDecision") != null) {
        //     clearInterval(+localStorage.getItem("interval_waitDriverDecision"));
        // }

    }

    // get current payment method from service
    getPaymentMethod() {
        this.paymentMethod = this.tripService.getPaymentMethod()
        return this.paymentMethod;
    }

    choosePaymentMethod1() {
        let alert = this.alertCtrl.create({ message: 'Forma de Pagamento' });
        alert.addInput({ type: 'radio', label: 'Cash', value: 'cash', checked: false });
        this.authService.getCardSetting().subscribe((snapshot: any) => {
            if (snapshot) {
                this.cardNumber = snapshot.number;
                if (this.cardNumber != null || this.cardNumber != undefined)
                    alert.addInput({ type: 'radio', label: 'Credit Card', value: 'card' });
            }
        });

        alert.addButton({ text: 'Cancel' });

        alert.addButton({
            text: 'Ok',
            handler: data => {
                // console.log(data);
                this.tripService.setPaymentMethod(data);
            }
        });
        alert.present();
    }

    // toggle active vehicle
    chooseVehicle(index) {
        for (var i = 0; i < this.vehicles.length; i++) {
            this.vehicles[i].active = (i == index);
            // choose this vehicle type
            if (i == index) {
                this.tripService.setVehicle(this.vehicles[i]);
                this.currentVehicle = this.vehicles[i];
            }
        }
        // start tracking new driver type
        this.trackDrivers();
        this.toggleVehicles();
    }

    goProfilePage() {
        this.nav.push(UserPage, { user: this.user });
    }

    async initMap(): Promise<void> {
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

        this.map = new Map(document.getElementById(this.mapId) as HTMLElement, {
            zoom: 15,
            center: { lat: -23.5336069, lng: -46.4465054 },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: true,
            streetViewControl: false,
            disableDefaultUI: false,
            styles: this.placeService.temaWY()
        });
        console.log("=============",this.map);
    }

    // load map
    loadMap() {
        this.showLoading();
        this.show_msg = true;

        this.initMap();

        // get current location
        // return this.geolocation.getCurrentPosition().then((resp) => {
        //     this.not_show_list = true;

        //     if (this.origin.location) {
        //         this.startLatLng = new google.maps.LatLng(this.origin.location.lat, this.origin.location.lng);
        //     }
        //     else {
        //         this.startLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        //     }
        //     let directionsDisplay;
        //     let directionsService = new google.maps.DirectionsService();
        //     directionsDisplay = new google.maps.DirectionsRenderer();


        //     this.initMap();

        //     google.maps.event.addListener(this.map, 'center_changed', () => { alert(this.map.getCenter()); });
            

        //     // this.map = new google.maps.Map(document.getElementById(this.mapId), {
        //     //     zoom: 15,
        //     //     center: this.startLatLng,
        //     //     mapTypeId: google.maps.MapTypeId.ROADMAP,
        //     //     mapTypeControl: false,
        //     //     zoomControl: true,
        //     //     streetViewControl: false,
        //     //     disableDefaultUI: false,
        //     //     styles: this.placeService.temaWY()
        //     // });

        //     let mapx = this.map;
        //     directionsDisplay.setMap(mapx);

        //     // find map center address
        //     let geocoder = new google.maps.Geocoder();
        //     geocoder.geocode({ 'latLng': this.map.getCenter() }, (results, status) => {
        //         if (status == google.maps.GeocoderStatus.OK) {
        //             if (!this.origin) {
        //                 // set map center as origin
        //                 this.origin = this.placeService.formatAddress(results[0]);
        //                 this.tripService.setOrigin(this.origin.vicinity, this.origin.location.lat, this.origin.location.lng);
        //                 this.setOrigin();
        //                 this.chRef.detectChanges();
        //             } else {
        //                 this.setOrigin();
        //             }
        //             this.keyword_origem = this.origin.vicinity;
        //             this.not_show_list = true;

        //             // save locality
        //             let locality = this.placeService.setLocalityFromGeocoder(results);
        //             //// console.log('locality', locality);
        //             // load list vehicles
        //             this.settingService.getPrices().valueChanges().subscribe((snapshot: any) => {
        //                 //// console.log('snapshot',snapshot);
        //                 let obj = snapshot[locality] ? snapshot[locality] : snapshot.default;
        //                 //// console.log('prices', obj);
        //                 this.currency = obj.currency;
        //                 this.base_fare = parseFloat(obj.base_fare);
        //                 this.tripService.setCurrency(this.currency);

        //                 this.vehicles = [];
        //                 // calculate price
        //                 Object.keys(obj.vehicles).forEach(id => {
        //                     obj.vehicles[id].id = id;
        //                     this.vehicles.push(obj.vehicles[id]);
        //                 });

        //                 // calculate distance between origin adn destination
        //                 if (this.destination) {
        //                     this.placeService.getDirection(this.origin.location.lat,
        //                         this.origin.location.lng,
        //                         this.destination.location.lat,
        //                         this.destination.location.lng).subscribe((result: any) => {
        //                             //// console.log(result);
        //                             if (result.routes.length != 0) {
        //                                 this.distance = result.routes[0].legs[0].distance.value;
        //                                 this.duration = result.routes[0].legs[0].duration.value;

        //                                 this.distanceText = result.routes[0].legs[0].distance.text;
        //                                 this.durationText = result.routes[0].legs[0].duration.text;

        //                                 for (let i = 0; i < this.vehicles.length; i++) {
        //                                     let minute_price = (Math.round(this.duration / 60)) * parseFloat(this.vehicles[i].price_min);
        //                                     // 30/60 * 0.50
        //                                     //0,50
        //                                     let distance_price = (this.distance / 1000) * parseFloat(this.vehicles[i].price);
        //                                     //10/1000 * 1,50
        //                                     //0,015

        //                                     this.vehicles[i].fee = (parseFloat(this.vehicles[i].base_fare) + distance_price + minute_price);
        //                                     this.vehicles[i].fee = this.vehicles[i].fee.toFixed(2);
        //                                     //1,00 + 0,015,+ 0,50 = 1,515

        //                                     if (parseFloat(this.vehicles[i].fee) < parseFloat(this.vehicles[i].minimum_price)) {
        //                                         this.vehicles[i].fee = parseFloat(this.vehicles[i].minimum_price).toFixed(2);
        //                                     }
        //                                     //
        //                                     //// console.log('composicao', this.vehicles[i].fee);
        //                                 }
        //                             } else {
        //                                 this.alertCtrl.create({
        //                                     subTitle: 'Motorista não encontrado',
        //                                     buttons: ['OK']
        //                                 }).present();
        //                             }
        //                         });
        //                 }

        //                 // set first device as default
        //                 this.vehicles[0].active = true;
        //                 this.currentVehicle = this.vehicles[0];
        //                 this.locality = locality;
        //             });
        //         }
        //     });

        //     // add destination to map
        //     if (this.destination.location) {
        //         this.destLatLng = new google.maps.LatLng(this.destination.location.lat, this.destination.location.lng);
        //         var bounds = new google.maps.LatLngBounds();
        //         bounds.extend(this.startLatLng);
        //         bounds.extend(this.destLatLng);

        //         mapx.fitBounds(bounds);
        //         var request = {
        //             origin: this.startLatLng,
        //             destination: this.destLatLng,
        //             travelMode: google.maps.TravelMode.DRIVING
        //         };
        //         directionsService.route(request, function (response, status) {
        //             if (status == google.maps.DirectionsStatus.OK) {
        //                 //// console.log(response);
        //                 directionsDisplay.setDirections(response);
        //                 directionsDisplay.setMap(mapx);
        //             } else {
        //                 // console.log("error");
        //             }
        //         });
        //     }
        //     this.hideLoading();
        // }).catch((error) => {
        //     this.hideLoading();
        //     console.log('Erro na localização', error);
        // });
    }

    showPromoPopup() {
        let prompt = this.alertCtrl.create({
            title: 'Código de Promoção',
            message: "",
            inputs: [
                {
                    name: 'promocode',
                    placeholder: 'Código'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: data => { }
                },
                {
                    text: 'Apply',
                    handler: data => {

                        firebase.database()
                            .ref('promocodes')
                            .orderByChild('code')
                            .once('value')
                            .then((promocodes: any) => {

                                let tmp = { key: promocodes.key, ...promocodes.val() };

                                if (tmp != null) {
                                    this.promocode = tmp.code;
                                    this.discount = tmp.discount;
                                    this.tripService.setPromo(tmp.code);
                                    this.tripService.setDiscount(tmp.discount);
                                    //// console.log('promo applied', tmp.code, tmp.discount);
                                }
                            }, err => console.log(err));
                    }
                }
            ]
        });
        prompt.present();
    }

    // Show note popup when click to 'Notes to user'
    showNotePopup() {
        let prompt = this.alertCtrl.create({
            title: 'Nota para o Motorista',
            message: "",
            inputs: [
                {
                    name: 'nota',
                    placeholder: 'Nota'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: data => {
                        //// console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: data => {
                        this.note = data;
                        this.tripService.setNote(data);
                        //// console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };

    // go to next view when the 'Book' button is clicked
    book() {

        //para de trackear motoristas 
        if (localStorage.getItem("interval_driverTracking") != null) {
            clearInterval(+localStorage.getItem("interval_driverTracking"));
        }

        //para de esperar resposta do motorista
        if (localStorage.getItem("interval_waitDriverDecision") != null) {
            clearInterval(+localStorage.getItem("interval_waitDriverDecision"));
        }


        this.locateDriver = true;
        this.cancelDriver = true;

        // store detail
        this.tripService.setAvailableDrivers(this.activeDrivers);
        this.tripService.setDistance(this.distance);
        this.tripService.setFee(this.currentVehicle.fee);
        this.tripService.setIcon(this.currentVehicle.icon);
        this.tripService.setNote(this.note);
        this.tripService.setPromo(this.promocode);
        this.tripService.setDiscount(this.discount);

        // this.tripService.setPaymentMethod('');
        this.drivers = this.tripService.getAvailableDrivers();

        // sort by driver distance and rating
        this.drivers = this.dealService.sortDriversList(this.drivers);

        //// console.log('Ve os ativos DEAL')
        console.log(this.drivers);

        if (this.drivers) {

            this.driverStatus = 'Bidding';

            //pega o primeiro
            let driver = this.drivers[0];
            this.makeDeal(driver);
        }
        else {
            this.toast.create({ message: 'Nenhum motorista encontrado...', duration: 1000 }).present();
        }

    }

    makeDeal(driver: any) {


        this.dealService.getDriverDeal(driver.key).valueChanges().subscribe((snapshot: any) => {

            console.log("getDriverDeal-->", snapshot);

            if ((snapshot == null) &&
                (this.driverStatus == 'Bidding')) {

                // create a record
                //// console.log(snapshot);
                this.dealService.makeDeal(
                    driver.key,
                    this.tripService.getOrigin(),
                    this.tripService.getDestination(),
                    this.tripService.getDistance(),
                    this.tripService.getFee(),
                    this.tripService.getCurrency(),
                    this.tripService.getNote(),
                    this.tripService.getPaymentMethod(),
                    this.tripService.getPromo(),
                    this.tripService.getDiscount()
                ).then(() => {
                    console.log('Deal set Successfully');

                    this.driverStatus = 'TripSet';

                    if (localStorage.getItem("interval_waitDriverDecision") != null) {
                        clearInterval(+localStorage.getItem("interval_waitDriverDecision"));
                    }
                    let waitDriverDecision = setInterval(() => {
                        this.askDriverDecision(driver);
                    }, POSITION_INTERVAL);
                    localStorage.setItem('interval_waitDriverDecision', waitDriverDecision.toString());

                })
                    .catch((err) => {
                        console.error('Trip Set Error', err);
                        this.book();

                    });
            }
        });

    }


    // Verifica se motorista aceitou/rejeitou/expirou
    askDriverDecision(driver: any) {
        driver = 0;
        // let sub = this.dealService.getDriverDeal(driver.key).valueChanges().subscribe((snap: any) => {
        //     console.log('askDriverDecision - getDriverDeal -->', snap);

        //     if (snap != null) {
        //         if (snap.status == DEAL_STATUS_PENDING) {
        //             return false;
        //         }
        //         else {

        //             if (localStorage.getItem("isAccepted") == "false") {

        //                 localStorage.setItem("isAccepted", "true");

        //                 if (localStorage.getItem("interval_driverTracking") != null) {
        //                     clearInterval(+localStorage.getItem("interval_driverTracking"));
        //                 }
        //                 if (localStorage.getItem("interval_waitDriverDecision") != null) {
        //                     clearInterval(+localStorage.getItem("interval_waitDriverDecision"));
        //                 }

        //                 if (snap.status == DEAL_STATUS_ACCEPTED) {

        //                     this.dealService.removeDeal(driver.key);

        //                     this.drivers = [];
        //                     this.tripService.setId(snap.tripId);

        //                     this.nav.setRoot(TrackingPage);
        //                 }
        //                 else {
        //                     this.cancelTrip();
        //                     this.nav.setRoot(HomePage);
        //                 }
        //             }
        //         }
        //     }
        //     else {
        //         if (localStorage.getItem("interval_driverTracking") != null) {
        //             clearInterval(+localStorage.getItem("interval_driverTracking"));
        //         }
        //         if (localStorage.getItem("interval_waitDriverDecision") != null) {
        //             clearInterval(+localStorage.getItem("interval_waitDriverDecision"));
        //         }
        //     }

        // });
    }

    // choose payment method
    choosePaymentMethod() {
        // go to payment method page
        this.nav.push(PaymentMethodPage);
    }

    // add origin marker to map
    setOrigin() {
        // add origin and destination marker
        let latLng = new google.maps.LatLng(this.origin.location.lat, this.origin.location.lng);
        let startMarker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        startMarker.setMap(this.map);
        if (this.destination)
            startMarker.setMap(null);
        // set map center to origin address
        this.map.setCenter(latLng);
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        this.loading.present();
    }

    hideLoading() {
        if (this.loading.present()) {
            this.loading.dismiss();
        }
    }

    // show or hide vehicles
    toggleVehicles() {
        this.showVehicles = !this.showVehicles;
        this.showModalBg = (this.showVehicles == true);
    }

    // track drivers
    trackDrivers() {

        debugger;
        if (localStorage.getItem("interval_driverTracking") != null) {
            clearInterval(+localStorage.getItem("interval_driverTracking"));
        }
        let driverTracking = setInterval(() => {
            this.showDriverOnMap(this.locality);
        }, POSITION_INTERVAL);
        localStorage.setItem('interval_driverTracking', driverTracking.toString());
    }

    // show drivers on map
    showDriverOnMap(locality) {

        // firebase.database()
        //     .ref('localities')
        //     .child(locality)
        //     .child(this.currentVehicle.id.toUpperCase())
        //     .once('value', drivers => {

        firebase.database()
            .ref('driversOnline')
            .orderByChild("locality")
            .equalTo(locality)

            .once('value', drivers => {
                let vehicles: any = [];
                drivers.forEach(driver => {
                    vehicles.push({ key: driver.key, ...driver.val() });
                });

                //clear vehicles
                this.activeDrivers = [];
                this.driverMarkers.forEach((vehicle) => {
                    vehicle.setMap(null);
                });

                // only show near vehicle
                vehicles.forEach(vehicle => {

                    if (this.currentVehicle.id.toUpperCase() == vehicle.vehicleType) {

                        //console.log('vehicle-->', vehicle);
                        // console.log(vehicle.name);

                        // only show vehicle which has last active < 30 secs & distance < 5km
                        //let distance = this.placeService.calcCrow(vehicle.lat, vehicle.lng, this.origin.location.lat, this.origin.location.lng);
                        let distance = 10000;
                        //// console.log(distance);
                        debugger;

                        console.log("distance:" + distance, " Last Active: " + (Date.now() - vehicle.last_active), " Last Active2: " + (Date.now() - vehicle.last_active), ' -  atual: ' + Date.now(), ' - last: ' + vehicle.last_active, 'nome:' + vehicle.name);
                        // checking last active time and distance

                        const dt = Date.now();
                        if (distance < SHOW_VEHICLES_WITHIN && (dt - vehicle.last_active) / 2 < VEHICLE_LAST_ACTIVE_LIMIT) {
                            // create or update
                            let latLng = new google.maps.LatLng(vehicle.lat, vehicle.lng);

                            let marker = new google.maps.Marker({
                                map: this.map,
                                position: latLng,
                                icon: {
                                    url: this.currentVehicle.map_icon,
                                    size: new google.maps.Size(32, 32),
                                    origin: new google.maps.Point(0, 0),
                                    anchor: new google.maps.Point(16, 16),
                                    scaledSize: new google.maps.Size(32, 32)
                                },
                            });

                            // add vehicle and marker to the list
                            vehicle.distance = distance;
                            // console.log(marker);
                            this.driverMarkers.push(marker);
                            this.activeDrivers.push(vehicle);
                        } else {
                            console.log('This vehicle is too far:', vehicle);
                        }
                    }
                });

            }, err => {
                console.log("Erro---> show drivers on map:", err);
            });


    }



    cancelTrip() {

        this.locateDriver = false;
        this.cancelDriver = true;

        setTimeout(() => {
            this.locateDriver = false;
            this.cancelDriver = false;
        }, 5000);

        this.show_msg = false;
        this.dealService.removeDeal(this.drivers[0]);
        this.destination = null;
        this.keyword_destino = '';
        this.loadMap();
        this.durationText = '';
        this.distanceText = '';

        this.book();

    }
}

// // Add a new document in collection "cities"
// firebase.database().ref("promocodes").set([
//     {
//     code: 1010,
//     discount: 1
//     },
//     {
//         code: 2020,
//         discount: 2
//         },
//         {
//             code: 3030,
//             discount: 3
//             },
//     {
//         code: 4040,
//         discount: 4
//         }
//     ])
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });
