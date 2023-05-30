import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { RefIDPipe } from './pipes/ref-id.pipe';
import { CardComponent } from './components/card/card.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdatebookComponent } from './pages/updatebook/updatebook.component';
import { Pimpampum1Component } from './pages/pimpampum1/pimpampum1.component';
import { PapaComponent } from './pages/papa/papa.component';
import { Pimpampum2Component } from './pages/pimpampum2/pimpampum2.component';
import { PazComponent } from './pages/paz/paz.component';
import { AguilaComponent } from './pages/aguila/aguila.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { EstrellaComponent } from './pages/estrella/estrella.component';
import { AndroideComponent } from './pages/androide/androide.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisterComponent,
    RegisterComponent,
    ProfileComponent,
    BooksComponent,
    RefIDPipe,
    CardComponent,
    AddbookComponent,
    UpdatebookComponent,
    Pimpampum1Component,
    PapaComponent,
    Pimpampum2Component,
    PazComponent,
    AguilaComponent,
    HeroeComponent,
    EstrellaComponent,
    AndroideComponent,
    LoginComponent,
    FormLoginComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
