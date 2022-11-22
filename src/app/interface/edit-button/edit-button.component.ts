import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  editable:boolean=false;
  userLogueado:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowEdit(){
    this.editable = !this.editable;
  }

}
