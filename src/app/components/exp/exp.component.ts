import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  @Input() objeto:any;


  subscription?:Subscription; 
  mySubscription: any;
 
  update = false;

  userLogueado: boolean = false;

  constructor(private servPortfolio: PortfolioService, private servInterface: InterfaceService) { 
    this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
      this.userLogueado = value);
  }

  ngOnInit(): void {
  }

}
