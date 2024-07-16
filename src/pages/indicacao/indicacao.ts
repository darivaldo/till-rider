import {Component, ViewChild, OnInit} from '@angular/core';
import {Platform, AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFireDatabase} from "@angular/fire/database";
import {RegisterPage} from "../register/register";
import {LoginPage} from "../login/login";
import {CadastroDadoProvider} from "../../providers/cadastro-dado/cadastro-dado";

@IonicPage()
@Component({
    selector: 'page-indicacao',
    templateUrl: 'indicacao.html',
})
export class IndicacaoPage implements OnInit{
    @ViewChild('input') input: any;

    indicacao: string = '';
    indicadoPor: any;
    mostraIndicacao: boolean;
    minhaIndicacao: string = '';
    validacaoOK: boolean;
    indicacaoOk: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
                public afAuth: AngularFireAuth, public db: AngularFireDatabase,  
                public toast: ToastController, public alertCtrl: AlertController,
                public platform:Platform, public dado: CadastroDadoProvider) {

                    this.indicadoPor = this.navParams.get('indicadoPor');
    }

    ionViewDidEnter() {
        // setTimeout(() => {
        //     console.log("passou aqui===================");
        //     this.input.setFocus();
        //     },150);
    } 

    invalidarIndicacao() {
        this.indicacao = '';
        this.mostraIndicacao = false;
        this.validacaoOK = false;
    }

    criarCodigo() {
        this.mostraIndicacao = true;
        this.indicacaoOk = true;
    }

    ngOnInit() {

        this.platform.ready()
        .then(() => {

        });
    }


  criarIndicacao() {
        let loading = this.loadingCtrl.create({content: 'Verificando...'});
        loading.present();

        this.dado.verifyAffiliateCode(this.minhaIndicacao)
            .then( result => {
                if (result[0].qtd == '1'){
                    let alert = this.alertCtrl.create({
                        title: 'Código Existente!',
                        cssClass: 'alertcss',
                        message: 'Esse código já está cadastrado. Se este código é seu, confirme digitando seu cpf:',
                        inputs: [
                            {
                                name: 'cpf',
                                type: 'text',
                                placeholder: 'CPF'
                            }],
                        buttons: [{
                            text: 'OK',
                            cssClass: 'okcss',
                            handler: data => {
                                let cpf = data.cpf.toString().replace(/[\. ,:-]+/g, "");

                                console.log('clean',cpf);
                                console.log('banco', result[0].cpf);
                                if (cpf == result[0].cpf){
                                    this.validacaoOK = true;
                                    this.toast.create({ message: 'Pessoa já cadastrada!, por favor entre com EMAIL e SENHA...', duration: 5000 }).present();
                                    this.navCtrl.setRoot(LoginPage, {'email':  result[0].email });
                                }
                                
                                else{
                                    this.invalidarIndicacao();
                                    this.toast.create({ message: 'Escolha um Código Pessoal de Indicação ainda não usado!', duration: 3000 }).present();
                                    this.navCtrl.setRoot(IndicacaoPage, {'minhaIndicacao': '', 'indicadoPor': this.indicadoPor})
                                }
                            }
                        }]
                    });
                    alert.present();
                    this.validacaoOK = false;
                }
                else{
                    this.validacaoOK = true;
                    this.navCtrl.setRoot(RegisterPage, {'minhaIndicacao': this.minhaIndicacao, 'indicadoPor': this.indicadoPor, 'origin':'new'})
                }
            });

        /*this.validaAfiliacao().valueChanges().subscribe((snapshot:any) => {
            console.log('snapshot2', snapshot);
            if (snapshot.length <= 0) {


            } else {

            }


        });*/
        loading.dismiss();
    }

  
    validar() {

        if (!this.indicacao) {

            let alert = this.alertCtrl.create({
                title: 'Código em branco!',
                cssClass: 'alertcss',
                message: 'Digite um código antes de clicar em validar',
                buttons: [{
                    text: 'OK',
                    cssClass: 'okcss'
                }]
            });
            alert.present();

        } else {

            let loading = this.loadingCtrl.create({content: 'Procurando...'});
            loading.present();
            this.mostraIndicacao = false;
            this.dado.searchAffiliateByCode(this.indicacao)
                .then(result => {
                    let indicadoPor = result;

                    if (typeof indicadoPor !== undefined){
                        this.mostraIndicacao = true;
                    }
                    this.indicadoPor = indicadoPor[0];
                }).catch(reject => {
                let alert = this.alertCtrl.create({
                    title: 'Não encontrado!',
                    subTitle: 'Verifique se digitou corretamente o código de indicação',
                    buttons: ['OK']
                });
                alert.present();
                
            });
            loading.dismiss();
        }

    }

    validaAfiliacao() {
        return this.db.list('pessoas',  ref => ref.orderByChild('codigo_afiliacao').equalTo(this.minhaIndicacao)).valueChanges();
        
        // {
        //     query: {
        //         orderByChild: 'codigo_afiliacao',
        //         equalTo: this.minhaIndicacao,
        //     }
        // });
    }

}
