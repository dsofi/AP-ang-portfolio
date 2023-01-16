import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  @Input() titulo:string="";
  @Input() button:string="";
  @Input() objeto:any;
  @Input() listaskills:any;
  @Output() guardando:EventEmitter<any> = new EventEmitter();  

  isLogged:boolean=false;

  nombre:string="";
  imagen:string="";
  tiposkill:any={id: "", nombre: "", orden: ""};

  showMensaje:boolean=false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {    
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
    if (this.objeto) {
      this.nombre= this.objeto.nombre;
      this.imagen= this.objeto.imagen;
      this.tiposkill= this.objeto.tiposkill;
    };
  }

  open(content:any){
    this.modalService.open(content, { windowClass: 'mi-modal', keyboard: false, backdrop: 'static'});
  }  

  onGuardar(){
    if (this.nombre !== "" && this.imagen !== "" && this.tiposkill !== null &&
    JSON.stringify(this.tiposkill) !== JSON.stringify({ id: "", nombre: "" })){
      const skill = {
        nombre: this.nombre,
        imagen: this.imagen,
        tiposkill: this.tiposkill,
        id: this.objeto ? this.objeto.id : ""
      };      
      this.nombre = '';
      this.imagen = '';
      this.tiposkill = {};
      this.guardando.emit(skill);
      this.showMensaje=false;
      this.modalService.dismissAll();
    } else this.showMensaje=true;
  }

  cancelar(){
    this.showMensaje=false;
    if (this.objeto) {
      this.nombre = this.objeto.nombre;
      this.imagen = this.objeto.imagen;
      this.tiposkill = this.objeto.tiposkill;
    } else {
      this.nombre = '';
      this.imagen = '';
      this.tiposkill = {};
    }
  }
}
