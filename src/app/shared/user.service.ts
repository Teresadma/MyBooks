import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:4000";
  public logueado: boolean = false;
  public user: User;
  constructor(private http: HttpClient) {
    this.logueado = false;
    this.user= null;
   }

  public register (user: User){
    let url = `${this.url}/register`;
    return this.http.post(url, user)
  }
  public login (user:User){
    let url = `${this.url}/login`;
    return this.http.post(url,user);
  }
  public edit (usuario: User){
    let url = `${this.url}/profile`
    return this.http.put(url, usuario)
  }
}
