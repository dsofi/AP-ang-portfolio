import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() modalLogout:EventEmitter<boolean> = new EventEmitter();
  isLogged:boolean=false;
  idiomas:any[]=[];
  tipo:string="idiomas";

  constructor(private servGeneral:GeneralService) { 
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
  }

  ngOnInit(): void {
    this.servGeneral.getGeneral(this.tipo).subscribe((data) => (this.idiomas = data));
  } 

  cerrarSesion(){
    this.modalLogout.emit();
  }

}
