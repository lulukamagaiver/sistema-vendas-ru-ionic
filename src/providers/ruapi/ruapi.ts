import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RuapiProvider {

  private API_URL = 'http://localhost/SDP/web/';

  constructor(public http: Http) {
    console.log('Hello RuapiProvider Provider');
  }

  validateUser() {
    return true;
  }

  getHistory(request) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let options = new RequestOptions({headers: headers});

    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'historico/get_historico_por_aluno';

      this.http.post(url, request, options).subscribe((result:any) => {  
        resolve(result.json());
      },(error) => {
        reject(error.json());
      });

    });
  }
}
                              
