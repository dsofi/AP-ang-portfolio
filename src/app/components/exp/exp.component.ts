import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  miExperiencia:any[]=[];

  constructor( private servPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.servPortfolio.getGeneral("experiencia").subscribe(data=>{
      this.miExperiencia=data});
  }

}
