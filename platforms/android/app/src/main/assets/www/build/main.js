webpackJsonp([3],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_trip_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_cep_cep__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_bank_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_cadastro_till_cadastro_till__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var UserPage = /** @class */ (function () {
    function UserPage(nav, authService, navParams, camera, cepProvider, bankService, alertCtrl, toastCtrl, loadingCtrl, platform, till, tripService, translate) {
        var _this = this;
        this.nav = nav;
        this.authService = authService;
        this.navParams = navParams;
        this.camera = camera;
        this.cepProvider = cepProvider;
        this.bankService = bankService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.till = till;
        this.tripService = tripService;
        this.translate = translate;
        this.user = { photoUrl: '', photoCNH: '', photoComprovante: '' };
        this.tripCount = 0;
        this.totalSpent = 0;
        this.tabs = 'profile';
        this.isPhoneVerified = false;
        this.tem_email = true;
        this.translate.setDefaultLang('pt-br');
        this.tem_email = true;
        var userx = navParams.get('user');
        if (!userx) {
            userx = this.authService.getUserData();
        }
        this.authService.getUser(userx.uid).valueChanges().subscribe(function (snapshot) {
            snapshot.uid = snapshot.$key;
            _this.user = snapshot;
            _this.user.isEmailVerified = __WEBPACK_IMPORTED_MODULE_13_firebase_app__["auth"]().currentUser.emailVerified;
            if (!_this.user.email) {
                _this.tem_email = false;
            }
            else if (_this.user.email == '') {
                _this.tem_email = false;
            }
            if (!_this.user.photoUrl) {
                _this.user.photoUrl = 'assets/img/no_image.jpeg';
            }
            else {
                if (_this.user.photoUrl == '') {
                    _this.user.photoUrl = 'assets/img/no_image.jpeg';
                }
            }
            if (!_this.user.photoCNH) {
                _this.user.photoCNH = 'assets/img/no_image.jpeg';
            }
            else {
                if (_this.user.photoCNH == '') {
                    _this.user.photoCNH = 'assets/img/no_image.jpeg';
                }
            }
            if (!_this.user.photoComprovante) {
                _this.user.photoComprovante = 'assets/img/no_image.jpeg';
            }
            else {
                if (_this.user.photoComprovante == '') {
                    _this.user.photoComprovante = 'assets/img/no_image.jpeg';
                }
            }
        });
        authService.getCardSetting().subscribe(function (snapshot) {
            _this.number = snapshot.number;
            _this.exp = snapshot.exp;
            _this.cvv = snapshot.cvv;
        });
        this.bankService.getBanks().subscribe(function (snapshot) {
            _this.banks = Object.keys(snapshot).map(function (key) {
                return snapshot[key];
            });
        });
    }
    // save user info
    UserPage.prototype.save = function () {
        this.user.isPhoneVerified = this.isPhoneVerified;
        this.till.save(this.user);
        this.authService.updateUserProfile(this.user);
        this.nav.pop();
        this.displayToast("Perfil atualizado");
    };
    //Tira qualquer foto, plota na tela e já salva no objeto
    UserPage.prototype.takePicture = function (tipo) {
        var _this = this;
        var options = {
            quality: 85,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            targetWidth: window.screen.width,
            targetHeight: window.screen.height,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            var base64image = 'data:image/jpeg;base64,' + imageData;
            if (tipo == 'SELF') {
                _this.user.photoUrl = base64image;
            }
            if (tipo == 'CNH') {
                _this.user.photoCNH = base64image;
            }
            if (tipo == 'COMPROVANTE') {
                _this.user.photoComprovante = base64image;
            }
            //Atualiza dados passageiro
            _this.authService.updateUserProfile(_this.user);
        }, function (error) {
            console.error(error);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    UserPage.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    UserPage.prototype.getTrips = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();
        this.tripService.getTrips().then(function (snapshot) {
            _this.trips = snapshot.reverse();
            loading.dismiss();
        });
    };
    UserPage.prototype.verifyPhone = function () {
        if (this.platform.is('core')) {
            this.displayToast("Only Works on Device");
        }
        else {
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
    };
    UserPage.prototype.verifyEmail = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_13_firebase_app__["auth"]().currentUser.sendEmailVerification().then(function (data) {
            _this.displayToast("Verifique sua caixa de e-mail");
        }).catch(function (err) { return console.log(err); });
    };
    UserPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    // save card settings
    UserPage.prototype.saveCard = function () {
        var _this = this;
        var exp = this.exp.split('/');
        var loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        loading.present();
        Stripe.card.createToken({
            number: this.number,
            exp_month: exp[0],
            exp_year: exp[1],
            cvc: this.cvv
        }, function (status, response) {
            loading.dismiss();
            // success
            if (status == 200) {
                // if nav from payment method selection
                if (_this.navParams.get('back')) {
                    _this.nav.pop();
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
                _this.authService.updateCardSetting(_this.number, _this.exp, _this.cvv, response.id);
                var toast = _this.toastCtrl.create({
                    message: 'Your card setting has been updated',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                // error
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: response.error.message,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    UserPage.prototype.getCep = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loader('Procurando Endereço...');
                if (this.user.zipcode.length > 0) {
                    try {
                        this.cepProvider.cep(this.user.zipcode)
                            .then(function (data) {
                            _this.endereco = data;
                            if (!_this.endereco.erro) {
                                _this.user.address = _this.endereco.logradouro;
                                _this.user.neighborhood = _this.endereco.bairro;
                                _this.user.city = _this.endereco.localidade;
                                _this.user.state = _this.endereco.uf;
                            }
                            else {
                                _this.showAlertCep();
                            }
                        });
                    }
                    catch (e) {
                        this.showAlertCep();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    UserPage.prototype.loader = function (message) {
        var loader = this.loadingCtrl.create({
            content: message,
            duration: 2000
        });
        loader.present();
    };
    UserPage.prototype.showAlertCep = function () {
        var alert = this.alertCtrl.create({
            title: 'Ocorreu um erro',
            subTitle: 'Não foi posssível encontrar seu endereço pelo CEP informado.',
            buttons: ['OK']
        });
        alert.present();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\user\user.html"*/'<ion-header>\n    <ion-navbar color="till">\n        <h3 class="nameTop light">{{user.name}}</h3>\n        <ion-buttons end>\n            <button ion-button (click)="logout()">\n                <ion-icon name="log-out"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar> \n</ion-header>\n\n<ion-content>\n    <div class="profileBack">\n        <div style="text-align:center;">\n            <img src="{{ user.photoUrl }}" class="profileImage" (click)="takePicture(\'SELF\')">\n        </div>\n    </div>\n\n    <ion-segment class="profileButtons" [(ngModel)]="tabs">\n        <ion-segment-button value="profile">\n            {{\'Perfil\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="docs">\n            {{\'Documentos\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="residence">\n            {{\'Residência\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="cardsetting" (click)="getTrips()">\n            Meio de Pagamento\n        </ion-segment-button>\n        <ion-segment-button value="ridehistroy" (click)="getTrips()">\n            Corridas\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]="tabs">\n        <div *ngSwitchCase="\'profile\'">\n            <ion-list>\n                <ion-item>\n                    <ion-label stacked>{{\'FULLNAME\' | translate}}</ion-label>\n                    <ion-input type="text" [(ngModel)]="user.name" disabled></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>{{\'EMAIL_ADDRESS\' | translate}}</ion-label>\n                    <ion-input type="email" [(ngModel)]="user.email" [disabled]="tem_email"></ion-input>\n                    <button ion-button item-right clear *ngIf="!user.isEmailVerified"\n                            (click)="verifyEmail()">{{\'VERIFY\' | translate}}</button>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>{{\'Celular\' | translate}}</ion-label>\n                    <ion-input type="tel" [(ngModel)]="user.phoneNumber" [disabled]="user.isPhoneVerified"\n                               [brmasker]="{phone: true}"></ion-input>\n                    <button ion-button item-right clear *ngIf="!user.isPhoneVerified"\n                            (click)="verifyPhone()">{{\'VERIFY\' | translate}}</button>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>CPF</ion-label>\n                    <ion-input [(ngModel)]="user.itin" [brmasker]="{mask:\'000.000.000-00\', len:14}" maxlength="14" disabled></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>RG</ion-label>\n                    <ion-input [(ngModel)]="user.id_card" [brmasker]="{mask:\'00.000.000-00\', len:13}"  maxlength="13"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>Nascimento</ion-label>\n                    <ion-datetime [(ngModel)]="user.birthdate" displayFormat="DD/MM/YYYY" [max]="year" disabled></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>Banco</ion-label>\n                    <ion-select type="text" [(ngModel)]="user.bank">\n                        <ion-option value="{{bank.Code}}" *ngFor="let bank of banks">\n                            {{ bank.Name}}\n                        </ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>Agência</ion-label>\n                    <ion-input maxlength="10" type="text" [(ngModel)]="user.agency"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>Conta</ion-label>\n                    <ion-input maxlength="20" type="text" [(ngModel)]="user.account"></ion-input>\n                </ion-item>\n            </ion-list>\n        </div>\n\n        <!-- Inicio Aba Docs -->\n        <div *ngSwitchCase="\'docs\'">\n            <div style="text-align:center;">\n                <ion-label stacked>RG/CNH</ion-label>\n                <img src="{{ user.photoCNH }}" class="profileImage" (click)="takePicture(\'CNH\')">\n                <ion-label stacked>Comprovante Residência</ion-label>\n                <img src="{{ user.photoComprovante }}" class="profileImage" (click)="takePicture(\'COMPROVANTE\')">\n            </div>\n        </div>\n        <!-- docs até aqui... -->\n\n        <div *ngSwitchCase="\'residence\'">\n            <ion-item>\n                <ion-label stacked>CEP</ion-label>\n                <ion-input [(ngModel)]="user.zipcode" (ionBlur)="getCep()" type="text" maxlength="9" [brmasker]="{mask:\'00000-000\', type:\'num\'}"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Endereço</ion-label>\n                <ion-input [(ngModel)]="user.address" type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Número</ion-label>\n                <ion-input [(ngModel)]="user.number" type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Complemento</ion-label>\n                <ion-input [(ngModel)]="user.complement" type="text" required="true"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Bairro</ion-label>\n                <ion-input [(ngModel)]="user.neighborhood" type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Cidade</ion-label>\n                <ion-input [(ngModel)]="user.city" type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Estado</ion-label>\n                <ion-input [(ngModel)]="user.state" type="text"></ion-input>\n            </ion-item>\n        </div>\n        <div *ngSwitchCase="\'cardsetting\'" padding>\n            <ion-grid>\n                <ion-row>\n                    <ion-item>\n                        <ion-label stacked>{{\'CARD_NUMBER\' | translate}}</ion-label>\n                        <ion-input type="text" [(ngModel)]="number" size="20"></ion-input>\n                    </ion-item>\n                </ion-row>\n                <ion-row class="split-row">\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label stacked>{{\'EXPIRE_DATE\' | translate}} (MM/YY)</ion-label>\n                            <ion-input type="text" [(ngModel)]="exp" size="5"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label stacked>{{\'CVV\' | translate}}</ion-label>\n                            <ion-input type="text" [(ngModel)]="cvv" size="4"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <button ion-button block (click)="saveCard()">Salvar Cartão</button>\n        </div>\n        <div *ngSwitchCase="\'ridehistroy\'">\n            <ion-card *ngFor="let trip of trips">\n                <ion-card-content>\n                    <ion-row>\n                        <ion-col>\n                            <h1 style="color: #8BC34A; font-weight: 600;">{{trip.currency}} {{ trip.fee - (trip.fee * trip.discount / 100) }}</h1>\n                            <p>Pagamento: {{ trip.paymentMethod }}</p>\n                            <p>ID: {{ trip.createdAt }}</p>\n                        </ion-col>\n                        <ion-col>\n                            <p>{{\'FEE\' | translate}}: {{trip.currency}} {{trip.fee}}</p>\n                            <p>Promo: {{ trip.promo}}</p>\n                            <p>Desconto: {{trip.discount}}</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-item>\n                        <h2>De ({{ trip.pickedUpAt | date: \'medium\'}})</h2>\n                        <p>{{ trip.origin.vicinity }}</p>\n                    </ion-item>\n                    <ion-item>\n                        <h2>Até ({{ trip.droppedOffAt | date: \'medium\'}})</h2>\n                        <p>{{ trip.destination.vicinity }}</p>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <div style="padding: 5px;">\n        <button ion-button block (click)="save()">{{\'SAVE\' | translate}}</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\user\user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_10__providers_cep_cep__["a" /* CepProvider */], __WEBPACK_IMPORTED_MODULE_11__services_bank_service__["a" /* BankService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_12__providers_cadastro_till_cadastro_till__["a" /* CadastroTillProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_database_database__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_cep_cep__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_cadastro_till_cadastro_till__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, authService, alertCtrl, loadingCtrl, translate, navParams, file, formBuilder, db, till, toast, platform, cepProvider) {
        this.nav = nav;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.navParams = navParams;
        this.file = file;
        this.formBuilder = formBuilder;
        this.db = db;
        this.till = till;
        this.toast = toast;
        this.platform = platform;
        this.cepProvider = cepProvider;
        this.origin = '';
        this.email = "";
        this.password = "";
        this.name = "";
        this.phoneNumber = "";
        this.endereco = [];
        this.tabs = 'profile';
        this.uid = '';
        this.me = {};
        this.snapshot = [];
        this.buttonText = '';
        //@ViewChild('inputFilePhoto')
        //inputFilePhoto: TextInput;
        this.year = null;
        this.currentTime = null;
        this.TermoUsoAppAceitou = false;
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(255)])],
            email: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(255)]],
            password: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(14), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(6)])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(15)])],
            itin: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(14)])],
            //id_card: ['', Validators.compose([Validators.required, Validators.maxLength(13)])],
            birthdate: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            //gender: ['', Validators.compose([Validators.required])],
            //zipcode: ['', Validators.compose([Validators.required])],
            //address: ['', Validators.compose([Validators.required])],
            //number: ['', Validators.compose([Validators.required])],
            //complement: [''],
            //neighborhood: ['', Validators.compose([Validators.required])],
            //city: ['', Validators.compose([Validators.required])],
            //state: ['', Validators.compose([Validators.required])],
            //photo: ['', Validators.compose([Validators.required])],
            indicadoPor: [''],
            minhaIndicacao: ['']
        });
        this.origin = this.navParams.get('origin');
        if (this.origin == 'login') {
            this.snapshot = this.navParams.get('snapshot');
            this.form.controls.indicadoPor.setValue(this.snapshot.codigo_indicacao);
            this.form.controls.minhaIndicacao.setValue(this.snapshot.codigo_afiliacao);
            this.getCadastroTill();
            this.buttonText = 'Salvar Dados';
        }
        else {
            this.indicadoPor = this.navParams.get('indicadoPor');
            this.form.controls.indicadoPor.setValue(this.indicadoPor.codigo_afiliacao);
            this.form.controls.minhaIndicacao.setValue(this.navParams.get('minhaIndicacao'));
            this.buttonText = 'Criar Conta';
        }
        this.dateParams();
    }
    RegisterPage.prototype.getCadastroTill = function () {
        var sForm = this.form;
        //Verifica cadastro till
        sForm.controls.name.setValue(this.snapshot.primeiro_nome + ' ' + this.snapshot.segundo_nome);
        sForm.controls.email.setValue(this.snapshot.email);
        sForm.controls.birthdate.setValue(this.snapshot.data_nascimento);
        sForm.controls.itin.setValue(this.snapshot.cpf);
        //sForm.controls.id_card.setValue(this.snapshot.rg);
        sForm.controls.phoneNumber.setValue(this.snapshot.telefone);
        //sForm.controls.gender.setValue(this.snapshot.sexo);
        //sForm.controls.address.setValue(this.snapshot.endereço);
        //sForm.controls.zipcode.setValue(this.snapshot.cep);
        //sForm.controls.complement.setValue(this.snapshot.complemento);
        /*
        this.cepProvider.cep(this.snapshot.cep)
            .then(data => {
                    this.endereco = data;
                    if (!this.endereco.erro) {
                        sForm.controls.neighborhood.setValue(this.endereco.bairro);
                        sForm.controls.city.setValue(this.endereco.localidade);
                        sForm.controls.state.setValue(this.endereco.uf);
                    }
                }
            );
        */
        var alert = this.alertCtrl.create({
            title: 'Till App',
            cssClass: 'alertnormal',
            message: 'Verificamos que seu cadastro pode estar incompleto. Por favor, verifique e complete suas informações.',
            buttons: [{
                    text: 'OK',
                    cssClass: 'oknormalcss',
                }]
        });
        alert.present();
    };
    RegisterPage.prototype.getDbTill = function () {
        var _this = this;
        return this.db.list('pessoas', function (ref) { return ref.orderByChild('email').equalTo(_this.me.email); }).valueChanges();
    };
    /*
        {
            query: {
                orderByChild: 'email',
                equalTo: this.me.email,
            }
        });


    selectPhoto() {
        const nativeElement = this.inputFilePhoto.getElementRef().nativeElement;
        const inputFile = nativeElement.querySelector('input');
        inputFile.click();
    }
    */
    /*
    onChosePhoto(files: FileList) {
       /* if (!files.length) {
            return;
        }

        this.makePhotoPreview(files[0]);
        this.form.get('photo').setValue(files[0]);*/
    //}
    /*
    makePhotoPreview(file: File) {
        /*const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (event: ProgressEvent) => {
            const target = event.target;
            this.photoPreview = (<any>target).result;
        }*/
    //}
    RegisterPage.prototype.submit = function () {
        var _this = this;
        try {
            var loading_1 = this.loadingCtrl.create({ content: 'Criando conta...' });
            loading_1.present();
            this.user = this.form.value;
            var mes = ((new Date().getMonth() + 1) > 9) ? (new Date().getMonth() + 1) : '0' + (new Date().getMonth() + 1);
            this.user.data_cadastro = new Date().getFullYear() + '-' + mes + '-' + new Date().getDate();
            this.user.origem = "1"; //app passageiro
            this.till.save_register(this.user).then(function (response) {
                loading_1.dismiss();
                _this.authService.register(_this.user).subscribe(function (authData) {
                    _this.toast.create({ message: 'Sucesso! Informe Email e Senha para ENTRAR', duration: 5000 }).present();
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }, function (error) {
                    loading_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }, function (error) {
                loading_1.dismiss();
                var alert = _this.alertCtrl.create({
                    message: "ocorreu um erro ao registrar. por favor, tente novamente.",
                    buttons: ['ok']
                });
                alert.present();
            });
        }
        catch (e) {
            var alert_1 = this.alertCtrl.create({
                message: e.message,
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    RegisterPage.prototype.dateParams = function () {
        this.currentTime = new Date();
        this.year = this.currentTime.getFullYear();
        this.year = this.year - 18;
    };
    RegisterPage.prototype.signup = function () {
        /* console.log(this.photo);
         if (this.photo){
             let storageRef = firebase.storage().ref();
             let path = '/users/' + Date.now() + this.photo;
             let iRef = storageRef.child(path);
             iRef.put(this.photo).then((snapshot) => {
                 this.userInfo.photoURL = snapshot.downloadURL;
             });
         }
 */
        this.alertCtrl.create({ message: 'Demonstração do app Till.', buttons: ['OK'] }).present();
        /* let loading = this.loadingCtrl.create({content: 'Criando conta...'});
         loading.present();
         this.authService.register(this.userInfo).subscribe(() => {
             loading.dismiss();
             this.alertCtrl.create({message: 'Conta criada com sucesso', buttons: ['OK']}).present();
         }, error => {
             loading.dismiss();
             this.alertCtrl.create({message: error.message, buttons: ['OK']}).present();
         });*/
    };
    RegisterPage.prototype.takePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.getCep = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, sForm, cep, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({ content: 'Procurando endereço...' });
                        loading.present();
                        sForm = this.form;
                        cep = sForm.controls.zipcode.value;
                        if (!(cep.toString().length > 0)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.cepProvider.cep(cep)
                                .then(function (data) {
                                _this.endereco = data;
                                loading.dismiss();
                                if (!_this.endereco.erro) {
                                    sForm.controls.address.setValue(_this.endereco.logradouro);
                                    sForm.controls.complement.setValue(' ');
                                    sForm.controls.neighborhood.setValue(_this.endereco.bairro);
                                    sForm.controls.city.setValue(_this.endereco.localidade);
                                    sForm.controls.state.setValue(_this.endereco.uf);
                                    /*this.user.address = this.endereco.logradouro;
                                    this.user.neighborhood = this.endereco.bairro;
                                    this.user.city = this.endereco.localidade;
                                    this.user.state = this.endereco.uf;
                                    this.user.complement = ' ';*/
                                }
                                else {
                                    _this.showAlertCep();
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.showAlertCep();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //here is the method is used to write a file in storage
    RegisterPage.prototype.writeFile = function (base64Data, folderName, fileName) {
        /*let content: any;
        let contentType = this.getContentType(base64Data);
        let DataBlob = this.base64toBlob(content, contentType);
        // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.
        let filePath = this.file.externalRootDirectory + folderName;
        this.file.writeFile(filePath, fileName, DataBlob, contentType).then((success) => {
            console.log("File Writed Successfully", success);
            console.log('pic', filePath, fileName);
        }).catch((err) => {
            console.log("Error Occured While Writing File", err);
        })*/
    };
    //here is the method is used to get content type of an bas64 data
    RegisterPage.prototype.getContentType = function (base64Data) {
        /*let block = base64Data.split(";");
        let contentType = block[0].split(":")[1];
        return contentType;*/
    };
    //here is the method is used to convert base64 data to blob data
    RegisterPage.prototype.base64toBlob = function (b64Data, contentType) {
        /*contentType = contentType || '';
        let sliceSize = 512;
        let byteCharacters = atob(b64Data);
        let byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);
            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        let blob = new Blob(byteArrays, {
            type: contentType
        });
        return blob;*/
    };
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.showAlertCep = function () {
        var alert = this.alertCtrl.create({
            title: 'Ocorreu um erro',
            subTitle: 'Não foi posssível encontrar seu endereço pelo CEP informado.',
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.validaCpf = function () {
        var sForm = this.form;
        var cpf = sForm.controls.itin.value;
        this.isCpfValid = false;
        this.showCpfValidation = true;
        var erro = "";
        if (cpf.length === 11) {
            var nonNumbers = /\D/;
            if (nonNumbers.test(cpf)) {
                erro = "A verificacao de CPF suporta apenas números!";
            }
            else {
                if (cpf == "00000000000" ||
                    cpf == "11111111111" ||
                    cpf == "22222222222" ||
                    cpf == "33333333333" ||
                    cpf == "44444444444" ||
                    cpf == "55555555555" ||
                    cpf == "66666666666" ||
                    cpf == "77777777777" ||
                    cpf == "88888888888" ||
                    cpf == "99999999999") {
                    erro = "Número de CPF inválido!";
                }
                var a = [];
                var b = 0;
                var c = 11;
                var x = 0;
                var y = 0;
                for (var i = 0; i < 11; i++) {
                    a[i] = cpf.charAt(i);
                    if (i < 9)
                        b += (a[i] * --c);
                }
                if ((x = b % 11) < 2) {
                    a[9] = 0;
                }
                else {
                    a[9] = 11 - x;
                }
                b = 0;
                c = 11;
                for (y = 0; y < 10; y++)
                    b += (a[y] * c--);
                if ((x = b % 11) < 2) {
                    a[10] = 0;
                }
                else {
                    a[10] = 11 - x;
                }
                if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])) {
                    erro = "Número de CPF inválido.";
                }
            }
        }
        else {
            if (cpf.length === 0)
                return false;
            else
                erro = "Número de CPF inválido.";
        }
        if (erro.length > 0) {
            return false;
        }
        this.isCpfValid = true;
        return true;
    };
    // validaCpf(): boolean {
    //     let sForm = this.form;
    //     let cpf = sForm.controls.itin.value;
    //     this.isCpfValid = false;
    //     this.showCpfValidation = true;
    //     cpf = cpf.split('.').join('').split('-').join('');
    //     if (cpf == null) {
    //         return false;
    //     }
    //     if (cpf.length != 11) {
    //         return false;
    //     }
    //     if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
    //         return false;
    //     }
    //     let numero: number = 0;
    //     let caracter: string = '';
    //     let numeros: string = '0123456789';
    //     let j: number = 10;
    //     let somatorio: number = 0;
    //     let resto: number = 0;
    //     let digito1: number = 0;
    //     let digito2: number = 0;
    //     let cpfAux: string = '';
    //     cpfAux = cpf.substring(0, 9);
    //     for (let i: number = 0; i < 9; i++) {
    //         caracter = cpfAux.charAt(i);
    //         if (numeros.search(caracter) == -1) {
    //             return false;
    //         }
    //         numero = Number(caracter);
    //         somatorio = somatorio + (numero * j);
    //         j--;
    //     }
    //     resto = somatorio % 11;
    //     digito1 = 11 - resto;
    //     if (digito1 > 9) {
    //         digito1 = 0;
    //     }
    //     j = 11;
    //     somatorio = 0;
    //     cpfAux = cpfAux + digito1;
    //     for (let i: number = 0; i < 10; i++) {
    //         caracter = cpfAux.charAt(i);
    //         numero = Number(caracter);
    //         somatorio = somatorio + (numero * j);
    //         j--;
    //     }
    //     resto = somatorio % 11;
    //     digito2 = 11 - resto;
    //     if (digito2 > 9) {
    //         digito2 = 0;
    //     }
    //     cpfAux = cpfAux + digito2;
    //     if (cpf != cpfAux) {
    //         return false;
    //     } else {
    //         this.isCpfValid = true;
    //         return true;
    //     }
    // }
    RegisterPage.prototype.abrirTermoUsoApp = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Till",
            message: 'TILL TECNOLOGIA EIRELI																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'São Paulo, 27 de abril de 2019                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'TERMOS E CONDIÇÕES DE USO DO APLICATIVO TILL "A Till"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                ' 1.    RELACIONAMENTO CONTRATUAL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'Estes Termos de uso ("Termos") regem seu acesso e uso, como pessoa física, de aplicativos, sítios de Internet, conteúdos, produtos e também serviços (os "Serviços")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ' +
                'disponibilizados pela Till TECNOLOGIA EIRELI, inscrita no Cadastro Nacional de Pessoas Jurídicas do Ministério da Fazenda (CNPJ/MF) sob n.31.801.778 /0001-23 ou qualquer de suas afiliadas, definidas ao longo deste termo, simplesmente como Till.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                '2. LEIA COM ATENÇÃO ESTES TERMOS ANTES DE ACESSAR OU USAR OS SERVIÇOS DOS APLICATIVOS Till.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'Ao acessar e usar os Serviços você concorda com os presentes termos e condições, que estabelecem o relacionamento contratual entre você e a Till. Se você não concorda com estes Termos, você não pode acessar nem usar os Serviços.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'Mediante a aceitação destes termos, fica acordado entre a Till e o usuário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ' +
                'a substituição de qualquer termos e acertos acordados anteriormente entre o usuário e qualquer Afiliada da Till.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'A Till poderá imediatamente encerrar este acordo e quaisquer outros serviços de odo geral, deixar de oferecer ou negar acesso aos Serviços ou a qualquer parte deles,  qualquer momento e por qualquer motivo. Termos adicionais poderão se aplicar a eterminados Serviços, tais como condições para um evento,atividade ou promoção em articular e esses em relação aos respectivosServiços. Termos adicionais serão divulgadas em relação aos respectivos Serviços. Termos adicionais são omplementares e considerados parte integrante destes Termos para os efeitos dos respectivos Serviços. Termos adicionais prevalecerão sobre este, em caso de conflito om relação aos referidos Serviços. A Till poderá alterar os Termos relativos aos erviços a qualquer momento. Aditamentos entrarão em vigor quando a Till fizer a ostagem da versão atualizada dos Termos neste local ou das condições atualizadas ou Termos adicionais sobre o respectivo Serviço. O fato de você continuar a acessar u sar os Serviços após essa postagem representa seu consentimento em vincular-se os ermos alterados. A Till ou qualquer de suas afiliadas poderá fornecer a uma erenciadora de reclamações ou seguradoras qualquer informação necessária (inclusive suas informações de contato) se houver qualquerreclamação, litígio ou onflito, o que pode incluir acidente envolvendo você ou prestadores terceiros (inclusive um(a) motorista de uma rede de empresas de transportes, e essas informações ou ados forem necessários para solucionar a reclamação, litígio ou conflito. 2. OS SERVIÇOS Os Serviços integram uma plataforma de tecnologia que permite aos(às) suários(as) de aplicativos móveis ou sítios de Internet da Till , fornecidos como arte dos Serviços (cada qual um "Aplicativo"), providenciar e programar Serviços de transporte e/ou logística com terceiros provedores independentes desses Serviços, nclusive terceiros fornecedores independentes de transporte e terceiros fornecedores independentes de logística mediante contrato com a Till ou determinadas Ampliadas da Till ("Prestadores Terceiros"). A menos que diversamente acordado ela Till em contrato escrito em separado firmado com você, os Serviços são disponibilizados para seu uso pessoal e não comercial. Você reconhece que a Till ão presta serviços detransporte ou logística, nem funciona como transportadora, e que odos esses serviços de transporte ou logística são prestados por prestadores terceiros ndependentes, que não são empregados (as) e nem representantes da Till, nem e qualquer de suas afinadas.      ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'LICENÇA.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'Sujeito ao cumprimento destes Termos, a Till outorga uma licença limitada, não xclusiva, não passível de sub licença, revogável e não transferível para: (i) acesso e so os Aplicativos em seu dispositivo pessoal, exclusivamente para o seu uso dos erviços;  ii) acesso e uso de qualquer conteúdo, informação e material correlato que possa ser disponibilizado por meio dos serviços, em cada caso, para seu uso pessoal, nunca omercial. Quaisquer direitos não expressamente outorgados por estes termos são eservados à Till e suas afinadas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'RESTRIÇÕES.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'Você não poderá: (i) remover qualquer aviso de direito autoral, direito de marca ou utro viso de direito de propriedade de qualquer parte dos serviços; (ií) reproduzia modificar, distribuir, licenciar, locar, vender, revender transferir, exibir, veicular, transmitir ou, de ualquer outro modo, explorar os serviços, exceto da forma expressamente permitida ela Till (iii) decompilar, realizar engenharia reversa ou desmontar os Serviços, exceto conforme permitido pela legislação aplicável; (lv) conectar, espelhar ou recortar ualquer parte dos Serviços; (v) fazer ou lançar quaisquer programas ou scripts com a finalidade de fazer scraping, indexação, pesquisa ou qualquer outra forma de obtenção e dados de qualquer parte dos serviços, ou de sobrecarregar ou prejudicar indevidamente a operação e a funcionalidade de qualquer aspecto dos serviços; ou vi) entar obter acesso não autorizado aos serviços ou prejudicar qualquer aspecto dos serviços ou seus sistemas ou redes correlatas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'PRESTAÇÃO DOS SERVIÇOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ' +
                'Você reconhece que os Serviços podem ser disponibilizados sob diferentes marcas da uming, de diferentes seguimentos e setores, de diferentes opções de solicitação associadas aos serviços de transporte, de logística, de serviços domésticos, de uidados pessoais, de saúde, de cuidados com animais e outros serviços que a Till ier a disponibilizar em sua plataforma posteriormente. Todos os serviços são restados or terceiros independentes, inclusive marcas de solicitação de transporte. Você reconhece também que os serviços podem estar disponíveis sob essas marcas e opções de solicitação oferecidas por, ou associadas a: (1) determinadas subsidiárias e finadas da Till; ou (11) Prestadores Terceiros independentes, inclusive motoristas de empresas de rede de transporte, detentores(as) de permissão para serviços de ransporte na categoria profissional ou detentores(as) de permissões, autorizações ou licenças de transporte similares.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ' +
                '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ',
            buttons: [
                {
                    text: 'Aceitar',
                    handler: function () {
                        _this.TermoUsoAppAceitou = true;
                    }
                },
                {
                    text: 'Não Aceitar',
                    role: 'cancel',
                    handler: function () {
                        _this.exitPage();
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.exitPage = function () {
        var _this = this;
        setTimeout(function () {
            _this.toast.create({ message: 'Saindo do Till...', duration: 3000 }).present();
            _this.platform.exitApp();
        }, 3000);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\register\register.html"*/'<ion-header>\n    <ion-navbar color="till">\n        <ion-title>{{\'Crie sua conta\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-segment [(ngModel)]="tabs">\n        <ion-segment-button value="profile">\n            {{\'Dados Pessoais\' | translate}}\n        </ion-segment-button>\n        <!--\n        <ion-segment-button value="residence">\n            {{\'Residência\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="uploaddocs">\n            {{\'Enviar documentos\' | translate}}\n        </ion-segment-button>\n        -->\n    </ion-segment>\n    <form [formGroup]="form" (submit)="submit()">\n        <div [ngSwitch]="tabs" padding>\n            <div *ngSwitchCase="\'profile\'">\n                <!--\n                <ion-input type="file" [hidden]="true" #inputFilePhoto (change)="onChosePhoto($event.target.files)"></ion-input>\n                <button type="button" ion-button color="till" (click)="selectPhoto()">Escolher foto do perfil</button>\n                <ion-card *ngIf="photoPreview">\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img [src]="photoPreview">\n                        </ion-avatar>\n                        <h2>Foto do perfil escolhida</h2>\n                        <ion-icon name="close" item-end (click)="photoPreview = null;this.form.get(\'photo\').setValue(null);"></ion-icon>\n                    </ion-item>\n                </ion-card>\n                <ion-item\n                        *ngIf="!form.controls.photo.valid">\n                    <p class="error-message">Escolha uma foto para o perfil.</p>\n                </ion-item>\n                -->\n                <ion-item>\n                    <ion-label stacked>Nome</ion-label>\n                    <ion-input type="text" formControlName="name"></ion-input>\n                </ion-item>\n                <ion-item\n                        *ngIf="!form.controls.name.valid  && (form.controls.name.dirty)">\n                    <p class="error-message">Digite um nome válido.</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>E-mail</ion-label>\n                    <ion-input type="email" formControlName="email"></ion-input>\n                </ion-item>\n                <ion-item\n                        *ngIf="!form.controls.email.valid  && (form.controls.email.dirty)">\n                    <p class="error-message">Digite um e-mail válido.</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>Senha</ion-label>\n                    <ion-input type="password" formControlName="password"></ion-input>\n                </ion-item>\n                <ion-item\n                        *ngIf="!form.controls.password.valid  && (form.controls.password.dirty)">\n                    <p class="error-message">Digite uma senha com pelo menos 6 caracteres.</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>{{\'Celular\' | translate}}</ion-label>\n                    <ion-input type="tel" formControlName="phoneNumber" [brmasker]="{mask:\'(99) 99999-9999\', len:15}"></ion-input>\n                </ion-item>\n                <ion-item\n                        *ngIf="!form.controls.phoneNumber.valid  && (form.controls.phoneNumber.dirty)">\n                    <p class="error-message">Digite o seu telefone celular.</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>CPF</ion-label>\n                    <ion-input type="tel" formControlName="itin" [brmasker]="{mask:\'99999999999\', len:11}" (ionChange)="validaCpf()"></ion-input>\n                </ion-item>\n                <ion-item\n                        *ngIf="!isCpfValid && showCpfValidation">\n                    <p class="error-message">CPF inválido.</p>\n                </ion-item>\n\n                <!--\n                <ion-item>\n                    <ion-label stacked>RG</ion-label>\n                    <ion-input type="text" formControlName="id_card" [brmasker]="{mask:\'00.000.000-00\', len:13}"></ion-input>\n                </ion-item>\n                -->\n                <!--\n                <ion-item>\n                    <ion-label stacked>Sexo</ion-label>\n                    <ion-select formControlName="gender">\n                        <ion-option value="M">Masculino</ion-option>\n                        <ion-option value="F">Feminino</ion-option>\n                    </ion-select>\n                </ion-item>\n                -->\n                <ion-item>\n                    <ion-label stacked>Nascimento</ion-label>\n                    <ion-datetime formControlName="birthdate" displayFormat="DD/MM/YYYY" [max]="year"></ion-datetime>\n                </ion-item>\n                <ion-item text-center>\n                    Ao se registrar, você concorda com os<br/>\n                    Termos e Condições deste aplicativo.<br/>\n                    Para ler, clique no botão abaixo:<br/>\n                    <div class="error-message" (click)="abrirTermoUsoApp()" color="till">Termos e Condições</div>\n                </ion-item>\n                <br>\n                <br>\n            </div>\n            <!--\n            <div *ngSwitchCase="\'residence\'">\n                <ion-item>\n                    <ion-label stacked>CEP</ion-label>\n                    <ion-input formControlName="zipcode" (ionBlur)="getCep()" type="text" [brmasker]="{mask:\'00000-000\', type:\'num\'}"\n                               [class.invalid]="!form.controls.zipcode.valid && (form.controls.zipcode.dirty)"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>Endereço</ion-label>\n                    <ion-input formControlName="address" type="text"\n                               [class.invalid]="!form.controls.address.valid && (form.controls.address.dirty)"></ion-input>\n                </ion-item>\n\n\n                <ion-item>\n                    <ion-label stacked>Número</ion-label>\n                    <ion-input formControlName="number" type="text" #inputNumber\n                               [class.invalid]="!form.controls.number.valid && (form.controls.number.dirty)"></ion-input>\n                </ion-item>\n\n\n                <ion-item>\n                    <ion-label stacked>Complemento</ion-label>\n                    <ion-input formControlName="complement" type="text"></ion-input>\n                </ion-item>\n\n\n                <ion-item>\n                    <ion-label stacked>Bairro</ion-label>\n                    <ion-input formControlName="neighborhood" type="text"\n                               [class.invalid]="!form.controls.neighborhood.valid && (form.controls.neighborhood.dirty)"></ion-input>\n                </ion-item>\n\n\n                <ion-item>\n                    <ion-label stacked>Cidade</ion-label>\n                    <ion-input formControlName="city" type="text"\n                               [class.invalid]="!form.controls.city.valid && (form.controls.city.dirty)"></ion-input>\n                </ion-item>\n\n\n                <ion-item>\n                    <ion-label stacked>Estado</ion-label>\n                    <ion-input formControlName="state" type="text"\n                               [class.invalid]="!form.controls.state.valid && (form.controls.state.dirty)"></ion-input>\n                </ion-item>\n            </div>\n            -->\n        </div>\n    </form>\n</ion-content>\n<ion-footer *ngIf="TermoUsoAppAceitou">\n    <button  type="submit" ion-button block color="till" (click)="submit()" [disabled]="form.invalid">{{buttonText}}</button>\n</ion-footer>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_database_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_9__providers_cadastro_till_cadastro_till__["a" /* CadastroTillProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__providers_cep_cep__["a" /* CepProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CepProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CepProvider = /** @class */ (function () {
    function CepProvider(http) {
        this.http = http;
    }
    CepProvider.prototype.cep = function (inputCep) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', "*");
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
        var options = { headers: headers };
        var resultado;
        var cepURL = 'https://viacep.com.br/ws/' + inputCep + '/json';
        return new Promise(function (resolve, reject) {
            _this.http.get(cepURL, options)
                .subscribe(function (result) {
                resultado = result;
                resolve(resultado);
            });
        });
    };
    CepProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CepProvider);
    return CepProvider;
}());

//# sourceMappingURL=cep.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverService = /** @class */ (function () {
    function DriverService(db) {
        this.db = db;
    }
    // get driver by id
    DriverService.prototype.getDriver = function (id) {
        return this.db.object('drivers/' + id);
    };
    // get driver position
    DriverService.prototype.getDriverPosition = function (locality, vehicleType, id) {
        return this.db.object('localities/' + locality + '/' + vehicleType.toUpperCase() + '/' + id);
    };
    DriverService.prototype.getActiveDriver = function (locality, vehicleType) {
        return this.db.object('localities/' + locality + '/' + vehicleType.toUpperCase());
    };
    // calculate vehicle angle
    DriverService.prototype.calcAngle = function (oldLat, oldLng, lat, lng) {
        var brng = Math.atan2(lat - oldLat, lng - oldLng);
        brng = brng * (180 / Math.PI);
        return brng;
    };
    // return icon suffix by angle
    DriverService.prototype.getIconWithAngle = function (vehicle) {
        var angle = this.calcAngle(vehicle.oldLat, vehicle.oldLng, vehicle.lat, vehicle.lng);
        if (angle >= -180 && angle <= -160) {
            return '_left';
        }
        if (angle > -160 && angle <= -110) {
            return '_bottom_left';
        }
        if (angle > -110 && angle <= -70) {
            return '_bottom';
        }
        if (angle > -70 && angle <= -20) {
            return '_bottom_right';
        }
        if (angle >= -20 && angle <= 20) {
            return '_right';
        }
        if (angle > 20 && angle <= 70) {
            return '_top_right';
        }
        if (angle > 70 && angle <= 110) {
            return '_top';
        }
        if (angle > 110 && angle <= 160) {
            return '_top_left';
        }
        if (angle > 160 && angle <= 180) {
            return '_left';
        }
    };
    DriverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], DriverService);
    return DriverService;
}());

//# sourceMappingURL=driver-service.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var PrizeService = /** @class */ (function () {
    function PrizeService(http) {
        this.http = http;
    }
    PrizeService.prototype.getPrizes = function (itin) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var itin_nbn, resultado, tillURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itin_nbn = itin.replace(/[./-]/g, '');
                        tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/awards/?itin=' + itin_nbn;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.get(tillURL)
                                    .subscribe(function (result) {
                                    resultado = result;
                                    resolve(resultado);
                                }, function () {
                                    reject('0');
                                });
                            })];
                    case 1: 
                    // let tillURL = 'http://bumingapi.test/api/v1/awards/?itin=' + itin_nbn;
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PrizeService.prototype.getNetworkPrizes = function () {
        var _this = this;
        var resultado;
        var tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/netprizes/';
        // let tillURL = 'http://bumingapi.test/api/v1/netprizes/';
        return new Promise(function (resolve, reject) {
            _this.http.get(tillURL)
                .subscribe(function (result) {
                resultado = result;
                resolve(resultado);
            }, function () {
                reject('0');
            });
        });
    };
    PrizeService.prototype.getCashbackPrizes = function (itin) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var itin_nbn, resultado, tillURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itin_nbn = itin.replace(/[./-]/g, '');
                        tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/cashback/?itin=' + itin_nbn;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.get(tillURL)
                                    .subscribe(function (result) {
                                    resultado = result;
                                    resolve(resultado);
                                }, function () {
                                    reject('0');
                                });
                            })];
                    case 1: 
                    // let tillURL = 'http://bumingapi.test/api/v1/cashback/?itin=' + itin_nbn;
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PrizeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PrizeService);
    return PrizeService;
}());

