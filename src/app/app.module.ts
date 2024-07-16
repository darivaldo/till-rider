import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {Keyboard } from '@ionic-native/keyboard/ngx';
import {HttpModule } from '@angular/http';
import {Geolocation} from '@ionic-native/geolocation';
import {IonicStorageModule} from '@ionic/storage';

// Import the AF2 Module
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';

// Import moment module
import {MomentModule} from 'angular2-moment';

// import services
import {DriverService} from '../services/driver-service';

import {PlaceService} from '../services/place-service';
import {TripService} from '../services/trip-service';
import {SettingService} from "../services/setting-service";
import {DealService} from "../services/deal-service";
import {AuthService} from "../services/auth-service";

import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {PaymentMethodPage} from '../pages/payment-method/payment-method';
import {PlacesPage} from '../pages/places/places';
import {RegisterPage} from '../pages/register/register';
import {TrackingPage} from '../pages/tracking/tracking';
import {MapPage} from "../pages/map/map";
import {UserPage} from '../pages/user/user';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {ComponentsModule} from "../components/components.module";
import {PaymentsPage} from "../pages/payments/payments";
import {IndicacaoPage} from "../pages/indicacao/indicacao";
import {BrMaskerModule} from 'brmasker-ionic-3';
import {BankService} from "../services/bank-service";
import {CepProvider} from '../providers/cep/cep';
import {CadastroDadoProvider} from '../providers/cadastro-dado/cadastro-dado';
import {Camera} from '@ionic-native/camera';
import {File} from "@ionic-native/file/ngx";
import {TermosPage} from "../pages/termos/termos";
import {GanhosPage} from "../pages/ganhos/ganhos";
import {PremiosPage} from "../pages/premios/premios";
import {CashbackPage} from "../pages/cashback/cashback";
import { SplashPage } from '../pages/splash/splash';


import {PrizeService} from "../services/prize-service";

import {SplashScreen} from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar/ngx';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

export const firebaseConfig = {
    apiKey: "AIzaSyCYCDMmzOBqDE0H89ng2ogEFw9rYGzR-QA",
    authDomain: "bumingapp-f10d3.firebaseapp.com",
    databaseURL: "https://bumingapp-f10d3.firebaseio.com",
    projectId: "bumingapp-f10d3",
    storageBucket: "bumingapp-f10d3.appspot.com",
    messagingSenderId: "699781527060"
};


@NgModule({
    declarations: [
        MyApp,
        SplashPage,
        HomePage,
        LoginPage,
        PaymentMethodPage,
        PlacesPage,
        RegisterPage,
        TrackingPage,
        MapPage,
        UserPage,
        PaymentsPage,
        IndicacaoPage,
        TermosPage,
        GanhosPage,
        PremiosPage,
        CashbackPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicStorageModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        MomentModule,
        IonicModule.forRoot(MyApp, {
            mode: 'md'
        }),
        BrMaskerModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        SplashPage,
        HomePage,
        LoginPage,
        PaymentMethodPage,
        PlacesPage,
        RegisterPage,
        TrackingPage,
        MapPage,
        UserPage,
        PaymentsPage,
        IndicacaoPage,
        TermosPage,
        GanhosPage,
        PremiosPage,
        CashbackPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Keyboard,
        Geolocation,
        DriverService,
        PlaceService,
        TripService,
        SettingService,
        DealService,
        AuthService,
        Camera,
        File,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ComponentsModule,
        CepProvider,
        BankService,
        CadastroDadoProvider,
        PrizeService,
    ]
})
export class AppModule {
}
