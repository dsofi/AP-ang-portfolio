import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, NgModule, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:any[]=[];
  isLogged:boolean=false;  

  constructor(private servGeneral:GeneralService, private cdr: ChangeDetectorRef) {   }

  ngOnInit(): void {
    this.servGeneral.getGeneral("skills").subscribe((data: any) => {
      this.skills = data;
      this.skills.sort(function(a, b){
        return a.tiposkill.id - b.tiposkill.id;
      });
    });

    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
  }

  agregar(objeto:any){
    this.servGeneral.addGeneral(objeto, "skills").subscribe((data) => {
      this.skills.push(data);
      this.ngOnInit();      
    });
  
  }

  guardar(objeto: any) {
    firstValueFrom(this.servGeneral.editGeneral(objeto, "skills")).then((data) => {
      objeto = data;
      this.ngOnInit();
    }).catch((error) => {
      console.error(error);
    });
  }

  eliminar(objeto: any) {
    if (window.confirm('¿Deseas eliminar ' + objeto.nombre + '?')){
      this.servGeneral.deleteGeneral(objeto, "skills").subscribe(() => 
      (this.skills = this.skills.filter((o) => o.id !== objeto.id)));
    }    
  }

  drop(event:CdkDragDrop<any>, groupValue: any[]){
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(groupValue,anterior,actual);
    this.servGeneral.orderGeneral(groupValue,`skills/order`).subscribe(() => this.cdr.detectChanges());
  }

  // agruparPor(arreglo:any, propiedad:any) {
  //   return arreglo.reduce((acumulador:any, objeto:any) => {
  //     const key = objeto[propiedad];
  //     acumulador[key] = acumulador[key] || [];
  //     acumulador[key].push(objeto);
  //     return acumulador;
  //   }, {});
  // }

}
