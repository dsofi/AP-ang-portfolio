import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authServ:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.authServ.UsuarioAutenticado;
    if (currentUser && currentUser.length > 20){
      req=req.clone({
        setHeaders:
        {Authorization: `Bearer ${currentUser}`}
      });
    }
    return next.handle(req);
  }
}
