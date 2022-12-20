import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-form-agregar',
  templateUrl: './form-agregar.component.html',
  styleUrls: ['./form-agregar.component.css']
})
export class FormAgregarComponent implements OnInit {

  objetos:any[] = [];
  objeto: any = "";
  @Input() tipo:string='';
  @Output() agregando:any = new EventEmitter();

  puedeAgregar: boolean = false;
  userLogueado: boolean = false;

  titulo: string = '';
  tiempo: string = '';
  descripcion: string = '';
  otrasNotas: string = '';
  nota2: string = '';

  subscription?: Subscription;

  constructor(private servPortfolio: PortfolioService, private servInterface:InterfaceService) {
    this.subscription = this.servPortfolio.onLogueo().subscribe((value) => 
      this.userLogueado = value);
      this.servInterface.stateCanAdd$.subscribe(state => this.puedeAgregar = state);
  }

  ngOnInit(): void {
    this.servPortfolio.getGeneral(this.tipo).subscribe(data=>{
      this.objetos=data;});
  }

  onSubmit() {
    if (this.titulo.length === 0) {
      alert('Agrega un titulo');
    } else if (this.tiempo.length === 0) {
      alert('Agrega una tiempo');
    } else if (this.descripcion.length === 0) {
      alert('Agrega una descripcion');
    } else {
      this.changeStateAdd();
      // AGREGAR 
      const { titulo, tiempo, descripcion, otrasNotas, nota2 } = this;
      const objeto:any = { titulo, tiempo, descripcion, otrasNotas, nota2 };

      this.titulo = '';
      this.tiempo = '';
      this.descripcion = '';
      this.otrasNotas = '';
      this.nota2 = '';

      this.servInterface.agregarGeneral(objeto, this.tipo).subscribe((objeto:any) => 
      this.objetos.push(objeto));

      this.agregando.emit();
      // console.log("desde FORM: " + objeto);
      // console.log("desde FORM: " + this.tipo);
      // console.log("desde FORM: " + this.objetos);

      

    }
  }

  

  changeStateAdd() {
    this.servInterface.updateStateAdd();
  }

}
