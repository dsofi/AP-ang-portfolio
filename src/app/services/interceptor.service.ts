import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authServ:AutenticacionService, private generalServ:GeneralService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.authServ.UsuarioAutenticado;
    this.generalServ.showLoading();
    // this.ruta.navigate(['/loading']);    
    if (currentUser && currentUser.length > 20){
      req=req.clone({ setHeaders: {Authorization: `Bearer ${currentUser}`}});
    }
    return next.handle(req).pipe(
      finalize(() => this.generalServ.hideLoading())
    );  
  }
}

// this.ruta.navigate(['/home'])

