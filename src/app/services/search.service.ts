import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  getMarks() {
    return this.http.get('/api/users').map((response: Response) => response.json());
  }

}