//# sourceMappingURL=prize-service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
    }
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.viewController.dismiss();
        }, 3000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-splash',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\splash\splash.html"*/'<ion-content padding>\n  <div padding text-center>\n    <table>\n      <tr>\n        <td colspan="2"><img src="assets/img/countdown.gif" height="400px" width="400px" /></td>\n      </tr>\n      <tr>\n        <td><img src="assets/img/cartoon.gif" height="200px" width="200px" /></td>\n        <td><img src="assets/img/aurora.gif" height="200px" width="200px" /></td>\n      </tr>\n      <tr>\n        <td colspan="2"><img src="assets/img/town.gif" height="300px" width="400px" /></td>\n      </tr>\n    </table>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/indicacao/indicacao.module": [
		934,
		2
	],
	"../pages/payments/payments.module": [
		935,
		1
	],
	"../pages/splash/splash.module": [
		936,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 269;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db, storage) {
        this.afAuth = afAuth;
        this.db = db;
        this.storage = storage;
    }
    // get current user data from firebase
    AuthService.prototype.getUserData = function () {
        console.log("this.afAuth.auth.currentUser=============", this.afAuth.auth.currentUser);
        return this.afAuth.auth.currentUser;
    };
    // get passenger by id
    AuthService.prototype.getUser = function (id) {
        return this.db.object('persons/' + id);
    };
    // login by email and password
    AuthService.prototype.login = function (email, password) {
        //this.logout() ;
        var result = this.afAuth.auth.signInWithEmailAndPassword(email, password);
        return result;
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    // register new account
    AuthService.prototype.register = function (user) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            _this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function (authData) {
                authData.name = user.name;
                authData.itin = user.itin;
                authData.id_card = '';
                authData.phoneNumber = user.phoneNumber;
                authData.birthdate = user.birthdate;
                authData.gender = '';
                authData.zipcode = '';
                authData.address = '';
                authData.number = '';
                authData.complement = '';
                authData.neighborhood = '';
                authData.city = '';
                authData.state = '';
                authData.photoUrl = user.photo;
                authData.indicadoPor = user.indicadoPor;
                authData.minhaIndicacao = user.minhaIndicacao;
                authData.bank = '';
                authData.agency = '';
                authData.account = '';
                authData.data_cadastro = user.data_cadastro;
                //authData.id_card = user.id_card;
                //authData.gender = user.gender;        
                //authData.zipcode = user.zipcode;
                //authData.address = user.address;
                //authData.number = user.number;
                //authData.complement = user.complement ? user.complement : ' - ';
                //authData.neighborhood = user.neighborhood;
                //authData.city = user.city;
                //authData.state = user.state;
                authData.isPhoneVerified = false;
                authData.isEmailVerified = false;
                if (__WEBPACK_IMPORTED_MODULE_6__constants__["b" /* EMAIL_VERIFICATION_ENABLED */] === true)
                    _this.getUserData().sendEmailVerification();
                // update passenger object
                //this.updateUserProfile(authData);
                observer.next();
            }).catch(function (error) {
                observer.next();
                // if (error) {
                //     observer.error(error);
                // }
            });
        });
    };
    // update user from Db Mysql
    AuthService.prototype.updateUserProfileFromDb = function (user, afiliado) {
        console.log(user, afiliado);
        // create or update passenger
        this.db.object('persons/' + user.uid).update({
            id: afiliado.id,
            displayName: afiliado.primeiro_nome,
            name: afiliado.primeiro_nome + " " + afiliado.segundo_nome,
            itin: afiliado.cpf,
            email: afiliado.email,
            pswd: afiliado.pswd,
            id_card: afiliado.rg,
            birthdate: afiliado.data_nascimento,
            phoneNumber: afiliado.telefone,
            gender: afiliado.sexo,
            zipcode: afiliado.cep,
            address: afiliado.endereco,
            //number: "",
            //complement: "",
            //neighborhood: "",
            city: afiliado.cidade,
            state: afiliado.estado,
            //photoUrl: (afiliado.foto!=null) ? afiliado.foto: user.photoUrl,
            //photoCNH: (afiliado.foto_rg_cnh!=null) ? afiliado.foto_rg_cnh: user.photoCNH ,
            //photoComprovante: (afiliado.foto_comprovante!=null) ? afiliado.foto_comprovante: user.photoComprovante,
            indicadoPor: afiliado.indicadoPor,
            minhaIndicacao: afiliado.codigo_afiliacao,
            bank: afiliado.banco_codigo,
            agency: afiliado.banco_agencia,
            account: afiliado.banco_conta,
            //providerId:"",
            isPhoneVerified: true,
            isEmailVerified: true,
            data_cadastro: afiliado.data_criacao
        });
    };
    // update user display name and photo
    AuthService.prototype.updateUserProfile = function (user) {
        console.log(user);
        var name = user.name ? user.name : user.email;
        var photoUrl = user.photoUrl ? user.photoUrl : '';
        var photoCNH = user.photoCNH ? user.photoCNH : '';
        var photoComprovante = user.photoComprovante ? user.photoComprovante : '';
        // this.getUserData().updateProfile({
        //     displayName: name,
        //     photoURL: ''
        // });
        // create or update passenger
        this.db.object('persons/' + user.uid).update({
            name: name,
            itin: user.itin,
            id_card: user.id_card,
            birthdate: user.birthdate,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            zipcode: user.zipcode,
            address: user.address,
            number: user.number,
            complement: user.complement,
            neighborhood: user.neighborhood,
            city: user.city,
            state: user.state,
            photoUrl: photoUrl,
            photoCNH: photoCNH,
            photoComprovante: photoComprovante,
            indicadoPor: user.indicadoPor,
            minhaIndicacao: user.minhaIndicacao,
            bank: user.bank ? user.bank : '',
            agency: user.agency ? user.agency : '',
            account: user.account ? user.account : '',
            isPhoneVerified: false,
            isEmailVerified: false,
            data_cadastro: user.data_cadastro ? user.data_cadastro : ''
        });
    };
    // create new user if not exist
    AuthService.prototype.createUserIfNotExist = function (user) {
        var _this = this;
        // check if user does not exist
        this.getUser(user.uid).valueChanges().subscribe(function (snapshot) {
            if (snapshot.$value === null) {
                // update passenger object
                _this.updateUserProfile(user);
            }
        });
    };
    // update card setting
    AuthService.prototype.updateCardSetting = function (number, exp, cvv, token) {
        var user = this.getUserData();
        this.db.object('persons/' + user.uid + '/card').update({
            number: number,
            exp: exp,
            cvv: cvv,
            token: token
        });
    };
    // get card setting
    AuthService.prototype.getCardSetting = function () {
        var user = this.getUserData();
        return this.db.object('persons/' + user.uid + '/card').valueChanges();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_trip_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentMethodPage = /** @class */ (function () {
    function PaymentMethodPage(nav, authService, tripService, loadingCtrl) {
        var _this = this;
        this.nav = nav;
        this.authService = authService;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.carNumber = null;
        var loading = loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        authService.getCardSetting().subscribe(function (snapshot) {
            loading.dismiss();
            if (snapshot) {
                _this.carNumber = snapshot.number;
            }
        });
    }
    // apply change method
    PaymentMethodPage.prototype.changeMethod = function (method) {
        this.tripService.setPaymentMethod(method);
        // go back
        this.nav.pop();
    };
    // add card
    PaymentMethodPage.prototype.addCard = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */], { back: true });
    };
    PaymentMethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment-method',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\payment-method\payment-method.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Forma de pagamento</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list class="list-full-border" radio-group>\n        <ion-item>\n            <ion-label>\n                Dinheiro\n                <p class="text-hint">Dinheiro</p>\n            </ion-label>\n            <ion-radio value="cash" (click)="changeMethod(\'cash\')"></ion-radio>\n        </ion-item>\n        <ion-item *ngIf="carNumber">\n            <ion-label>\n                Crédito\n                <p class="text-hint">{{ carNumber }}</p>\n            </ion-label>\n            <ion-radio value="card" (click)="changeMethod(\'card\')"></ion-radio>\n        </ion-item>\n\n    </ion-list>\n\n    <div padding *ngIf="!carNumber">\n        <button ion-button block color="primary" (click)="addCard()">Adicionar cartão</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\payment-method\payment-method.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PaymentMethodPage);
    return PaymentMethodPage;
}());

//# sourceMappingURL=payment-method.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BankService = /** @class */ (function () {
    function BankService(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
    }
    BankService.prototype.getBanks = function () {
        return this.db.object('/bancos/').valueChanges();
    };
    BankService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], BankService);
    return BankService;
}());

//# sourceMappingURL=bank-service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_trip_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_place_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_payment_gateway_payment_gateway__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase_app__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase_app__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// Firebase App (the core Firebase SDK) is always required and must be listed first
//import * as firebase from "firebase/app";

