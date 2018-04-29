import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {Accesstoken}from './accessToken';



///buuuuuuh , never do this
const apikey = "slhe6Qut2xSUqMxURO360xn1rcNSojtHvwMSqa/Kp+k=";
const secret = "Wont check n until CORs idea";
const apiaddress = "https://api.inbenta.io/v1/auth";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'x-inbenta-key': apikey,'Access-Control-Allow-Origin': '*'})
};

@Injectable()
export class ChatService {

secretform= "secret=" + secret;



  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  getAuth(): Observable<Accesstoken> {
    const headers = this._headers.append('x-inbenta-key', apikey).append('Content-Type', 'application/x-www-form-urlencoded');;
  return  this.httpClient.post<Accesstoken>(apiaddress, this.secretform, httpOptions).pipe(catchError(this.handleError<Accesstoken>('getAccess'))
);


  }





  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
