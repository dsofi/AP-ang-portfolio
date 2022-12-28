import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url=`http://localhost:8080/iniciar-sesion`;
  currentUserSubject:BehaviorSubject<any>;
  
  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser')||'...');
  }

   iniciarSesion(credenciales:any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, JSON.stringify(credenciales), { headers }).pipe(
      map((data:any) => {
        let token = data.token;
        sessionStorage.setItem('currentUser', token ? token : '');
        this.currentUserSubject.next(data);
        return data;
      }),
      catchError(error => {
        console.log("ERROR: ", error); 
        return (error);
      })
  )}

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}