var TrackingPage = /** @class */ (function () {
    function TrackingPage(nav, driverService, platform, navParams, tripService, placeService, modalCtrl, alertCtrl, db, authService) {
        var _this = this;
        this.nav = nav;
        this.driverService = driverService;
        this.platform = platform;
        this.navParams = navParams;
        this.tripService = tripService;
        this.placeService = placeService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.authService = authService;
        this.trip = {};
        this.alertCnt = 0;
        this.alertShown = false;
        this.mapId = Math.random() + 'map';
        this.distanceText = '';
        this.durationText = '';
        this.rotation = 0;
        this.platform.ready()
            .then(function () {
            _this.platform.registerBackButtonAction(function () {
                if (_this.alertShown == false) {
                    _this.presentConfirm();
                }
            }, 0);
            _this.sos = __WEBPACK_IMPORTED_MODULE_5__services_constants__["h" /* SOS */];
            localStorage.setItem('isPassengerNotified', "false");
            localStorage.setItem('isFinished', "false");
            var tripId;
            if (_this.navParams.get('tripId'))
                tripId = _this.navParams.get('tripId');
            else
                tripId = _this.tripService.getId();
            _this.tripService.getTrip(tripId).valueChanges().subscribe(function (snapshot) {
                _this.trip = snapshot;
                _this.trip.key = tripId;
                _this.trip.id = tripId;
                _this.tripStatus = snapshot.status;
                _this.driverService.getDriver(_this.trip.driverId).valueChanges().subscribe(function (snap) {
                    _this.driver = snap;
                    _this.loadMap();
                });
                _this.authService.getUser(_this.trip.driverId).valueChanges().subscribe(function (snap_driver) {
                    var driver_infos = snap_driver;
                    _this.driver_name = driver_infos.name;
                    _this.driver_photo = driver_infos.photoUrl;
                });
            });
        });
    }
    TrackingPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja realmente sair do Till Passageiro?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.alertShown = false;
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    TrackingPage.prototype.ngOnInit = function () {
    };
    TrackingPage.prototype.ionViewWillEnter = function () {
    };
    TrackingPage.prototype.ionViewWillLeave = function () {
    };
    TrackingPage.prototype.showNotification = function () {
        var message = "Dados do seu motorista: <br/>" +
            "Nome: " + this.driver_name + "<br/>" +
            "Veículo: " + this.driver.brand + "/" + this.driver.model + "<br/>" +
            "Cor: " + this.driver.color + "<br/>" +
            "Placa: " + this.driver.plate;
        var confirm = this.alertCtrl.create({
            title: 'Seu Motorista Chegou!',
            message: message,
            cssClass: "alertcss",
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'okcss',
                    handler: function () { }
                }
            ]
        });
        confirm.present();
        return;
    };
    TrackingPage.prototype.finishTrip = function () {
        var tripId = this.tripService.getId();
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
    };
    TrackingPage.prototype.showRateCard = function () {
        var _this = this;
        var final = this.trip.fee - (this.trip.fee * (parseInt(this.trip.discount) / 100));
        var message = '<p>Valor: ' + this.trip.fee +
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
                    handler: function (data) {
                        _this.showRatingAlert();
                    }
                }],
        }).present();
    };
    TrackingPage.prototype.showRatingAlert = function () {
        var _this = this;
        console.log(this.trip, this.driver);
        var alert = this.alertCtrl.create({
            title: 'Avaliar a corrida',
            enableBackdropDismiss: false
        });
        alert.addInput({ type: 'radio', label: 'Excelente', value: '5', checked: true });
        alert.addInput({ type: 'radio', label: 'Boa', value: '4' });
        alert.addInput({ type: 'radio', label: 'Normal', value: '3' });
        alert.addInput({ type: 'radio', label: 'Ruim', value: '2' });
        alert.addInput({ type: 'radio', label: 'Péssima', value: '1' });
        alert.addButton({
            text: 'Cancelar', handler: function () {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
        });
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.tripService.rateTrip(_this.trip.key, data).then(function () {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                });
            }
        });
        alert.present();
    };
    TrackingPage.prototype.trackDriver = function () {
        var _this = this;
        if (localStorage.getItem('interval_trackingDriverTracking') != null) {
            clearInterval(+localStorage.getItem('interval_trackingDriverTracking'));
        }
        var trackingDriverTracking = setInterval(function () {
            _this.showDriverOnMap();
        }, __WEBPACK_IMPORTED_MODULE_5__services_constants__["f" /* POSITION_INTERVAL */]);
        localStorage.setItem('interval_trackingDriverTracking', trackingDriverTracking.toString());
    };
    TrackingPage.prototype.cancelTrip = function () {
        var _this = this;
        this.tripService.cancelTrip(this.trip.key).then(function (data) {
            console.log(data);
            clearInterval(+localStorage.getItem('interval_trackingDriverTracking'));
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        });
    };
    // show user on map
    TrackingPage.prototype.showDriverOnMap = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_11_firebase_app___default.a.database()
            .ref('driversOnline/' + this.driver.uid)
            .orderByKey()
            .once('value')
            .then(function (snapshot) {
            var vehicle = __assign({ key: snapshot.key }, snapshot.val());
            console.log("tracking - showDriverOnMap--->", vehicle);
            if (vehicle != null) {
                // create or update
                var latLng = new google.maps.LatLng(vehicle.lat, vehicle.lng);
                if (_this.marker != null) {
                    _this.marker.setMap(null);
                }
                //this.map.setCenter(latLng);
                var catIcon = {
                    url: 'assets/img/map-suv.png',
                    //state your size parameters in terms of pixels
                    size: new google.maps.Size(32, 32),
                    scaledSize: new google.maps.Size(32, 32),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(12, -290),
                    strokeWeight: 0,
                    scale: .25,
                    rotation: _this.rotation
                };
                if (_this.rotation >= 300) {
                    _this.rotation = 0;
                }
                else {
                    _this.rotation += 150;
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
                _this.marker = new google.maps.Marker({
                    map: _this.map,
                    position: latLng,
                    optimized: false,
                    icon: catIcon
                });
                var myoverlay = new google.maps.OverlayView();
                myoverlay.draw = function () {
                    this.getPanes().markerLayer.id = 'markerLayer';
                };
                myoverlay.setMap(_this.map);
                _this.marker.setMap(_this.map);
                console.log('tracking - showDriverOnMap - TripStatus>', _this.tripStatus);
                if (_this.tripStatus == __WEBPACK_IMPORTED_MODULE_5__services_constants__["k" /* TRIP_STATUS_GOING */]) {
                    //
                    //
                }
                else if (_this.tripStatus == __WEBPACK_IMPORTED_MODULE_5__services_constants__["n" /* TRIP_STATUS_WAITING */]) {
                    var origin = _this.tripService.getOrigin();
                    _this.placeService.getDirection(vehicle.lat, vehicle.lng, origin.lat, origin.lng)
                        .subscribe(function (result) {
                        if (result.routes.length != 0) {
                            _this.distance = result.routes[0].legs[0].distance.text;
                            _this.duration = (result.routes[0].legs[0].duration.text);
                        }
                    });
                }
                else if (_this.tripStatus === __WEBPACK_IMPORTED_MODULE_5__services_constants__["l" /* TRIP_STATUS_NOTIFIED */]) {
                    if (localStorage.getItem('isPassengerNotified') == "false") {
                        localStorage.setItem('isPassengerNotified', "true");
                        _this.showNotification();
                    }
                }
                else if ((_this.tripStatus === __WEBPACK_IMPORTED_MODULE_5__services_constants__["j" /* TRIP_STATUS_FINISHED */]) ||
                    (_this.tripStatus === __WEBPACK_IMPORTED_MODULE_5__services_constants__["m" /* TRIP_STATUS_PAID */])) {
                    if (localStorage.getItem('isFinished').toString() != "true") {
                        localStorage.setItem('isFinished', "true");
                        clearInterval(+localStorage.getItem('interval_trackingDriverTracking'));
                        _this.finishTrip();
                    }
                }
                else if (_this.tripStatus === __WEBPACK_IMPORTED_MODULE_5__services_constants__["i" /* TRIP_STATUS_CANCELED */]) {
                    clearInterval(+localStorage.getItem('interval_trackingDriverTracking'));
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
            }
        });
    };
    TrackingPage.prototype.loadMap = function () {
        var _this = this;
        var origin_latLng = new google.maps.LatLng(this.trip.origin.location.lat, this.trip.origin.location.lng);
        var destination_latLng = new google.maps.LatLng(this.trip.destination.location.lat, this.trip.destination.location.lng);
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
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
        var mapx = this.map;
        directionsDisplay.setMap(mapx);
        this.placeService.getDirection(this.trip.origin.location.lat, this.trip.origin.location.lng, this.trip.destination.location.lat, this.trip.destination.location.lng).subscribe(function (result) {
            _this.distance = result.routes[0].legs[0].distance.value;
            _this.duration = result.routes[0].legs[0].duration.value;
            _this.distanceText = result.routes[0].legs[0].distance.text;
            _this.durationText = result.routes[0].legs[0].duration.text;
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
            }
            else {
                // console.log("error");
            }
        });
        this.trackDriver();
    };
    // make array with range is n
    TrackingPage.prototype.range = function (n) {
        return new Array(Math.round(n));
    };
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tracking',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\tracking\tracking.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title [ngSwitch]="tripService">\n        <span *ngIf="tripStatus == \'going\'">{{ \'Em viagem\' | translate}}</span>\n        <span *ngIf="tripStatus == \'waiting\'">{{ \'Motorista a caminho\' | translate}} - {{ duration }}</span>\n        <span *ngIf="tripStatus == \'finished\'">{{ \'Corrida Finalizada\' | translate}}</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="tripStatus == \'finished\'"  (click)="showRateCard()">{{\'Avaliar\' | translate}}</button>\n      <button ion-button *ngIf="tripStatus == \'waiting\'" (click)="cancelTrip()">{{\'Cancelar Corrida\' | translate}}</button>\n      <a href="tel:{{sos}}" ion-button *ngIf="tripStatus == \'going\'">{{\'SOS\' | translate}}</a>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div id="{{ mapId }}" [ngStyle]="{height: \'85%\'}"></div>\n  \n    <div class="align-bottom" >\n       \n        <ion-row>\n            <ion-col >\n                <ion-icon name="car"></ion-icon>\n                <b>{{ distanceText }}</b></ion-col>\n            <ion-col>\n                <ion-icon name="time"></ion-icon>\n                <b>{{durationText}}</b></ion-col>\n        </ion-row>\n\n        <button ion-button block color="danger" (click)="cancelTrip()">{{\'Cancelar viagem\' | translate}}</button>\n    </div>\n\n\n</ion-content>\n<ion-footer>\n    <div style="text-align: center;background:#FFC107; color: #222">{{ \'Código OTP\' | translate}}: {{trip.otp}}</div>\n    <ion-item>\n      <ion-avatar item-left>\n          <img src="{{ driver_photo }}"/>\n      </ion-avatar>\n      <h2>{{ driver_name }} &nbsp; {{(driver)?.rating}} <ion-icon name="md-star" color="yellow"></ion-icon> </h2>\n      <p>{{ (driver)?.plate }} &middot; {{ (driver)?.brand }} - {{ (driver)?.model }} - {{ (driver)?.color }}</p>\n      <a item-right ion-button clear href="tel: {{ (driver)?.phoneNumber }} ">\n        <ion-icon name="call"></ion-icon>&nbsp;{{\'Ligar\' | translate}}\n      </a>\n    </ion-item>\n</ion-footer>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\tracking\tracking.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__components_payment_gateway_payment_gateway__["a" /* PaymentGatewayComponent */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_6__services_place_service__["a" /* PlaceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentGatewayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the PaymentGatewayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PaymentGatewayComponent = /** @class */ (function () {
    function PaymentGatewayComponent(db, alertCtrl, app) {
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.app = app;
    }
    PaymentGatewayComponent.prototype.makePayment = function (tripId, fee) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                tripId = 0;
                fee = 0;
                return [2 /*return*/];
            });
        });
    };
    PaymentGatewayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'payment-gateway',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\components\payment-gateway\payment-gateway.html"*/'<!-- Generated template for the PaymentGatewayComponent component -->\n<div>\n\n</div>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\components\payment-gateway\payment-gateway.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], PaymentGatewayComponent);
    return PaymentGatewayComponent;
}());

//# sourceMappingURL=payment-gateway.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database_database__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DealService = /** @class */ (function () {
    function DealService(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    // sort driver by rating & distance
    DealService.prototype.sortDriversList = function (drivers) {
        return drivers.sort(function (a, b) {
            return (a.rating - a.distance / 5) - (b.rating - b.distance / 5);
        });
    };
    // make deal to driver
    DealService.prototype.makeDeal = function (driverId, origin, destination, distance, fee, currency, note, paymentMethod, promocode, discount) {
        var user = this.authService.getUserData();
        return this.db.object('deals/' + driverId).set({
            passengerId: user.uid,
            currency: currency,
            origin: origin,
            destination: destination,
            distance: distance,
            fee: fee,
            note: note,
            paymentMethod: paymentMethod,
            status: __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* DEAL_STATUS_PENDING */],
            createdAt: Date.now(),
            promocode: promocode,
            discount: discount
        });
    };
    // get deal by driverId
    DealService.prototype.getDriverDeal = function (driverId) {
        return this.db.object('deals/' + driverId);
    };
    // remove deal
    DealService.prototype.removeDeal = function (driverId) {
        return this.db.object('deals/' + driverId).remove();
    };
    DealService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], DealService);
    return DealService;
}());

//# sourceMappingURL=deal-service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingService = /** @class */ (function () {
    function SettingService(db) {
        this.db = db;
    }
    SettingService.prototype.getPrices = function () {
        return this.db.object('master_settings/prices');
    };
    SettingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], SettingService);
    return SettingService;
}());

//# sourceMappingURL=setting-service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cadastro_till_cadastro_till__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IndicacaoPage = /** @class */ (function () {
    function IndicacaoPage(navCtrl, navParams, loadingCtrl, afAuth, db, toast, alertCtrl, platform, till) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.db = db;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.till = till;
        this.indicacao = '';
        this.minhaIndicacao = '';
        this.indicacaoOk = false;
        this.indicadoPor = this.navParams.get('indicadoPor');
    }
    IndicacaoPage_1 = IndicacaoPage;
    IndicacaoPage.prototype.ionViewDidEnter = function () {
        // setTimeout(() => {
        //     console.log("passou aqui===================");
        //     this.input.setFocus();
        //     },150);
    };
    IndicacaoPage.prototype.invalidarIndicacao = function () {
        this.indicacao = '';
        this.mostraIndicacao = false;
        this.validacaoOK = false;
    };
    IndicacaoPage.prototype.criarCodigo = function () {
        this.mostraIndicacao = true;
        this.indicacaoOk = true;
    };
    IndicacaoPage.prototype.ngOnInit = function () {
        this.platform.ready()
            .then(function () {
        });
    };
    IndicacaoPage.prototype.criarIndicacao = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Verificando...' });
        loading.present();
        this.till.verifyAffiliateCode(this.minhaIndicacao)
            .then(function (result) {
            if (result[0].qtd == '1') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Código Existente!',
                    cssClass: 'alertcss',
                    message: 'Esse código já está cadastrado. Se este código é seu, confirme digitando seu cpf:',
                    inputs: [
                        {
                            name: 'cpf',
                            type: 'text',
                            placeholder: 'CPF'
                        }
                    ],
                    buttons: [{
                            text: 'OK',
                            cssClass: 'okcss',
                            handler: function (data) {
                                var cpf = data.cpf.toString().replace(/[\. ,:-]+/g, "");
                                console.log('clean', cpf);
                                console.log('banco', result[0].cpf);
                                if (cpf == result[0].cpf) {
                                    _this.validacaoOK = true;
                                    _this.toast.create({ message: 'Pessoa já cadastrada!, por favor entre com EMAIL e SENHA...', duration: 5000 }).present();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], { 'email': result[0].email });
                                }
                                else {
                                    _this.invalidarIndicacao();
                                    _this.toast.create({ message: 'Escolha um Código Pessoal de Indicação ainda não usado!', duration: 3000 }).present();
                                    _this.navCtrl.setRoot(IndicacaoPage_1, { 'minhaIndicacao': '', 'indicadoPor': _this.indicadoPor });
                                }
                            }
                        }]
                });
                alert_1.present();
                _this.validacaoOK = false;
            }
            else {
                _this.validacaoOK = true;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */], { 'minhaIndicacao': _this.minhaIndicacao, 'indicadoPor': _this.indicadoPor, 'origin': 'new' });
            }
        });
        /*this.validaAfiliacao().valueChanges().subscribe((snapshot:any) => {
            console.log('snapshot2', snapshot);
            if (snapshot.length <= 0) {


            } else {

            }


        });*/
        loading.dismiss();
    };
    IndicacaoPage.prototype.validar = function () {
        var _this = this;
        if (!this.indicacao) {
            var alert_2 = this.alertCtrl.create({
                title: 'Código em branco!',
                cssClass: 'alertcss',
                message: 'Digite um código antes de clicar em validar',
                buttons: [{
                        text: 'OK',
                        cssClass: 'okcss'
                    }]
            });
            alert_2.present();
        }
        else {
            var loading = this.loadingCtrl.create({ content: 'Procurando...' });
            loading.present();
            this.mostraIndicacao = false;
            this.till.searchAffiliateByCode(this.indicacao)
                .then(function (result) {
                var indicadoPor = result;
                if (typeof indicadoPor !== undefined) {
                    _this.mostraIndicacao = true;
                }
                _this.indicadoPor = indicadoPor[0];
            }).catch(function (reject) {
                var alert = _this.alertCtrl.create({
                    title: 'Não encontrado!',
                    subTitle: 'Verifique se digitou corretamente o código de indicação',
                    buttons: ['OK']
                });
                alert.present();
            });
            loading.dismiss();
        }
    };
    IndicacaoPage.prototype.validaAfiliacao = function () {
        var _this = this;
        return this.db.list('pessoas', function (ref) { return ref.orderByChild('codigo_afiliacao').equalTo(_this.minhaIndicacao); }).valueChanges();
        // {
        //     query: {
        //         orderByChild: 'codigo_afiliacao',
        //         equalTo: this.minhaIndicacao,
        //     }
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], IndicacaoPage.prototype, "input", void 0);
    IndicacaoPage = IndicacaoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-indicacao',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\indicacao\indicacao.html"*/'<ion-header>\n\n    <ion-navbar color="till">\n        <ion-title>Indicação</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p>\n        Se você foi indicado por alguém já cadastrado na Till, insira o código de indicação abaixo:\n    </p>\n    <ion-list>\n        <ion-item>\n            <ion-label stacked>Código de indicação</ion-label>\n            <ion-input type="text" [(ngModel)]="indicacao"\n                       (ngModelChange)="indicacao = $event.toLocaleUpperCase()"></ion-input>\n        </ion-item>\n        <ion-item>\n            <button type="button" ion-button padding block (click)="validar()">Validar</button>\n        </ion-item>\n        <ion-item *ngIf="mostraIndicacao">\n            <h2><strong>Indicação encontrada!</strong></h2>\n            <br/>\n            <strong>Nome:</strong> {{ indicadoPor?.primeiro_nome }} {{ indicadoPor?.segundo_nome }}\n            <br/><br/>\n        </ion-item>\n        <ion-item *ngIf="mostraIndicacao">\n            Confirme a indicação:\n        </ion-item>\n        <ion-row *ngIf="mostraIndicacao">\n            <ion-col>\n                <button type="button" class="yes" ion-button padding block (click)="criarCodigo()">Sim</button>\n            </ion-col>\n            <ion-col>\n                <button type="button" class="not" ion-button padding block (click)="invalidarIndicacao()">Não</button>\n            </ion-col>\n        </ion-row>\n        <ion-item *ngIf="indicacaoOk">\n            <h2><strong>Agora crie o seu código de indicação:</strong></h2>\n        </ion-item>\n        <ion-item *ngIf="indicacaoOk">\n            <ion-label stacked>Meu código de indicação</ion-label>\n            <ion-input placeholder="Código" type="text" #input [(ngModel)]="minhaIndicacao"\n                       (ngModelChange)="minhaIndicacao = $event.toLocaleUpperCase()"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="indicacaoOk">\n            <button type="button" ion-button padding block (click)="criarIndicacao()">Continuar</button>\n        </ion-item>\n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\indicacao\indicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_cadastro_till_cadastro_till__["a" /* CadastroTillProvider */]])
    ], IndicacaoPage);
    return IndicacaoPage;
    var IndicacaoPage_1;
}());

//# sourceMappingURL=indicacao.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GanhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__premios_premios__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cashback_cashback__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GanhosPage = /** @class */ (function () {
    function GanhosPage(navCtrl, navParams, authService, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (authData) {
            if (authData) {
                _this.user = authService.getUserData();
                authService.getUser(_this.user.uid).valueChanges().subscribe(function (snapshot) {
                    snapshot.uid = snapshot.$key;
                    _this.me = snapshot;
                });
            }
        });
    }
    GanhosPage.prototype.goFirst = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__premios_premios__["a" /* PremiosPage */]);
    };
    GanhosPage.prototype.goSecond = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cashback_cashback__["a" /* CashbackPage */]);
    };
    GanhosPage.prototype.ionViewDidLoad = function () {
    };
    GanhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ganhos',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\ganhos\ganhos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Premiações Till</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="common-bg">\n\n  <!--Primeira forma-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n      <h5>Primeira forma de Ganho</h5>\n\n      <!--choose guest-->\n      <ion-grid class="filters" no-padding margin-top>\n        <ion-row>\n          <h6 class="till-txt">Premiações para motoristas e passageiros.</h6>\n          Os valores que são repassados à Till de suas corridas viram pontos para você!<br/><br/>\n          Veja quais prêmios você pode ganhar de acordo com seu\n          cadastro da Till.\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div padding class="form-bottom">\n      <button ion-button class="pull-right" color="till" tappable (click)="goFirst()">\n        Ver Prêmios\n      </button>\n      <div class="clear"></div>\n    </div>\n  </div>\n  <!--Fim Primeira forma-->\n\n  <!--Segunda forma-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n      <h5>Segunda forma de Ganho</h5>\n\n      <!--choose guest-->\n      <ion-grid class="filters" no-padding margin-top>\n        <ion-row>\n          <h6 class="till-txt">Cashback.</h6>\n          Ganhe 1% do dinheiro de volta, sobre a pontuação de seus indicados diretos.\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div padding class="form-bottom">\n      <button ion-button class="pull-right" color="till" tappable (click)="goSecond()">\n        Ver pontuação e ganhos\n      </button>\n      <div class="clear"></div>\n    </div>\n  </div>\n  <!--Fim Segunda forma-->\n\n\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\ganhos\ganhos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], GanhosPage);
    return GanhosPage;
}());

//# sourceMappingURL=ganhos.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_prize_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PremiosPage = /** @class */ (function () {
    function PremiosPage(navCtrl, navParams, authService, afAuth, prizeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.afAuth = afAuth;
        this.prizeService = prizeService;
        afAuth.authState.subscribe(function (authData) {
            if (authData) {
                _this.user = authService.getUserData();
                authService.getUser(_this.user.uid).valueChanges().subscribe(function (snapshot) {
                    snapshot.uid = snapshot.$key;
                    _this.me = snapshot;
                    _this.getPrizes(_this.me.itin);
                });
            }
        });
    }
    PremiosPage.prototype.ionViewDidLoad = function () {
    };
    PremiosPage.prototype.getPrizes = function (itin) {
        var _this = this;
        this.prizeService.getPrizes(itin).then(function (snapshot) {
            _this.prizes = snapshot;
        });
    };
    PremiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-premios',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\premios\premios.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Premiações Till</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="ganhos detail-bg">\n  <div class="ganho card" *ngFor="let prize of prizes" tappable margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + prize.imgUrl + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ prize.name }}</h6>\n          <h6 class="pull-right text-white" ion-text>{{ prize.points | number }} pontos</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <div>\n        <span ion-text class="text-white" *ngIf="prize.redeemed==\'0\' && prize.can_redeem == \'1\'">Resgatar Prêmio</span>\n        <span ion-text class="text-white" *ngIf="prize.redeemed==\'1\'">Prêmio resgatado em {{prize.redeemed_at | date:\'dd/MM/yyyy\'}}</span>\n        <span ion-text class="text-white" *ngIf="prize.can_redeem==\'0\'"><strong>&nbsp;</strong></span>\n        <span class="pull-right" ion-text color="light" *ngIf="prize.can_redeem==\'0\'">\n                   <strong>Faltam</strong> <span ion-text class="text-white" > {{ prize.points - prize.earned | number }} pts</span>\n                </span>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\premios\premios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__services_prize_service__["a" /* PrizeService */]])
    ], PremiosPage);
    return PremiosPage;
}());

