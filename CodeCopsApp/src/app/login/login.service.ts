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
<<<<<<< HEAD
    return this._http.get<IOfficer[]>('http://codeitteam5.westeurope.cloudapp.azure.com/api/officers',
      {headers:{ 'Authorization':  'Basic '+btoa('admin@civica.local:password123') }}
    )
=======
    return this._http.get<IOfficer[]>('http://codeitteam5.westeurope.cloudapp.azure.com/api/Officers', { withCredentials: true })
>>>>>>> 3835b18198cb73a1dd614286db2bfba17398ede1
    .do(data => {})
    .map(results => {
      return results.map(res => {
        let result: IOfficer;
        result = {
          id: res.id,
          BadgeNumber: res.BadgeNumber,
          rank: res.rank,
          department: res.department,
          photo: res.photo
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
    .do(data => {
      // do something
    })
    .catch(this.errorHandler);
  }

  private errorHandler(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
