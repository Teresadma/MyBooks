import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public usuario : User;
  //constructor
  constructor(){
    this.usuario = new User (1,"Maritere","de Miguel","teresa.demiguel@gmail.com", "https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg","perrito")
  }
  info(newName:string,newLastname:string,newEmail:string,newPhoto:string){
    this.usuario.name = newName;
    this.usuario.last_name = newLastname;
    this.usuario.email = newEmail;
    this.usuario.photo = newPhoto;
  }
}

