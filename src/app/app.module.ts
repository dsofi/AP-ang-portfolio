import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CoverComponent } from './components/cover/cover.component';
import { StudiesComponent } from './components/studies/studies.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTimes as fasTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit as farEdit } from '@fortawesome/free-regular-svg-icons';
import { faCheck as fasCheck } from '@fortawesome/free-solid-svg-icons';

import { faCircleXmark as farCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { DataSharingService } from './services/portfolio.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonEditDelComponent } from './interface/button-edit-del/button-edit-del.component';
import { EditButtonComponent } from './interface/edit-button/edit-button.component';
import { ButtonCancelarGuardarComponent } from './interface/button-cancelar-guardar/button-cancelar-guardar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './sections/home/home.component';
import { LoginComponent } from './modales/login/login.component';
import { ExpComponent } from './components/exp/exp.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormAgregarComponent } from './interface/form-agregar/form-agregar.component';
import { SubtituloComponent } from './components/subtitulo/subtitulo.component';
import { TodosComponent } from './prueba/todos/todos.component';
import { CategoriaComponent } from './prueba/categoria/categoria.component';
import { ItemsComponent } from './prueba/items/items.component';
import { BtnAddComponent } from './prueba/btn-add/btn-add.component';
import { FormAddComponent } from './prueba/form-add/form-add.component';
import { BtnEditDelComponent } from './prueba/btn-edit-del/btn-edit-del.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectComponent,
    ExperienceComponent,
    CoverComponent,
    StudiesComponent,
    NavbarComponent,
    ButtonEditDelComponent,
    EditButtonComponent,
    ButtonCancelarGuardarComponent,
    HomeComponent,
    LoginComponent,
    ExpComponent,
    SkillsComponent,
    FormAgregarComponent,
    SubtituloComponent,
    TodosComponent,
    CategoriaComponent,
    ItemsComponent,
    BtnAddComponent,
    FormAddComponent,
    BtnEditDelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule,
    AppRoutingModule
  ],
  providers: [DataSharingService, ButtonCancelarGuardarComponent],
  bootstrap: [AppComponent]

})



export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(farCircleXmark, fasTimes, farEdit, fasCheck );
  }
  }
 
