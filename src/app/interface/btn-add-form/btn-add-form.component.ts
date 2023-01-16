import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-add-form',
  templateUrl: './btn-add-form.component.html',
  styleUrls: ['./btn-add-form.component.css']
})
export class BtnAddFormComponent implements OnInit {

  @Input() tipo:string="";
  @Output() agregando:EventEmitter<any>= new EventEmitter;
  showAdd:boolean=false;
  isLogged:boolean=false;

  titulo: string = '';
  tiempo: string = '';
  descripcion: string = '';
  otrasNotas: string = '';
  imagen:string = '';

  constructor() {  }

  ngOnInit(): void {
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
  }

  onAgregar(){
    this.showAdd=true;
  }

  cancelar(){
    this.titulo = "";
    this.tiempo = "";
    this.descripcion = "";
    this.otrasNotas = "";
    this.imagen = "";
    this.showAdd=false;
  }

  submit(){
    const { titulo, tiempo, descripcion, otrasNotas, imagen} = this;
    const objeto:any = { titulo, tiempo, descripcion, otrasNotas, imagen};

    if (!titulo || !tiempo || !descripcion) {
      alert('Título, tiempo y descripción son campos obligatorios');
      return;
    }
    this.titulo = '';
    this.tiempo = '';
    this.descripcion = '';
    this.otrasNotas = '';
    this.imagen = '';

    this.showAdd=false;
    this.agregando.emit(objeto);
  }
}
