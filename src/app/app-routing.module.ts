import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { Pimpampum1Component } from './pages/pimpampum1/pimpampum1.component';
import { Pimpampum2Component } from './pages/pimpampum2/pimpampum2.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdatebookComponent } from './pages/updatebook/updatebook.component';
import { PapaComponent } from './pages/papa/papa.component';
import { PazComponent } from './pages/paz/paz.component';
import { AguilaComponent } from './pages/aguila/aguila.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { EstrellaComponent } from './pages/estrella/estrella.component';
import { AndroideComponent } from './pages/androide/androide.component';




const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "register", component: RegisterComponent}, 
  {path: "profile", component: ProfileComponent},
  {path: "books", component: BooksComponent},
  {path: "pimpampum1", component: Pimpampum1Component},
  {path: "pimpampum2", component: Pimpampum2Component},
  {path: "papa", component: PapaComponent},
  {path: "addbook", component: AddbookComponent},
  {path: "updatebook", component: UpdatebookComponent}, 
  {path: "paz", component: PazComponent}, 
  {path: "aguila", component: AguilaComponent}, 
  {path: "heroe", component: HeroeComponent}, 
  {path: "estrella", component: EstrellaComponent}, 
  {path: "androide", component: AndroideComponent}, 

  {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
