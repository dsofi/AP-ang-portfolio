import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLogueado:boolean=false;
  subscription?: Subscription;




  constructor(private myService: PortfolioService) { 
    this.subscription = this.myService.onLogueo().subscribe((value) => 
      this.userLogueado = value)

  }

  ngOnInit(): void {
  }

  

}