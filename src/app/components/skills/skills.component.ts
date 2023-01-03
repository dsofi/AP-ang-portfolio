import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:any[]=[];
  nombre:string="";
  imagen:string="";

  @ViewChild('form') form: ElementRef;

  constructor(private servGeneral:GeneralService) { 
    this.form = new ElementRef(null);
  }

  ngOnInit(): void {
    this.servGeneral.getGeneral("skills").subscribe((data) => (this.skills = data));
  }

  submit(){
    const {nombre, imagen} = this;
      const objeto:any = {nombre, imagen};

      this.nombre = '';
      this.imagen = '';

      this.servGeneral.addGeneral(objeto,"skills").subscribe((data) => this.skills.push(data));

  }

  agregar(objeto:any){
    this.servGeneral.addGeneral(objeto, "skills").subscribe((data) => this.skills.push(data));
    // objeto.editar = false;
  }

  guardar(objeto:any){
    this.servGeneral.editGeneral(objeto, "skills").subscribe((data) => objeto=data);
    // objeto.editar = false;
    console.log("guardando desde SKILLS : " + objeto)
  }

  

  eliminar(objeto: any) {
    this.servGeneral.deleteGeneral(objeto, "skills").subscribe(() => 
      (this.skills = this.skills.filter((o) => o.id !== objeto.id)));
  }

  editar(objeto:any){
    objeto.editar = true;
  }

  

  reset(){
    this.ngOnInit();
  }

  //


  onSubmit() {
    const formData = new FormData(this.form.nativeElement);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        // la respuesta del servidor fue exitosa (código de estado HTTP 2xx)
        return response.json();
      } else {
        // la respuesta del servidor fue fallida (código de estado HTTP diferente a 2xx)
        throw new Error('Error al subir la imagen');
      }
    })
    .then((responseData) => {
      // la respuesta del servidor incluye datos en formato JSON
      console.log(responseData);
    })
    .catch((error) => {
      // maneja cualquier error
      console.error(error);
    });
  }

}
