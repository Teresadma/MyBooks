import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // public login: Login;

  //   onSubmit(form:NgForm){
  //     console.log(form.value)
  //     console.log(this.login)
  //   }

    ngOnInit(): void {
      
    }
}
