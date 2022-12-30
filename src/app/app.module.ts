import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CoverComponent } from './components/cover/cover.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTimes as fasTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit as farEdit } from '@fortawesome/free-regular-svg-icons';
import { faCheck as fasCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './sections/home/home.component';
import { LoginComponent } from './modales/login/login.component';
import { BtnEditDeleteComponent } from './interface/btn-edit-delete/btn-edit-delete.component';
import { BtnCancelSaveComponent } from './interface/btn-cancel-save/btn-cancel-save.component';
import { HistoryComponent } from './components/history/history.component';
import { CategoryComponent } from './components/category/category.component';
import { BtnAddFormComponent } from './interface/btn-add-form/btn-add-form.component';
import { ElementsComponent } from './components/elements/elements.component';
import { InterceptorService } from './services/interceptor.service';
import { CuadroDialogoComponent } from './modales/cuadro-dialogo/cuadro-dialogo.component';
import { FooterComponent } from './components/footer/footer.component';

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
    FooterComponent
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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true }],
  bootstrap: [AppComponent]

})



export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons( fasTimes, farEdit, fasCheck, faHeart );
  }
  }
 
