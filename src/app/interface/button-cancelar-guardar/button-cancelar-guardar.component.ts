import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';

@Component({
  selector: 'app-button-cancelar-guardar',
  templateUrl: './button-cancelar-guardar.component.html',
  styleUrls: ['./button-cancelar-guardar.component.css']
})
export class ButtonCancelarGuardarComponent implements OnInit {

  
  @Output() btnGuardar = new EventEmitter()
  @Output() btnCancelar = new EventEmitter()

  editable:boolean=false;
  tipoObjeto:string="datos-persona";
  objeto:string="dato"
  texto:string="hola"

  
  subscription?:Subscription;

  constructor(private servInterface:InterfaceService) { 
    this.subscription = this.servInterface.onMostrarModoEdicion().subscribe((value) => 
      this.editable = value)}

  ngOnInit(): void {
  }

  // cancelarEdicion(){
  //   this.servInterface.cancelarEdicion();
  // }

  onGuardar(){
     this.btnGuardar.emit();
  }
  onCancelar(){
     this.btnCancelar.emit();
  }


}
