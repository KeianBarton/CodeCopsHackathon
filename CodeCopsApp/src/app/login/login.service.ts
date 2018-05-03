import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IOfficer } from './IOfficer';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) {
  }
  
  getOfficers(): Observable<IOfficer[]> {
    return this._http.get<IOfficer[]>('http://codeitteam5.westeurope.cloudapp.azure.com/api/officers',
    {headers:{ 'Authorization':  'Basic '+btoa('admin@civica.local:password123') }})
    .do(data => {})
    .map(results => {
      return results.map(res => {
        let result: IOfficer;
        result = {
          ID: res.ID,
          BadgeNumber: res.BadgeNumber,
          Rank: res.Rank,
          Department: res.Department,
          Photo: res.Photo.Content
          }
          return result;
        });
      })
      .catch(this.errorHandler);
  }
  
  postLogin(officer): Observable<any> {
    const body = JSON.stringify(officer);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = {headers: headers};
    return this._http.post<any>('http://localhost:3000/officers', body, options)
    .catch(this.errorHandler);
  }

  private errorHandler(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
