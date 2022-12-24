import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private url = `http://localhost:8080`;
  private showAdd:boolean = false;
  private subjectAdd = new Subject<any>();


  constructor(private http: HttpClient) { }

  getGeneral(categoria:string):Observable<any>{
    return this.http.get<[]>(`${this.url}/${categoria}`);
  }

  toggleAdd():void{
    this.showAdd = !this.showAdd;
    this.subjectAdd.next(this.showAdd);
  }

  onToggle():Observable<any>{
    return this.subjectAdd.asObservable();
  }

  addGeneral(objeto:any, tipo:string){
    const url = `${this.url}/${tipo}`;
    return this.http.post<any>(url, objeto);
  }

  deleteGeneral(objeto:any, tipo:string){
    const url = `${this.url}/${tipo}/${objeto.id}`;
    return this.http.delete<any>(url);
  }

  editGeneral(objeto:any, tipo:string){
    const url = `${this.url}/${tipo}/${objeto.id}`;
    return this.http.put(url,objeto);
  }
}


