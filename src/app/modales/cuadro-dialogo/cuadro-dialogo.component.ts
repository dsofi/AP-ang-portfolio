import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

declare var window:any;

@Component({
  selector: 'app-cuadro-dialogo',
  templateUrl: './cuadro-dialogo.component.html',
  styleUrls: ['./cuadro-dialogo.component.css']
})
export class CuadroDialogoComponent implements OnInit {

  cerrarSesionModal:any;

  constructor(private authServ:AutenticacionService) { }

  ngOnInit(): void {
    this.cerrarSesionModal = new window.bootstrap.Modal(
      document.getElementById('cerrar-sesion-modal'));
  }

  openModal(){
    this.cerrarSesionModal.show();
  }

  closeModal(){
    this.cerrarSesionModal.hide();
  }

  cerrarSesion(){
    this.authServ.cerrarSesion();
  }
}
