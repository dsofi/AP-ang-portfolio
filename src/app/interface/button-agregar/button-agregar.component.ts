import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-agregar',
  templateUrl: './button-agregar.component.html',
  styleUrls: ['./button-agregar.component.css']
})
export class ButtonAgregarComponent implements OnInit {

  puedeAgregar: boolean = false;
  nombre: string = '';
  tiempo: string = '';
  descripcion: string = '';
  nota1: string = '';
  nota2: string = '';

  @Output() onAgregar = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  habilitaEdicion(): void {
    this.puedeAgregar = !this.puedeAgregar;
  }
  
  noAgregar(){
    this.habilitaEdicion();
    this.nombre = '';
      this.tiempo = '';
      this.descripcion = '';
      this.nota1 = '';
      this.nota2 = '';

  }

  agregar(){
    this.onAgregar.emit();
  }

}
