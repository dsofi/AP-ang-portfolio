import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Validators } from '@angular/forms';



import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private myService: PortfolioService, private formBuilder:FormBuilder, private autenticacionServ:AutenticacionService, private ruta:Router) {

    this.form=this.formBuilder.group({
      password:["",[Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9]*')]],
      usuario:["",[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z0-9]*')]] 
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
      this.autenticacionServ.iniciarSesion(this.form.value).subscribe(data=>{
        console.log("DATA: " + JSON.stringify(data));
        this.ruta.navigate(['/home']);
      })
      if(this.form.valid){
        //llamar al servicio para enviar los datos al servidor
        //tambien podemos ejecutar alguna logica extra
        // this.modalVisible=false;
      }else{
        //validaciones para que se ejecuten los msjes de error en el template
        this.form.markAllAsTouched();
      }
    }

}
