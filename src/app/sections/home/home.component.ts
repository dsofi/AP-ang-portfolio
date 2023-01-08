import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading =  this.servGeneral.subjectIsLoading;

  constructor(private servGeneral:GeneralService) {   }


  ngOnInit(): void {
  }
}