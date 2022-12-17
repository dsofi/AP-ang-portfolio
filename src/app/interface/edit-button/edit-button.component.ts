import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  @Input() objeto:String="";

  @Output() logueo:EventEmitter<boolean> = new EventEmitter();


  modoEdicion:boolean=false;
  userLogueado:boolean=false;
  editable:boolean=false;
  subscription?: Subscription;

  constructor(private servInterface:InterfaceService, private servPortfolio:PortfolioService) { 
    this.subscription = this.servInterface.onMostrarModoEdicion().subscribe((value) => 
      this.modoEdicion = value);
      this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
      this.userLogueado = value)
  }

  ngOnInit(): void {
  }

  // mostrarModoEdicion(){
  //   this.servInterface.mostrarModoEdicion(this.objeto);
  //   console.log("del boton: " + this.objeto)
  // }

}
