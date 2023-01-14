import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  @Input() objeto:any;
  @Output() eliminando:EventEmitter<any> = new EventEmitter();
  @Output() cancelando:EventEmitter<any> = new EventEmitter();
  @Output() guardando:EventEmitter<any> = new EventEmitter();
  @Output() toggleEdit:EventEmitter<any> = new EventEmitter();



  isLogged:boolean=false; 

  constructor() { 
  }

  ngOnInit(): void {
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
  }

  editar(objeto:any){
    objeto.editar = true;
  }

  confirmarEliminacion(nombre:string): boolean {
    return window.confirm('¿Deseas eliminar ' + nombre + '?');
  }

  eliminar(objeto:any){
    if (this.confirmarEliminacion(objeto.titulo))
    {this.eliminando.emit(objeto);}
  }

  cancelar(objeto:any){
    this.cancelando.emit();
  }

  guardar(objeto:any){
    objeto.editar = false;
    this.guardando.emit(objeto);
  }

  

  // eliminar(objeto: any): void {
  //   if (this.confirmarEliminacion()) {
  //     // Aquí puedes escribir el código para eliminar el objeto
  //   }
  // }

  autoGrowTextZone(e:any) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 15)+"px";
  }

  editarImagen(objeto:any){
    if (objeto.editar){
      let urlImagen = prompt("Introduce la URL de la imagen.\nSi deseas mantener la misma imagen deja el input vacío y presiona 'Aceptar'.\nSi deseas eliminar la imagen presiona 'Cancelar'.");
      if (urlImagen !== ""){
        objeto.imagen = urlImagen;        
      }
      this.guardando.emit(objeto);
    }
  }

  

  

}
