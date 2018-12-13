import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RuapiProvider {

  // Change API_URL here and at 'ionic.config.json', when deploying aplication
  private API_URL = 'http://192.168.1.3/ru-api/web/';

  constructor(public http: Http) {}

  validateUser() {
    return true;
  }

  getStudent(request) {
    
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'aluno/get-aluno';

      this.http.post(url, request).subscribe((result:any) => {  
        resolve(result.json());
      },(error) => {
        reject(error.json());
      });

    });
  }

  createStudent(request) {
    
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'aluno/create-aluno';

      this.http.post(url, request).subscribe((result:any) => {  
        resolve(result.json());
      },(error) => {
        reject(error.json());
      });

    });
  }

  getHistory(request) {

    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'historico/get-historico-por-aluno';

      this.http.post(url, request).subscribe((result:any) => {  
        resolve(result.json());
      },(error) => {
        reject(error.json());
      });

    });
  }
}
                              
