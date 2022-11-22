import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-edit-del',
  templateUrl: './button-edit-del.component.html',
  styleUrls: ['./button-edit-del.component.css']
})
export class ButtonEditDelComponent implements OnInit {

  editable:boolean=false;
  conDelete:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  
  toggleShowEdit(){
    this.editable = !this.editable;
  }

  borrar(){
    console.log("borrando")
  }

}
