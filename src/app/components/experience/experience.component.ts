import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienciasList:any;
  prueba:[]=[];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getExperiencia().subscribe(data=>{
      this.experienciasList=data;
      console.log(this.experienciasList[1])
    })
  }

}
