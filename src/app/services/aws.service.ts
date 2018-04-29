import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Pflegekunde } from '../obj/pflegekunde';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Item } from '../obj/protocoll';
import { Answer } from '../obj/Answer';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiaddress = "https://81m4nhzru7.execute-api.us-east-1.amazonaws.com/patientenAPI/";

@Injectable()
export class DataService {
  pflegekunde1: Pflegekunde = {
    id: 1,
    name: 'Müller',
    vorname: 'Harald',
    zeit: '7:00',
    adresse: 'Sonderweg 1',
    dauer: '1,5'
  };

  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }




//  getProtocoll(): Observable<Protocol> {
    //  const headers = this._headers.append('x-inbenta-key', apikey).append('Content-Type', 'application/x-www-form-urlencoded');;
  //  return this.getProtocolls().get;
//  }

  getKunde(id): Pflegekunde {
    return this.pflegekunde1;
  }


  getProtocolls(): Observable<Answer> {
    return this.http.get<Answer>(apiaddress)
      .pipe(
        tap(protocols => console.log(`fetched protokoll`, protocols.Item),
        catchError(this.handleError('getProtocols', []))
      ));
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
