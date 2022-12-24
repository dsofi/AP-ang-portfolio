import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() tipo:string="";
  elementos:any[]=[];
  
  constructor(private servGeneral:GeneralService) { }

  ngOnInit(): void {
    this.servGeneral.getGeneral(this.tipo).subscribe((data) => (this.elementos = data));
  }

  addGeneral(objeto:any){
    this.servGeneral.addGeneral(objeto,this.tipo).subscribe((data) => this.elementos.push(data));
  }

  guardar(objeto:any){
    this.servGeneral.editGeneral(objeto, this.tipo).subscribe((data) => objeto=data);
  }

  eliminar(objeto: any) {
    this.servGeneral.deleteGeneral(objeto, this.tipo).subscribe(() => 
      (this.elementos = this.elementos.filter((o) => o.id !== objeto.id)));
  }
  
  reset(){
    this.ngOnInit();
  }

}
