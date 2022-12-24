import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.css']
})
export class BtnAddComponent implements OnInit {

  @Output() onAdd:EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {
  }

  onAgregar(){
    this.onAdd.emit();
  }

}
