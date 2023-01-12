import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  misProyectos:any[]=[]

  constructor(private servGeneral:GeneralService) { 
    this.servGeneral.getGeneral("proyectos").subscribe((data) => (this.misProyectos = data));
  }

  ngOnInit(): void {
  }

  addGeneral(objeto:any){
    this.servGeneral.addGeneral(objeto,"proyectos").subscribe((data) => this.misProyectos.push(data));
  }

}
