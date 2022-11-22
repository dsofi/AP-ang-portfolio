import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() logueo:EventEmitter<boolean> = new EventEmitter();


  editable:boolean=false;
  userLogueado:boolean=false;

  subscription?: Subscription;

  constructor(private servInterface:InterfaceService, private servPortfolio:PortfolioService) { 
    this.subscription = this.servInterface.onMostrarModoEdicion().subscribe((value) => 
      this.editable = value);
      this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
      this.userLogueado = value)
  }

  ngOnInit(): void {
  }

  mostrarEdicion(){
    this.servInterface.mostrarModoEdicion();
  }

}
