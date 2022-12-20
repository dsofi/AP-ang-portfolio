import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent implements OnInit {
  
  @Input() subtitulo:string ='';
  @Output() agregarForm = new EventEmitter();


  puedeAgregar: boolean = false;
  userLogueado: boolean = false;
  subscription?: Subscription;

  constructor(private servInterface:InterfaceService, private servPortfolio:PortfolioService) { 
   
    this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
    this.userLogueado = value);
    this.servInterface.stateCanAdd$.subscribe(state => this.puedeAgregar = state);
}

  ngOnInit(): void {
  }

  changeStateAdd() {
    this.servInterface.updateStateAdd();
  }


}
