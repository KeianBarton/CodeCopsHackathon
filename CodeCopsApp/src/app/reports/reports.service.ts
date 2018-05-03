import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IReport } from './IReport';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map'

@Injectable()
export class ReportsService {

  constructor(private _http: HttpClient) { }

  getReports(): Observable<IReport[]> {
    return this._http.get<IReport[]>('http://localhost:3000/reports' )
    .do(data => {})
    .map(results => {
      return results.map(res => {
        let result: IReport;
        result = {
          id: res.id,
          title: res.title,
          location: res.location,
          photos: res.photos,
          notes: res.notes
          }
          return result;
        });
      })
      .catch(this.errorHandler);
  }
  
  postReport(report): Observable<any> {
    const body = JSON.stringify(report);
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
