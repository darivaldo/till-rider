import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CadastroTillProvider {

  constructor(public http: HttpClient) {
  }

  searchUserData(inputCPF: string) {
    let resultado: any;
    let tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/cadastro/verify/'+inputCPF;
    return new Promise((resolve, reject) => {
      this.http.get(tillURL)
          .subscribe(function(result){
            resultado = result;
            resolve(resultado);
          }, () => {
            reject('0');
          })
    });
  }

  searchAffiliateByCode(inputCode: string) {
    let resultado: any;
    let tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/afiliados/search/'+inputCode;
    return new Promise((resolve, reject) => {
      this.http.get(tillURL)
          .subscribe(function(result){
            resultado = result;
            resolve(resultado);
          }, () => {
            reject('0');
          })
    });
  }

  verifyAffiliateCode(inputCode: string){
    let resultado: any;
    let tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/afiliados/verify/'+inputCode;
    return new Promise((resolve, reject) => {
      this.http.get(tillURL)
          .subscribe(function(result){
            resultado = result;
            resolve(resultado);
          }, () => {
            reject('0');
          })
    });
  }

  searchByEmail(inputEmail: string){
    let resultado: any;
    let tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/cadastro/search/'+inputEmail;
    return new Promise((resolve, reject) => {
      this.http.get(tillURL)
          .subscribe(function(result){
            resultado = result;
            resolve(resultado);
          }, () => {
            reject('0');
          })
    });
  }


  login(email: String, pswd:String){
    let body = { "email":email, "pswd":pswd};
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', "*");
    headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
    const options = { headers: headers }
  
    let tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/login/';
    return new Promise((resolve, reject) => {
      this.http.post(tillURL,body, options )
          .subscribe(function(result){
            if (result[0].email !=  null) {
              localStorage.setItem('User', JSON.stringify(result[0]));
              resolve(result[0]);
            }
            else{
              reject('0');
            }
          }, (error:any) => {
            reject('0');
            console.log("error=====",tillURL,error);
          })
    });
  }

  save(user: any){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', "*");
    headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
    const options = { headers: headers }
  
    let tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/save/';
    return new Promise((resolve, reject) => {
      this.http.post(tillURL,user, options )
          .subscribe(function(result){
              resolve('1');
          }, () => {
            reject('0');
          })
    });
  }

  save_register(user: any){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', "*");
    headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
    const options = { headers: headers }
  
    let tillURL = 'http://bumingapi.bumingapp.com.br/public/api/v1/save_register/';
    return new Promise((resolve, reject) => {
      this.http.post(tillURL,user, options )
          .subscribe(function(result){
              resolve('1');
          }, () => {
            reject('0');
          })
    });
  }
}
