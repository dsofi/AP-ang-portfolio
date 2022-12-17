import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-button-cancelar-guardar',
  templateUrl: './button-cancelar-guardar.component.html',
  styleUrls: ['./button-cancelar-guardar.component.css']
})
export class ButtonCancelarGuardarComponent implements OnInit {

  @Input() objeto:any;
  @Input() tipo:string="";
  @Output() reset = new EventEmitter();

  subscription?:Subscription;
  userLogueado:boolean=false;

  constructor(private servInterface:InterfaceService, private servPortfolio:PortfolioService) { 
    
    this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
    this.userLogueado = value);
    }

  ngOnInit(): void {
  }
  
  cancelar(objeto:any, tipo:string){
    this.reset.emit();
    console.log("BOTON QUE EMITE " + this.userLogueado)

  }

  guardar(objeto:any, tipo:string){
    this.servInterface.guardarGeneral(objeto, tipo).subscribe((cambios) => 
    (objeto = cambios));
  }

}


