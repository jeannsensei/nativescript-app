import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  api = 'https://reqres.in/';

  constructor(private _http: HttpClient) { }

  testGet() {
    return this._http.get(this.api + 'api/users');
  }
}
