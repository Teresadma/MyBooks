import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url: string = "http://localhost:4000/books";
  constructor(private http: HttpClient, public userService: UserService){}
  //METODOS
  // public getAll():Book[]  {    
  //   return this.books;
  // }
  public getLibros(): Observable<Book[]>{
    let id = this.userService.user.id_user;
    let url = `${this.url}/${id}`
    return this.http.get<Book[]>(url)
  }
  public getLibroID(id_book: Number){
    let idU = this.userService.user.id_user;
    let url = `${this.url}/${idU}/${id_book}`;
    return this.http.get(url)
  }
  public add(newBook: Book){
    return this.http.post(this.url,newBook)
  }
  public edit(changeBook:Book){
    return this.http.put(this.url,changeBook)
  }
  public del(id_book:number){
    const url = `${this.url}/${id_book}`
    return this.http.delete(url)
  }
}