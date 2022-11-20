import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Estudio } from '../components/common/int-Estudio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private datosApiUrl = 'http://localhost:5000/datos-persona';
  private estudiosApiUrl = 'http://localhost:5000/estudios';

  constructor(private http: HttpClient) {}

  getDatosPerona():Observable<any>{
    return this.http.get<any>(this.datosApiUrl);
  }

  obtenerDatos(): Observable<Estudio[]> {
    return this.http.get<Estudio[]>(this.estudiosApiUrl);
  }

  agregarEstudio(estudio: Estudio) {
    return this.http.post<Estudio>(this.estudiosApiUrl, estudio, httpOptions);
  }

  borrarEstudio(estudio: Estudio): Observable<Estudio> {
    const url = `${this.estudiosApiUrl}/${estudio.id}`;
    return this.http.delete<Estudio>(url);
  }

  editarEstudio(estudio: Estudio): Observable<Estudio> {
    const url = `${this.estudiosApiUrl}/${estudio.id}`;
    return this.http.put<Estudio>(url, estudio, httpOptions);
  }
  
}

export class DataSharingService {
  public pruebaDeEdicion: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
}
