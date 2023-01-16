import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-cancel-save',
  templateUrl: './btn-cancel-save.component.html',
  styleUrls: ['./btn-cancel-save.component.css']
})
export class BtnCancelSaveComponent implements OnInit {

  @Output() onCancelar:EventEmitter<any> = new EventEmitter;
  @Output() onGuardar:EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {}

  cancelar(){
    this.onCancelar.emit();
  }

  guardar(){
    this.onGuardar.emit();
  }
}
