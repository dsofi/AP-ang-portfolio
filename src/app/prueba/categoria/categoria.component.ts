import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  
  @Input() tipo: string = '';
  items: any[] = [];
  subscription?: Subscription;
  showAdd: boolean = false;

  constructor(private pruebaServ: PruebaService) {
    this.subscription = this.pruebaServ.onToggle().subscribe((value) => (this.showAdd = value));
  }

  ngOnInit(): void {
    this.pruebaServ.getGeneral(this.tipo).subscribe((items) => (this.items = items));
  }

  onAgregar() {
    this.pruebaServ.toggleAdd();
  }

  addGeneral(objeto: any) {
    this.pruebaServ.addGeneral(objeto, this.tipo).subscribe((elem) => this.items.push(elem));
  }

  eliminar(objeto: any) {
    this.pruebaServ.deleteGeneral(objeto, this.tipo).subscribe(() => 
      (this.items = this.items.filter((o) => o.id !== objeto.id)));
  }

  guardar(objeto:any){
    this.pruebaServ.editGeneral(objeto, this.tipo).subscribe((elem) => objeto=elem);
  }

  reset(){
    this.ngOnInit();
  }
}
