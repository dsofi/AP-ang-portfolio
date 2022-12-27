import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-btn-add-form',
  templateUrl: './btn-add-form.component.html',
  styleUrls: ['./btn-add-form.component.css']
})
export class BtnAddFormComponent implements OnInit {

  @Input() tipo:string="";
  @Output() agregando:EventEmitter<any>= new EventEmitter;
  showAdd:boolean=false;
  
  userLogueado:boolean=false;

  titulo: string = '';
  tiempo: string = '';
  descripcion: string = '';
  otrasNotas: string = '';

  constructor(private servGeneral:GeneralService) { 
    this.servGeneral.onToggleLogueado().subscribe((valor) => (this.userLogueado = valor));

  }

  ngOnInit(): void {
    
  }

  onAgregar(){
    console.log("click agregar");
    this.showAdd=true;
  }

  cancelar(){
    this.showAdd=false;
  }

  submit(){
    const { titulo, tiempo, descripcion, otrasNotas} = this;
      const objeto:any = { titulo, tiempo, descripcion, otrasNotas};

      this.titulo = '';
      this.tiempo = '';
      this.descripcion = '';
      this.otrasNotas = '';

      this.showAdd=false;

      this.agregando.emit(objeto);

  }

}
