import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Items } from '../Items';
import { ESTITEMS } from '../estudio-items';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(
    private http:HttpClient
  ) { }

  // obtenerDatos():Observable<any>{
  //   return this.http.get('./assets/data/data.json');
  // }

  // getItems(): Observable<Items[]>{
  //   return this.http.get<Items[]>(this.apiUrl)
  // }  

  addItem(item : Items): Observable<Items>{
    return this.http.post<Items>(this.apiUrl, item)
  }
  
  getAllItem(item : Items): Observable<Items>{
    return this.http.get<Items>(this.apiUrl)
  }

  deleteItem(item : Items): Observable<Items>{
    return this.http.delete<Items>(this.apiUrl+'/'+ item.id)
  }

  editItem(item : Items): Observable<Items>{
    return this.http.put<Items>(this.apiUrl+'/'+ item.id,item)
  }
}
