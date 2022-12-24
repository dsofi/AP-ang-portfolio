import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  datosPersona:any[]=[{"id": "",
  "nombre": ""},{"id": "",
  "nombre": ""}];
  load:boolean=false;

  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatosPersona().subscribe(datos =>{
      this.datosPersona=datos;
      this.load = true;
    });



    
  }

  


}
