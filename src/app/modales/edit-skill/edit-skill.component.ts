import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  @Input() titulo:string="";
  @Input() button:string="";
  @Input() objeto:any;
  @Output() guardando:EventEmitter<any> = new EventEmitter();  

  isLogged:boolean=false;

  nombre:string="";
  imagen:string="";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
    if (this.objeto) {
      this.nombre = this.objeto.nombre;
      this.imagen = this.objeto.imagen;
    };
  }

  open(content:any){
    this.modalService.open(content, { keyboard: false, backdrop: 'static' });
  }  

  onGuardar(){
    const skill = {
      nombre: this.nombre,
      imagen: this.imagen,
      id: this.objeto ? this.objeto.id : ""
    };
    
    this.nombre = '';
    this.imagen = '';
    this.guardando.emit(skill);
  }

  cancelar(){
    if (this.objeto) {
      this.nombre = this.objeto.nombre;
      this.imagen = this.objeto.imagen;
    } else {
      this.nombre = '';
      this.imagen = '';
    }
  }

}
