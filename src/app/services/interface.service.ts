import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class InterfaceService {

  private editable: boolean = false;
  private subject = new Subject<any>();

  tipoObjeto:string="datos-persona";

  private url = `http://localhost:5000/${this.tipoObjeto}`;

  constructor(private http: HttpClient) {}

  mostrarModoEdicion(): void {
    this.editable = !this.editable;
    this.subject.next(this.editable);
  }
  
  onMostrarModoEdicion(): Observable<any> {
    return this.subject.asObservable();
  }


  
 
  // guardarCambios(tipoObjeto:string, objeto:string): Observable<any> {
  //   this.mostrarModoEdicion();
  //   const url = `${this.url}/${objeto}.id`;
  //   return this.http.put<any>(url, objeto, httpOptions);
  // }

  guardarCambios(user:any): Observable<any> {
    this.mostrarModoEdicion();
    const url = "http://localhost:5000/datos-persona/1";
    console.log("cambios guardados del servicio" + user);
    return this.http.put<any>(url, user, httpOptions);
  }

  // NO FUNCIONA SI PONGO EL ngOnInit ACA
  // cancelarEdicion():void{
  //   ngOnInit();
  //   this.mostrarModoEdicion();
  // }

  
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

