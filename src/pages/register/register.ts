import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams, Platform, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from "../../services/auth-service";
import { TranslateService } from '@ngx-translate/core';
import { File } from "@ionic-native/file/ngx";
import { AngularFireDatabase } from "@angular/fire/database/database";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CepProvider } from "../../providers/cep/cep";
import { CadastroDadoProvider } from "../../providers/cadastro-dado/cadastro-dado";
import 'rxjs/add/operator/take';


@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})

export class RegisterPage {
    user: any;
    origin = '';
    form: FormGroup;
    email: string = "";
    password: string = "";
    name: string = "";
    phoneNumber: string = "";
    endereco: any = [];
    tabs: any = 'profile';
    uid = '';
    me: any = {};
    snapshot: any = [];
    indicadoPor: any;
    buttonText = '';

    //photoPreview;
    //photo = '';
    isCpfValid: boolean;
    showCpfValidation: boolean;

    //@ViewChild('inputFilePhoto')
    //inputFilePhoto: TextInput;

    private year = null;
    private currentTime = null;

    public TermoUsoAppAceitou = false;


    constructor(public nav: NavController, public authService: AuthService, public alertCtrl: AlertController, 
        public loadingCtrl: LoadingController, public translate: TranslateService, private navParams: NavParams,
        public file: File, private formBuilder: FormBuilder, public db: AngularFireDatabase,
        public dado: CadastroDadoProvider,
        public toast: ToastController,
        public platform: Platform,
        public cepProvider: CepProvider) {

        this.form = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
            email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
            password: ['', Validators.compose([Validators.required, Validators.maxLength(14), Validators.minLength(6)])],
            phoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
            itin: ['', Validators.compose([Validators.required, Validators.maxLength(14)])],
            //id_card: ['', Validators.compose([Validators.required, Validators.maxLength(13)])],
            birthdate: ['', Validators.compose([Validators.required])],
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
            this.getCadastroDado();
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

    getCadastroDado() {
        let sForm = this.form;

        //Verifica cadastro dado
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

        const alert = this.alertCtrl.create({
            title: 'Dado App',
            cssClass: 'alertnormal',
            message: 'Verificamos que seu cadastro pode estar incompleto. Por favor, verifique e complete suas informações.',
            buttons: [{
                text: 'OK',
                cssClass: 'oknormalcss',
            }]
        });
        alert.present();
    }

    getDbDado() {
        return this.db.list('pessoas',ref => ref.orderByChild('email').equalTo(this.me.email)).valueChanges();
        
    }

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

    submit() {
       

            try {

                let loading = this.loadingCtrl.create({ content: 'Criando conta...' });
                loading.present();

                this.user = this.form.value;
                let mes = ((new Date().getMonth() + 1) > 9) ? (new Date().getMonth() + 1) : '0' + (new Date().getMonth() + 1)
                this.user.data_cadastro = new Date().getFullYear() + '-' + mes + '-' + new Date().getDate();
                this.user.origem = "1"; //app passageiro

                this.dado.save_register(this.user).then(response => {
                    loading.dismiss();

                    this.authService.register(this.user).subscribe(authData => {

                        this.toast.create({ message: 'Sucesso! Informe Email e Senha para ENTRAR', duration: 5000 }).present();

                        this.nav.setRoot(LoginPage);

                    }, error => {
                        loading.dismiss();
                        let alert = this.alertCtrl.create({
                            message: error.message,
                            buttons: ['OK']
                        });
                        alert.present();
                    });


                }, (error: any) => {
                    loading.dismiss();
                    let alert = this.alertCtrl.create({
                        message: "ocorreu um erro ao registrar. por favor, tente novamente.",
                        buttons: ['ok']
                    });
                    alert.present();
                });

            } catch (e) {
                let alert = this.alertCtrl.create({
                    message: e.message,
                    buttons: ['OK']
                });
                alert.present();
            }
    }

    dateParams() {
        this.currentTime = new Date();
        this.year = this.currentTime.getFullYear();
        this.year = this.year - 18;
    }

    signup() {
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
        this.alertCtrl.create({ message: 'Demonstração do app Dado.', buttons: ['OK'] }).present();
        /* let loading = this.loadingCtrl.create({content: 'Criando conta...'});
         loading.present();
         this.authService.register(this.userInfo).subscribe(() => {
             loading.dismiss();
             this.alertCtrl.create({message: 'Conta criada com sucesso', buttons: ['OK']}).present();
         }, error => {
             loading.dismiss();
             this.alertCtrl.create({message: error.message, buttons: ['OK']}).present();
         });*/
    }

    async takePicture() {
        /*this.photo = '';

        const options: CameraOptions = {
            quality: 85,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true,
            cameraDirection: this.camera.Direction.FRONT,
            targetWidth: window.screen.width,
            targetHeight: window.screen.height,
            sourceType: this.camera.PictureSourceType.CAMERA,
        };

        const photo = await this.camera.getPicture(options)
            .then((imageData) => {
                let base64image = 'data:image/jpeg;base64,' + imageData;
                this.photo = base64image;
                this.writeFile(base64image, 'dadopic', 'dadoavatar.jpg');

            }, (error) => {
                console.error(error);
            })
            .catch((error) => {
                console.error(error);
            });

        console.log(this.photoPreview);*/
    }

    async getCep() {
        let loading = this.loadingCtrl.create({ content: 'Procurando endereço...' });
        loading.present();
        let sForm = this.form;
        let cep = sForm.controls.zipcode.value;

        if (cep.toString().length > 0) {

            try {
                await this.cepProvider.cep(cep)
                    .then(data => {
                        this.endereco = data;
                        loading.dismiss();
                        if (!this.endereco.erro) {
                            sForm.controls.address.setValue(this.endereco.logradouro);
                            sForm.controls.complement.setValue(' ');
                            sForm.controls.neighborhood.setValue(this.endereco.bairro);
                            sForm.controls.city.setValue(this.endereco.localidade);
                            sForm.controls.state.setValue(this.endereco.uf);
                            /*this.user.address = this.endereco.logradouro;
                            this.user.neighborhood = this.endereco.bairro;
                            this.user.city = this.endereco.localidade;
                            this.user.state = this.endereco.uf;
                            this.user.complement = ' ';*/
                        } else {
                            this.showAlertCep();
                        }
                    });
            } catch (e) {
                this.showAlertCep();
            }
        }
    }

    //here is the method is used to write a file in storage
    writeFile(base64Data: any, folderName: string, fileName: any) {
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
    }

    //here is the method is used to get content type of an bas64 data
    getContentType(base64Data: any) {
        /*let block = base64Data.split(";");
        let contentType = block[0].split(":")[1];
        return contentType;*/
    }

    //here is the method is used to convert base64 data to blob data
    base64toBlob(b64Data, contentType) {
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
    }

    login() {
        this.nav.setRoot(LoginPage);
    }

    showAlertCep() {
        const alert = this.alertCtrl.create({
            title: 'Ocorreu um erro',
            subTitle: 'Não foi posssível encontrar seu endereço pelo CEP informado.',
            buttons: ['OK']
        });
        alert.present();
    }

    validaCpf() {

        let sForm = this.form;
        let cpf = sForm.controls.itin.value;
        this.isCpfValid = false;
        this.showCpfValidation = true;

        let erro: String = "";

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
                    erro = "Número de CPF inválido!"
                }

                let a = [];
                let b: number = 0;
                let c = 11;
                let x: number = 0;
                let y: number = 0;

                for (let i = 0; i < 11; i++) {
                    a[i] = cpf.charAt(i);
                    if (i < 9) b += (a[i] * --c);
                }

                if ((x = b % 11) < 2) {
                    a[9] = 0
                } else {
                    a[9] = 11 - x
                }
                b = 0;
                c = 11;

                for (y = 0; y < 10; y++) b += (a[y] * c--);

                if ((x = b % 11) < 2) {
                    a[10] = 0;
                } else {
                    a[10] = 11 - x;
                }

                if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])) {
                    erro = "Número de CPF inválido.";
                }
            }
        } else {
            if (cpf.length === 0)
                return false
            else
                erro = "Número de CPF inválido.";
        }

        if (erro.length > 0) {
            return false;
        }
        this.isCpfValid = true;
        return true;
    }


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

    abrirTermoUsoApp() {

        let alert = this.alertCtrl.create({
            title: `Dado`,
            message: 'TILL TECNOLOGIA EIRELI																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								'+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'São Paulo, 27 de abril de 2019                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'TERMOS E CONDIÇÕES DE USO DO APLICATIVO TILL "A Dado"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            ' 1.    RELACIONAMENTO CONTRATUAL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'Estes Termos de uso ("Termos") regem seu acesso e uso, como pessoa física, de aplicativos, sítios de Internet, conteúdos, produtos e também serviços (os "Serviços")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   '+
            'disponibilizados pela Dado TECNOLOGIA EIRELI, inscrita no Cadastro Nacional de Pessoas Jurídicas do Ministério da Fazenda (CNPJ/MF) sob n.31.801.778 /0001-23 ou qualquer de suas afiliadas, definidas ao longo deste termo, simplesmente como Dado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            '2. LEIA COM ATENÇÃO ESTES TERMOS ANTES DE ACESSAR OU USAR OS SERVIÇOS DOS APLICATIVOS Dado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'Ao acessar e usar os Serviços você concorda com os presentes termos e condições, que estabelecem o relacionamento contratual entre você e a Dado. Se você não concorda com estes Termos, você não pode acessar nem usar os Serviços.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'Mediante a aceitação destes termos, fica acordado entre a Dado e o usuário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           '+
            'a substituição de qualquer termos e acertos acordados anteriormente entre o usuário e qualquer Afiliada da Dado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'A Dado poderá imediatamente encerrar este acordo e quaisquer outros serviços de odo geral, deixar de oferecer ou negar acesso aos Serviços ou a qualquer parte deles,  qualquer momento e por qualquer motivo. Termos adicionais poderão se aplicar a eterminados Serviços, tais como condições para um evento,atividade ou promoção em articular e esses em relação aos respectivosServiços. Termos adicionais serão divulgadas em relação aos respectivos Serviços. Termos adicionais são omplementares e considerados parte integrante destes Termos para os efeitos dos respectivos Serviços. Termos adicionais prevalecerão sobre este, em caso de conflito om relação aos referidos Serviços. A Dado poderá alterar os Termos relativos aos erviços a qualquer momento. Aditamentos entrarão em vigor quando a Dado fizer a ostagem da versão atualizada dos Termos neste local ou das condições atualizadas ou Termos adicionais sobre o respectivo Serviço. O fato de você continuar a acessar u sar os Serviços após essa postagem representa seu consentimento em vincular-se os ermos alterados. A Dado ou qualquer de suas afiliadas poderá fornecer a uma erenciadora de reclamações ou seguradoras qualquer informação necessária (inclusive suas informações de contato) se houver qualquerreclamação, litígio ou onflito, o que pode incluir acidente envolvendo você ou prestadores terceiros (inclusive um(a) motorista de uma rede de empresas de transportes, e essas informações ou ados forem necessários para solucionar a reclamação, litígio ou conflito. 2. OS SERVIÇOS Os Serviços integram uma plataforma de tecnologia que permite aos(às) suários(as) de aplicativos móveis ou sítios de Internet da Dado , fornecidos como arte dos Serviços (cada qual um "Aplicativo"), providenciar e programar Serviços de transporte e/ou logística com terceiros provedores independentes desses Serviços, nclusive terceiros fornecedores independentes de transporte e terceiros fornecedores independentes de logística mediante contrato com a Dado ou determinadas Ampliadas da Dado ("Prestadores Terceiros"). A menos que diversamente acordado ela Dado em contrato escrito em separado firmado com você, os Serviços são disponibilizados para seu uso pessoal e não comercial. Você reconhece que a Dado ão presta serviços detransporte ou logística, nem funciona como transportadora, e que odos esses serviços de transporte ou logística são prestados por prestadores terceiros ndependentes, que não são empregados (as) e nem representantes da Dado, nem e qualquer de suas afinadas.      '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'LICENÇA.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'Sujeito ao cumprimento destes Termos, a Dado outorga uma licença limitada, não xclusiva, não passível de sub licença, revogável e não transferível para: (i) acesso e so os Aplicativos em seu dispositivo pessoal, exclusivamente para o seu uso dos erviços;  ii) acesso e uso de qualquer conteúdo, informação e material correlato que possa ser disponibilizado por meio dos serviços, em cada caso, para seu uso pessoal, nunca omercial. Quaisquer direitos não expressamente outorgados por estes termos são eservados à Dado e suas afinadas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'RESTRIÇÕES.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'Você não poderá: (i) remover qualquer aviso de direito autoral, direito de marca ou utro viso de direito de propriedade de qualquer parte dos serviços; (ií) reproduzia modificar, distribuir, licenciar, locar, vender, revender transferir, exibir, veicular, transmitir ou, de ualquer outro modo, explorar os serviços, exceto da forma expressamente permitida ela Dado (iii) decompilar, realizar engenharia reversa ou desmontar os Serviços, exceto conforme permitido pela legislação aplicável; (lv) conectar, espelhar ou recortar ualquer parte dos Serviços; (v) fazer ou lançar quaisquer programas ou scripts com a finalidade de fazer scraping, indexação, pesquisa ou qualquer outra forma de obtenção e dados de qualquer parte dos serviços, ou de sobrecarregar ou prejudicar indevidamente a operação e a funcionalidade de qualquer aspecto dos serviços; ou vi) entar obter acesso não autorizado aos serviços ou prejudicar qualquer aspecto dos serviços ou seus sistemas ou redes correlatas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'PRESTAÇÃO DOS SERVIÇOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       '+
            'Você reconhece que os Serviços podem ser disponibilizados sob diferentes marcas da uming, de diferentes seguimentos e setores, de diferentes opções de solicitação associadas aos serviços de transporte, de logística, de serviços domésticos, de uidados pessoais, de saúde, de cuidados com animais e outros serviços que a Dado ier a disponibilizar em sua plataforma posteriormente. Todos os serviços são restados or terceiros independentes, inclusive marcas de solicitação de transporte. Você reconhece também que os serviços podem estar disponíveis sob essas marcas e opções de solicitação oferecidas por, ou associadas a: (1) determinadas subsidiárias e finadas da Dado; ou (11) Prestadores Terceiros independentes, inclusive motoristas de empresas de rede de transporte, detentores(as) de permissão para serviços de ransporte na categoria profissional ou detentores(as) de permissões, autorizações ou licenças de transporte similares.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             '+
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ',
            buttons: [
                {
                    text: 'Aceitar',
                    handler: () => {

                        this.TermoUsoAppAceitou = true;

                    }
                },
                {
                    text: 'Não Aceitar',
                    role: 'cancel',
                    handler: () => {

                        this.exitPage();
                    }
                }
            ]
        });

        alert.present();

    }

    exitPage() {
        setTimeout(() => {
            this.toast.create({ message: 'Saindo do Dado...', duration: 3000 }).present();
            this.platform.exitApp();
        }, 3000);

    }

}