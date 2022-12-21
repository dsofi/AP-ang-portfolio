
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

  constructor(private servPortfolio: PortfolioService, 
              private servInterface: InterfaceService) { 
  }

  ngOnInit(): void {
    this.servPortfolio.getGeneral("experiencias").subscribe(data=>{
      this.miExperiencia=data;});
    this.servPortfolio.getGeneral("estudios").subscribe(data=>{
      this.misEstudios=data;});          
  }

  reset(){
    this.ngOnInit;
    console.log("reset desde EXPERIENCIA")
  }


  // FUNCIONABA
  // guardarEdicion(exp:any){
  //   this.servInterface.guardarGeneral(exp, "experiencia").subscribe((exp)=>
  //   this.experiencia = exp);
  //   console.log("experiencia del ts " + exp.id);
  // }

}






