import {Injectable} from "@angular/core";
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take'
import {EMAIL_VERIFICATION_ENABLED} from "./constants";

@Injectable()
export class AuthService {
    user: any;

    constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, public storage: Storage) {
    }

    // get current user data from firebase
    getUserData() {
        console.log("this.afAuth.auth.currentUser=============", this.afAuth.auth.currentUser);
        return this.afAuth.auth.currentUser;
    }

    // get passenger by id
    getUser(id) {
        return this.db.object('persons/' + id);
    }

    // login by email and password
    login(email, password) {
        //this.logout() ;
        let result = this.afAuth.auth.signInWithEmailAndPassword(email, password);
        return result;
    }


    logout() {
        return this.afAuth.auth.signOut();
    }

    // register new account
    register(user: any) {
        return Observable.create(observer => {

            this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then((authData: any) => {
                authData.name           = user.name;
                authData.itin           = user.itin;
                authData.id_card        = '';
                authData.phoneNumber    = user.phoneNumber;
                authData.birthdate      = user.birthdate;
                authData.gender         = '';
                authData.zipcode        = '';
                authData.address        = '';
                authData.number         = '';
                authData.complement     = '';
                authData.neighborhood   = '';
                authData.city           = '';
                authData.state          = '';
                authData.photoUrl       = user.photo;
                authData.indicadoPor    = user.indicadoPor;
                authData.minhaIndicacao = user.minhaIndicacao;
                authData.bank           = '';
                authData.agency         = '';
                authData.account        = '';
                authData.data_cadastro  = user.data_cadastro;
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
                if (EMAIL_VERIFICATION_ENABLED === true)
                    this.getUserData().sendEmailVerification();
                // update passenger object
                //this.updateUserProfile(authData);
                observer.next();
            }).catch((error: any) => {
                observer.next();
                // if (error) {
                //     observer.error(error);
                // }
            });
        });
    }

    // update user from Db Mysql
    updateUserProfileFromDb(user, afiliado) {
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
        })
    }

    // update user display name and photo
    updateUserProfile(user) {
        console.log(user);
        let name = user.name ? user.name : user.email;
        let photoUrl = user.photoUrl ? user.photoUrl : '';
        let photoCNH = user.photoCNH ? user.photoCNH : '';
        let photoComprovante = user.photoComprovante ? user.photoComprovante : '';
        
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
        })
    }

    // create new user if not exist
    createUserIfNotExist(user) {
        // check if user does not exist
        this.getUser(user.uid).valueChanges().subscribe((snapshot:any) => {
            if (snapshot.$value === null) {
                // update passenger object
                this.updateUserProfile(user);
            }
        });
    }

    // update card setting
    updateCardSetting(number, exp, cvv, token) {
        const user = this.getUserData();
        this.db.object('persons/' + user.uid + '/card').update({
            number: number,
            exp: exp,
            cvv: cvv,
            token: token
        })
    }

    // get card setting
    getCardSetting() {
        const user = this.getUserData();
        return this.db.object('persons/' + user.uid + '/card').valueChanges();
    }
}
