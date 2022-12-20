
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  // @Output() actualizar = new EventEmitter();

  miExperiencia:any[]=[];
  misEstudios:any[]=[];

  subscription?:Subscription; 
  modoEdicion:boolean=false;
  valorAnterior: string="";
  userLogueado: boolean = false;

  objetos:any[] = [];
  objeto: any = "";
  tipo:string='';

  

  // userLogueado: boolean = false;
  // userId:any=0;
  // experiencia:any='';  

  constructor(private servPortfolio: PortfolioService, private servInterface: InterfaceService, private cdr: ChangeDetectorRef, private formBuilder:FormBuilder) {
    this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
      this.userLogueado = value);
      this.subscription = this.servInterface.onMostrarModoEdicion().subscribe((value) => 
    this.modoEdicion = value);
      
  }


  ngOnInit(): void {
    this.servPortfolio.getGeneral("experiencias").subscribe(data=>{
      this.miExperiencia=data;});
    this.servPortfolio.getGeneral("estudios").subscribe(data=>{
      this.misEstudios=data;});    
  }

  chusmear(){
    console.log("ESTADO DEL USER : " + this.userLogueado)
  }

  // toggleShowEdit(experiencia: any): void {
  //   experiencia.editar = !experiencia.editar;
  // }

  // FUNCIONABA
  // guardarEdicion(exp:any){
  //   this.servInterface.guardarGeneral(exp, "experiencia").subscribe((exp)=>
  //   this.experiencia = exp);
  //   console.log("experiencia del ts " + exp.id);
  // }

  // reset(objeto:any):void{
  //   this.servInterface.toggleShowEdit(objeto);    
  //   console.log("actualizando: " + this.userLogueado);
  //   this.cdr.detectChanges();
  //   //FALTA REFRESCAR
  // }

  // reset(objeto:any):void{
  //   this.actualizar.emit(objeto);
  // }

  reset(){
    this.ngOnInit;
    console.log("reset desde EXPERIENCIA")
  }

  puedeAgregar(){
    console.log("Algo")
  }



  // agregarPrincipal(objeto:any, tipo:string, objetos:any){
  //   this.servInterface.agregarGeneral(objeto, tipo).subscribe((objeto:any) => 
  //     objetos.push(objeto));
  //     console.log("AGRENDO DESDE GENERAL");
  //     console.log("AGRENDO DESDE GENERAL : " + objeto);
  //     console.log("AGRENDO DESDE GENERAL : " + tipo);
  //     console.log("AGRENDO DESDE GENERAL : " + objetos);
  // }

  agregarPrincipal(){
    this.ngOnInit();
  }


}






