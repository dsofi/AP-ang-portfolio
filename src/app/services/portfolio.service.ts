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

  variable:string = "";

  private experienciaApiUrl = 'http://localhost:5000/experiencia';
  private datosApiUrl = 'http://localhost:5000/datos-persona';
  private estudiosApiUrl = 'http://localhost:5000/estudios';
  // private url = `http://localhost:5000/${this.variable}`;
  private url = `http://localhost:5000`;
  private urlNuevaBD = `http://localhost:8080`;

  private userLogueado:boolean = false;
  private modalVisible:boolean = false;
  private subjectUser = new Subject<any>();
  private subjectModal = new Subject<any>();


  constructor(private http: HttpClient) {}

  getExperiencia():Observable<any>{
    return this.http.get<[]>(this.experienciaApiUrl);
  }


  getDatosPersona():Observable<any>{
    return this.http.get<[]>(this.datosApiUrl);
  }

  getGeneral(busq:string):Observable<any>{
    return this.http.get<[]>(`${this.urlNuevaBD}/${busq}`);
  }
  
  getNuevo(busq:string):Observable<any>{
    return this.http.get<[]>(`${this.urlNuevaBD}/${busq}`);
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
    this.subjectUser.next(this.userLogueado);
    // this.modalVisible = !this.modalVisible;
    // this.subjectModal.next(this.modalVisible);
    // console.log("modal desde servicio:" + this.modalVisible);
  }

  onLogueo():Observable<any>{
    return this.subjectUser.asObservable();
  }

  //session storage true o false o id del user, borrarlo cuando desloguea
  
  onModal():Observable<any>{
    return this.subjectModal.asObservable();
  }



}

export class DataSharingService {
  public pruebaDeEdicion: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
}
