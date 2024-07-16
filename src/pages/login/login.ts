import { Component,ViewChild, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Platform, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home'
import { AuthService } from "../../services/auth-service";
import * as firebase from 'firebase';
//import * as $ from 'jquery';
import { ENABLE_SIGNUP } from '../../services/constants';
import { TranslateService } from '@ngx-translate/core';
import { IndicacaoPage } from "../indicacao/indicacao";
import { CadastroDadoProvider } from "../../providers/cadastro-dado/cadastro-dado";
import { Afiliado } from '../../Dto/AfiliadoDto';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'

})

export class LoginPage implements OnInit{
    @ViewChild('input') input: any;

    email: string = "";
    password: string = "";

    user: any;
    isRegisterEnabled: any = true;
    public alertShown:boolean = false;

    constructor(
        private platform: Platform,
        public nav: NavController, public navParams: NavParams, 
        public authService: AuthService, public alertCtrl: AlertController,
        public loadingCtrl: LoadingController, public toast: ToastController,
        public keyboard: Keyboard,public translate: TranslateService,
        public dado: CadastroDadoProvider) {
        this.isRegisterEnabled = ENABLE_SIGNUP;
        this.translate.setDefaultLang('pt-br');

        this.email = this.navParams.get('email');
        this.password = this.navParams.get('password');
    }

    ionViewDidEnter() {
        // setTimeout(() => {
        //     //console.log("passou aqui===================");
        //     //this.input.setFocus();
        //     },150);
    } 

   

    ngOnInit() {

            this.platform.ready()
            .then(() => {

                // this.keyboard.onKeyboardShow()
                //   .subscribe(e => {
                //     //$('body').animate({ 'marginTop': - e.keyboardHeight / 2 + 'px' }, 200);
                //   });

                // this.keyboard.onKeyboardHide()
                //   .subscribe(e => {
                //     //$('body').animate({ 'marginTop': - 0 + 'px' }, 200);
                //   });


                this.platform.registerBackButtonAction(() => {
                    if (this.alertShown==false) {
                      this.presentConfirm();  
                    }
                  }, 0)
         

            });


    }

    presentConfirm() {
        let alert = this.alertCtrl.create({
          title: 'Confirmação',
          message: 'Deseja realmente sair do Dado Passageiro?',
          buttons: [
            {
              text: 'Não',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
                this.alertShown=false;
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
         alert.present().then(()=>{
          this.alertShown=true;
        });
      }


    signup() {
        this.alertCtrl.create({subTitle: 'Demonstração App Dado', buttons: ['ok']}).present();
        //this.nav.setRoot(RegisterPage);
        this.nav.setRoot(RegisterPage, {'minhaIndicacao': "0001", 'indicadoPor': "9999", 'origin':'new'})

        this.nav.push(IndicacaoPage);

    }

    reset() {
        if (this.email) {
            firebase.auth().sendPasswordResetEmail(this.email)
                .then(data =>
                    this.toast.create({ message: 'Verifique seu e-mail', duration: 3000 }).present())
                .catch(err => this.toast.create({ message: err.message, duration: 3000 }).present())
        }
    }

  
    // login() {
    //     let msg = "";
    //     let verifyDado = false;

    //     if (this.email.length == 0 || this.password.length == 0) {
    //         this.alertCtrl.create({ subTitle: 'Dados inválidos', buttons: ['ok'] }).present();
    //     } else {
    //         let loading = this.loadingCtrl.create({ content: 'Fazendo login...' });
    //         loading.present();

    //         this.dado.login(this.email, this.password).then(authData => {

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
    //         //verifyDado = true;
    //         break;
    //     case 'auth/wrong-password':
    //         msg = "Senha incorreta. Por favor, tente novamente.";
    //         break;
    //     default:
    //         msg = "Ocorreu um erro no login. Por favor, tente novamente.";
    //         break;
    // }
    // if (!verifyDado) {
    //     let alert = this.alertCtrl.create({
    //         message: msg,
    //         buttons: ['OK']
    //     });
    //     alert.present();
    // }
    // else {
    //     this.dado.searchByEmail(this.email)
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




    login() {
        let msg = "";
        let verifyDado = false;

        if (this.email.length == 0 || this.password.length == 0) {
            this.alertCtrl.create({subTitle: "Por favor, Informe:<br><b>Email</b> e<br> <b>Senha</b>", buttons: ['ok']}).present();
        } else {
            let loading = this.loadingCtrl.create({content: 'Fazendo login...'});
            loading.present();


            this.authService.login(this.email, this.password).then((authData:any) => {

                console.log("login===authData=============",authData);
                loading.dismiss();

                this.user = this.authService.getUserData();

                this.dado.login(this.email, this.password).then((response:any) => {

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
                    let afiliado = <Afiliado>JSON.parse(localStorage.getItem('User'));
    
                    if (!afiliado) {

                        afiliado = response;
                    }

                    this.authService.updateUserProfileFromDb(this.user, afiliado);

                    this.nav.setRoot(HomePage);
    
                }, (error: any) => {
                    loading.dismiss();
                    console.log("this.dado.login========================",error);
                    let alert = this.alertCtrl.create({
                        message: "Ocorreu um erro no login. Por favor, tente novamente.",
                        buttons: ['OK']
                    });
                    alert.present();
                });

            }, (error:any) => {
                // in case of login error
                loading.dismiss();

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
                if (!verifyDado){
                    let alert = this.alertCtrl.create({
                        message: msg,
                        buttons: ['OK']
                    });
                    alert.present();
                }
                else{

                    // this.dado.searchByEmail(this.email)
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
    }

}