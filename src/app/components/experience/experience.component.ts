
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ButtonCancelarGuardarComponent } from 'src/app/interface/button-cancelar-guardar/button-cancelar-guardar.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  miExperiencia:any[]=[];
  misEstudios:any[]=[];

  subscription?:Subscription; 
  userLogueado: boolean = false;


  constructor(private servPortfolio: PortfolioService, 
              private servInterface: InterfaceService) { 
                this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
      this.userLogueado = value);   
      // console.log("userlogueado desde oninit : " + this.userLogueado);
  }

  ngOnInit(): void {
    this.servPortfolio.getGeneral("experiencias").subscribe(data=>{
      this.miExperiencia=data;});
    this.servPortfolio.getGeneral("estudios").subscribe(data=>{
      this.misEstudios=data;});   
      
  }

  reset(){
    this.ngOnInit();
    console.log("ver puede editar : " + this.misEstudios[0].editar);
    console.log("user logueado : " + this.userLogueado);
    console.log("RESETEADO DESDE EXPERIENCE");
    
  }


  // FUNCIONABA
  // guardarEdicion(exp:any){
  //   this.servInterface.guardarGeneral(exp, "experiencia").subscribe((exp)=>
  //   this.experiencia = exp);
  //   console.log("experiencia del ts " + exp.id);
  // }


}