//# sourceMappingURL=premios.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_prize_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CashbackPage = /** @class */ (function () {
    function CashbackPage(navCtrl, navParams, authService, afAuth, prizeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.afAuth = afAuth;
        this.prizeService = prizeService;
        afAuth.authState.subscribe(function (authData) {
            if (authData) {
                _this.user = authService.getUserData();
                authService.getUser(_this.user.uid).valueChanges().subscribe(function (snapshot) {
                    snapshot.uid = snapshot.$key;
                    _this.me = snapshot;
                    _this.getCashback(_this.me.itin);
                });
            }
        });
    }
    CashbackPage.prototype.ionViewDidLoad = function () {
    };
    CashbackPage.prototype.getCashback = function (itin) {
        var _this = this;
        this.prizeService.getCashbackPrizes(itin).then(function (snapshot) {
            _this.cashBack = snapshot;
            console.log(_this.cashBack);
        });
    };
    CashbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cashback',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\cashback\cashback.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Cashback</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--Primeira forma-->\n  <div class="booking-form card round" margin>\n    <ion-grid>\n      <ion-row style="border-bottom: 1px solid #ccc;">\n        <ion-col ion-text><h6 class="text-till text-center">Mês/Ano</h6></ion-col>\n        <ion-col ion-text><h6 class="text-till text-center">Pontos Acumulados</h6></ion-col>\n        <ion-col ion-text><h6 class="text-till text-center">Cashback</h6></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let cash of cashBack">\n        <ion-col class="text-center"><span class="text-center">{{ cash.mes }}/{{ cash.ano }}</span></ion-col>\n        <ion-col class="text-center"><span class="text-center">{{ cash.pontos | number }}</span>\n        </ion-col>\n        <ion-col class="text-center"><span class="text-center">{{ cash.cashback | currency: \'BRL\' }} </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!--<span *ngIf="cashBack == \'\'">\n      Sua rede ainda não produziu pontos para que você receba. Incentive sua rede para ter mais ganhos.\n      <br/>\n    </span>-->\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\cashback\cashback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__services_prize_service__["a" /* PrizeService */]])
    ], CashbackPage);
    return CashbackPage;
}());

