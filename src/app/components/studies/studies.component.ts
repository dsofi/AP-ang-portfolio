import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Estudio } from '../common/int-Estudio';


@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  @Output() toggleShowEditEstudio: EventEmitter<any> = new EventEmitter()
  
  estudios:Estudio[]=[];
  estudio:any="";
  estudiosCopia:Estudio[]=this.estudios;
  

  constructor(private myService:PortfolioService) { }

  ngOnInit(): void {
    this.myService.obtenerDatos().subscribe(estudios=>{
      this.estudios = estudios, this.estudiosCopia = estudios
    })
  }

  toggleShowEdit(estudio:Estudio):void{
    estudio.editar = !estudio.editar;
  }

  editarEstudio(estudio:Estudio):void{
    this.toggleShowEdit(estudio);
    this.myService.editarEstudio(estudio).subscribe((estudio)=>(
      this.estudio = Object.assign([],this.estudiosCopia)));

      
  }

  borrarEstudio(estudio:Estudio){
    this.myService.borrarEstudio(estudio).subscribe(()=> 
      this.estudios = this.estudios.filter ((e:any) => e.id !== estudio.id));
  }

  cancelarEdicion(estudio:Estudio):void{
    this.estudiosCopia = Object.assign([],this.estudios);
    this.toggleShowEdit(estudio);

    console.log("estudios : " + this.estudios[0])
      console.log("copia : " + this.estudiosCopia[0])
    
    
  }

  consol():void{
    console.log(this.estudios)
  }

 

}






