import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Pflegekunde } from '../obj/pflegekunde';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiaddress = 'https://v3j4wbj1ic.execute-api.us-east-1.amazonaws.com/prod';

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

  getKunde(id) : Pflegekunde{
    return this.pflegekunde1; }



}
