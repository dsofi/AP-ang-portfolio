import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url=`https://portfolio-backend-jej3.onrender.com/iniciar-sesion`;
  currentUserSubject:BehaviorSubject<any>;
  private authStateSubject: Subject<boolean> = new Subject<boolean>();
  authStateObservable: Observable<boolean> = this.authStateSubject.asObservable();
  
  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser')||'...');
  }

   iniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, JSON.stringify(credenciales)).pipe(
      map((data:any) => {
        let token = data.token;
        sessionStorage.setItem('currentUser', token ? token : '');
        this.currentUserSubject.next(data);
        this.updateAuthState(true);
        return data;
      }),
      catchError(error => {
        console.log("ERROR: ", error); 
        return (error);
      })
  )}

  cerrarSesion() {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.updateAuthState(false);
    window.location.reload();
  }

  updateAuthState(state: boolean): void {
    this.authStateSubject.next(state);
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}


