import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() modalLogout:EventEmitter<boolean> = new EventEmitter();
  isLogged:boolean=false;

  constructor() { 
    const currentUser = (sessionStorage.getItem('currentUser')||'...');
    if (currentUser && currentUser.length > 20) {
      this.isLogged = true;
    }else{this.isLogged=false};
  }

  ngOnInit(): void {} 

  cerrarSesion(){
    this.modalLogout.emit();
  }

}
