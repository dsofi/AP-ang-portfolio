import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { AutosizeModule } from 'ngx-autosize';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck as fasCheck, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft, faAngleRight, faGripHorizontal, faTimes as fasTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit as farEdit } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoverComponent } from './components/cover/cover.component';
import { AgruparPorPipe } from './components/common/agrupar-por.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { HistoryComponent } from './components/history/history.component';
import { CategoryComponent } from './components/category/category.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './modales/login/login.component';
import { EditSkillComponent } from './modales/edit-skill/edit-skill.component';
import { ConfirmMailComponent } from './modales/confirm-mail/confirm-mail.component';
import { ConfirmDeleteComponent } from './modales/confirm-delete/confirm-delete.component';
import { CuadroDialogoComponent } from './modales/cuadro-dialogo/cuadro-dialogo.component';
import { LoadingComponent } from './interface/loading/loading.component';
import { BtnAddFormComponent } from './interface/btn-add-form/btn-add-form.component';
import { BtnEditDeleteComponent } from './interface/btn-edit-delete/btn-edit-delete.component';
import { BtnCancelSaveComponent } from './interface/btn-cancel-save/btn-cancel-save.component';

import { InterceptorService } from './services/interceptor.service';
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CoverComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    BtnEditDeleteComponent,
    BtnCancelSaveComponent,
    HistoryComponent,
    CategoryComponent,
    BtnAddFormComponent,
    ElementsComponent,
    CuadroDialogoComponent,
    FooterComponent,
    ProyectosComponent,
    NextDirective,
    PrevDirective,
    SkillsComponent,
    EditSkillComponent,
    ContactComponent,
    LoadingComponent,
    ConfirmDeleteComponent,
    ConfirmMailComponent,
    AgruparPorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule,
    AppRoutingModule,
    NgbModule,
    DragDropModule,
    AutosizeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true }, NgbActiveModal],
  bootstrap: [AppComponent]

})



export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons( fasTimes, farEdit, fasCheck, faHeart, faAngleRight, faAngleLeft, faGripHorizontal, faEllipsis, faGithub);
  }
  }
 
