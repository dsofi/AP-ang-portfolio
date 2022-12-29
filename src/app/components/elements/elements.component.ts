import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  @Input() objeto:any;
  @Output() eliminando:EventEmitter<any> = new EventEmitter();
  @Output() cancelando:EventEmitter<any> = new EventEmitter();
  @Output() guardando:EventEmitter<any> = new EventEmitter();
  @Output() toggleEdit:EventEmitter<any> = new EventEmitter();

  isLogged:boolean=false;

  constructor() { }

  ngOnInit(): void {
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
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
