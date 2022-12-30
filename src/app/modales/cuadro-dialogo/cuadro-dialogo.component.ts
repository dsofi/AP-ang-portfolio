import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

declare var window:any;

@Component({
  selector: 'app-cuadro-dialogo',
  templateUrl: './cuadro-dialogo.component.html',
  styleUrls: ['./cuadro-dialogo.component.css']
})
export class CuadroDialogoComponent implements OnInit {

  formModal:any;

  constructor(private authServ:AutenticacionService) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("contenedor-modal")
    );
  }

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
  }

  cerrarSesion(){
    this.authServ.cerrarSesion();

  }



}
