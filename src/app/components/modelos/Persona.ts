export class Persona{
    id?:string;
    nombre:string;
    sobreMi:string;
    foto:string;
    link:string;
    editar:boolean;

    constructor(id:string, nombre:string, sobreMi:string, foto:string, link:string, editar:boolean){
        this.id=id;
        this.nombre=nombre;
        this.sobreMi=sobreMi;
        this.foto=foto;
        this.link=link;
        this.editar=editar;
    }
}