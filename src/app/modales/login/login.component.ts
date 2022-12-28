import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Route, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  sinMensaje:boolean=true;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacionServ: AutenticacionService,
    private ruta: Router
  ) {

    this.form = this.formBuilder.group({
      password: ['',[
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('[a-zA-Z0-9]*'),
        ],],
      user: ['',[
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z0-9]*'),
        ],],
    });
  }

  ngOnInit(): void {}

  get password() {
    return this.form.get('password');
  }

  get user() {
    return this.form.get('user');
  }

  get passwordValid() {
    return this.password?.touched && !this.password?.valid;
  }

  onEnviar(event: Event) {
    event.preventDefault;  
    if (this.form.valid) {
      const observador = {
        next: (data:any) => {
          this.ruta.navigate(['/home']);
        },
        error: (error:any) => {
          console.log("Error en el login. Usuario o contraseña incorrectos.");
          this.form.markAllAsTouched();
          this.sinMensaje = false;
        }
      }    
      this.autenticacionServ.iniciarSesion(this.form.value).subscribe(observador);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
