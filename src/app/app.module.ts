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
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { DataSharingService } from './services/portfolio.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonEditDelComponent } from './interface/button-edit-del/button-edit-del.component';
import { EditButtonComponent } from './interface/edit-button/edit-button.component';
import { ButtonCancelarGuardarComponent } from './interface/button-cancelar-guardar/button-cancelar-guardar.component';

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
    ButtonCancelarGuardarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    AutosizeModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]

})



export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(farCircleXmark, fasTimes, farEdit, fasCheck );
  }
  }
 
