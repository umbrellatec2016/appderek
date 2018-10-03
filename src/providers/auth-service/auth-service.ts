import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl ="http://localhost/8000/api/";
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
  login(credentials)
  {
   /* return new Promise((resolve,reject)=>{
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      this.http.post(apiUrl+'login',JSON.stringify(credentials),{headers:headers})
       .subscribe(res =>{
         resolve(res.json());
       }, (err)=>{
         reject(err);
       });
    });*/
  }
}