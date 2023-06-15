import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Router} from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{
  public user: User;
  constructor(public userService: UserService, public router: Router){
    this.user = new User(null,null,null,"",null,"")
  }

  onSubmit(form:NgForm){
    let email: string = form.value.email;
    let password: string = form.value.password;
    this.user.email = email;
    this.user.password = password;
    this.userService.login(this.user)
    .subscribe((log: User) =>
    {
      if(log){
        this.userService.logueado = true;
        this.userService.user = log;
        console.log(this.userService.user.id_user)
        this.router.navigateByUrl('/books')
      }else{
        console.error("Error al inciar sesión")
      }
      console.log(log)
    },
    (error) => {
      console.log(error)
    })
  }

  ngOnInit(): void {
    
  }
}
