import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  misProyectos:any[]=[
    {"titulo":"Nombre 1","descripcion":"blabla UNO. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"titulo":"Nombre 2","descripcion":"blabla DOS. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"titulo":"Nombre 3","descripcion":"blabla TRES. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"titulo":"Nombre 4","descripcion":"blabla CUATRO. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"titulo":"Nombre 5","descripcion":"blabla CINCO. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"titulo":"Nombre 6","descripcion":"blabla SEIS. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"titulo":"Nombre 7","descripcion":"blabla SIETE. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"titulo":"Nombre 8","descripcion":"blabla OCHO. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"titulo":"Nombre 9","descripcion":"blabla NUEVE. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