//# sourceMappingURL=cashback.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermosPage = /** @class */ (function () {
    function TermosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermosPage');
    };
    TermosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-termos',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\termos\termos.html"*/'<!--\n  Generated template for the TermosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Termos e Condições</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class=WordSection1>\n\n    <p class=MsoNormal><span lang=PT>TILL TECNOLOGIA EIRELI</span></p>\n\n    <p class=MsoNormal><span lang=PT>          </span></p>\n\n    <p class=MsoNormal><span lang=PT>          São Paulo, 27 de abril de 2019</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>TERMOS E CONDIÇÕES DE USO DO<br>\nAPLICATIVO TILL &quot;A Till&quot; <br>\n<br>\n 1.    RELACIONAMENTO CONTRATUAL<br>\n <br>\n<br>\nEstes Termos de uso (\'Termos\') <br>\nregem seu acesso e uso, como <br>\npessoa física, de aplicativos, sítios de <br>\nInternet, conteúdos, produtos e <br>\ntambém serviços (os &quot;Serviços&quot;) <br>\ndisponibilizados pela Till </span></p>\n\n    <p class=MsoNormal><span lang=PT>TECNOLOGIA EIRELI, </span></p>\n\n    <p class=MsoNormal><span lang=PT>inscrita no Cadastro <br>\nNacional de Pessoas Jurídicas do <br>\nMinistério da Fazenda (CNPJ/MF) sob <br>\nn.31.801.778 /0001-23 ou qualquer de <br>\nsuas afiliadas, definidas ao longo <br>\ndeste termo, simplesmente como <br>\nTill.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>2. LEIA COM ATENÇÃO <br>\nESTES TERMOS ANTES DE <br>\nACESSAR OU USAR OS <br>\nSERVIÇOS DOS APLICATIVOS <br>\nTill. <br>\n<br>\nAo acessar e usar os Serviços você <br>\nconcorda com os presentes termos e <br>\ncondições, que estabelecem o <br>\nrelacionamento contratual entre você <br>\ne a Till. Se você não concorda com <br>\nestes Termos, você não pode acessar <br>\nnem usar os Serviços. <br>\n<br>\nMediante a aceitação destes termos, <br>\nfica acordado entre a Till e o usuário <br>\na substituição de qualquer termos e <br>\nacertos acordados anteriormente <br>\nentre o usuário e qualquer Afiliada da <br>\nTill. <br>\n<br>\nA Till poderá imediatamente <br>\nencerrar este acordo e quaisquer <br>\noutros serviços de modo geral, deixar <br>\nde oferecer ou negar acesso aos <br>\nServiços ou a qualquer parte deles, a <br>\nqualquer momento e por qualquer <br>\nmotivo. Termos adicionais poderão se <br>\naplicar a determinados Serviços, tais <br>\ncomo condições para um evento,</span></p>\n\n    <p class=MsoNormal><span lang=PT>atividade ou promoção em particular <br>\ne esses em relação aos respectivos</span></p>\n\n    <p class=MsoNormal><span lang=PT>Serviços. Termos adicionais serão <br>\ndivulgadas em relação aos <br>\nrespectivos Serviços. Termos <br>\nadicionais são complementares e <br>\nconsiderados parte integrante destes <br>\nTermos para os efeitos dos <br>\nrespectivos Serviços. Termos <br>\nadicionais prevalecerão sobre este, em <br>\ncaso de conflito com relação aos <br>\nreferidos Serviços. <br>\n<br>\nA Till poderá alterar os Termos <br>\nrelativos aos Serviços a qualquer <br>\nmomento. Aditamentos entrarão em <br>\nvigor quando a Till fizer a postagem <br>\nda versão atualizada dos Termos <br>\nneste local ou das condições <br>\natualizadas ou Termos adicionais <br>\nsobre o respectivo Serviço. O fato de <br>\nvocê continuar a acessar ou usar os <br>\nServiços após essa postagem <br>\nrepresenta seu consentimento em <br>\nvincular-se aos Termos alterados. A <br>\nTill ou qualquer de suas afiliadas <br>\npoderá fornecer a uma gerenciadora <br>\nde reclamações ou seguradoras <br>\nqualquer informação necessária <br>\n(inclusive suas informações de <br>\ncontato) se houver qualquer</span></p>\n\n    <p class=MsoNormal><span lang=PT>reclamação, litígio ou conflito, o que <br>\npode incluir acidente envolvendo você <br>\nou prestadores terceiros (inclusive <br>\num(a) motorista de uma rede de <br>\nempresas de transportes, e essas <br>\ninformações ou dados forem <br>\nnecessários para solucionar a <br>\nreclamação, litígio ou conflito. 2. OS <br>\nSERVIÇOS Os Serviços integram uma <br>\nplataforma de tecnologia que permite <br>\naos(às) Usuários(as) de aplicativos <br>\nmóveis ou sítios de Internet da Till , <br>\nfornecidos como parte dos Serviços <br>\n(cada qual um &quot;Aplicativo&quot;), <br>\nprovidenciar e programar Serviços de <br>\ntransporte e/ou logística com <br>\nterceiros provedores independentes <br>\ndesses Serviços, inclusive terceiros <br>\nfornecedores independentes de <br>\ntransporte e terceiros fornecedores <br>\nindependentes de logística mediante <br>\ncontrato com a Till ou determinadas <br>\nAmpliadas da Till (&quot;Prestadores <br>\nTerceiros\'). A menos que <br>\ndiversamente acordado pela Till em <br>\ncontrato escrito em separado firmado <br>\ncom você, os Serviços são <br>\ndisponibilizados para seu uso pessoal <br>\ne não comercial. Você reconhece que <br>\na Till não presta serviços de</span></p>\n\n    <p class=MsoNormal><span lang=PT>transporte ou logística, nem funciona <br>\ncomo transportadora, e que todos <br>\nesses serviços de transporte <br>\nou logística são prestados por <br>\nprestadores terceiros independentes, <br>\nque não são empregados (as) e nem <br>\nrepresentantes da Till, nem de <br>\nqualquer de suas afinadas. <br>\n<br>\nLICENÇA. <br>\n<br>\nSujeito ao cumprimento destes <br>\nTermos, a Till outorga uma licença <br>\nlimitada, não exclusiva, não passível <br>\nde sub licença, revogável e não <br>\ntransferível para: (i) acesso e uso dos <br>\nAplicativos em seu dispositivo <br>\npessoal, exclusivamente para o seu <br>\nuso dos serviços; e (ii) acesso e uso <br>\nde qualquer conteúdo, informação e <br>\nmaterial correlato que possa ser <br>\ndisponibilizado por meio dos serviços, <br>\nem cada caso, para seu uso pessoal, <br>\nnunca comercial. Quaisquer direitos <br>\nnão expressamente outorgados por <br>\nestes termos são reservados à Till e <br>\nsuas afinadas. <br>\n<br>\nRESTRIÇÕES. <br>\n<br>\nVocê não poderá: (i) remover qualquer</span></p>\n\n    <p class=MsoNormal><span lang=PT>aviso de direito autoral, direito de <br>\nmarca ou outro aviso de direito de <br>\npropriedade de qualquer parte dos <br>\nserviços; (ií) reproduzia modificar, <br>\ndistribuir, licenciar, locar, vender, <br>\nrevender transferir, exibir, veicular, <br>\ntransmitir ou, de qualquer outro modo, <br>\nexplorar os serviços, exceto da forma <br>\nexpressamente permitida pela Till <br>\n(iii) decompilar, realizar engenharia <br>\nreversa ou desmontar os Serviços, <br>\nexceto conforme permitido pela <br>\nlegislação aplicável; (lv) conectar, <br>\nespelhar ou recortar qualquer parte <br>\ndos Serviços; (v) fazer ou lançar <br>\nquaisquer programas ou scripts com a <br>\nfinalidade de fazer scraping, <br>\nindexação, pesquisa ou qualquer outra <br>\nforma de obtenção de dados de <br>\nqualquer parte dos serviços, ou de <br>\nsobrecarregar ou prejudicar <br>\nindevidamente a operação e a <br>\nfuncionalidade de qualquer aspecto <br>\ndos serviços; ou (vi) tentar obter <br>\nacesso não autorizado aos serviços <br>\nou prejudicar qualquer aspecto dos <br>\nserviços ou seus sistemas ou redes <br>\ncorrelatas. <br>\n<br>\nPRESTAÇÃO DOS SERVIÇOS.</span></p>\n\n    <p class=MsoNormal><span lang=PT>Você reconhece que os Serviços <br>\npodem ser disponibilizados sob <br>\ndiferentes marcas da Till, de <br>\ndiferentes seguimentos e setores, de <br>\ndiferentes opções de solicitação <br>\nassociadas aos serviços de <br>\ntransporte, de logística, de serviços <br>\ndomésticos, de cuidados pessoais, de <br>\nsaúde, de cuidados com animais e <br>\noutros serviços que a Till vier a <br>\ndisponibilizar em sua plataforma <br>\nposteriormente. Todos os serviços <br>\nsão prestados por terceiros <br>\nindependentes, inclusive marcas de <br>\nsolicitação de transporte. Você <br>\nreconhece também que os serviços <br>\npodem estar disponíveis sob essas <br>\nmarcas e opções de solicitação <br>\noferecidas por, ou associadas a: (1) <br>\ndeterminadas subsidiárias e afinadas <br>\nda Till; ou (11) Prestadores Terceiros <br>\nindependentes, inclusive motoristas <br>\nde empresas de rede de transporte, <br>\ndetentores(as) de permissão para <br>\nserviços de transporte na categoria <br>\nprofissional ou detentores(as) de <br>\npermissões, autorizações ou licenças <br>\nde transporte similares.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>SERVIÇOS E CONTEÚDO DE <br>\nTERCEIROS(AS). <br>\n<br>\nOs serviços poderão ser <br>\ndisponibilizados e acessados em <br>\nconexão com serviços e conteúdo de <br>\nterceiros(as) (inclusive publicidade) <br>\nque a Till não controlará. Você <br>\nreconhece que termos de uso e <br>\npolíticas de privacidade diferentes <br>\npoderão ser aplicáveis ao uso desses <br>\nserviços e conteúdo de terceiros(as). <br>\nA Till não endossa e nem garante <br>\nesses serviços e conteúdo de <br>\nterceiros(as) e a Till não será, em <br>\nhipótese alguma, responsável por <br>\nnenhum produto ou serviço <br>\ndesses(as) terceiros(as) <br>\nfornecedores(as). Além disto, Apple <br>\nInc, Google, Inc. Microsoft <br>\nCorporation e/ou suas subsidiárias e <br>\nafinadas internacionais serão <br>\nterceiros(as) beneficiários(as) deste <br>\nContrato, caso você acesse os <br>\nserviços usando aplicativos <br>\ndesenvolvidos para dispositivos <br>\nmóveis baseados em Apple iOS, <br>\nAndroid, Microsoft Windows <br>\nrespectivamente. Esses(as) <br>\nterceiros(as) beneficiários(as) não são</span></p>\n\n    <p class=MsoNormal><span lang=PT>partes deste contrato e não são <br>\nresponsáveis pela prestação dos <br>\nServiços ou por qualquer forma de <br>\nsuporte aos Serviços. Seu acesso aos <br>\nserviços usando esses dispositivos <br>\nestá sujeito às condições <br>\nestabelecidas nos termos de serviços <br>\ndos respectivos terceiros(as) <br>\nbeneficiários(as). <br>\n<br>\nTITULARIDADE. <br>\n<br>\nOs Serviços e todos os direitos sobre <br>\neles são e permanecerão de <br>\npropriedade da Till ou de <br>\npropriedade das afiliadas da Till, ou <br>\nde suas respectivas licenciadoras, <br>\nconforme o caso. Estes termos e o <br>\nuso dos serviços não Ihe outorgam <br>\nnem Ihe conferem qualquer direito; (i) <br>\nsobre os serviços, exceto pela licença <br>\nlimitada concedida acima; ou (ii) de <br>\nusar ou, de qualquer modo, fazer <br>\nreferência a nomes societários, <br>\nlogotipos, nomes de produtos ou de <br>\nServiços, marcas comerciais ou <br>\nmarcas de serviço da Till ou de <br>\nqualquer licenciadora da Till. <br>\n<br>\n3. O USO DOS SERVIÇOS <br>\nCONTAS DO USUÁRIOS</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>Para utilizar os serviços, você deve <br>\nregistrar-se e manter uma conta <br>\npessoal de usuário de serviços <br>\n(&quot;Conta&quot;). Você deve ter pelo menos <br>\n18 anos ou a maioridade exigida por <br>\nlei, (se for menor de 18 anos) para <br>\nabrir uma Conta. O registro de Conta <br>\nexige que você apresente à Till <br>\ncertas informações pessoais, tais <br>\ncomo seu nome, endereço, número de <br>\ntelefone celular e idade, assim como <br>\npelo menos um método de pagamento <br>\nválido (cartão de crédito, débito ou <br>\nparceiro de pagamento aceito). Você <br>\nconcorda em manter as informações <br>\ncorretas, completas e atualizadas em <br>\nsua conta. Se você não mantiver <br>\ninformações corretas, completas e <br>\natualizadas em sua conta. inclusive se <br>\no método de pagamento informado <br>\nfor inválido ou expirado, você poderá <br>\nficar impossibilitado(a) de acessar e <br>\nusar os serviços ou a Till poderá <br>\nrescindir este termo. Você é <br>\nresponsável por todas as atividades <br>\nrealizadas na sua conta e concorda <br>\nem manter sempre a segurança e o <br>\nsigilo do nome de usuário e senha da <br>\nsua Conta. A menos que diversamente <br>\npermitido pela Till por escrito, você</span></p>\n\n    <p class=MsoNormal><span lang=PT>poderá manter apenas uma conta. </span></p>\n\n    <p class=MsoNormal><span lang=PT><br>\nCONDUTA E OBRIGAÇÕES DO <br>\nUSUÁRIO. <br>\n<br>\nO serviço não está disponível para uso <br>\nde pessoas menores de 18 anos. Você <br>\nnão poderá autorizar terceiros(as) a <br>\nusar sua conta, você não poderá <br>\npermitir que pessoas menores de 18 <br>\nanos recebam serviços de transporte <br>\nou logística de prestadores terceiros, <br>\nsalvo se estiverem em sua companhia <br>\nou de alguém autorizado por você, <br>\nmaior de 18 anos. Você não poderá <br>\nceder, nem de qualquer outro modo <br>\ntransferir, sua conta a nenhuma outra <br>\npessoa ou entidade. Você concorda <br>\nem cumprir todas as leis aplicáveis <br>\nquando usar os serviços e que <br>\nsomente poderá usar os serviços para <br>\nfinalidades legítimas (por ex. não <br>\ntransportar materiais ilegais ou <br>\nperigosos). Você não poderá, quando <br>\nusar os serviços, causar transtorno, <br>\naborrecimento, inconveniente ou <br>\ndanos à propriedade dos prestadores <br>\nterceiros ou de qualquer outro terceiro, <br>\nsob pena de ter que reparar eventuais <br>\nprejuízos comprovados. Em</span></p>\n\n    <p class=MsoNormal><span lang=PT>determinadas situações, você poderá <br>\nser solicitado(a) a fornecer <br>\ncomprovante de identidade para <br>\nacessar ou usar os serviços, e <br>\nconcorda que poderá ter seu acesso <br>\nou uso dos serviços negado caso você <br>\nse recuse a fornecer comprovante de <br>\nidentidade. <br>\n<br>\nMENSAGEM DE TEXTO. <br>\n<br>\nAo criar uma Conta, você concorda <br>\nque os Serviços poderão Ihe enviar <br>\nmensagens de textos informativas <br>\n(SMS) como parte das operações <br>\ncomerciais regulares para o uso dos <br>\nServiços. Você poderá optar por não <br>\nreceber mensagens de texto (SMS) da <br>\nTill a qualquer momento enviando e- <br>\nmail para <br>\nsuporte: <a href="mailto:atendimento@vobi.com.br"><span style=\'color:#1155CC\'>atendimento@till.com.br</span></a>\ne <br>\nindicando que não mais deseja <br>\nreceber essas mensagens, Juntamente <br>\ncom o número do telefone celular que <br>\nas recebe. Você reconhece que ao <br>\noptar por não receber as mensagens <br>\nde texto poderá impactar o uso dos <br>\nServiços.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>CÓDIGOS PROMOCIONAIS. <br>\n<br>\nA Till poderá, a seu exclusivo <br>\ncritério, criar códigos promocionais <br>\nque poderão ser resgatados para <br>\ncrédito na Conta ou outras <br>\ncaracterísticas ou benefícios <br>\nrelacionados aos Serviços e/ou a <br>\nServiços de Prestadores Terceiros, <br>\nsujeitos a quaisquer condições <br>\nadicionais que a Till estabelecer para <br>\ncada um dos códigos promocionais <br>\n(&quot;Códigos Promocionais\'). Você <br>\nconcorda que Códigos Promocionais: <br>\n(i) devem ser usados de forma legal <br>\npara a finalidade e o público a que se <br>\ndestinam; (ií) não devem ser <br>\nduplicados, de qualquer forma <br>\nvendidos, transferidos ou <br>\ndisponibilizados ao público em geral <br>\n(seja por meio de postagem ao <br>\npúblico ou qualquer outra método), a <br>\nmenos que expressamente permitido <br>\npela Till (iii) poderão ser <br>\ndesabilitados pela Till a qualquer <br>\nmomento por motivos legalmente <br>\nlegítimos, sem que disto resulte <br>\nqualquer responsabilidade para a </span></p>\n\n    <p class=MsoNormal><span lang=PT>Till (iv) somente poderão ser usados <br>\nde acordo com as condições <br>\nespecíficas que a Till estabelecer <br>\npara esses Código Promocional; (v) <br>\nnão são válidos como dinheiro; e (vi) <br>\npoderão expirar antes de serem <br>\nusados. A Till se reserva o direito de <br>\nreter ou deduzir créditos ou outras <br>\nfuncionalidades ou vantagens obtidas <br>\npor meio do uso dos Códigos <br>\nPromocionais por você ou por outro <br>\nusuário, caso a Till apure ou acredite <br>\nque o uso ou resgate do Código <br>\nPromocional foi feito com erro, fraude, <br>\nilegalidade ou violação às condições <br>\ndo respectivo Código Promocional. <br>\n<br>\nCONTEÚDO FORNECIDO <br>\nPELO(A) USUÁRIO(A). <br>\n<br>\nA Till poderá, a seu exclusivo <br>\ncritério, permitir que você ou qualquer <br>\npessoa apresente, carregue, publique <br>\nou, de qualquer modo, disponibilize <br>\npara a Till por meio dos Serviços, <br>\nconteúdo e informações de texto, áudio </span></p>\n\n    <p class=MsoNormal style=\'margin-right:260.15pt\'><span lang=PT>ou vídeo,\ninclusive comentários </span></p>\n\n    <p class=MsoNormal><span lang=PT>áudio ou vídeo, inclusive comentários <br>\ne feedbacks relacionados aos <br>\nServiços, iniciação de solicitação de <br>\nsuporte e registro em concursos e <br>\npromoções (&quot;Conteúdo de <br>\nUsuário(a)&quot;). Qualquer Conteúdo de <br>\nUsuário(a) fornecido por você <br>\npermanece de sua propriedade. <br>\nContudo, ao fornecer Conteúdo de <br>\nUsuário(a) para a Till, você outorga a <br>\nTill e suas afiliadas uma licença em <br>\nnível mundial, perpétua, irrevogável, <br>\ntransferível, isenta de royalties, e com <br>\ndireito a sublicenciar, usar, copiar, <br>\nmodificar, criar obras derivadas, <br>\ndistribuir, publicar, exibir executar em <br>\npúblico e, de qualquer outro modo, <br>\nexplorar esse Conteúdo de Usuário(a) <br>\nem todos os formatos e canais de <br>\ndistribuição hoje conhecidos ou <br>\ndesenvolvidos no futuro (inclusive em <br>\nconexão com os Serviços e com os <br>\nnegócios da Till e em sites e <br>\nServiços de terceiros), sem ulterior <br>\naviso a você ou seu consentimento, e <br>\nsem necessidade de pagamento a <br>\nvocê ou a qualquer outra pessoa ou <br>\nentidade. Você declara e garante que: <br>\n(i) é o(a) único(a) e exclusivo(a) <br>\nproprietário(a) de todo Conteúdo de</span></p>\n\n    <p class=MsoNormal><span lang=PT>Usuário(a) ou tem todos os direitos, <br>\nlicenças, consentimentos e liberações <br>\nnecessários para outorgar à Till a <br>\nlicença sobre o Conteúdo de <br>\nUsuário(a) acima referido; e (ii) nem o <br>\nConteúdo de Usuário(a) nem sua <br>\napresentação, carregamento, <br>\npublicação ou outra forma de <br>\ndisponibilização desse Conteúdo de <br>\nUsuário(a) tampouco o uso do <br>\nConteúdo de Usuário(a) pela Till da <br>\nforma aqui permitida infringirá, <br>\nconstituirá apropriação indevida nem <br>\nviolar propriedade intelectual ou <br>\ndireito de propriedade de terceiros(a), <br>\nnem direitos de publicidade ou <br>\nprivacidade e também não resultarão <br>\nna violação de qualquer lei ou <br>\nregulamento aplicável. Você concorda <br>\nem não fornecer Conteúdo de <br>\nUsuário(a) que seja difamatório, <br>\ncalunioso, injurioso, violento, obsceno, <br>\npornográfico, ilegal ou de qualquer <br>\nmodo ofensivo, conforme apuração da <br>\nTill a seu critério exclusivo, seja ou <br>\nnão esse material protegido por lei. A <br>\nTill poderá, mas não está obrigada a <br>\nanalisar, monitorar ou remover <br>\nConteúdo de Usuário(a), a critério <br>\nexclusivo da Till. a qualquer</span></p>\n\n    <p class=MsoNormal><span lang=PT>momento e por qualquer motivo, sem <br>\nnenhum aviso a você. <br>\n<br>\nACESSO A REDE E EQUIPAMENTOS. <br>\n<br>\nVocê é responsável por obter o <br>\nacesso a rede de dados necessários <br>\npara usar os Serviços. As taxas e <br>\nencargos de sua rede de dados e <br>\nmensagens poderão se aplicar se você <br>\nacessar ou usar os Serviços de um <br>\ndispositivo sem fio e você será <br>\nresponsável por essas taxas e <br>\nencargos. Você é responsável por <br>\nadquirir e atualizar os equipamentos e <br>\ndispositivos necessários para acessar <br>\ne usar os Serviços e Aplicativos e <br>\nquaisquer de suas atualizações. A <br>\nTill não garante que os serviços, ou <br>\nqualquer parte deles, funcionarão em <br>\nqualquer equipamento ou dispositivo <br>\nem particular. Além disso, os Serviços <br>\npoderão estar sujeitos a mau <br>\nfuncionamento e atrasos inerentes ao <br>\nuso da Internet e de comunicações <br>\neletrônicas.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>4. PAGAMENTO <br>\n<br>\nVocê entende que os serviços ou bens <br>\nque você receber de um Prestador <br>\nTerceiro, contratados por meio dos <br>\nServiços, poderão ser cobrados <br>\n(&quot;Preço&quot;). Após você ter recebido <br>\nserviços ou bens obtidos por meio do <br>\nuso do Serviço, a Till facilitará o <br>\npagamento do respectivo Preço em <br>\nnome do Prestador Terceiro na <br>\nqualidade de agente limitado de <br>\ncobrança desse Prestador Terceiro. O <br>\npagamento do Preço feito dessa <br>\nmaneira será considerado pagamento <br>\nfeito diretamente por você ao <br>\nPrestador Terceiro. O preço incluirá <br>\ntodos os impostos exigidos por lei. O <br>\npreço pago por você é final e não <br>\nreembolsável, a menos que <br>\ndiversamente determinado pela Till. <br>\nVocê tem o direito de solicitar uma <br>\nredução no preço ao prestador <br>\nterceiro por serviços ou bens <br>\nrecebidos desse prestador terceiro no <br>\nmomento em que receber esses <br>\nserviços ou bens. A Till responderá <br>\nde acordo com qualquer solicitação de</span></p>\n\n    <p class=MsoNormal><span lang=PT>prestador terceiro para modificar o <br>\npreço de um serviço ou bem em <br>\nparticular. Na máxima extensão <br>\npermitida pela lei aplicável, a Till <br>\nreserva o direito de limitar os Preços <br>\ncobrados em espécie. Uma vez <br>\nlimitado o valor a ser pago em <br>\nespécie, você deverá disponibilizar um <br>\nmétodo alternativo de pagamento. O <br>\npreço total é devido e deve ser pago <br>\nimediatamente após a prestação do <br>\nserviço; o pagamento será facilitado <br>\npela Till mediante o método de <br>\npagamento indicado na sua conta, <br>\napós o que a Till enviará um recibo <br>\npor e-mail. Se for verificado que o <br>\nmétodo de pagamento indicado na <br>\nconta expirou, é inválido ou não pode <br>\nser cobrado, você concorda que a <br>\nTill poderá, na qualidade de agente <br>\nlimitado de cobrança do prestador <br>\nterceiro, usar um método secundário <br>\nde cobrança na Conta, se houver. Na <br>\nrelação entre você e a Till, a Till <br>\nreserva-se o direito de estabelecer <br>\nremover e/ou revisar o preço relativo a <br>\ntodos os serviços ou bens obtidos por <br>\nmeio do uso dos serviços a qualquer <br>\nmomento. a critério exclusivo da Till. <br>\nAdemais. você reconhece e concorda</span></p>\n\n    <p class=MsoNormal><span lang=PT>que o preço aplicável em certas áreas <br>\ngeográficas poderão: (1) Incluir tarifas, <br>\ntaxas, impostos e/ou contribuições <br>\ngovernamentais devidas em seu <br>\nnome, inclusive, tarifas de pedágios, <br>\nconforme a rota tomada pelo <br>\nprestador terceiro e legislação <br>\naplicável, e, (li) aumentar <br>\nsubstancialmente quando a oferta de <br>\nserviços por parte dos prestadores <br>\nterceiros for menor do que a demanda <br>\npor referidos serviços, durante <br>\nhorários de pico. O pagamento de <br>\ntaxas, impostos e/ou contribuições <br>\ngovernamentais, serão de sua <br>\nresponsabilidade e você reembolsará <br>\no prestador terceiro e/ou a Till por <br>\ntodas tarifas, taxas, impostos e/ou <br>\ncontribuições governamentais pagas <br>\nem seu nome. A Till envidará seus <br>\nmelhores esforços para informá-lo dos <br>\npreços que poderão se aplicar, sendo <br>\ncerto que você será responsável pelo <br>\npagamento dos valores lançados em <br>\nsua conta, independentemente de <br>\nestar ciente desses preços ou de seus <br>\nvalores. A Till poderá, a qualquer <br>\nmomento, fornecer a certos(as) <br>\nusuários (as) ofertas e descontos <br>\npromocionais que poderão resultar em</span></p>\n\n    <p class=MsoNormal><span lang=PT>valores diferentes cobrados por <br>\nserviços iguais ou similares a outros <br>\nobtidos por meio do uso dos serviços, <br>\ne você concorda que essas ofertas e <br>\ndescontos promocionais, a menos que <br>\ntambém oferecidos a você. não terão <br>\ninfluência sobre os preços aplicados. <br>\nVocê poderá optar por cancelar sua <br>\nsolicitação de serviços ou bens de um <br>\nprestador terceiro a qualquer <br>\nmomento antes da chegada desse <br>\nprestador terceiro, caso em que <br>\npoderá incidir uma taxa de <br>\ncancelamento. Esta estrutura de <br>\npagamento se destina a remunerar <br>\nintegralmente os prestadores terceiros <br>\npelos serviços ou bens <br>\ndisponibilizados. A Till não indica <br>\nnenhuma parcela do pagamento como <br>\ngorjeta ou gratificação aos <br>\nprestadores terceiros. Qualquer <br>\ndeclaração da Till (no website da <br>\nTill, no aplicativo ou nos materiais <br>\nde marketing da Till) de que as <br>\ngorjetas são &quot;voluntárias&quot;, &quot;não <br>\nobrigatórias&quot; e/ou &quot;não incluídas&quot; no <br>\npagamento que você faz pelos <br>\nserviços ou bens prestados, não <br>\npretendem sugerir que a Till oferece <br>\nvalores adicionais àqueles descritos</span></p>\n\n    <p class=MsoNormal><span lang=PT>acima aos prestadores terceiros. Você <br>\ncompreende e concorda que, embora <br>\nvocê seja livre para fazer pagamentos <br>\nadicionais como gorjeta a quaisquer <br>\nprestadores terceiros que forneça <br>\nserviços ou bens por meio dos <br>\nserviços, você não tem obrigação de <br>\nfazê-lo. Gorjetas são de caráter <br>\nvoluntário. Após ter recebido os <br>\nserviços ou bens obtidos por meio dos <br>\nserviços, você terá a oportunidade de <br>\navaliar sua experiência e fazer <br>\ncomentários adicionais sobre o <br>\nprestador terceiro. <br>\n<br>\nTAXA DE REPAROS OU LIMPEZA <br>\n<br>\nVocê será responsável pelos custos <br>\nde reparos a danos ou pela limpeza de <br>\nveículos de prestadores terceiros <br>\nresultantes do uso dos serviços <br>\natravés da sua Conta que excedam os <br>\ndanos naturais decorrentes do uso <br>\n(&quot;Reparos ou Limpeza&quot;). Caso um <br>\nprestador terceiro rebate as <br>\nnecessidade de reparos ou limpeza e <br>\nessa solicitação de reparos ou</span></p>\n\n    <p class=MsoNormal><span lang=PT>limpeza seja confirmada, a Till <br>\nreserva-se o direito de facilitar o <br>\npagamento desses reparos ou limpeza <br>\nem nome do prestador terceiro <br>\nusando o método de pagamento <br>\nindicado em sua conta. Referidos <br>\nvalores serão transferidos pela Till <br>\nao respectivo prestador terceiro e não <br>\nserão reembolsáveis. <br>\n<br>\n5.  RECUSA DE GARANTIA e <br>\nLIMITAÇÃO DE <br>\nRESPONSABILIDADE <br>\n<br>\nOs serviços são prestados &quot;no estado&quot; <br>\ne &quot;como disponíveis&quot;. a Till recusa <br>\ntodas as declarações e garantias, <br>\nexpressas, Implícitas ou legais, não <br>\nexpressamente contidas nestes <br>\ntermos, Inclusive as garantias <br>\nimplícitas de comercialização, <br>\nadequação a uma finalidade <br>\nespecífica e não infringência. <br>\nAdemais, a Till não faz nenhuma <br>\ndeclaração e nem dá garantia sobre a <br>\nconfiabilidade, pontualidade, <br>\nqualidade, adequação ou <br>\ndisponibilidade dos serviços ou de <br>\nquaisquer serviços ou bens</span></p>\n\n    <p class=MsoNormal><span lang=PT>solicitados por meio do uso dos <br>\nserviços, nem que os serviços serão <br>\nininterruptos ou livres de erros. A Till <br>\nnão garante a qualidade, adequação, <br>\nsegurança ou habilidade de <br>\nprestadores terceiros. Você concorda <br>\nque todo o risco decorrente do uso <br>\ndos serviços e de qualquer serviço ou <br>\nbem solicitado por meio da tecnologia <br>\nserá sempre seu na medida permitida <br>\npela lei aplicável. <br>\n<br>\nLIMITAÇÃO DE RESPONSABILIDADE <br>\n<br>\nA Till não será responsável por danos <br>\nindiretos, incidentais, especiais, <br>\npunitivos ou emergentes, inclusive <br>\nlucros cessantes, perda de dados, <br>\ndanos morais ou patrimoniais <br>\nrelacionados. associados ou <br>\ndecorrentes de qualquer uso dos <br>\nserviços ainda que a Till tenha sido <br>\nalertada para a possibilidade desses <br>\ndanos. A Till não será responsável <br>\npor nenhum dano, obrigação ou <br>\nprejuízo decorrente do: (í) seu uso dos <br>\nserviços ou sua incapacidade de</span></p>\n\n    <p class=MsoNormal><span lang=PT>acessar ou usar os serviços; ou (ii) <br>\nqualquer operação ou relacionamento <br>\nentre você e qualquer prestador <br>\nterceiro, ainda que a Till tenha sido <br>\nalertada para a possibilidade desses <br>\ndanos. A Till não será responsável <br>\npor atrasos ou falhas decorrentes de <br>\ncausas fora do controle razoável da <br>\nTill. você reconhece que prestadores <br>\nterceiros que prestam serviços de <br>\ntransporte solicitados por meio de <br>\nalgumas marcas poderão oferecer <br>\nserviços de transporte do tipo &quot;divisão <br>\nde viagem\' ou ponto a ponto. Você <br>\nconcorda que qualquer pagamento <br>\nfeito a você com base no seguro <br>\ncontra acidentes pessoais de <br>\npassageiros (app), mantido pela Till <br>\nou pelo prestador terceiro reduzirá <br>\nqualquer indenização devida a você <br>\ndecorrente daquele mesmo acidente. <br>\nOs serviços da Till poderão ser <br>\nusados por você para solicitar e <br>\nprogramar serviços de transporte, <br>\nbens ou logística, prestados por <br>\nprestadores terceiros, mas você <br>\nconcorda que a Till não tem <br>\nresponsabilidade em relação a você, <br>\npor conta de qualquer serviço de <br>\ntransporte, bens ou logística</span></p>\n\n    <p class=MsoNormal><span lang=PT>realizados por prestadores terceiros.</span></p>\n\n    <p class=MsoNormal><span lang=PT>Como consequência, a Till não tem</span></p>\n\n    <p class=MsoNormal><span lang=PT>qualquer responsabilidade por rotas</span></p>\n\n    <p class=MsoNormal><span lang=PT>adotadas por prestadores terceiros. As</span></p>\n\n    <p class=MsoNormal><span lang=PT>limitações e recusa de garantias</span></p>\n\n    <p class=MsoNormal><span lang=PT>contidas nesta cláusula 5 não</span></p>\n\n    <p class=MsoNormal><span lang=PT>possuem o objetivo de limitar</span></p>\n\n    <p class=MsoNormal><span lang=PT>responsabilidades ou alterar direitos</span></p>\n\n    <p class=MsoNormal><span lang=PT>de consumidor que de acordo com a </span></p>\n\n    <p class=MsoNormal><span lang=PT>lei aplicável não podem ser limitados </span></p>\n\n    <p class=MsoNormal><span lang=PT>ou alterados.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>INDENIZAÇÃO</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>Você concorda em indenizar e manter </span></p>\n\n    <p class=MsoNormal><span lang=PT>a Till, seus diretores(as), </span></p>\n\n    <p class=MsoNormal><span lang=PT>conselheiros(as), empregados(as) e </span></p>\n\n    <p class=MsoNormal><span lang=PT>agentes, isentos(as) de </span></p>\n\n    <p class=MsoNormal><span lang=PT>responsabilidade por todas e </span></p>\n\n    <p class=MsoNormal><span lang=PT>quaisquer reclamações, cobranças, </span></p>\n\n    <p class=MsoNormal><span lang=PT>prejuízos, responsabilidades e </span></p>\n\n    <p class=MsoNormal><span lang=PT>despesas (inclusive honorários </span></p>\n\n    <p class=MsoNormal><span lang=PT>advocatícios) decorrentes ou </span></p>\n\n    <p class=MsoNormal><span lang=PT>relacionados: (i) ao uso dos serviços</span></p>\n\n    <p class=MsoNormal><span lang=PT>ou de bens obtidos por meio do uso</span></p>\n\n    <p class=MsoNormal style=\'margin-right:92.2pt\'><span lang=PT>dos serviços; (ii)\ndescumprimento ou <br>\nviolação de qualquer disposição <br>\ndestes termos; (iii) o uso, pela Till, do <br>\nconteúdo de usuário (a); ou (iv) <br>\nviolação dos direitos de terceiros, <br>\ninclusive prestadores terceiros. <br>\n<br>\n6. DO MARKETING DE <br>\nRECOMPENSA <br>\n<br>\nVocê poderá participar do marketing <br>\nde recompensa proposto pela Till, <br>\nque é o ato de indicar outras pessoas <br>\ndo seu relacionamento ou um grupo <br>\nde usuários e recomendar o serviço a <br>\noutras pessoas, que também se <br>\ntornam usuários. Para ingressar na <br>\nTill, você deve preencher o cadastro <br>\nde adesão virtual disponível <br>\nem <a href="http://www.till.com.br"><span style=\'color:#1155CC\'>www.till.com.br</span></a>\ne enviar todos os <br>\ndocumentos solicitados. Você <br>\nreconhece que a Till desenvolveu um <br>\nmoderno sistema virtual de <br>\ngerenciamento para auxiliá-lo da <br>\nmelhor forma possível na <br>\nadministração do seu benefício. <br>\nAtravés do escritório virtual, você pode <br>\ngerenciar sua rede, consultar seus <br>\npontos e adquirir seus pagamentos <br>\natravés de computadores, tablets e <br>\nsmartphones. <br>\nPara ter acesso ao plano de <br>\nmarketing por recompensa você <br>\ndeverá estar ativo mensalmente. Para <br>\nestar ativo, basta  não desinstalar </span></p>\n\n    <p class=MsoNormal><span lang=PT>o aplicativo da Till no mês referido.</span></p>\n\n    <p class=MsoNormal><span lang=PT>Desta forma terá acesso aos pontos <br>\nacumulados e recebimento dos bônus <br>\nreferente ao mês.(I) deixar o aplicativo</span></p>\n\n    <p class=MsoNormal><span lang=PT>da Till desinstalado num período </span></p>\n\n    <p class=MsoNormal><span lang=PT>superior a 30 dias, incidirá na perda</span></p>\n\n    <p class=MsoNormal><span lang=PT>dos pontos acumulados.(II) deixar o </span></p>\n\n    <p class=MsoNormal><span lang=PT>aplicativo da till desinstalado por</span></p>\n\n    <p class=MsoNormal><span lang=PT>um período superior a 10 dias dentro</span></p>\n\n    <p class=MsoNormal><span lang=PT>do mesmo mês, incidirá na perda do </span></p>\n\n    <p class=MsoNormal><span lang=PT>recebimento do bônus do referido mês.<br>\n<br>\n</span></p>\n\n    <p class=MsoNormal><span lang=PT><br>\nMARKETING DE RECOMPENSA <br>\n<br>\nCada repasse feito para Till </span></p>\n\n    <p class=MsoNormal><span lang=PT>por um prestador de serviço terá um </span></p>\n\n    <p class=MsoNormal><span lang=PT>valor e desse valor a cada um </span></p>\n\n    <p class=MsoNormal><span lang=PT>R$ 1,00 (um real) que entra para</span></p>\n\n    <p class=MsoNormal><span lang=PT>a Till e igual a 1 (um) ponto.<br>\nEsses pontos que poderão ser <br>\nconvertidos em bônus sem prêmios, <br>\npodem ser resgatados quando se atingir <br>\nou ultrapassar o valor de 20 (vinte) </span></p>\n\n    <p class=MsoNormal><span lang=PT>pontos. Aplica-se a este <br>\nbenefício a política do programa de <br>\nfidelidade da Till, assim como os</span></p>\n\n    <p class=MsoNormal><span lang=PT>critérios e limites nele previstos. </span></p>\n\n    <p class=MsoNormal><span lang=PT><br>\nGERAÇÃO DE PONTOS <br>\n<br>\nOs pontos são gerados e <br>\ncarregados na conta do usuário, <br>\nquando um cliente da sua indicação <br>\ndireta (primeira geração), terminar a <br>\nviagem e o prestador ou a Till <br>\nreceber o pagamento do cliente. Os <br>\npontos equivalem ao valor de repasse</span></p>\n\n    <p class=MsoNormal><span lang=PT>que de fato fica retido pela <br>\nTill pelo uso do aplicativo, ou seja, do <br>\nvalor que o prestador pagar para a <br>\nTill, lembrando que cada RS 1,00 <br>\n(hum real) equivale a 1 (um) ponto. <br>\n<br>\nVP - VOLUME PESSOAL: <br>\n<br>\nNão são considerados os <br>\npontos das viagens pessoais para <br>\nefeito de recompensa direta, ou seja, <br>\nos pontos da viagem que você realiza servirão <br>\npara remunerar apenas a pessoa que <br>\nte indicou, chamado de seu <br>\npatrocinador. <br>\n<br>\nVG - VOLUME DE GRUPO <br>\n<br>\nÉ formado pelo volume de todas as <br>\npessoas que o usuário indicou e se</span></p>\n\n    <p class=MsoNormal><span lang=PT>cadastraram na Till com seu código <br>\nde indicação pessoal.<br>\n<br>\nPONTOS PARA PREMIAÇÕES: </span></p>\n\n    <p class=MsoNormal><span lang=PT><br>\nSão pontos que serão acumulados ao </span></p>\n\n    <p class=MsoNormal><span lang=PT>longo de toda a sua vida. Esses pontos </span></p>\n\n    <p class=MsoNormal><span lang=PT>são acumulativos e mesmo ganhando </span></p>\n\n    <p class=MsoNormal><span lang=PT>os prêmios eles continuam acumulando.</span></p>\n\n    <p class=MsoNormal><span lang=PT>(I) esses pontos são vitalícios e </span></p>\n\n    <p class=MsoNormal><span lang=PT>hereditários. (II) todos os prestadores </span></p>\n\n    <p class=MsoNormal><span lang=PT>de serviços por você indicado através</span></p>\n\n    <p class=MsoNormal><span lang=PT>de seu código de indicação pessoal</span></p>\n\n    <p class=MsoNormal><span lang=PT>pertencerão a sua rede de indicados, </span></p>\n\n    <p class=MsoNormal><span lang=PT>sempre quando houver um repasse de </span></p>\n\n    <p class=MsoNormal><span lang=PT>valores para a Till por esses </span></p>\n\n    <p class=MsoNormal><span lang=PT>prestadores de Serviços. Cada R$ 1,00 </span></p>\n\n    <p class=MsoNormal><span lang=PT>(um real) de repasse equivale a um </span></p>\n\n    <p class=MsoNormal><span lang=PT>ponto para o usuário e em caso de</span></p>\n\n    <p class=MsoNormal><span lang=PT> falecimento a sua rede será passada</span></p>\n\n    <p class=MsoNormal><span lang=PT>aos herdeiros sucessivamente.</span></p>\n\n    <p class=MsoNormal><span lang=PT>PREMIAÇÕES PARA PASSAGEIROS</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>Para o cômputo das premiações </span></p>\n\n    <p class=MsoNormal><span lang=PT>considera-se a acumulação a seguir:</span></p>\n\n    <p class=MsoNormal><span lang=PT>1.000 pontos o usuário ganhará um</span></p>\n\n    <p class=MsoNormal><span lang=PT> par de ingressos para o cinema com</span></p>\n\n    <p class=MsoNormal><span lang=PT> pipoca e refrigerante; </span></p>\n\n    <p class=MsoNormal><span lang=PT>5.000 pontos o usuário ganhará um</span></p>\n\n    <p class=MsoNormal><span lang=PT> final de semana em um sítio; </span></p>\n\n    <p class=MsoNormal><span lang=PT>25.000 pontos o usuário ganhará celular</span></p>\n\n    <p class=MsoNormal><span lang=PT>no valor até R$ 1.000,00 (um mil reais);</span></p>\n\n    <p class=MsoNormal><span lang=PT>125.000 pontos o usuário ganhará  uma </span></p>\n\n    <p class=MsoNormal><span lang=PT>viagem de cruzeiro com acompanhante.</span></p>\n\n    <p class=MsoNormal><span lang=PT>625.000 pontos o usuário ganhará uma </span></p>\n\n    <p class=MsoNormal><span lang=PT>viagem para Cancún com acompanhante; </span></p>\n\n    <p class=MsoNormal><span lang=PT>3.125.000 pontos o usuário ganhará  um </span></p>\n\n    <p class=MsoNormal><span lang=PT>carro popular zero  km; </span></p>\n\n    <p class=MsoNormal><span lang=PT>15.625.000 pontos o usuário ganhará uma</span></p>\n\n    <p class=MsoNormal><span lang=PT>casa no valor até R$ 500.000,00 </span></p>\n\n    <p class=MsoNormal><span lang=PT>(quinhentos mil reais) prêmio máximo. </span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>Obs: Aplica-se a este <br>\nbenefício a política do programa de <br>\nfidelidade da Till, assim como os</span></p>\n\n    <p class=MsoNormal><span lang=PT>critérios e limites nele previstos. </span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>CB - CASH BACK</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>Dinheiro de volta, você receberá 1%</span></p>\n\n    <p class=MsoNormal><span lang=PT>sobre o total de pontos gerados por </span></p>\n\n    <p class=MsoNormal><span lang=PT>cada repasse feito para o Till, </span></p>\n\n    <p class=MsoNormal><span lang=PT>pelo seus indicados diretos</span></p>\n\n    <p class=MsoNormal><span lang=PT>referente ao referido mês.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>VGQ - VOLUME DE GRUPO DE </span></p>\n\n    <p class=MsoNormal><span lang=PT>QUALIFICAÇÃO</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>Ganhos de 1% a 10% sobre a </span></p>\n\n    <p class=MsoNormal><span lang=PT>pontuação mensal da sua rede</span></p>\n\n    <p class=MsoNormal><span lang=PT>de indicados diretos e indiretos até</span></p>\n\n    <p class=MsoNormal><span lang=PT>o infinito conforme tabela e exemplo </span></p>\n\n    <p class=MsoNormal><span lang=PT>abaixo:</span></p>\n\n    <p class=MsoNormal><span lang=PT>Até 999 pontos ganhos de 1%</span></p>\n\n    <p class=MsoNormal><span lang=PT>de 1.000 a 1.999 pontos 2%</span></p>\n\n    <p class=MsoNormal><span lang=PT>de 2.000 a 2.999 pontos 3%</span></p>\n\n    <p class=MsoNormal><span lang=PT>de 3.000 a 9.999 pontos 5%</span></p>\n\n    <p class=MsoNormal><span lang=PT>de 10.000 a 49.999 pontos 6%</span></p>\n\n    <p class=MsoNormal><span lang=PT>de 50.000 a 199.999 pontos 7%</span></p>\n\n    <p class=MsoNormal><span lang=PT>de 200.000 a 499.999 pontos 8%</span></p>\n\n    <p class=MsoNormal><span lang=PT>de 500.000 a 999.999 pontos 9%</span></p>\n\n    <p class=MsoNormal><span lang=PT>de 1.000.000 pontos acima 10%</span></p>\n\n    <p class=MsoNormal><span lang=PT>Ganhos válidos somente para</span></p>\n\n    <p class=MsoNormal><span lang=PT>franqueados.</span></p>\n\n    <p class=MsoNormal><span lang=PT style=\'color:#0099FF\'>&nbsp;</span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'>Quando o usuário atingir 1.000.000 </span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'> de pontos ,e tiver indicado um outro usuário </span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'>que também tiver 1.000.000,  terá o direito</span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'> a 10% do faturamento da sua rede de</span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'> indicados diretos. Caso o indicado direto </span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'>também tiver 1.000.000 de pontos,  </span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'>o cálculo da porcentagem </span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'>sobre a rede será feito de  forma</span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'> diferencial para evitar a quebra do sistema. </span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal style=\'line-height:120%;background:white\'><span lang=PT\n                                                                       style=\'color:black\'> EXEMPLOS DE GANHO</span></p>\n\n    <p class=MsoNormal><span lang=PT style=\'font-size:12.0pt;line-height:115%;\ncolor:#0099FF\'>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>O usuário que é um franqueado Till</span></p>\n\n    <p class=MsoNormal><span lang=PT>e tem acumulado  1.000.000 de pontos</span></p>\n\n    <p class=MsoNormal><span lang=PT>mensais terá o direito a um ganho</span></p>\n\n    <p class=MsoNormal><span lang=PT>de 10% sobre a pontuação da sua rede, </span></p>\n\n    <p class=MsoNormal><span lang=PT>ou seja, 100.000 pontos que equivalem a </span></p>\n\n    <p class=MsoNormal><span lang=PT>R$ 100.000,00 (cem mil reais), porém</span></p>\n\n    <p class=MsoNormal><span lang=PT>quando o usuário também tem um</span></p>\n\n    <p class=MsoNormal><span lang=PT> franqueado na sua rede que também tem</span></p>\n\n    <p class=MsoNormal><span lang=PT> 1.000.000 de pontos, este usuário </span></p>\n\n    <p class=MsoNormal><span lang=PT> receberá o seu percentual diferencial de</span></p>\n\n    <p class=MsoNormal><span lang=PT> 10% menos o percentual de seu indicado  </span></p>\n\n    <p class=MsoNormal><span lang=PT>direto conforme exemplos abaixo: </span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>O usuário indicou a “Júlia” através do </span></p>\n\n    <p class=MsoNormal><span lang=PT>seu código de indicação pessoal e a</span></p>\n\n    <p class=MsoNormal><span lang=PT>“Julia” construiu uma rede que está</span></p>\n\n    <p class=MsoNormal><span lang=PT> fazendo de 1.000 a 1.999 pontos </span></p>\n\n    <p class=MsoNormal><span lang=PT>mensais e terá direito a receber</span></p>\n\n    <p class=MsoNormal><span lang=PT> 2% sobre essa pontuação </span></p>\n\n    <p class=MsoNormal><span lang=PT>mensal, então nesse caso a “Julia”</span></p>\n\n    <p class=MsoNormal><span lang=PT>terá direito a 2% dessa pontuação. Neste</span></p>\n\n    <p class=MsoNormal><span lang=PT> caso o usuário tem direito a 10% sobre </span></p>\n\n    <p class=MsoNormal><span lang=PT>sua pontuação menos os 2% dela,</span></p>\n\n    <p class=MsoNormal><span lang=PT> Então sobre a equipe</span></p>\n\n    <p class=MsoNormal><span lang=PT>da “Julia” o usuário terá direito a 8%</span></p>\n\n    <p class=MsoNormal><span lang=PT> que é o seu percentual menos</span></p>\n\n    <p class=MsoNormal><span lang=PT> o percentual da “Julia”.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>O usuário também indicou a “Natália”</span></p>\n\n    <p class=MsoNormal><span lang=PT> através do seu código de indicação pessoal e\na</span></p>\n\n    <p class=MsoNormal><span lang=PT>“Natália” construiu uma rede que está</span></p>\n\n    <p class=MsoNormal><span lang=PT> fazendo de 3.000 a 9.999 pontos </span></p>\n\n    <p class=MsoNormal><span lang=PT>mensais e terá direito a receber</span></p>\n\n    <p class=MsoNormal><span lang=PT> 5% sobre essa pontuação </span></p>\n\n    <p class=MsoNormal><span lang=PT>mensal, então nesse caso a “Natália”</span></p>\n\n    <p class=MsoNormal><span lang=PT>terá direito a 5% dessa pontuação. Neste</span></p>\n\n    <p class=MsoNormal><span lang=PT> caso o usuário tem direito a 10% sobre </span></p>\n\n    <p class=MsoNormal><span lang=PT>sua pontuação menos os 5% dela,</span></p>\n\n    <p class=MsoNormal><span lang=PT> Então sobre a equipe</span></p>\n\n    <p class=MsoNormal><span lang=PT>da “Natália” o usuário terá direito a 5%</span></p>\n\n    <p class=MsoNormal><span lang=PT> que é o seu percentual menos</span></p>\n\n    <p class=MsoNormal><span lang=PT> o percentual da “Natália”.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>O usuário ainda indicou a “João” através do </span></p>\n\n    <p class=MsoNormal><span lang=PT>seu código de indicação pessoal e a</span></p>\n\n    <p class=MsoNormal><span lang=PT>“João” construiu uma rede e está</span></p>\n\n    <p class=MsoNormal><span lang=PT> fazendo 1.000.000 pontos e</span></p>\n\n    <p class=MsoNormal><span lang=PT> então nesse caso a “João”</span></p>\n\n    <p class=MsoNormal><span lang=PT>terá direito a 10% dessa pontuação. Neste</span></p>\n\n    <p class=MsoNormal><span lang=PT> caso o usuário tem direito a 10% sobre </span></p>\n\n    <p class=MsoNormal><span lang=PT>sua pontuação menos os 10% dele,</span></p>\n\n    <p class=MsoNormal><span lang=PT> Então sobre a equipe</span></p>\n\n    <p class=MsoNormal><span lang=PT>da “João” o usuário não tem direito a</span></p>\n\n    <p class=MsoNormal><span lang=PT> porcentagem porém nesse momento se</span></p>\n\n    <p class=MsoNormal><span lang=PT> qualifica a outras formas de ganhos. </span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>DL - DIVISÃO DE LUCROS</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>Quando você é um franqueado e está </span></p>\n\n    <p class=MsoNormal><span lang=PT>fazendo 1.000.000 mensais e tem um </span></p>\n\n    <p class=MsoNormal><span lang=PT>franqueado da sua rede que também</span></p>\n\n    <p class=MsoNormal><span lang=PT>está fazendo 1.000.000 de pontos</span></p>\n\n    <p class=MsoNormal><span lang=PT>mensais você se qualifica para a</span></p>\n\n    <p class=MsoNormal><span lang=PT>divisão de lucros da Till, onde</span></p>\n\n    <p class=MsoNormal><span lang=PT>a empresa separa um percentual de </span></p>\n\n    <p class=MsoNormal><span lang=PT>1% a 5% do faturamento bruto e divide</span></p>\n\n    <p class=MsoNormal><span lang=PT>entre todos os franqueados qualificados.</span></p>\n\n    <p class=MsoNormal><span lang=PT><br>\n<br>\nA adesão ao plano de <br>\nmarketing de recompensa, permite <br>\nque você utilize todos os serviços da <br>\nTill e seus prestadores. Sempre que <br>\no usuário estiver ativo, ou seja, </span></p>\n\n    <p class=MsoNormal><span lang=PT>vai receber todos os benefícios, além </span></p>\n\n    <p class=MsoNormal><span lang=PT>de ter direito a todas as formas de </span></p>\n\n    <p class=MsoNormal><span lang=PT>ganho dentro do plano.Aplica-se a estes <br>\nbenefícios a política do programa de <br>\nfidelidade da Till, assim como os</span></p>\n\n    <p class=MsoNormal><span lang=PT>critérios e limites nele previstos. </span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>SAQUE DOS PONTOS NOS <br>\nBANCOS OU CAIXAS ELETRÔNICOS <br>\n<br>\nPara o usuário sacar o valor <br>\ndos pontos em dinheiro, deverá <br>\nsolicitar um cartão de crédito da <br>\nbandeira Till (cartão pré-pago) para <br>\nsacar o dinheiro quando o valor for <br>\nsuperior a R$ 20,00 (vinte reais) <br>\nou efetuar compras em qualquer <br>\ncomércio que receba cartão de <br>\ncrédito. <br>\n<br>\nO usuário poderá ainda <br>\ntransferir os pontos para sua conta <br>\ncorrente em qualquer banco quando o <br>\nvalor disponível for superior a  R$ <br>\n50,00  (cinquenta reais). <br>\n<br>\nPATROCINADOR <br>\n<br>\nE a pessoa que indicou um <br>\nusuário para fazer parte da rede de <br>\nclientes ou motoristas da Till. <br>\n<br>\nUplines (linhas ascendentes) <br>\nSão as pessoas acima do <br>\nUsuário na rede, na linha de patrocínio <br>\npessoal.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>Downlines (linhas <br>\ndescendentes): <br>\nSão Todas as pessoas que <br>\nestão abaixo do usuário, que foram <br>\nindicadas por ele ou por qualquer um <br>\nde seus patrocinados diretos. <br>\n<br>\nPara garantir a segurança do <br>\nplano e a igualdade de critérios com <br>\nos usuários, não é permitido a <br>\nalteração de patrocinador. <br>\n<br>\nLateralidade: <br>\nE a rede de Patrocinados diretos de <br>\numa geração- Cresce na horizontal. <br>\n<br>\nProfundidade: rede de patrocinados <br>\nindicados pela pessoa a quem você indicou. <br>\n<br>\nPATROCINADO <br>\nÉ a pessoa que foi indicada por um <br>\nusuário da Till para fazer parte da <br>\nrede e que realizou seu cadastro na <br>\nempresa.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>BÔNUS DE INDICAÇÃO DE CLIENTE <br>\n<br>\nO usuário recebe os pontos de todos <br>\nos clientes que indicar diretamente, ou <br>\nseja, nas indicações de primeira <br>\ngeração, sem limites de lateralidade e <br>\nainda recebe os pontos dos clientes <br>\nindicados pelos seus patrocinados.  <br>\n<br>\nEQUIVALÊNCIA E GERAÇÃO DE <br>\nPONTOS <br>\n<br>\nOs pontos são gerados pelo valor do <br>\nrepasse que cada prestador fizer a Till. <br>\n<br>\nVeja abaixo o valor dos repasses por <br>\n<br>\ncategoria: <br>\n<br>\nCATEGORIA Till GO 20% <br>\n(vinte por cento) <br>\n<br>\nCATEGORIA Till PLUS 17% <br>\n(dezessete por cento) <br>\n<br>\nCATEGORIA Till Vip 15%<br>\n(vinte por cento) <br>\n<br>\n</span></p>\n\n    <p class=MsoNormal><span lang=PT>CATEGORIA Till TÁXI 15%</span></p>\n\n    <p class=MsoNormal><span lang=PT>(quinze por cento) 20% <br>\n<br>\nCATEGORIA Till MOTO 20%</span></p>\n\n    <p class=MsoNormal><span lang=PT><br>\n(vinte por cento) <br>\n <br>\n<br>\nSão sobre estes valores que <br>\nserão calculados o número de pontos <br>\ngerados em cada viagem ou <br>\nprestação de serviços. <br>\n<br>\nA Till se reserva o direito de <br>\nmodificar estes percentuais a qualquer <br>\nmomento e de acordo com o <br>\ncomportamento do mercado. <br>\n<br>\nO usuário aceita e reconhece <br>\nque o mercado poderá impor preços <br>\ndiferentes dos serviços, dos <br>\npercentuais de cobrança e a retenção <br>\nque remunera a plataforma Till, <br>\npoderá flutuar e a Till não poderá</span></p>\n\n    <p class=MsoNormal><span lang=PT>garantir que os valores retidos <br>\nanteriormente, sejam os mesmos que <br>\nirão ser retidos no futuro. <br>\n<br>\nTERRITÓRIO <br>\n<br>\nA indicação de novos usuários poderá <br>\nocorrer em qualquer local do território <br>\nnacional, onde a Till possuir ativação <br>\ndo aplicativo. <br>\n<br>\nPara saber as cidades onde a Till <br>\npossui aplicativo ativado o usuário <br>\ndeverá consultar o site ou ligar para a</span></p>\n\n    <p class=MsoNormal><span lang=PT>central de atendimento da Till. <br>\n<br>\n7. LEGISLAÇÃO APLICÁVEL <br>\n<br>\nEste Termo será regido e <br>\ninterpretado de acordo com as leis <br>\nbrasileiras. Qualquer reclamação ou <br>\ncontrovérsia a ele relacionada, <br>\ninclusive que diga a respeito da sua <br>\nvalidade, interpretação ou <br>\nexequibilidade, será solucionada <br>\nexclusivamente pelos tribunais do foro <br>\ndo domicílio do usuário. <br>\n<br>\n8. OUTRAS DISPOSIÇÕES <br>\n<br>\nA Till poderá enviar avisos por meio <br>\nde notificações gerais nos Serviços, <br>\ncorreio eletrônico para seu endereço <br>\nde e-mail em sua Conta, ou por <br>\ncomunicação escrita enviada ao <br>\nendereço indicado em sua Conta. <br>\nVocê poderá notificar a Till por meio <br>\nde correio eletrônico <br>\npara atendimento@till.com.br ou <br>\nfazer uma comunicação escrita para o <br>\nendereço da Till na Avenida <br>\n9 de julho, 40 conj 5F - Bela Vista </span></p>\n\n    <p class=MsoNormal><span lang=PT>São Paulo - SP- CEP 01312-000.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n    <p class=MsoNormal><span lang=PT>9. DISPOSIÇÕES GERAIS </span></p>\n\n    <p class=MsoNormal><span lang=PT><br>\nEste termo não poderá ser <br>\ncedido, transferido e tampouco <br>\nmodificado, total ou <br>\nparcialmente, sem prévia <br>\naprovação por escrito e <br>\nexpressa da Till. Você <br>\nconcede sua aprovação para <br>\nque a Till ceda e transfira <br>\nestes Termos total ou <br>\nparcialmente, inclusive: (i) para <br>\nsua rede franqueadas (li) para <br>\num adquirente de participação <br>\nacionária, ou (iii) para um <br>\nsucessor em razão de qualquer <br>\nalteração societária. Não existe <br>\njoint-venture, sociedade, <br>\nemprego ou relação de <br>\nrepresentação entre você, a <br>\nTill ou quaisquer prestadores <br>\nterceiros como resultado do <br>\ncontrato entre você e a Till ou <br>\npelo uso dos serviços. Caso <br>\nqualquer disposição destes <br>\nTermos seja tida como ilegal, <br>\ninválida ou i.</span></p>\n\n    <p class=MsoNormal><span lang=PT>nexequível total ou <br>\nparcialmente, por qualquer <br>\nlegislação, esse termo ou parte <br>\ndele, será naquela medida, <br>\nconsiderada como não</span></p>\n\n    <p class=MsoNormal><span lang=PT>existente para os efeitos destes <br>\nTermos, mas a legalidade, <br>\nvalidade e exequibilidade das <br>\ndemais disposições contidas <br>\nnestes Termos não serão <br>\nafetadas. Nesse caso, as partes <br>\nsubstituirão a disposição ilegal, <br>\ninválida ou inexequível, ou parte <br>\ndela, por outra que seja legal, <br>\nválida e exequível e que, na <br>\nmáxima medida possível, tenha <br>\nefeito similar à disposição tida <br>\ncomo ilegal, inválida ou <br>\ninexequível para fins de <br>\nconteúdo e finalidade dos <br>\npresentes Termos. Estes <br>\nTermos constituem a totalidade <br>\ndo acordo e entendimento das <br>\npartes sobre este assunto e <br>\nsubstituem e prevalecem sobre <br>\ntodos os entendimentos e <br>\ncompromissos anteriores sobre <br>\neste assunto. Nestes Termos, <br>\nas palavras &quot;inclusive&quot; e &quot;inclui\' <br>\nsignificam &quot;incluindo, sem <br>\nlimitação&quot;.</span></p>\n\n    <p class=MsoNormal><span lang=PT>&nbsp;</span></p>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\termos\termos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TermosPage);
    return TermosPage;
}());

