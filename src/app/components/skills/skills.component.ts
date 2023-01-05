import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
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

  constructor(private servGeneral:GeneralService) {   }

  ngOnInit(): void {
    this.servGeneral.getGeneral("skills").subscribe((data) => (this.skills = data));
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
  }

  agregar(objeto:any){
    this.servGeneral.addGeneral(objeto, "skills").subscribe((data) => this.skills.push(data));
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
    this.servGeneral.deleteGeneral(objeto, "skills").subscribe(() => 
      (this.skills = this.skills.filter((o) => o.id !== objeto.id)));
  }

  drop(event:CdkDragDrop<any>){
    console.log(event);
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(this.skills,anterior,actual);
  }

}
