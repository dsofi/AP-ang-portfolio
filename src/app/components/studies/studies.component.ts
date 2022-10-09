import { Component, OnInit } from '@angular/core';
import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { ESTITEMS } from 'src/app/estudio-items';
import { Items } from 'src/app/Items';
import { PortfolioService } from 'src/app/services/portfolio.service';
// import { ESTITEMS } from 'src/app/estudio-items';


@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  // @Input() item: Items = ESTITEMS[0]
  // estudiosList:any;
  items: Items[]=[];
  // itemObj : Items = new Items();
  // itemArr : Items[] = [];

  // addItemValue : string = '';


  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
    // this.datosPortfolio.getItems().subscribe((items)=>{
    //   this.items=items;
    // this.datosPortfolio.obtenerDatos().subscribe(data=>{
    //   this.estudiosList=data.estudio;
    // })
    this.datosPortfolio.getAllItem().subscribe((items)=>(
      this.items = items
    ));
  }

  // getAllItem(item : Items){
  //   this.datosPortfolio.getAllItem(item).subscribe(item=>{
  //     console.log(item);
  //   }
  //   )
  // }

  addItem(item : Items) {
    this.datosPortfolio.addItem(item).subscribe(res=>{
      this.ngOnInit();
    }, Error =>{
      alert(Error);
    }
      )
  }
}
