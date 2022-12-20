import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
   
  pruebaPersonas:any[]=[];
  pruebaEstudios:any[]=[];
  pruebaExperiencias:any[]=[];

  constructor(private servPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.servPortfolio.getNuevo("personas").subscribe(data=>{
      this.pruebaPersonas=data
    });
    this.servPortfolio.getNuevo("estudios").subscribe(data=>{
      this.pruebaEstudios=data
    });
    this.servPortfolio.getNuevo("experiencias").subscribe(data=>{
      this.pruebaExperiencias=data
    });
  }

}
