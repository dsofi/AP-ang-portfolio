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
 
  onMostrarModoEdicion(): Observable<any> {
    return this.subject.asObservable();
  }

  guardarGeneral(objeto:any, tipo:string):Observable<any>{
    this.toggleShowEdit(objeto);
    const url = `${this.url}/${tipo}/${objeto.id}`;
    return this.http.put<any>(url, objeto, httpOptions);
  }

  cancelar(objeto:any, tipo:string){
    this.toggleShowEdit(objeto);
    return this.http.get(`${this.url}/${tipo}/${objeto.id}`);    
  }

 
  
}

