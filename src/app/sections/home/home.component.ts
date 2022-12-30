import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLogueado:boolean=false;
  subscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  

}