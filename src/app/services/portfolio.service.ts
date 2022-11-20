import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Estudio } from '../components/common/int-Estudio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
  
})
export class PortfolioService {
  private apiUrl = 'http://localhost:5000/estudios';
  private refreshSubject = new Subject<void>();

  public get needToRefresh(){
    return this.refreshSubject.asObservable();
  }
  
  public handleRefreshClick() {
    this.refreshSubject.next();
  }


  constructor(private http:HttpClient) { }

 

  obtenerDatos():Observable<Estudio[]>{
    return this.http.get<Estudio[]>(this.apiUrl);
  }

  borrarEstudio(estudio:Estudio):Observable<Estudio>{
    const url = `${this.apiUrl}/${estudio.id}`
    return this.http.delete<Estudio>(url);
  }


  editarEstudio(estudio:Estudio):Observable<Estudio>{
    const url = `${this.apiUrl}/${estudio.id}`
    return this.http.put<Estudio>(url, estudio, httpOptions)
  }

  agregarEstudio(estudio:Estudio){
    return this.http.post<Estudio>(this.apiUrl, estudio, httpOptions)
  }
}


