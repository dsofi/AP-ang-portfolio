import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-edit-del',
  templateUrl: './btn-edit-del.component.html',
  styleUrls: ['./btn-edit-del.component.css']
})
export class BtnEditDelComponent implements OnInit {

  @Output() onEdit:EventEmitter<any> = new EventEmitter;
  @Output() onDelete:EventEmitter<any> = new EventEmitter;
  @Output() onCancelar:EventEmitter<any> = new EventEmitter;
  @Output() onGuardar:EventEmitter<any> = new EventEmitter;

  editando:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  editar(){
    this.editando = !this.editando;
    this.onEdit.emit();
  }

  eliminar(){
    this.editando = !this.editando;
    this.onDelete.emit();
  }

  cancelar(){
    this.editando = !this.editando;
    this.onCancelar.emit();
  }

  guardar(){
    this.editando = !this.editando;
    this.onGuardar.emit();
    console.log("desde btn : " + this.editando);
  }

}
