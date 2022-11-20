import { outputAst, ResourceLoader } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService} from 'src/app/services/portfolio.service';
import { Estudio } from '../common/int-Estudio';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit {
  @Output() toggleShowEditEstudio: EventEmitter<any> = new EventEmitter();

  estudios: Estudio[] = [];
  estudio: any = '';
  puedeEditar: boolean = false;

  nombre: string = '';
  tiempo: string = '';
  descripcion: string = '';
  nota1: string = '';
  nota2: string = '';

  constructor(private myService: PortfolioService) {}

  ngOnInit(): void {
    this.myService.obtenerDatos().subscribe((estudios) => {
      this.estudios = estudios;
    });
  }

  habilitaEdicion(): void {
    this.puedeEditar = !this.puedeEditar;
  }

  agregarEstudio(estudio: Estudio) {
    this.myService.agregarEstudio(estudio).subscribe((estudio) => 
      this.estudios.push(estudio));
  }

  toggleShowEdit(estudio: Estudio): void {
    estudio.editar = !estudio.editar;
  }

  editarEstudio(estudio: Estudio): void {
    this.toggleShowEdit(estudio);
    this.myService.editarEstudio(estudio).subscribe((estudio) => 
      (this.estudio = estudio));
  }

  borrarEstudio(estudio: Estudio) {
    this.myService.borrarEstudio(estudio).subscribe(() =>
      (this.estudios = this.estudios.filter((e: any) => e.id !== estudio.id)));
  }

  cancelarEdicion(estudio: Estudio): void {
    this.toggleShowEdit(estudio);
    // SEGUIR PENSANDO
  }

  ngOnChange(changes: any) {
    console.log(changes.this.estudios);
  }

  onSubmit() {
    if (this.nombre.length === 0) {
      alert('Agrega un nombre');
    } else if (this.tiempo.length === 0) {
      alert('Agrega una tiempo');
    } else if (this.descripcion.length === 0) {
      alert('Agrega una descripcion');
    } else {
      this.habilitaEdicion();
      // AGREGAR ESTUDIOS
      const { nombre, tiempo, descripcion, nota1, nota2 } = this;
      const estudio = { nombre, tiempo, descripcion, nota1, nota2 };

      this.nombre = '';
      this.tiempo = '';
      this.descripcion = '';
      this.nota1 = '';
      this.nota2 = '';

      this.myService.agregarEstudio(estudio).subscribe((estudio) => 
      this.estudios.push(estudio));
    }
  }
}
