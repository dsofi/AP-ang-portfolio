import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() objeto:any;
  @Output() eliminando:EventEmitter<any> = new EventEmitter();
  @Output() cancelando:EventEmitter<any> = new EventEmitter();
  @Output() guardando:EventEmitter<any> = new EventEmitter();

  constructor(private pruebaServ:PruebaService) { }

  ngOnInit(): void {
  }

  editar(objeto:any){
    objeto.editar = true;
  }

  eliminar(objeto:any){
    this.eliminando.emit(objeto);
  }

  cancelar(){
    this.cancelando.emit();
  }

  guardar(objeto:any){
    objeto.editar = false;
    this.guardando.emit(objeto);
  }

}
