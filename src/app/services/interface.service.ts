import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
  private urlNueva = `http://localhost:8080`;

  private stateSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  stateCanAdd$: Observable<boolean> = this.stateSubject.asObservable();
  stateCanAdd: boolean = false;

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
    const url = `${this.urlNueva}/${tipo}/${objeto.id}`;
    console.log("DESDE SERVICIO: " + objeto);
    console.log("DESDE SERVICIO: " + tipo);
    console.log("DESDE SERVICIO: " + url);
    return this.http.put<any>(url, objeto, httpOptions);
  }

  cancelar(objeto:any, tipo:string){
    this.toggleShowEdit(objeto);
    // return this.http.get(`${this.urlNueva}/${tipo}/${objeto.id}`);    
    return this.http.get(`${this.urlNueva}/${tipo}`);    
  }

  agregarGeneral(objeto:any, tipo:string){
    const url = `${this.urlNueva}/${tipo}`;
    return this.http.post<any>(url, objeto, httpOptions);
  }

  updateStateAdd() {
    this.stateCanAdd = !this.stateCanAdd;
    this.stateSubject.next(this.stateCanAdd);
  }

  borrarGeneral(objeto:any, tipo:string):Observable<any>{
    const url = `${this.urlNueva}/${tipo}/${objeto.id}`;
    return this.http.delete<any>(url);
  }

  editarGeneral(objeto:any, tipo:string):Observable<any>{
    const url = `${this.urlNueva}/${tipo}/${objeto.id}`;
    return this.http.put<any>(url, objeto, httpOptions);
  }

  

 
  
}

