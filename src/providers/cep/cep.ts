import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CepProvider {

  constructor(public http: HttpClient) {
  }

  cep(inputCep: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', "*");
    headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
    const options = { headers: headers }

    let resultado: any;
    let cepURL = 'https://viacep.com.br/ws/'+inputCep+'/json';
    return new Promise((resolve, reject) => {
      this.http.get(cepURL,options)
          .subscribe(function(result){
            resultado = result;
            resolve(resultado);
          })
    });
  }
}
