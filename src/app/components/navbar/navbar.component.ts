import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { GeneralService } from 'src/app/services/general.service';
import { PortfolioService} from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() logueo:EventEmitter<boolean> = new EventEmitter();
  @Output() modal:EventEmitter<boolean> = new EventEmitter();

  subscriptionModal?: Subscription;

  userLogueado:Boolean = false;
  isLogged:boolean=false;

  constructor(private authServ:AutenticacionService) { 
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
  }

  ngOnInit(): void {}
  

  logueoUser(){
    // this.servGeneral.toggleUserLogueado();
 
    //pasar datos usuario, contraseña , o un objeto, para verificar que exista

    // PRUEBA CON SESSION STORAGE - NO ACTUALIZABA EN LOS DEMAS COMPONENTES AL CAMBIAR
    // this.isLogged = !this.isLogged;
    // let isLoggedString = String(this.isLogged);
    // sessionStorage.setItem("isLogged",isLoggedString);
    // console.log("desde logueo isLogged: " + this.isLogged);
  }

  cerrarSesion(){
    this.authServ.cerrarSesion();
    console.log("Cerrando sesion");
  }

}
