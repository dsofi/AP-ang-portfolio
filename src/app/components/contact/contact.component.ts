import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmMailComponent } from 'src/app/modales/confirm-mail/confirm-mail.component';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Output() enviandoMail:EventEmitter<any>= new EventEmitter;

  nombre:string = "";
  fromEmail:string = "";
  mensaje:string = "";
  esInvalid:boolean=false;
  enviarMail:FormGroup;
  idiomas:any[]=[];
  tipo:string="idiomas";

  constructor(private generalServ:GeneralService, private formBuilder: FormBuilder, private modalServ: NgbModal) {
      
    this.enviarMail = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      fromEmail: ['',[Validators.required, Validators.email]],
      mensaje: ['',[Validators.required]]
    }); 
  }

  ngOnInit(): void {
    this.generalServ.getGeneral(this.tipo).subscribe((data) => (this.idiomas = data));
  }

  enviar(event: Event){
    event.preventDefault;
    if (this.enviarMail.valid){
      this.generalServ.enviarMail(this.enviarMail.value).subscribe({
        next: () => {
          this.openModal();
          this.enviarMail.reset();
        },
        error: (err) => {
          console.log("Error en el envío de mail");
          console.log(err.mensaje);
        }
      });  
    }
  }

  openModal() {
		const modalRef = this.modalServ.open(ConfirmMailComponent);
		modalRef.componentInstance.name = 'Confirmación envío mail';
	}
}