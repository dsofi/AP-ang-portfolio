import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Validators } from '@angular/forms';



import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;


  subscriptionModal?: Subscription;
  modalVisible=true;


  constructor(private myService: PortfolioService, private formBuilder:FormBuilder) {
    this.subscriptionModal = this.myService.onModal().subscribe((value) => 
    this.modalVisible = value);

    this.form=this.formBuilder.group({
      password:["",[Validators.required, Validators.minLength(8)]],
      usuario:["",[Validators.required, Validators.minLength(5)]]
    })

    
  
  
  }

  ngOnInit(): void {
  }

  get password(){
    return this.form.get("password");
  }
 
  get usuario(){
   return this.form.get("usuario");
  }

  get passwordValid(){
    return this.password?.touched && !this.password?.valid;
  }

  
  ocultarModal(){
    this.myService.loguearse();
    }


    onEnviar(event:Event){
      event.preventDefault;
      if(this.form.valid){
        //llamar al servicio para enviar los datos al servidor
        //tambien podemos ejecutar alguna logica extra
        this.modalVisible=false;
      }else{
        //validaciones para que se ejecuten los msjes de error en el template
        this.form.markAllAsTouched();
      }
    }

}
