import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Estudio } from '../components/common/int-Estudio';
import { OutletContext } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {

  private experienciaApiUrl = 'http://localhost:5000/experiencia';
  private datosApiUrl = 'http://localhost:5000/datos-persona';
  private estudiosApiUrl = 'http://localhost:5000/estudios';

  private userLogueado:boolean = false;
  private subject = new Subject<any>();


  constructor(private http: HttpClient) {}

  getExperiencia():Observable<any>{
    return this.http.get<[]>(this.experienciaApiUrl);
  }


  getDatosPersona():Observable<any>{
    return this.http.get<[]>(this.datosApiUrl);
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

  loguearse():void{
    this.userLogueado = !this.userLogueado;
    this.subject.next(this.userLogueado);
    console.log("servicio:" + this.userLogueado)

  }

  onLogueo():Observable<any>{
    return this.subject.asObservable();
  }



}

export class DataSharingService {
  public pruebaDeEdicion: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
}
