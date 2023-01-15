import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  idiomas:any[]=[];
  tipo:string="idiomas";

  constructor(private generalServ:GeneralService) { }

  ngOnInit(): void {
    this.generalServ.getGeneral(this.tipo).subscribe((data) => (this.idiomas = data));
  }

}
