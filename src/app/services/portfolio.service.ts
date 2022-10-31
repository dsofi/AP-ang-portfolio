import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:5000/estudio'

  constructor(
    private http:HttpClient
  ) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>('./assets/data/data.json');
    // return this.http.get<any>(this.apiUrl);
  }
}
