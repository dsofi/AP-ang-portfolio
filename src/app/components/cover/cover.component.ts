import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  personas:any[]=[];
  persona:any="";

  constructor(private servGeneral:GeneralService) {}

  ngOnInit(): void {
    this.servGeneral.getGeneral("personas").subscribe((data) => {
      this.personas = data;
      if (this.personas.length > 0) {
        this.persona = this.personas[0];
      }
    });
  }
}
