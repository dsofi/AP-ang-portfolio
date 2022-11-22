import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  miPortfolio:any[]=[{
    "titulo": "",
    "sobreMi":""
  }];
  userId:any=0;
  editable:boolean=false;
  user:any="kkkk";
  // userLogueado:boolean=false;
  subscription?:Subscription; 

  constructor(
    private servPortfolio:PortfolioService, private servInterface:InterfaceService
  ) { 
    this.subscription = this.servInterface.onMostrarModoEdicion().subscribe((value) => 
      this.editable = value)
      // this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
      // this.userLogueado = value)
  }

  ngOnInit(): void {
    this.servPortfolio.getDatosPersona().subscribe(data =>{
      this.miPortfolio=data;});
      

  }
  

  guardarEdicion(user:any){
    this.servInterface.guardarCambios(user).subscribe((user) => 
      (this.user = user));
      console.log("desde el componente : " + this.user.sobreMi)
  }

  cancelarEdicion():void{
    this.ngOnInit();
    this.servInterface.mostrarModoEdicion();
    
  }



}
