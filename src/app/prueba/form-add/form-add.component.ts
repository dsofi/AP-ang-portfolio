import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  @Output() agregando:EventEmitter<any>= new EventEmitter;

  titulo: string = '';
  tiempo: string = '';
  descripcion: string = '';
  otrasNotas: string = '';

  constructor(private pruebaServ:PruebaService) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.pruebaServ.toggleAdd();
  }

  submit(){
    const { titulo, tiempo, descripcion, otrasNotas} = this;
      const objeto:any = { titulo, tiempo, descripcion, otrasNotas};

      this.titulo = '';
      this.tiempo = '';
      this.descripcion = '';
      this.otrasNotas = '';

      this.pruebaServ.toggleAdd();

      this.agregando.emit(objeto);


  }

}
