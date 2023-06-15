import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Router} from '@angular/router';
import { Login } from 'src/app/models/login';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{
  public user: User;
  constructor(public userService: UserService, public router: Router){
    this.user = new User(0,"","","","","")
  }

  onSubmit(form:NgForm){
    this.userService.login(this.user)
    .subscribe((res: Respuesta) =>
    {
      if(res.mensaje === "Los datos son correctos" ){
        this.userService.logueado = true;
        this.userService.user = res.data_user[0];
        // console.log(res.data_user)
        this.router.navigateByUrl('/books')
      }else{
        console.log("Error al inciar sesión");
        this.userService.logueado = false;
      }
    })
  }

  ngOnInit(): void {
    
  }
}
