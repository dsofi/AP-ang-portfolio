import { Component, OnInit} from '@angular/core';
import { Validators } from '@angular/forms';

import { FormBuilder, FormGroup } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  mostrarMensajeError:boolean=false;

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

  get userInvalid() {
    return this.user?.touched && !this.user?.valid;
  }
  
  get passwordInvalid() {
    return this.password?.touched && !this.password?.valid;
  }


  onEnviar(event: Event) {
    event.preventDefault;  
    if (this.form.valid) {
      this.autenticacionServ.iniciarSesion(this.form.value).subscribe({
        next: () => {
          this.ruta.navigate(['/home']);
        },
        error: () => {
          console.log("Error en el login. Usuario o contraseña incorrectos.");
          this.form.markAllAsTouched();
          this.mostrarMensajeError = true;
        }
      }    );
    } else {
      this.form.markAllAsTouched();
    }
  }
}