//# sourceMappingURL=termos.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_place_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_trip_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(nav, geolocation, chRef, navParams, placeService, tripService) {
        this.nav = nav;
        this.geolocation = geolocation;
        this.chRef = chRef;
        this.navParams = navParams;
        this.placeService = placeService;
        this.tripService = tripService;
        // marker position on screen
        this.markerFromTop = 0;
        this.markerFromLeft = 0;
    }
    // Load map only after view is initialized
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        // set marker position in center of screen
        // minus marker's size
        this.markerFromTop = window.screen.height / 2 - 16;
        this.markerFromLeft = window.screen.width / 2 - 8;
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        // set current location as map center
        this.geolocation.getCurrentPosition().then(function (resp) {
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: latLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
            });
            _this.marker = new google.maps.Marker({ map: _this.map, position: latLng, icon: '../assets/img/pin.png' });
            _this.marker.setMap(_this.map);
            // get center's address
            _this.findPlace(latLng);
            _this.map.addListener('center_changed', function (event) {
                var center = _this.map.getCenter();
                _this.findPlace(center);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    // find address by LatLng
    MapPage.prototype.findPlace = function (latLng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        this.marker.setMap(null);
        this.marker = new google.maps.Marker({ map: this.map, position: latLng });
        this.marker.setMap(this.map);
        geocoder.geocode({ 'latLng': latLng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                _this.address = results[0];
                _this.chRef.detectChanges();
            }
        });
    };
    // choose address and go back to home page
    MapPage.prototype.selectPlace = function () {
        var address = this.placeService.formatAddress(this.address);
        if (this.navParams.get('type') == 'origin') {
            this.tripService.setOrigin(address.vicinity, address.location.lat, address.location.lng);
        }
        else {
            this.tripService.setDestination(address.vicinity, address.location.lat, address.location.lng);
        }
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\map\map.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n    <ion-title>{{ address ? address.formatted_address : \'\' }}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="selectPlace()">\n        Feito\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div #map id="map"></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_5__services_trip_service__["a" /* TripService */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dto_VehiclesDto__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_method_payment_method__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tracking_tracking__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_place_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_deal_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_setting_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_driver_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_trip_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_constants__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_fire_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase_app__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_firebase_app__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





//import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';














// Firebase App (the core Firebase SDK) is always required and must be listed first

// interface IFirebaseTodo {
//     lat?: any;
//     lng?: any;
//     name?: any;
//     last_active?: any;
//     distance?: any;
// }
var HomePage = /** @class */ (function () {
    function HomePage(nav, platform, alertCtrl, placeService, geolocation, chRef, loadingCtrl, settingService, tripService, driverService, afAuth, afDb, toast, authService, translate, dealService, navParams) {
        var _this = this;
        this.nav = nav;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.placeService = placeService;
        this.geolocation = geolocation;
        this.chRef = chRef;
        this.loadingCtrl = loadingCtrl;
        this.settingService = settingService;
        this.tripService = tripService;
        this.driverService = driverService;
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.toast = toast;
        this.authService = authService;
        this.translate = translate;
        this.dealService = dealService;
        this.navParams = navParams;
        this.mapId = Math.random() + 'map';
        this.mapHeight = 480;
        this.showModalBg = false;
        this.showVehicles = false;
        this.vehicles = new Array();
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_0__Dto_VehiclesDto__["a" /* VehiclesDto */]();
        this.note = '';
        this.promocode = '';
        this.distance = 0;
        this.duration = 0;
        this.base_fare = 0;
        this.locality = {};
        this.paymentMethod = 'card';
        this.activeDrivers = [];
        this.driverMarkers = [];
        this.locateDriver = false;
        this.cancelDriver = false;
        this.discount = 0;
        this.distanceText = '';
        this.durationText = '';
        //listagem lugares
        this.places = [];
        //palavras dos campos de busca (search)
        this.keyword = '';
        this.keyword_destino = '';
        this.keyword_origem = '';
        this.type = 'origem';
        this.not_show_list = true;
        this.driver_escolhido = '';
        this.show_msg = true;
        this.alertShown = false;
        this.driverTracking = null;
        this.waitDriverDecision = null;
        this.driverStatus = null;
        localStorage.setItem("isAccepted", "false");
        this.vehicle.id = 1;
        this.vehicle.name = "Vip";
        this.vehicle.icon = "./assets/icon/sedan.svg";
        this.vehicle.base_fare = 8.0;
        this.vehicle.minimum_price = 15.00;
        this.vehicle.fee = 30.50;
        this.vehicle.active = true;
        this.vehicles.push(this.vehicle);
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_0__Dto_VehiclesDto__["a" /* VehiclesDto */]();
        this.vehicle.id = 2;
        this.vehicle.name = "Luxo";
        this.vehicle.icon = "./assets/icon/luxo.svg";
        this.vehicle.base_fare = 5.0;
        this.vehicle.minimum_price = 10.00;
        this.vehicle.fee = 20.50;
        this.vehicle.active = true;
        this.vehicles.push(this.vehicle);
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_0__Dto_VehiclesDto__["a" /* VehiclesDto */]();
        this.vehicle.id = 3;
        this.vehicle.name = "Social";
        this.vehicle.icon = "./assets/icon/taxi.svg";
        this.vehicle.base_fare = 1.0;
        this.vehicle.minimum_price = 5.50;
        this.vehicle.fee = 10.50;
        this.vehicle.active = true;
        this.vehicles.push(this.vehicle);
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_0__Dto_VehiclesDto__["a" /* VehiclesDto */]();
        this.vehicle.id = 4;
        this.vehicle.name = "Vans";
        this.vehicle.icon = "./assets/icon/van.svg";
        this.vehicle.base_fare = 15.0;
        this.vehicle.minimum_price = 20.00;
        this.vehicle.fee = 50.50;
        this.vehicle.active = true;
        this.vehicles.push(this.vehicle);
        this.platform.ready()
            .then(function () {
            _this.platform.registerBackButtonAction(function () {
                if (_this.alertShown == false) {
                    _this.presentConfirm();
                }
            }, 0);
            _this.translate.setDefaultLang('pt-br');
            _this.origin = tripService.getOrigin();
            _this.origin = { "lat": -23.5336069, "long": -46.4465054, "vicinity": "Rua Bento Vieira de Castro, 474" };
            _this.keyword_origem = _this.origin ? _this.origin.vicinity : '';
            _this.destination = tripService.getDestination();
            _this.destination = { "lat": -23.5629261, "long": -46.6570029 - 23.5336069, "vicinity": "Av.Paulista, 1374" };
            _this.keyword_destino = _this.destination ? _this.destination.vicinity : '';
            afAuth.authState.subscribe(function (authData) {
                if (authData) {
                    _this.user = authService.getUserData();
                    authService.getUser(_this.user.uid).valueChanges().subscribe(function (snapshot) {
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
                        _this.me = snapshot;
                        if (_this.me.itin == '' || _this.me.id_card == '' || _this.me.birthdate == '' ||
                            _this.me.name == '' || _this.me.email == '' || _this.me.phoneNumber == '' ||
                            _this.me.cnh == '') {
                            //Caso uma das informações obrigatórias não esteja preenchida, envia pra página do Perfil
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__user_user__["a" /* UserPage */], { 'uid': _this.user.uid });
                        }
                    });
                }
            });
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja realmente sair do Till Passageiro?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.alertShown = false;
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    //choose a place
    HomePage.prototype.selectPlace = function (place) {
        if (this.type == 'origem') {
            this.tripService.setOrigin(place.name, place.geometry.location.lat, place.geometry.location.lng);
        }
        else {
            this.tripService.setDestination(place.name, place.geometry.location.lat, place.geometry.location.lng);
        }
        this.nav.setRoot(HomePage_1);
    };
    //search by address
    HomePage.prototype.search = function (tipo) {
        var _this = this;
        this.not_show_list = false;
        if (tipo == 'origem') {
            this.keyword = this.keyword_origem;
        }
        else {
            this.keyword = this.keyword_destino;
        }
        this.type = tipo;
        this.placeService.searchByAddress(this.keyword, this.lat, this.lon).subscribe(function (result) {
            _this.hideLoading();
            _this.places = result.results.slice(0, 10);
        });
    };
    // calculate distance from a place to current position
    HomePage.prototype.calcDistance = function (place) {
        return this.placeService.calcCrow(place.geometry.location.lat, place.geometry.location.lng, this.lat, this.lon).toFixed(1);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.not_show_list = true;
        // on view ready, start loading map
        this.tripService.getTrips().then(function (trips) {
            trips.forEach(function (trip) {
                if (trip.status == 'waiting' || trip.status == 'accepted' || trip.status == 'going') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__tracking_tracking__["a" /* TrackingPage */], { tripId: trip.key });
                }
            });
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lon = resp.coords.longitude;
            if (_this.type == 'origem') {
                _this.search(_this.type);
            }
        }).catch(function (error) {
            console.log('Erro na localização', error);
        });
        this.loadMap();
        //this.showDriverOnMap(this.locality);
    };
    HomePage.prototype.ionViewWillLeave = function () {
        // if (localStorage.getItem("interval_driverTracking") != null) {
        //     clearInterval(+localStorage.getItem("interval_driverTracking"));
        // }
        // if (localStorage.getItem("interval_waitDriverDecision") != null) {
        //     clearInterval(+localStorage.getItem("interval_waitDriverDecision"));
        // }
    };
    // get current payment method from service
    HomePage.prototype.getPaymentMethod = function () {
        this.paymentMethod = this.tripService.getPaymentMethod();
        return this.paymentMethod;
    };
    HomePage.prototype.choosePaymentMethod1 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ message: 'Forma de Pagamento' });
        alert.addInput({ type: 'radio', label: 'Cash', value: 'cash', checked: false });
        this.authService.getCardSetting().subscribe(function (snapshot) {
            if (snapshot) {
                _this.cardNumber = snapshot.number;
                if (_this.cardNumber != null || _this.cardNumber != undefined)
                    alert.addInput({ type: 'radio', label: 'Credit Card', value: 'card' });
            }
        });
        alert.addButton({ text: 'Cancel' });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                // console.log(data);
                _this.tripService.setPaymentMethod(data);
            }
        });
        alert.present();
    };
    // toggle active vehicle
    HomePage.prototype.chooseVehicle = function (index) {
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
    };
    HomePage.prototype.goProfilePage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__user_user__["a" /* UserPage */], { user: this.user });
    };
    HomePage.prototype.initMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Map;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, google.maps.importLibrary("maps")];
                    case 1:
                        Map = (_a.sent()).Map;
                        this.map = new Map(document.getElementById(this.mapId), {
                            zoom: 15,
                            center: { lat: -23.5336069, lng: -46.4465054 },
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            mapTypeControl: false,
                            zoomControl: true,
                            streetViewControl: false,
                            disableDefaultUI: false,
                            styles: this.placeService.temaWY()
                        });
                        console.log("=============", this.map);
                        return [2 /*return*/];
                }
            });
        });
    };
    // load map
    HomePage.prototype.loadMap = function () {
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
    };
    HomePage.prototype.showPromoPopup = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) { }
                },
                {
                    text: 'Apply',
                    handler: function (data) {
                        __WEBPACK_IMPORTED_MODULE_19_firebase_app___default.a.database()
                            .ref('promocodes')
                            .orderByChild('code')
                            .once('value')
                            .then(function (promocodes) {
                            var tmp = __assign({ key: promocodes.key }, promocodes.val());
                            if (tmp != null) {
                                _this.promocode = tmp.code;
                                _this.discount = tmp.discount;
                                _this.tripService.setPromo(tmp.code);
                                _this.tripService.setDiscount(tmp.discount);
                                //// console.log('promo applied', tmp.code, tmp.discount);
                            }
                        }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        prompt.present();
    };
    // Show note popup when click to 'Notes to user'
    HomePage.prototype.showNotePopup = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        //// console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.note = data;
                        _this.tripService.setNote(data);
                        //// console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    // go to next view when the 'Book' button is clicked
    HomePage.prototype.book = function () {
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
            var driver = this.drivers[0];
            this.makeDeal(driver);
        }
        else {
            this.toast.create({ message: 'Nenhum motorista encontrado...', duration: 1000 }).present();
        }
    };
    HomePage.prototype.makeDeal = function (driver) {
        var _this = this;
        this.dealService.getDriverDeal(driver.key).valueChanges().subscribe(function (snapshot) {
            console.log("getDriverDeal-->", snapshot);
            if ((snapshot == null) &&
                (_this.driverStatus == 'Bidding')) {
                // create a record
                //// console.log(snapshot);
                _this.dealService.makeDeal(driver.key, _this.tripService.getOrigin(), _this.tripService.getDestination(), _this.tripService.getDistance(), _this.tripService.getFee(), _this.tripService.getCurrency(), _this.tripService.getNote(), _this.tripService.getPaymentMethod(), _this.tripService.getPromo(), _this.tripService.getDiscount()).then(function () {
                    console.log('Deal set Successfully');
                    _this.driverStatus = 'TripSet';
                    if (localStorage.getItem("interval_waitDriverDecision") != null) {
                        clearInterval(+localStorage.getItem("interval_waitDriverDecision"));
                    }
                    var waitDriverDecision = setInterval(function () {
                        _this.askDriverDecision(driver);
                    }, __WEBPACK_IMPORTED_MODULE_14__services_constants__["f" /* POSITION_INTERVAL */]);
                    localStorage.setItem('interval_waitDriverDecision', waitDriverDecision.toString());
                })
                    .catch(function (err) {
                    console.error('Trip Set Error', err);
                    _this.book();
                });
            }
        });
    };
    // Verifica se motorista aceitou/rejeitou/expirou
    HomePage.prototype.askDriverDecision = function (driver) {
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
    };
    // choose payment method
    HomePage.prototype.choosePaymentMethod = function () {
        // go to payment method page
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__payment_method_payment_method__["a" /* PaymentMethodPage */]);
    };
    // add origin marker to map
    HomePage.prototype.setOrigin = function () {
        // add origin and destination marker
        var latLng = new google.maps.LatLng(this.origin.location.lat, this.origin.location.lng);
        var startMarker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        startMarker.setMap(this.map);
        if (this.destination)
            startMarker.setMap(null);
        // set map center to origin address
        this.map.setCenter(latLng);
    };
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        this.loading.present();
    };
    HomePage.prototype.hideLoading = function () {
        if (this.loading.present()) {
            this.loading.dismiss();
        }
    };
    // show or hide vehicles
    HomePage.prototype.toggleVehicles = function () {
        this.showVehicles = !this.showVehicles;
        this.showModalBg = (this.showVehicles == true);
    };
    // track drivers
    HomePage.prototype.trackDrivers = function () {
        var _this = this;
        debugger;
        if (localStorage.getItem("interval_driverTracking") != null) {
            clearInterval(+localStorage.getItem("interval_driverTracking"));
        }
        var driverTracking = setInterval(function () {
            _this.showDriverOnMap(_this.locality);
        }, __WEBPACK_IMPORTED_MODULE_14__services_constants__["f" /* POSITION_INTERVAL */]);
        localStorage.setItem('interval_driverTracking', driverTracking.toString());
    };
    // show drivers on map
    HomePage.prototype.showDriverOnMap = function (locality) {
        // firebase.database()
        //     .ref('localities')
        //     .child(locality)
        //     .child(this.currentVehicle.id.toUpperCase())
        //     .once('value', drivers => {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_19_firebase_app___default.a.database()
            .ref('driversOnline')
            .orderByChild("locality")
            .equalTo(locality)
            .once('value', function (drivers) {
            var vehicles = [];
            drivers.forEach(function (driver) {
                vehicles.push(__assign({ key: driver.key }, driver.val()));
            });
            //clear vehicles
            _this.activeDrivers = [];
            _this.driverMarkers.forEach(function (vehicle) {
                vehicle.setMap(null);
            });
            // only show near vehicle
            vehicles.forEach(function (vehicle) {
                if (_this.currentVehicle.id.toUpperCase() == vehicle.vehicleType) {
                    //console.log('vehicle-->', vehicle);
                    // console.log(vehicle.name);
                    // only show vehicle which has last active < 30 secs & distance < 5km
                    //let distance = this.placeService.calcCrow(vehicle.lat, vehicle.lng, this.origin.location.lat, this.origin.location.lng);
                    var distance = 10000;
                    //// console.log(distance);
                    debugger;
                    console.log("distance:" + distance, " Last Active: " + (Date.now() - vehicle.last_active), " Last Active2: " + (Date.now() - vehicle.last_active), ' -  atual: ' + Date.now(), ' - last: ' + vehicle.last_active, 'nome:' + vehicle.name);
                    // checking last active time and distance
                    var dt = Date.now();
                    if (distance < __WEBPACK_IMPORTED_MODULE_14__services_constants__["g" /* SHOW_VEHICLES_WITHIN */] && (dt - vehicle.last_active) / 2 < __WEBPACK_IMPORTED_MODULE_14__services_constants__["o" /* VEHICLE_LAST_ACTIVE_LIMIT */]) {
                        // create or update
                        var latLng = new google.maps.LatLng(vehicle.lat, vehicle.lng);
                        var marker = new google.maps.Marker({
                            map: _this.map,
                            position: latLng,
                            icon: {
                                url: _this.currentVehicle.map_icon,
                                size: new google.maps.Size(32, 32),
                                origin: new google.maps.Point(0, 0),
                                anchor: new google.maps.Point(16, 16),
                                scaledSize: new google.maps.Size(32, 32)
                            },
                        });
                        // add vehicle and marker to the list
                        vehicle.distance = distance;
                        // console.log(marker);
                        _this.driverMarkers.push(marker);
                        _this.activeDrivers.push(vehicle);
                    }
                    else {
                        console.log('This vehicle is too far:', vehicle);
                    }
                }
            });
        }, function (err) {
            console.log("Erro---> show drivers on map:", err);
        });
    };
    HomePage.prototype.cancelTrip = function () {
        var _this = this;
        this.locateDriver = false;
        this.cancelDriver = true;
        setTimeout(function () {
            _this.locateDriver = false;
            _this.cancelDriver = false;
        }, 5000);
        this.show_msg = false;
        this.dealService.removeDeal(this.drivers[0]);
        this.destination = null;
        this.keyword_destino = '';
        this.loadMap();
        this.durationText = '';
        this.distanceText = '';
        this.book();
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\home\home.html"*/'<ion-content>\n    <ion-fab vertical="top" horizontal="end" slot="fixed" style="margin-top:61px;margin-left:12px;width:94%">\n        <ion-list no-lines>\n            <ion-item style="padding-left:4px">\n                <ion-input style="border-radius: 5%; background-color:#9ff89c7c !important;" type="text" [(ngModel)]="keyword_origem" (ionChange)="search(\'origem\')" autocorrect="off"\n                           placeholder="{{\'Estou aqui\'| translate}}" disabled>\n                </ion-input>\n            </ion-item>\n            <ion-item style="padding-left:4px">\n                <ion-input style="border-radius: 5%; background-color:#f7c55a !important;" type="text" [(ngModel)]="keyword_destino" (ionChange)="search(\'destino\')" autocorrect="off"\n                           placeholder="{{\'Eu Quero estar em...\' | translate }}">\n                </ion-input>\n            </ion-item>\n        </ion-list>\n        <p style="text-align:center;color:#bbb" *ngIf="places.length==0"></p>\n        <ion-list [hidden]="not_show_list">\n            <ion-item *ngFor="let place of places" (click)="selectPlace(place)">\n                <ion-icon name="ios-pin-outline" item-left>\n                </ion-icon>\n                <span class="item-icon-label">\n            {{ calcDistance(place) }} km\n          </span>\n                <div>\n                    <div class="bold">{{ place.name }}</div>\n                    <span>{{ place.vicinity }}</span>\n                </div>\n            </ion-item>\n        </ion-list>\n        <button ion-fab hidden></button>\n    </ion-fab>\n\n    <div class="map-overlay">\n        <div style="top:0; right: 0; padding: 4px;">\n            <button class="profile" style="border-radius:10px;" ion-button menuToggle>\n                <ion-icon name="contact"></ion-icon>\n            </button>\n        </div>\n    </div>\n    <div id="{{ mapId }}" [ngStyle]="{height: \'92%\'}"></div>\n    <div class="align-bottom">\n        <ion-grid class="common-bg" [hidden]="!destination">\n            <ion-row>\n                <ion-col (click)="choosePaymentMethod()">\n                    <ion-icon name="ios-cash-outline" color="gray"></ion-icon>\n                    <span ion-text color="gray">{{ getPaymentMethod() }}</span>\n                </ion-col>\n                <ion-col (click)="showPromoPopup()" *ngIf="destination">\n                    <ion-icon name="ios-create-outline" color="gray"></ion-icon>\n                    <span ion-text color="gray">{{\'PROMO\' | translate}}</span>\n                </ion-col>\n                <ion-col (click)="showNotePopup()">\n                    <ion-icon name="ios-create-outline" color="gray"></ion-icon>\n                    <span ion-text color="gray">{{\'NOTE\' | translate}}</span>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <!--\n        <ion-list no-lines>\n            <ion-item>\n                <ion-input disabled type="text" value="{{origin ? origin.vicinity : \'\' }}"></ion-input>\n                <button item-right (click)="chooseOrigin()">\n                    <ion-icon name="search" class="search-icon"></ion-icon>\n                </button>\n            </ion-item>\n            <ion-item>\n                <ion-input disabled type="text" placeholder="Para onde quero ir"\n                           value="{{ destination ? destination.vicinity : \'\' }}"></ion-input>\n                <button item-right (click)="chooseDestination()">\n                    <ion-icon name="search" class="search-icon"></ion-icon>\n                </button>\n            </ion-item>\n        </ion-list>\n        -->\n\n        <ion-row>\n            <ion-col *ngIf="distanceText!=\'\'">\n                <ion-icon name="car"></ion-icon>\n                <b>{{ distanceText }}</b></ion-col>\n            <ion-col *ngIf="durationText!=\'\'">\n                <ion-icon name="time"></ion-icon>\n                <b>{{durationText}}</b></ion-col>\n        </ion-row>\n        <ion-row [hidden]="!destination">\n            <ion-col *ngFor="let vehicle of vehicles; let i = index" [ngClass]="{\'active\': vehicle.active}"\n                     (click)="chooseVehicle(i)">\n                <!-- <img src="assets/img/icon/{{ vehicle.icon }}.svg"> -->\n                <img src="{{ vehicle.icon }}">\n                <p>{{ vehicle.name }}<br/>( {{currency }}{{ vehicle.fee | currency:"BRL":"symbol" }} )</p>\n            </ion-col>\n        </ion-row>\n\n        <button ion-button block class="primary" [hidden]="destination"\n                [disabled]="keyword_destino==\'\' ? true : false">{{\'Solicitar Corrida\' | translate}}</button>\n\n        <button ion-button block style="border-radius: 3%;background-color: #025f12 !important; " [hidden]="!destination"\n                (click)="book()">{{ locateDriver == false ? \'Solicitar Corrida\' : \'Procurando por Motoristas Ativos\' | translate }}\n            <ion-spinner id="spin1" name="dots" color="light" [hidden]="!locateDriver"></ion-spinner>\n        </button>\n        <button ion-button block  style="border-radius: 3%; background-color:#f75105 !important;"  [hidden]="!destination"\n                (click)="cancelTrip()">{{cancelDriver == false ? \'Cancelar solicitação\': \'Cancelando a solicitação\' | translate}}</button>\n                <ion-spinner id="spin2" name="dots" color="light" [hidden]="!cancelDriver"></ion-spinner>\n            </div>\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_11__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_13__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_12__services_driver_service__["a" /* DriverService */],
            __WEBPACK_IMPORTED_MODULE_18__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_17__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__services_deal_service__["a" /* DealService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

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
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database_database__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TripService = /** @class */ (function () {
    function TripService(db, authService) {
        this.db = db;
        this.authService = authService;
        this.paymentMethod = 'cash';
        this.availableDrivers = [];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.setId = function (id) {
        return this.id = id;
    };
    TripService.prototype.getId = function () {
        return this.id;
    };
    TripService.prototype.setCurrency = function (currency) {
        return this.currency = currency;
    };
    TripService.prototype.getCurrency = function () {
        return this.currency;
    };
    TripService.prototype.setOrigin = function (vicinity, lat, lng) {
        var place = new __WEBPACK_IMPORTED_MODULE_2__place__["a" /* Place */](vicinity, lat, lng);
        return this.origin = place.getFormatted();
    };
    TripService.prototype.getOrigin = function () {
        return this.origin;
    };
    TripService.prototype.setDestination = function (vicinity, lat, lng) {
        var place = new __WEBPACK_IMPORTED_MODULE_2__place__["a" /* Place */](vicinity, lat, lng);
        return this.destination = place.getFormatted();
    };
    TripService.prototype.getDestination = function () {
        return this.destination;
    };
    TripService.prototype.setDistance = function (distance) {
        return this.distance = distance;
    };
    TripService.prototype.getDistance = function () {
        return this.distance;
    };
    TripService.prototype.setFee = function (fee) {
        return this.fee = fee;
    };
    TripService.prototype.getFee = function () {
        return this.fee;
    };
    TripService.prototype.setNote = function (note) {
        return this.note = note;
    };
    TripService.prototype.getNote = function () {
        return this.note;
    };
    TripService.prototype.setPromo = function (promocode) {
        return this.promocode = promocode;
    };
    TripService.prototype.getPromo = function () {
        return this.promocode;
    };
    TripService.prototype.setDiscount = function (discount) {
        return this.discount = discount;
    };
    TripService.prototype.getDiscount = function () {
        return this.discount;
    };
    TripService.prototype.setPaymentMethod = function (method) {
        return this.paymentMethod = method;
    };
    TripService.prototype.getPaymentMethod = function () {
        return this.paymentMethod;
    };
    TripService.prototype.setVehicle = function (vehicle) {
        return this.vehicle = vehicle;
    };
    TripService.prototype.getVehicle = function () {
        return this.vehicle;
    };
    TripService.prototype.setIcon = function (icon) {
        return this.icon = icon;
    };
    TripService.prototype.getIcon = function () {
        return this.icon;
    };
    TripService.prototype.setAvailableDrivers = function (vehicles) {
        console.log(vehicles);
        this.availableDrivers = vehicles;
    };
    TripService.prototype.getAvailableDrivers = function () {
        return this.availableDrivers;
    };
    TripService.prototype.getTrip = function (id) {
        return this.db.object('trips/' + id);
    };
    TripService.prototype.getTrips = function () {
        var user = this.authService.getUserData();
        return __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.database()
            .ref("trips")
            .orderByChild("passengerId")
            .equalTo(user.uid)
            .once("value").then(function (snapshot) {
            var trips = [];
            snapshot.forEach(function (trip) {
                trips.push(__assign({ key: trip.key }, trip.val()));
            });
            return trips;
        });
    };
    TripService.prototype.cancelTrip = function (id) {
        return this.db.object('trips/' + id).update({ status: 'canceled' });
    };
    TripService.prototype.finishTrip = function (id) {
        return this.db.object('trips/' + id).update({ status: 'finished' });
    };
    TripService.prototype.rateTrip = function (tripId, stars) {
        return this.db.object('trips/' + tripId).update({
            rating: parseInt(stars)
        });
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard_ngx__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_driver_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_place_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_trip_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_setting_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_deal_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_payment_method_payment_method__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_places_places__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_register_register__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tracking_tracking__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_map_map__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_user_user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ngx_translate_http_loader__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_components_module__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_payments_payments__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_indicacao_indicacao__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_brmasker_ionic_3__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_bank_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_cep_cep__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_cadastro_till_cadastro_till__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_file_ngx__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_termos_termos__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_ganhos_ganhos__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_premios_premios__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_cashback_cashback__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_splash_splash__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_prize_service__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_status_bar_ngx__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Import the AF2 Module



// Import moment module

// import services


































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_28__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/lang/', '.json');
}
var firebaseConfig = {
    apiKey: "AIzaSyCYCDMmzOBqDE0H89ng2ogEFw9rYGzR-QA",
    authDomain: "bumingapp-f10d3.firebaseapp.com",
    databaseURL: "https://bumingapp-f10d3.firebaseio.com",
    projectId: "bumingapp-f10d3",
    storageBucket: "bumingapp-f10d3.appspot.com",
    messagingSenderId: "699781527060"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_42__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_payment_method_payment_method__["a" /* PaymentMethodPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_payments_payments__["a" /* PaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_indicacao_indicacao__["a" /* IndicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_termos_termos__["a" /* TermosPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_ganhos_ganhos__["a" /* GanhosPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_premios_premios__["a" /* PremiosPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_cashback_cashback__["a" /* CashbackPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_27__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_27__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_26__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                    mode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/indicacao/indicacao.module#IndicacaoPageModule', name: 'IndicacaoPage', segment: 'indicacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_32_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_42__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_payment_method_payment_method__["a" /* PaymentMethodPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_payments_payments__["a" /* PaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_indicacao_indicacao__["a" /* IndicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_termos_termos__["a" /* TermosPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_ganhos_ganhos__["a" /* GanhosPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_premios_premios__["a" /* PremiosPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_cashback_cashback__["a" /* CashbackPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_status_bar_ngx__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard_ngx__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__services_driver_service__["a" /* DriverService */],
                __WEBPACK_IMPORTED_MODULE_13__services_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_14__services_trip_service__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_15__services_setting_service__["a" /* SettingService */],
                __WEBPACK_IMPORTED_MODULE_16__services_deal_service__["a" /* DealService */],
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_file_ngx__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_34__providers_cep_cep__["a" /* CepProvider */],
                __WEBPACK_IMPORTED_MODULE_33__services_bank_service__["a" /* BankService */],
                __WEBPACK_IMPORTED_MODULE_35__providers_cadastro_till_cadastro_till__["a" /* CadastroTillProvider */],
                __WEBPACK_IMPORTED_MODULE_43__services_prize_service__["a" /* PrizeService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth_auth__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ganhos_ganhos__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_termos_termos__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import pages









// end import pages
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, authService, modalController, translate) {
        var _this = this;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.authService = authService;
        this.modalController = modalController;
        this.translate = translate;
        this.user = {};
        this.pages = [
            {
                title: 'Perfil',
                icon: 'person',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */]
            },
            {
                title: 'Escritório Virtual',
                icon: 'briefcase',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_10__pages_ganhos_ganhos__["a" /* GanhosPage */]
            },
            {
                title: 'Termos e condições',
                icon: 'paper',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_11__pages_termos_termos__["a" /* TermosPage */]
            },
            {
                title: 'Logout',
                icon: 'exit',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]
            }
        ];
        this.translate.setDefaultLang('pt-br');
        this.translate.use('pt-br');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //  statusBar.styleDefault();
            splashScreen.hide();
            var splash = modalController.create(__WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__["a" /* SplashPage */]);
            splash.present();
            // check for login stage, then redirect
            afAuth.authState.subscribe(function (authData) {
                if (authData) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */], { 'email': 'daridados@gmail.com', 'password': '120202' });
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
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == 'Perfil') {
            this.nav.push(page.component, { user: this.authService.getUserData() });
        }
        else {
            this.nav.push(page.component);
        }
    };
    // view current user profile
    MyApp.prototype.viewProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */], {
            user: this.user
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\_Coopta\till-rider\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-content class="menu-left">\n        <!-- User profile -->\n        <div text-center padding-top padding-bottom class="primary-bg menu-left">\n            <h4 till>Passageiro</h4>\n            <a menuClose>\n                Fechar menu <ion-icon name="exit"></ion-icon>\n            </a>\n        </div>\n\n        <ion-list class="list-full-border">\n\n            <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n                <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n                {{ page.title }}\n                <ion-badge danger item-right *ngIf="page.count">{{ page.count }}</ion-badge>\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\app\app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclesDto; });
var VehiclesDto = /** @class */ (function () {
    function VehiclesDto() {
        this.$key = "AIzaSyCYXDwRtUucrZnDfsCyNQZelvrbWQMi_bg";
        this.$value = "AIzaSyCYXDwRtUucrZnDfsCyNQZelvrbWQMi_bg";
        this.uid = "AIzaSyCYXDwRtUucrZnDfsCyNQZelvrbWQMi_bg";
        this.id = 0;
        this.icon = "";
        this.name = "";
        this.base_fare = 0;
        this.price_min = 0;
        this.price = 0;
        this.fee = 0;
        this.minimum_price = 0;
        this.active = true;
        this.data_cadastro = new Date();
        this.data_atualizacao = new Date();
    }
    return VehiclesDto;
}());

