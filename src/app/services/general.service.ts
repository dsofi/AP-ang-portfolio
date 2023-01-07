import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class GeneralService {

  private url = `https://portfolio-backend-jej3.onrender.com`;

  private showAdd:boolean = false;
  private subjectAdd = new Subject<any>();  
  private editando:boolean = false;
  private subjectEditando = new Subject<any>();

  currentUser = sessionStorage.getItem('currentUser') || '...';  
  
  constructor(private http: HttpClient) {
   }

  getGeneral(categoria:string):Observable<any>{
    return this.http.get<[]>(`${this.url}/${categoria}`);
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

  orderGeneral(objeto:any, tipo:string){
    const url = `${this.url}/${tipo}`;
    return this.http.put(url,objeto);
  }
  
  toggleAdd():void{
    this.showAdd = !this.showAdd;
    this.subjectAdd.next(this.showAdd);
  }

  onToggle():Observable<any>{
    return this.subjectAdd.asObservable();
  }

  toggleEditando():void{
    this.editando = !this.editando;
    this.subjectEditando.next(this.editando);
  }

  onToggleEditando():Observable<any>{
    return this.subjectEditando.asObservable();
  }
}
