import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { animate } from '@angular/animations';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class InterfaceService {

  // private editable: boolean = false;
  private subject = new Subject<any>();
  variable:string = "";
  // objeto:string=";"
  tipoObjeto:string="datos-persona";

  private url = `http://localhost:5000`;

  constructor(private http: HttpClient) {}

  toggleShowEdit(objeto:any): void {
    objeto.editar = !objeto.editar;
    this.subject.next(objeto.editable);
  }

  // mostrarModoEdicion(objeto:any): void {
  //   objeto.editable = !objeto.editable;
  //   // this.subject.next(objeto.editable);
  //   // this.objeto = objeto;
  //   console.log("cambia true o false objeto desde serv interface: " + this.subject)
  // }

 
  onMostrarModoEdicion(): Observable<any> {
    return this.subject.asObservable();
  }

  
//  ESTE NO FUNCIONABA
  // guardarCambios(tipoObjeto:string, objeto:string): Observable<any> {
  //   this.mostrarModoEdicion();
  //   const url = `${this.url}/${objeto}.id`;
  //   return this.http.put<any>(url, objeto, httpOptions);
  // }

  // ESTE FUNCIONABA
  // guardarCambios(user:any): Observable<any> {
  //   this.mostrarModoEdicion(this.objeto);
  //   const url = "http://localhost:5000/datos-persona/1";
  //   console.log("cambios guardados del servicio" + user);
  //   return this.http.put<any>(url, user, httpOptions);
  // }

// ESTE FUNCIONABA
  // guardarGeneral(objeto:any, tipo:any):Observable<any>{
  //   this.mostrarModoEdicion(this.objeto);
  //   const url = `http://localhost:5000/${tipo}/${objeto.id}`;
  //   console.log ("id desde servicio" + objeto.id);
  //   return this.http.put<any>(url, objeto, httpOptions);
  // }

  guardarGeneral(objeto:any, tipo:string):Observable<any>{
    this.toggleShowEdit(objeto);
    const url = `${this.url}/${tipo}/${objeto.id}`;
    return this.http.put<any>(url, objeto, httpOptions);
  }
  
}

