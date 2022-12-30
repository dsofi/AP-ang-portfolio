import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() modalLogout:EventEmitter<boolean> = new EventEmitter();
  isLogged:boolean=false;

  constructor(private authServ:AutenticacionService) { 
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
  }

  ngOnInit(): void {} 

  cerrarSesion(){
    this.modalLogout.emit();
    // this.authServ.cerrarSesion();
  }

}
