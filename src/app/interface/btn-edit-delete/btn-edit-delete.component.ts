import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-btn-edit-delete',
  templateUrl: './btn-edit-delete.component.html',
  styleUrls: ['./btn-edit-delete.component.css']
})
export class BtnEditDeleteComponent implements OnInit {

  @Input() objeto:any="";
  @Input() puedeEliminar:boolean=true;
  @Output() onEdit:EventEmitter<any> = new EventEmitter;
  @Output() onDelete:EventEmitter<any> = new EventEmitter;

  userLogueado:boolean=false;

  constructor(private servGeneral:GeneralService) { 
    this.servGeneral.onToggleLogueado().subscribe((valor) => (this.userLogueado = valor));

  }

  ngOnInit(): void {
  }

  editar(){
    this.onEdit.emit();
  }

  eliminar(){
    this.onDelete.emit();
  }

}
