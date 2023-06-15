import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public userService: UserService)
  {
    this.buildForm();
  }
  public register(newUser: HTMLInputElement, newSurname: HTMLInputElement,newPhoto:HTMLInputElement, newEmail: HTMLInputElement, newPassword: HTMLInputElement, newPassword2:HTMLInputElement)
  {
    if (newPassword.value != newPassword2.value){
      console.log("No coinciden las contraseñas")
    }else{
      let newUsuario: User = new User (0,newUser.value, newSurname.value, newEmail.value, newPhoto.value, newPassword.value );
      console.log(newUsuario);
      this.userService.register(newUsuario)
      .subscribe((data: string) =>
      {
        if (data != "-1")
        {
          newUser.value = "";
          newSurname.value = "";
          newPhoto.value = "";
          newEmail.value = "";
          newPassword.value = "";
          newPassword2.value = "";
          newUsuario.id_user = Number(data);
        }else{
          console.log("Error al insertar el usuario")
        }
      })
    }
  }

  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      name: [, Validators.required],
      surname: [, Validators.required],
      photo: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(minPassLength)]],
      password2: [,[Validators.required, this.checkPasswords]],
    })
  }

  private checkPasswords(control:AbstractControl){
    let resultado = {matchPassword:true};

    if (control.parent?.value.password == control.value)
      resultado = null;

      return resultado
    
  }

  ngOnInit():void{

  }
}
