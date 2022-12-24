import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-button-edit-del',
  templateUrl: './button-edit-del.component.html',
  styleUrls: ['./button-edit-del.component.css']
})
export class ButtonEditDelComponent implements OnInit {

  @Input() objeto:any;
  @Input() tipo:string='';
  @Output() onDelete = new EventEmitter();

  objetos:any[] = [];
  userLogueado:boolean=false;
  subscription?: Subscription;


  constructor(private servInterface:InterfaceService, private servPortfolio:PortfolioService) { 
   
      this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
      this.userLogueado = value);
      console.log("desde btn edit, user logueado" + this.userLogueado);
  }

  ngOnInit(): void { 
    this.servPortfolio.getGeneral(this.tipo).subscribe(data=>{
      this.objetos=data;});
   }

  
  toggleShowEdit(objeto:any){
    this.servInterface.toggleShowEdit(objeto);
  }

  borrar(objeto:any){
    this.servInterface.toggleShowEdit(objeto);
    this.onDelete.emit(objeto);
    // this.servInterface.borrarGeneral(objeto, this.tipo).subscribe(() =>
    // (this.objetos = this.objetos.filter((e: any) => e.id !== objeto.id)));
  }

  reset(){
    console.log("desde btn reseteando");
    // this.servPortfolio.loguearse();
    // console.log("desde btn reseteando");
    console.log("despues de reset, desde btn : " + this.userLogueado);
  }

 

}
