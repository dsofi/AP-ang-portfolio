import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  @Input() titulo:string="";
  @Input() button:string="";
  @Input() editando:boolean=false;
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
  }

  open(content:any){
    this.modalService.open(content);
  }  

  onGuardar(){
    const skill = {
      nombre: this.nombre,
      imagen: this.imagen,
    };
    this.nombre = '';
    this.imagen = '';
    this.guardando.emit(skill);
  }

}