//# sourceMappingURL=VehiclesDto.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SHOW_VEHICLES_WITHIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return POSITION_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return VEHICLE_LAST_ACTIVE_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEAL_STATUS_PENDING; });
/* unused harmony export DEAL_STATUS_ACCEPTED */
/* unused harmony export DEAL_TIMEOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TRIP_STATUS_WAITING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TRIP_STATUS_NOTIFIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TRIP_STATUS_GOING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TRIP_STATUS_PAID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TRIP_STATUS_FINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TRIP_STATUS_CANCELED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMAIL_VERIFICATION_ENABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ENABLE_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GOOGLE_MAP_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GOOGLE_MAP_BASE_URL; });
/* unused harmony export DEFAULT_AVATAR */
var SHOW_VEHICLES_WITHIN = 5; // within 5km
var POSITION_INTERVAL = 2000; // 2000ms
var VEHICLE_LAST_ACTIVE_LIMIT = 60000; // 60s
var DEAL_STATUS_PENDING = 'pending';
var DEAL_STATUS_ACCEPTED = 'accepted';
var DEAL_TIMEOUT = 20; // 20s
var TRIP_STATUS_WAITING = 'waiting';
var TRIP_STATUS_NOTIFIED = 'notified';
var TRIP_STATUS_GOING = 'going';
var TRIP_STATUS_PAID = 'paid';
var TRIP_STATUS_FINISHED = 'finished';
var TRIP_STATUS_CANCELED = 'canceled';
var EMAIL_VERIFICATION_ENABLED = true; // send verification email after user register
var ENABLE_SIGNUP = true;
var SOS = "";
// NOTE: Please update your firebase configurations on src/app/app.module.ts
var GOOGLE_MAP_API_KEY = "AIzaSyC80LrSr49CyKFXGNRJqj5zW3pUwaIN2PQ";
var GOOGLE_MAP_BASE_URL = "https://maps.googleapis.com/maps/api/";
var DEFAULT_AVATAR = "http://placehold.it/150x150";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard_ngx__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_constants__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__indicacao_indicacao__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_cadastro_till_cadastro_till__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import * as $ from 'jquery';




