import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AppSettings} from '../app.settings';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  getsubjects() {
    return this.http.get(AppSettings.API_ENDPOINT + 'subjects/getSubjects/json', this.jwt()).map((response: Response) => response.json());
  }

// private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
