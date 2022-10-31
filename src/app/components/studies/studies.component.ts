import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  @Output() toggleShowEditEstudio: EventEmitter<any> = new EventEmitter()
  estudiosList:any;
  

  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.estudiosList=data.estudio;
    })
  }

  toggleShowEdit(estudio:any):void{
    estudio.edit = !estudio.edit;
  }

}


