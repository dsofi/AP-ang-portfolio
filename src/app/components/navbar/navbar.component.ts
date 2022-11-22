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

  subscription?: Subscription;


  userLogueado:boolean=false;

  constructor(private myService: PortfolioService) { 
    this.subscription = this.myService.onLogueo().subscribe((value) => 
      this.userLogueado = value)
  }

  ngOnInit(): void {
  }

  logueoUser(){
    this.myService.loguearse();
    console.log("component:" + this.userLogueado)
    //pasar datos usuario, contraseña , o un objeto, para verificar que exista
  }

}
