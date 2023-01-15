import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  misProyectos:any[]=[];
  tipo:string="proyectos";

  isLogged:boolean=false; 

  constructor(private servGeneral:GeneralService, private cdr: ChangeDetectorRef) {
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
   }

  ngOnInit(): void {
    this.servGeneral.getGeneral(this.tipo).subscribe((data) => (this.misProyectos = data));
  }

  addGeneral(objeto:any){
    this.servGeneral.addGeneral(objeto,this.tipo).subscribe((data) => {
      this.misProyectos.push(data);
      this.ngOnInit();
    })
    
  }

  agregarProyecto(){
    const objeto:any = {
      titulo: "Agregar título",
      tiempo: "xx xxxx",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis ligula at metus rutrum laoreet.",
      otrasNotas: "| Tecnologías"
    }
    this.addGeneral(objeto);
  }

  editar(objeto:any){
    objeto.editar = true;
  }

  confirmarEliminacion(nombre:string): boolean {
    return window.confirm('¿Deseas eliminar ' + nombre + '?');
  }

  eliminar(objeto:any){
    if (this.confirmarEliminacion(objeto.titulo))
    {this.servGeneral.deleteGeneral(objeto, this.tipo).subscribe(() => 
      (this.misProyectos = this.misProyectos.filter((o) => o.id !== objeto.id)));}
  }

  cancelar(objeto:any){
    this.ngOnInit();
  }

  guardar(objeto:any){
    objeto.editar = false;
    this.servGeneral.editGeneral(objeto, this.tipo).subscribe((data) => objeto=data);
  }

  esImagenValida(image: string) {
    return /\.(jpeg|jpg|png)$/.test(image);
  }


  drop(event: CdkDragDrop<any>){
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(this.misProyectos,anterior,actual);
    this.servGeneral.orderGeneral(this.misProyectos,`${this.tipo}/order`).subscribe(() => this.cdr.detectChanges());
  }

  editarImagen(objeto:any){
      let urlImagen = prompt("Introduce la URL de la imagen.");
      if (urlImagen == null || urlImagen == "" || !urlImagen.match(/\.(jpeg|jpg|png)$/)){
        objeto.imagen = objeto.imagen;
      } else {
          objeto.imagen = urlImagen;
      } 
      this.guardar(objeto);    
  }

  editarLinks(objeto:any){
    let urlGithub = prompt("Introduce el link de Github.\nSi deseas mantener el mismo link deja el input vacío y presiona 'Aceptar'.\nSi deseas eliminar el link presiona 'Cancelar'.");
    if (urlGithub !== ""){
      objeto.linkGithub = urlGithub;        
    }
    let urlProyecto = prompt("Introduce el link de Proyecto.\nSi deseas mantener el mismo link deja el input vacío y presiona 'Aceptar'.\nSi deseas eliminar el link presiona 'Cancelar'.");
    if (urlProyecto !== ""){
      objeto.link = urlProyecto;        
    }

    this.guardar(objeto);    
  }

}
