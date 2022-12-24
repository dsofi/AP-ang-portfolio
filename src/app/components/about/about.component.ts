import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralService } from 'src/app/services/general.service';
import { Persona } from '../modelos/Persona';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  tipo:string="personas"
  personas:any[]=[];
  persona:any="";
  userId:number=1; //TOMAR EL ID DEL USER QUE SE REGISTRE, BUSCARLO Y MOSTRAR SUS DATOS ?.. **SOLO SI TENGO TIEMPO

  constructor(private servGeneral:GeneralService) {
  }


  ngOnInit(): void {
    this.servGeneral.getGeneral("personas").subscribe((data) => {
      this.personas = data;
      if (this.personas.length > 0) {
        this.persona = this.personas[0];
      }
    });
    
  }

  editar(){
    this.persona.editar = true;
  }

  cancelar(){
    this.persona.editar = false;
    this.ngOnInit();
  }
  
  guardar(objeto:any){
    this.persona.editar = false;
    console.log("guardando");
    this.servGeneral.editGeneral(objeto,this.tipo).subscribe((elem) => objeto=elem);
  }
  
}
