import {Component} from '@angular/core';
import {NavController, NavParams, ToastController, LoadingController, Platform, AlertController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";

import {AuthService} from "../../services/auth-service";
import {TripService} from '../../services/trip-service';
import {TranslateService} from '@ngx-translate/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


import {CepProvider} from "../../providers/cep/cep";
import {BankService} from "../../services/bank-service";
import { CadastroDadoProvider } from "../../providers/cadastro-dado/cadastro-dado";

import * as firebase from 'firebase/app';

declare var Stripe: any;

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage {
    user: any = {photoUrl: '', photoCNH: '', photoComprovante: ''}; 
    tripCount = 0;
    totalSpent = 0;
    tabs: any = 'profile';
    trips: Array<any>;
    number: any;
    exp: any;
    cvv: any;
    isPhoneVerified: boolean = false;
    banks: any;
    endereco: any;
    tem_email: boolean = true;
    
    constructor(public nav: NavController, public authService: AuthService, public navParams: NavParams,
                public camera: Camera, private cepProvider: CepProvider, public bankService: BankService,
                public alertCtrl: AlertController, public toastCtrl: ToastController,
                public loadingCtrl: LoadingController, public platform: Platform,
                public dado: CadastroDadoProvider,
                public tripService: TripService, public translate: TranslateService){

        this.translate.setDefaultLang('pt-br');
        
        this.tem_email = true;

        let userx = navParams.get('user');

        if (!userx){
            userx = this.authService.getUserData();
        }
        
        this.authService.getUser(userx.uid).valueChanges().subscribe( (snapshot:any) => {
            snapshot.uid = snapshot.$key;
            this.user = snapshot;
            this.user.isEmailVerified = firebase.auth().currentUser.emailVerified;

            if(!this.user.email){
                this.tem_email = false;
            }else if(this.user.email == ''){
                this.tem_email = false;
            }

            if(!this.user.photoUrl){
                this.user.photoUrl = 'assets/img/no_image.jpeg';
            }else{
                if(this.user.photoUrl == ''){
                    this.user.photoUrl = 'assets/img/no_image.jpeg';
                }
            }
            if(!this.user.photoCNH){
                this.user.photoCNH = 'assets/img/no_image.jpeg';
            }else{
                if(this.user.photoCNH == ''){
                    this.user.photoCNH = 'assets/img/no_image.jpeg';
                }
            }
            if(!this.user.photoComprovante){
                this.user.photoComprovante = 'assets/img/no_image.jpeg';
            }else{
                if(this.user.photoComprovante == ''){
                    this.user.photoComprovante = 'assets/img/no_image.jpeg';
                }
            }
        });

        authService.getCardSetting().subscribe( (snapshot:any) => {
            this.number = snapshot.number;
            this.exp = snapshot.exp;
            this.cvv = snapshot.cvv;
        });

        this.bankService.getBanks().subscribe( (snapshot:any) => {
            this.banks = Object.keys(snapshot).map(function (key) {
                return snapshot[key];
            })
        });
    }

    // save user info
    save() {
        this.user.isPhoneVerified = this.isPhoneVerified;
        this.dado.save(this.user);
        this.authService.updateUserProfile(this.user);
        this.nav.pop();
        this.displayToast("Perfil atualizado");
    }

    //Tira qualquer foto, plota na tela e já salva no objeto
    takePicture(tipo: any) {
        const options: CameraOptions = {
            quality: 85,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            targetWidth:  window.screen.width,
            targetHeight: window.screen.height,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };

        this.camera.getPicture(options)
            .then((imageData) => {
                let base64image = 'data:image/jpeg;base64,' + imageData;
                if(tipo == 'SELF'){
                    this.user.photoUrl = base64image;
                }
                if(tipo == 'CNH'){
                    this.user.photoCNH = base64image;
                }
                if(tipo == 'COMPROVANTE'){
                    this.user.photoComprovante = base64image;
                }
                //Atualiza dados passageiro
                this.authService.updateUserProfile(this.user);
            }, (error) => {
                console.error(error);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    logout() {
        this.authService.logout().then(() => {
            this.nav.setRoot(LoginPage);
        });
    }

    getTrips() {
        let loading = this.loadingCtrl.create({content: 'Aguarde...'});
        loading.present();
        this.tripService.getTrips().then( (snapshot:any) => {
            this.trips = snapshot.reverse();
            loading.dismiss();
        });
    }

    verifyPhone() {
        if (this.platform.is('core')) {
            this.displayToast("Only Works on Device");
        } else {
            console.log(this.user.phoneNumber);
            // (<any>window).AccountKitPlugin.loginWithPhoneNumber({
            //     useAccessToken: true,
            //     defaultCountryCode: "BR",
            //     facebookNotificationsEnabled: true,
            //     initialPhoneNumber: ["+55", this.user.phoneNumber]
            // }, data => {
            //     this.displayToast("Verificado com sucesso");
            //     this.user.isPhoneVerified = true;
            //     this.authService.updateUserProfile(this.user);
            // });
        }
    }

    verifyEmail() {
        firebase.auth().currentUser.sendEmailVerification().then(data => {
            this.displayToast("Verifique sua caixa de e-mail");
        }).catch(err => console.log(err));
    }

    displayToast(message) {
        this.toastCtrl.create({duration: 2000, message}).present();
    }

    // save card settings
    saveCard() {
        const exp = this.exp.split('/');
        const loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        loading.present();

        Stripe.card.createToken({
          number: this.number,
          exp_month: exp[0],
          exp_year: exp[1],
          cvc: this.cvv
        }, (status: number, response: any) => {
          loading.dismiss();
          // success
          if (status == 200) {
            // if nav from payment method selection
            if (this.navParams.get('back')) {
              this.nav.pop();
            } else {
              this.nav.setRoot(HomePage);
            }

            this.authService.updateCardSetting(this.number, this.exp, this.cvv, response.id);
            let toast = this.toastCtrl.create({
              message: 'Your card setting has been updated',
              duration: 3000,
              position: 'middle'
            });
            toast.present();
          } else {
            // error
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: response.error.message,
              buttons: ['OK']
            });
            alert.present();
          }
        });
    }

    async getCep() {
        this.loader('Procurando Endereço...');

        if (this.user.zipcode.length > 0) {

            try {
                this.cepProvider.cep(this.user.zipcode)
                    .then(data => {
                        this.endereco = data;
                        if (!this.endereco.erro) {
                            this.user.address = this.endereco.logradouro;
                            this.user.neighborhood = this.endereco.bairro;
                            this.user.city = this.endereco.localidade;
                            this.user.state = this.endereco.uf;
                        } else {
                            this.showAlertCep();
                        }
                    });
            } catch (e) {
                this.showAlertCep();
            }
        }
    }

    loader(message) {
        const loader = this.loadingCtrl.create({
            content: message,
            duration: 2000
        });
        loader.present();
    }

    showAlertCep() {
        const alert = this.alertCtrl.create({
            title: 'Ocorreu um erro',
            subTitle: 'Não foi posssível encontrar seu endereço pelo CEP informado.',
            buttons: ['OK']
        });
        alert.present();
    }

}