var LoginPage = /** @class */ (function () {
    function LoginPage(platform, nav, navParams, authService, alertCtrl, loadingCtrl, toast, keyboard, translate, till) {
        this.platform = platform;
        this.nav = nav;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.keyboard = keyboard;
        this.translate = translate;
        this.till = till;
        this.email = "";
        this.password = "";
        this.isRegisterEnabled = true;
        this.alertShown = false;
        this.isRegisterEnabled = __WEBPACK_IMPORTED_MODULE_7__services_constants__["c" /* ENABLE_SIGNUP */];
        this.translate.setDefaultLang('pt-br');
        this.email = this.navParams.get('email');
        this.password = this.navParams.get('password');
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        // setTimeout(() => {
        //     //console.log("passou aqui===================");
        //     //this.input.setFocus();
        //     },150);
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            // this.keyboard.onKeyboardShow()
            //   .subscribe(e => {
            //     //$('body').animate({ 'marginTop': - e.keyboardHeight / 2 + 'px' }, 200);
            //   });
            // this.keyboard.onKeyboardHide()
            //   .subscribe(e => {
            //     //$('body').animate({ 'marginTop': - 0 + 'px' }, 200);
            //   });
            _this.platform.registerBackButtonAction(function () {
                if (_this.alertShown == false) {
                    _this.presentConfirm();
                }
            }, 0);
        });
    };
    LoginPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja realmente sair do Till Passageiro?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.alertShown = false;
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    LoginPage.prototype.signup = function () {
        this.alertCtrl.create({ subTitle: 'Demonstração App Till', buttons: ['ok'] }).present();
        //this.nav.setRoot(RegisterPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], { 'minhaIndicacao': "0001", 'indicadoPor': "9999", 'origin': 'new' });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__indicacao_indicacao__["a" /* IndicacaoPage */]);
    };
    LoginPage.prototype.reset = function () {
        var _this = this;
        if (this.email) {
            __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().sendPasswordResetEmail(this.email)
                .then(function (data) {
                return _this.toast.create({ message: 'Verifique seu e-mail', duration: 3000 }).present();
            })
                .catch(function (err) { return _this.toast.create({ message: err.message, duration: 3000 }).present(); });
        }
    };
    // login() {
    //     let msg = "";
    //     let verifyTill = false;
    //     if (this.email.length == 0 || this.password.length == 0) {
    //         this.alertCtrl.create({ subTitle: 'Dados inválidos', buttons: ['ok'] }).present();
    //     } else {
    //         let loading = this.loadingCtrl.create({ content: 'Fazendo login...' });
    //         loading.present();
    //         this.till.login(this.email, this.password).then(authData => {
    //             let afiliado = <Afiliado>JSON.parse(localStorage.getItem('User'));
    //             this.authService.login(this.email, this.password).then(authData => {
    //                 loading.dismiss();
    //                 afiliado.uid = authData.uid;
    //                 this.authService.updateUserProfileFromDb(afiliado);
    //                 this.nav.setRoot(HomePage);
    //             }, (error: any) => {
    //                 loading.dismiss();
    //                 debugger;
    //                 if(error.code ==  'auth/wrong-password') {
    //                     const user = firebase.auth().currentUser;
    //                     debugger;
    //                     const credential = firebase.auth.EmailAuthProvider.credential(
    //                         afiliado.email, 
    //                         afiliado.pswd
    //                     );
    //                     user.reauthenticateWithCredential(credential)
    //                     .then(user => {
    //                         afiliado.uid = user.uid;
    //                         this.toast.create({ message: 'Registro OK', duration: 3000 }).present();
    //                         this.authService.updateUserProfileFromDb(afiliado);
    //                         this.nav.setRoot(HomePage);
    //                     }).catch(function (error) {
    //                         console.debug(error);
    //                         var errorMessage = error.message;
    //                         let alert = this.alertCtrl.create({
    //                             message: "Ocorreu um erro no login. Por favor, tente novamente.",
    //                             buttons: ['OK']
    //                         });
    //                         alert.present();
    //                     });
    //                 }
    //                 else {
    //                     firebase.auth().createUserWithEmailAndPassword(afiliado.email, afiliado.pswd)
    //                     .then(user => {
    //                         afiliado.uid = user.uid;
    //                         this.toast.create({ message: 'Registro OK', duration: 3000 }).present();
    //                         this.authService.updateUserProfileFromDb(afiliado);
    //                         this.nav.setRoot(HomePage);
    //                     }).catch(function (error) {
    //                         console.debug(error);
    //                         var errorMessage = error.message;
    //                         let alert = this.alertCtrl.create({
    //                             message: "Ocorreu um erro no login. Por favor, tente novamente.",
    //                             buttons: ['OK']
    //                         });
    //                         alert.present();
    //                     });
    //                 }
    //             });
    //         }, (error: any) => {
    //             loading.dismiss();
    //             let alert = this.alertCtrl.create({
    //                 message: "Ocorreu um erro no login. Por favor, tente novamente.",
    //                 buttons: ['OK']
    //             });
    //             alert.present();
    //         });
    //     }
    // }
    // // in case of login error
    // loading.dismiss();
    // switch (error.code) {
    //     case 'auth/user-not-found':
    //         msg = "Usuário não encontrado.";
    //         //verifyTill = true;
    //         break;
    //     case 'auth/wrong-password':
    //         msg = "Senha incorreta. Por favor, tente novamente.";
    //         break;
    //     default:
    //         msg = "Ocorreu um erro no login. Por favor, tente novamente.";
    //         break;
    // }
    // if (!verifyTill) {
    //     let alert = this.alertCtrl.create({
    //         message: msg,
    //         buttons: ['OK']
    //     });
    //     alert.present();
    // }
    // else {
    //     this.till.searchByEmail(this.email)
    //         .then(result => {
    //             if (result) {
    //                 this.nav.push(RegisterPage, { 'snapshot': result[0], 'origin': 'login' });
    //             }
    //             else {
    //                 let alert = this.alertCtrl.create({
    //                     message: msg,
    //                     buttons: ['OK']
    //                 });
    //                 alert.present();
    //             }
    //         })
    // }
    // let user:any = {};
    // user.name =  afiliado.primeiro_nome + " " + afiliado.segundo_nome;
    // user.email = afiliado.email;
    // user.password = afiliado.pswd;
    // user.itin = afiliado.cpf;
    // user.phoneNumber= afiliado.telefone;
    // user.birthdate= afiliado.data_nascimento;
    // user.photo= afiliado.foto;
    // user.indicadoPor = (afiliado.codigo_afiliacao_p != null && afiliado.codigo_afiliacao_p != "") ? afiliado.codigo_afiliacao_p : afiliado.codigo_afiliacao_m;
    // user.minhaIndicacao = afiliado.codigo_afiliacao;
    // user.data_cadastro= afiliado.data_criacao;
    //this.authService.register(user);
    LoginPage.prototype.login = function () {
        var _this = this;
        var msg = "";
        var verifyTill = false;
        if (this.email.length == 0 || this.password.length == 0) {
            this.alertCtrl.create({ subTitle: "Por favor, Informe:<br><b>Email</b> e<br> <b>Senha</b>", buttons: ['ok'] }).present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({ content: 'Fazendo login...' });
            loading_1.present();
            this.authService.login(this.email, this.password).then(function (authData) {
                console.log("login===authData=============", authData);
                loading_1.dismiss();
                _this.user = _this.authService.getUserData();
                _this.till.login(_this.email, _this.password).then(function (response) {
                    //snapshot.uid = snapshot.$key;
                    if (response) {
                        response.uid = "CfQswwkyeaht5raUOcO9ylH26zv2";
                        response.name = "Teste";
                    }
                    else {
                        response = {};
                        response.uid = "CfQswwkyeaht5raUOcO9ylH26zv2";
                        response.name = "Teste";
                    }
                    var afiliado = JSON.parse(localStorage.getItem('User'));
                    if (!afiliado) {
                        afiliado = response;
                    }
                    _this.authService.updateUserProfileFromDb(_this.user, afiliado);
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }, function (error) {
                    loading_1.dismiss();
                    console.log("this.till.login========================", error);
                    var alert = _this.alertCtrl.create({
                        message: "Ocorreu um erro no login. Por favor, tente novamente.",
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }, function (error) {
                // in case of login error
                loading_1.dismiss();
                switch (error.code) {
                    case 'auth/user-not-found':
                        msg = "Usuário não encontrado.";
                        break;
                    case 'auth/wrong-password':
                        msg = "Senha incorreta. Por favor, tente novamente.";
                        break;
                    default:
                        msg = "Ocorreu um erro no login. Por favor, tente novamente.";
                        break;
                }
                if (!verifyTill) {
                    var alert_1 = _this.alertCtrl.create({
                        message: msg,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                    // this.till.searchByEmail(this.email)
                    //     .then( result => {
                    //         if (result){
                    //             this.nav.push(RegisterPage, {'snapshot': result[0], 'origin':'login'});
                    //         }
                    //         else{
                    //             let alert = this.alertCtrl.create({
                    //                 message: msg,
                    //                 buttons: ['OK']
                    //             });
                    //             alert.present();
                    //         }
                    //     })
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "input", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\login\login.html"*/'<ion-content class="bg-login">\n    <div class="auth-content">\n\n        <div class="light-bg">\n\n            <div padding text-center>\n                <div class="logo secondary-bg">\n                    <img src="assets/img/logo.png" height="120" />\n                    <h2 ion-text color="dark">{{\'APP_NAME\' | translate }}</h2>\n                </div>\n            </div>\n            <ion-list class="list-form" padding>\n                <ion-item>\n                    <ion-label stacked>{{\'E-mail\' | translate }}</ion-label>\n                    <ion-input placeholder="Informe o email" id="input" type="text" #input\n                        [(ngModel)]="email"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>{{\'PASSWORD\' | translate }}</ion-label>\n                    <ion-input placeholder="Informe a senha" type="password" [(ngModel)]="password"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <button ion-button clear item-right (click)="reset()" [disabled]="email.length == 0">{{\'Esqueci\n                        a senha\' | translate }}</button>\n                </ion-item>\n                <ion-item>\n                    <button style="border-radius: 3%;background-color: #025f12 !important; " padding ion-button block (click)="login()">{{\'Entrar\' | translate }}</button>\n                </ion-item>\n                <ion-item *ngIf="isRegisterEnabled">\n                    <button style="border-radius: 3%; background-color:#f75105 !important;" ion-button block (click)="signup()">{{\'Criar Conta\' | translate }}</button>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard_ngx__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_cadastro_till_cadastro_till__["a" /* CadastroTillProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroTillProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CadastroTillProvider = /** @class */ (function () {
    function CadastroTillProvider(http) {
        this.http = http;
    }
    CadastroTillProvider.prototype.searchUserData = function (inputCPF) {
        var _this = this;
        var resultado;
        var tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/cadastro/verify/' + inputCPF;
        return new Promise(function (resolve, reject) {
            _this.http.get(tillURL)
                .subscribe(function (result) {
                resultado = result;
                resolve(resultado);
            }, function () {
                reject('0');
            });
        });
    };
    CadastroTillProvider.prototype.searchAffiliateByCode = function (inputCode) {
        var _this = this;
        var resultado;
        var tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/afiliados/search/' + inputCode;
        return new Promise(function (resolve, reject) {
            _this.http.get(tillURL)
                .subscribe(function (result) {
                resultado = result;
                resolve(resultado);
            }, function () {
                reject('0');
            });
        });
    };
    CadastroTillProvider.prototype.verifyAffiliateCode = function (inputCode) {
        var _this = this;
        var resultado;
        var tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/afiliados/verify/' + inputCode;
        return new Promise(function (resolve, reject) {
            _this.http.get(tillURL)
                .subscribe(function (result) {
                resultado = result;
                resolve(resultado);
            }, function () {
                reject('0');
            });
        });
    };
    CadastroTillProvider.prototype.searchByEmail = function (inputEmail) {
        var _this = this;
        var resultado;
        var tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/cadastro/search/' + inputEmail;
        return new Promise(function (resolve, reject) {
            _this.http.get(tillURL)
                .subscribe(function (result) {
                resultado = result;
                resolve(resultado);
            }, function () {
                reject('0');
            });
        });
    };
    CadastroTillProvider.prototype.login = function (email, pswd) {
        var _this = this;
        var body = { "email": email, "pswd": pswd };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', "*");
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
        var options = { headers: headers };
        var tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/login/';
        return new Promise(function (resolve, reject) {
            _this.http.post(tillURL, body, options)
                .subscribe(function (result) {
                if (result[0].email != null) {
                    localStorage.setItem('User', JSON.stringify(result[0]));
                    resolve(result[0]);
                }
                else {
                    reject('0');
                }
            }, function (error) {
                reject('0');
                console.log("error=====", tillURL, error);
            });
        });
    };
    CadastroTillProvider.prototype.save = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', "*");
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
        var options = { headers: headers };
        var tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/save/';
        return new Promise(function (resolve, reject) {
            _this.http.post(tillURL, user, options)
                .subscribe(function (result) {
                resolve('1');
            }, function () {
                reject('0');
            });
        });
    };
    CadastroTillProvider.prototype.save_register = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', "*");
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
        var options = { headers: headers };
        var tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/save_register/';
        return new Promise(function (resolve, reject) {
            _this.http.post(tillURL, user, options)
                .subscribe(function (result) {
                resolve('1');
            }, function () {
                reject('0');
            });
        });
    };
    CadastroTillProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CadastroTillProvider);
    return CadastroTillProvider;
}());

//# sourceMappingURL=cadastro-till.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
var Place = /** @class */ (function () {
    function Place(vicinity, lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.vicinity = vicinity;
    }
    // get place object with formatted data
    Place.prototype.getFormatted = function () {
        return {
            location: {
                lat: this.lat,
                lng: this.lng
            },
            vicinity: this.vicinity
        };
    };
    return Place;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceService = /** @class */ (function () {
    function PlaceService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* GOOGLE_MAP_BASE_URL */];
        this.apiKey = __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* GOOGLE_MAP_API_KEY */];
    }
    // search by address
    PlaceService.prototype.searchByAddress = function (address, lat, lng) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', "*");
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
        var options = { headers: headers };
        var url = this.baseUrl + 'place/nearbysearch/json?key=' + this.apiKey
            + '&keyword=' + encodeURI(address)
            + '&location=' + lat + ',' + lng
            + '&radius=50000';
        //return this.http.get(url, options).map(res => res..json())
        //let resultado: any;
        return this.http.get(url, options);
        // .subscribe(function (result: any) {
        //   resultado = JSON.parse(result);
        //   return resultado;
        // }, () => {
        //   return {};
        // })
    };
    // get direction between to points
    PlaceService.prototype.getDirection = function (lat1, lon1, lat2, lon2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', "*");
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
        var options = { headers: headers };
        var url = this.baseUrl + 'directions/json?key=' + this.apiKey
            + '&origin=' + lat1 + ',' + lon1
            + '&destination=' + lat2 + ',' + lon2;
        console.log("getDirectionpassou e foi======================");
        //return this.http.get(url,options).map(res => res.json());
        //let resultado: any;
        return this.http.get(url, options);
        // .subscribe(function (result: any) {
        //   resultado = JSON.parse(result);
        //   return resultado;
        // }, () => {
        //   return {};
        // })
    };
    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    PlaceService.prototype.calcCrow = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = this.toRad(lat2 - lat1);
        var dLon = this.toRad(lon2 - lon1);
        lat1 = this.toRad(lat1);
        lat2 = this.toRad(lat2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    // Converts numeric degrees to radians
    PlaceService.prototype.toRad = function (value) {
        return value * Math.PI / 180;
    };
    /**
     * Convert geocoder address to place object
     * @param address: Geocoder address result
     * @returns {{location: {lat: any, lng: any}, vicinity: string}}
     */
    PlaceService.prototype.formatAddress = function (address) {
        console.log('endereço', address);
        var components = address.address_components;
        var vicinity = components[1].short_name + ', ' + components[0].short_name;
        return {
            location: {
                lat: address.geometry.location.lat(),
                lng: address.geometry.location.lng()
            },
            vicinity: vicinity
        };
    };
    // set locality from geocoder result
    // @param results: Geocoder array results
    PlaceService.prototype.setLocalityFromGeocoder = function (results) {
        var component;
        var address;
        for (var i = 0; i < results.length; i++) {
            address = results[i];
            for (var j = 0; j < address.address_components.length; j++) {
                component = address.address_components[j];
                // if (component.types[0] == 'administrative_area_level_2') {
                if (component.types[0] == 'locality') {
                    // escape firebase characters
                    var locality = component.short_name.replace(/[\%\.\#\$\/\[\]]/, '_');
                    this.setLocality(locality);
                    return locality;
                }
            }
        }
        return false;
    };
    PlaceService.prototype.setLocality = function (locality) {
        return this.locality = locality;
    };
    PlaceService.prototype.getLocality = function () {
        return this.locality;
    };
    PlaceService.prototype.temaRetro = function () {
        return [
            { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#c9b2a6' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#dcd2be' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#ae9e90' }]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#93817c' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{ color: '#a5b076' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#447530' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#f5f1e6' }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{ color: '#fdfcf8' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#f8c967' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#e9bc62' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{ color: '#e98d58' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#db8555' }]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#806b63' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#8f7d77' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#ebe3cd' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{ color: '#b9d3c2' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#92998d' }]
            }
        ];
    };
    PlaceService.prototype.temaDark = function () {
        return [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ];
    };
    PlaceService.prototype.temaWY = function () {
        return [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ];
    };
    PlaceService.prototype.temaTill = function () {
        return [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#eb452f"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#606060"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#eb452f"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fff1f1"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "hue": "#ff0000"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "color": "#eb452f"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffd6d6"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#eb452f"
                    }
                ]
            }
        ];
    };
    PlaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PlaceService);
    return PlaceService;
}());

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 345,
	"./af.js": 345,
	"./ar": 346,
	"./ar-dz": 347,
	"./ar-dz.js": 347,
	"./ar-kw": 348,
	"./ar-kw.js": 348,
	"./ar-ly": 349,
	"./ar-ly.js": 349,
	"./ar-ma": 350,
	"./ar-ma.js": 350,
	"./ar-ps": 351,
	"./ar-ps.js": 351,
	"./ar-sa": 352,
	"./ar-sa.js": 352,
	"./ar-tn": 353,
	"./ar-tn.js": 353,
	"./ar.js": 346,
	"./az": 354,
	"./az.js": 354,
	"./be": 355,
	"./be.js": 355,
	"./bg": 356,
	"./bg.js": 356,
	"./bm": 357,
	"./bm.js": 357,
	"./bn": 358,
	"./bn-bd": 359,
	"./bn-bd.js": 359,
	"./bn.js": 358,
	"./bo": 360,
	"./bo.js": 360,
	"./br": 361,
	"./br.js": 361,
	"./bs": 362,
	"./bs.js": 362,
	"./ca": 363,
	"./ca.js": 363,
	"./cs": 364,
	"./cs.js": 364,
	"./cv": 365,
	"./cv.js": 365,
	"./cy": 366,
	"./cy.js": 366,
	"./da": 367,
	"./da.js": 367,
	"./de": 368,
	"./de-at": 369,
	"./de-at.js": 369,
	"./de-ch": 370,
	"./de-ch.js": 370,
	"./de.js": 368,
	"./dv": 371,
	"./dv.js": 371,
	"./el": 372,
	"./el.js": 372,
	"./en-au": 373,
	"./en-au.js": 373,
	"./en-ca": 374,
	"./en-ca.js": 374,
	"./en-gb": 375,
	"./en-gb.js": 375,
	"./en-ie": 376,
	"./en-ie.js": 376,
	"./en-il": 377,
	"./en-il.js": 377,
	"./en-in": 378,
	"./en-in.js": 378,
	"./en-nz": 379,
	"./en-nz.js": 379,
	"./en-sg": 380,
	"./en-sg.js": 380,
	"./eo": 381,
	"./eo.js": 381,
	"./es": 382,
	"./es-do": 383,
	"./es-do.js": 383,
	"./es-mx": 384,
	"./es-mx.js": 384,
	"./es-us": 385,
	"./es-us.js": 385,
	"./es.js": 382,
	"./et": 386,
	"./et.js": 386,
	"./eu": 387,
	"./eu.js": 387,
	"./fa": 388,
	"./fa.js": 388,
	"./fi": 389,
	"./fi.js": 389,
	"./fil": 390,
	"./fil.js": 390,
	"./fo": 391,
	"./fo.js": 391,
	"./fr": 392,
	"./fr-ca": 393,
	"./fr-ca.js": 393,
	"./fr-ch": 394,
	"./fr-ch.js": 394,
	"./fr.js": 392,
	"./fy": 395,
	"./fy.js": 395,
	"./ga": 396,
	"./ga.js": 396,
	"./gd": 397,
	"./gd.js": 397,
	"./gl": 398,
	"./gl.js": 398,
	"./gom-deva": 399,
	"./gom-deva.js": 399,
	"./gom-latn": 400,
	"./gom-latn.js": 400,
	"./gu": 401,
	"./gu.js": 401,
	"./he": 402,
	"./he.js": 402,
	"./hi": 403,
	"./hi.js": 403,
	"./hr": 404,
	"./hr.js": 404,
	"./hu": 405,
	"./hu.js": 405,
	"./hy-am": 406,
	"./hy-am.js": 406,
	"./id": 407,
	"./id.js": 407,
	"./is": 408,
	"./is.js": 408,
	"./it": 409,
	"./it-ch": 410,
	"./it-ch.js": 410,
	"./it.js": 409,
	"./ja": 411,
	"./ja.js": 411,
	"./jv": 412,
	"./jv.js": 412,
	"./ka": 413,
	"./ka.js": 413,
	"./kk": 414,
	"./kk.js": 414,
	"./km": 415,
	"./km.js": 415,
	"./kn": 416,
	"./kn.js": 416,
	"./ko": 417,
	"./ko.js": 417,
	"./ku": 418,
	"./ku-kmr": 419,
	"./ku-kmr.js": 419,
	"./ku.js": 418,
	"./ky": 420,
	"./ky.js": 420,
	"./lb": 421,
	"./lb.js": 421,
	"./lo": 422,
	"./lo.js": 422,
	"./lt": 423,
	"./lt.js": 423,
	"./lv": 424,
	"./lv.js": 424,
	"./me": 425,
	"./me.js": 425,
	"./mi": 426,
	"./mi.js": 426,
	"./mk": 427,
	"./mk.js": 427,
	"./ml": 428,
	"./ml.js": 428,
	"./mn": 429,
	"./mn.js": 429,
	"./mr": 430,
	"./mr.js": 430,
	"./ms": 431,
	"./ms-my": 432,
	"./ms-my.js": 432,
	"./ms.js": 431,
	"./mt": 433,
	"./mt.js": 433,
	"./my": 434,
	"./my.js": 434,
	"./nb": 435,
	"./nb.js": 435,
	"./ne": 436,
	"./ne.js": 436,
	"./nl": 437,
	"./nl-be": 438,
	"./nl-be.js": 438,
	"./nl.js": 437,
	"./nn": 439,
	"./nn.js": 439,
	"./oc-lnc": 440,
	"./oc-lnc.js": 440,
	"./pa-in": 441,
	"./pa-in.js": 441,
	"./pl": 442,
	"./pl.js": 442,
	"./pt": 443,
	"./pt-br": 444,
	"./pt-br.js": 444,
	"./pt.js": 443,
	"./ro": 445,
	"./ro.js": 445,
	"./ru": 446,
	"./ru.js": 446,
	"./sd": 447,
	"./sd.js": 447,
	"./se": 448,
	"./se.js": 448,
	"./si": 449,
	"./si.js": 449,
	"./sk": 450,
	"./sk.js": 450,
	"./sl": 451,
	"./sl.js": 451,
	"./sq": 452,
	"./sq.js": 452,
	"./sr": 453,
	"./sr-cyrl": 454,
	"./sr-cyrl.js": 454,
	"./sr.js": 453,
	"./ss": 455,
	"./ss.js": 455,
	"./sv": 456,
	"./sv.js": 456,
	"./sw": 457,
	"./sw.js": 457,
	"./ta": 458,
	"./ta.js": 458,
	"./te": 459,
	"./te.js": 459,
	"./tet": 460,
	"./tet.js": 460,
	"./tg": 461,
	"./tg.js": 461,
	"./th": 462,
	"./th.js": 462,
	"./tk": 463,
	"./tk.js": 463,
	"./tl-ph": 464,
	"./tl-ph.js": 464,
	"./tlh": 465,
	"./tlh.js": 465,
	"./tr": 466,
	"./tr.js": 466,
	"./tzl": 467,
	"./tzl.js": 467,
	"./tzm": 468,
	"./tzm-latn": 469,
	"./tzm-latn.js": 469,
	"./tzm.js": 468,
	"./ug-cn": 470,
	"./ug-cn.js": 470,
	"./uk": 471,
	"./uk.js": 471,
	"./ur": 472,
	"./ur.js": 472,
	"./uz": 473,
	"./uz-latn": 474,
	"./uz-latn.js": 474,
	"./uz.js": 473,
	"./vi": 475,
	"./vi.js": 475,
	"./x-pseudo": 476,
	"./x-pseudo.js": 476,
	"./yo": 477,
	"./yo.js": 477,
	"./zh-cn": 478,
	"./zh-cn.js": 478,
	"./zh-hk": 479,
	"./zh-hk.js": 479,
	"./zh-mo": 480,
	"./zh-mo.js": 480,
	"./zh-tw": 481,
	"./zh-tw.js": 481
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 924;

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_trip_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlacesPage = /** @class */ (function () {
    function PlacesPage(nav, placeService, geolocation, loadingCtrl, navParams, tripService) {
        var _this = this;
        this.nav = nav;
        this.placeService = placeService;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.tripService = tripService;
        // all places
        this.places = [];
        // search keyword
        this.keyword = '';
        this.type = 'destination';
        // page loaded flag
        this.pageLoaded = false;
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lon = resp.coords.longitude;
            if (_this.navParams.get('type') == 'origin') {
                _this.search();
                _this.type = _this.navParams.get('type');
            }
        }).catch(function (error) {
            console.log('Erro na localização', error);
        });
    }
    // show search input
    PlacesPage.prototype.ionViewDidEnter = function () {
        this.pageLoaded = true;
    };
    // hide search input
    PlacesPage.prototype.ionViewWillLeave = function () {
        this.pageLoaded = false;
    };
    // choose a place
    PlacesPage.prototype.selectPlace = function (place) {
        console.log(place);
        if (this.navParams.get('type') == 'origin') {
            this.tripService.setOrigin(place.name, place.geometry.location.lat, place.geometry.location.lng);
            console.log("origin set");
        }
        else {
            this.tripService.setDestination(place.name, place.geometry.location.lat, place.geometry.location.lng);
            console.log("destination set");
        }
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    // clear search input
    PlacesPage.prototype.clear = function () {
        this.keyword = '';
        this.search();
    };
    // search by address
    PlacesPage.prototype.search = function ($event) {
        var _this = this;
        if ($event === void 0) { $event = null; }
        //this.showLoading();
        this.placeService.searchByAddress(this.keyword, this.lat, this.lon).subscribe(function (result) {
            _this.hideLoading();
            _this.places = result.results.slice(0, 10);
        });
        /*setTimeout(() => {
            this.hideLoading()
        }, 5000);*/
    };
    // calculate distance from a place to current position
    PlacesPage.prototype.calcDistance = function (place) {
        return this.placeService.calcCrow(place.geometry.location.lat, place.geometry.location.lng, this.lat, this.lon).toFixed(1);
    };
    PlacesPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        this.loading.present();
    };
    PlacesPage.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    // open map page
    PlacesPage.prototype.openMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */], { type: this.navParams.get('type') });
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-places',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\places\places.html"*/'<ion-header>\n    <ion-navbar color="till">\n        <div class="search-bar">\n            <ion-input type="text"\n                   [(ngModel)]="keyword"\n                   (ionChange)="search()"\n                   autocorrect="off"\n                   placeholder="{{ type == \'origin\' ? \'Estou em\':\'Quero ir para\' }}"></ion-input>\n        </div>\n        <!--<ion-buttons end>\n            <button ion-button (click)="openMap()">\n                <ion-icon name="pin"></ion-icon>&nbsp; Pick\n            </button>\n        </ion-buttons>-->\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="common-bg">\n    <p style="text-align:center;color:#bbb" *ngIf="places.length==0"></p>\n    <ion-list>\n        <ion-item *ngFor="let place of places" (click)="selectPlace(place)">\n            <ion-icon name="ios-pin-outline" item-left>\n            </ion-icon>\n            <span class="item-icon-label">\n        {{ calcDistance(place) }} km\n      </span>\n            <div>\n                <div class="bold">{{ place.name }}</div>\n                <span>{{ place.vicinity }}</span>\n            </div>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\places\places.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_trip_service__["a" /* TripService */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment_gateway_payment_gateway__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__payment_gateway_payment_gateway__["a" /* PaymentGatewayComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__payment_gateway_payment_gateway__["a" /* PaymentGatewayComponent */]],
            providers: [
            //PayPalOriginal
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentsPage = /** @class */ (function () {
    function PaymentsPage(navCtrl, navParams, db, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.app = app;
    }
    PaymentsPage.prototype.ionViewDidLoad = function () {
        var tripId = this.navParams.get('tripId');
        var fee = this.navParams.get('fee');
        this.makePayment(tripId, fee);
    };
    PaymentsPage.prototype.makePayment = function (tripId, fee) {
        tripId = 0;
        fee = 0;
        //const PRODUCTION_CLIENT_ID = '';
        //const SANDBOX_CLIENT_ID = 'Adir4laMT-WmIFU4U7nuHQaHEypcK7ydual-IkmVCisDd9xXHLRfue8qT29bTSdO5rbqo4fQF8kHqokM';
    };
    PaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payments',template:/*ion-inline-start:"C:\_Coopta\till-rider\src\pages\payments\payments.html"*/'<!--\n  Generated template for the PaymentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>payments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\_Coopta\till-rider\src\pages\payments\payments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], PaymentsPage);
    return PaymentsPage;
}());

//# sourceMappingURL=payments.js.map

/***/ })

},[497]);
//# sourceMappingURL=main.js.map