import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var window:any;

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  @Input() nombre:any;
  @Output() rtaSi:EventEmitter<any> = new EventEmitter();
  confDelModal:any;

  constructor() { }

  ngOnInit(): void {
    this.confDelModal = new window.bootstrap.Modal(
      document.getElementById('confirm-delete-modal'));
  }

  openModal(titulo:string){
    this.nombre = titulo;
    this.confDelModal.show();
  }

  closeModal(){
    this.confDelModal.hide();
  }

  respondiendoSi(){
    this.rtaSi.emit();
    this.confDelModal.hide();
  }

}
