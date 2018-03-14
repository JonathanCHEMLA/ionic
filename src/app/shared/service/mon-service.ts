import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Contact} from "../models/contact";


/*
  Generated class for the MonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserApiService {

  constructor(private http: HttpClient) {}


  getContacts(): Observable < Contact[] > {
    console.log(this.http);
      return this.http.get< Contact[] >('https://jsonplaceholder.typicode.com/users');

  }


}
