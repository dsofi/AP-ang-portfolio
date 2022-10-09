import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  miPortfolio:any;

  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
    // this.datosPortfolio.getItems().subscribe((items) =>{
    //   console.log(data);
    //   this.miPortfolio=data;
    // });
  }

}
