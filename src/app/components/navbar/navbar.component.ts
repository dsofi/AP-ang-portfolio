import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService} from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() logueo:EventEmitter<boolean> = new EventEmitter();
  @Output() modal:EventEmitter<boolean> = new EventEmitter();

  subscriptionUser?: Subscription;
  subscriptionModal?: Subscription;


  userLogueado:boolean=false;
  modalVisible=true;


  constructor(private myService: PortfolioService) { 
    this.subscriptionUser = this.myService.onLogueo().subscribe((value) => 
      this.userLogueado = value);
    this.subscriptionModal = this.myService.onModal().subscribe((value) => 
      this.modalVisible = value);
  }

  ngOnInit(): void {
  }

  logueoUser(){
    this.myService.loguearse();
    console.log("modal desde el component:" + this.modalVisible)
    //pasar datos usuario, contraseña , o un objeto, para verificar que exista
  }

}
