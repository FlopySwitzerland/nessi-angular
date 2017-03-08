import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(email: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method: 'post' });
    return this.http.post('http://localhost/nessi-api/users/token', JSON.stringify({ email: email, password: password }), options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.data.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  register(firstname: string, lastname: string, email: string, password: string) {
    // TODO: Implement Check Pswd
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method: 'post' });
    return this.http.post('http://localhost/nessi-api/users/register.json', JSON.stringify({ firstname: firstname, lastname: lastname,
      email: email, password: password }), options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.data.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
